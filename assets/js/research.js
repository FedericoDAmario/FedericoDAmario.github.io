// Research page functionality with sidebar layout

class ResearchManager {
    constructor() {
        this.researchData = [];
        this.filteredData = [];
        this.researchList = null;
        this.researchDetail = null;
        this.activeItem = null;
        this.activeCategory = 'all';
        this.isMobile = window.innerWidth <= 768;
        this.isTablet = window.innerWidth <= 1024;
        this.init();
    }
    
    async init() {
        try {
            await this.loadResearchData();
            this.researchList = document.getElementById('research-list');
            this.researchDetail = document.getElementById('research-detail');
            
            if (this.researchList && this.researchDetail) {
                this.filterResearchByCategory('all');
                this.renderResearchList();
                this.setupEventListeners();
                this.setupCategoryListeners();
                this.setupResizeHandler();
                this.setupMobileInteractions();
            }
        } catch (error) {
            console.error('Failed to initialize research:', error);
            this.showError();
        }
    }
    
    async loadResearchData() {
        try {
            // Use relative path that works from research subdirectory
            const response = await fetch('../assets/data/research.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.researchData = data.research || [];
        } catch (error) {
            console.error('Failed to load research data:', error);
            // Fallback to empty array if data loading fails
            this.researchData = [];
            throw error;
        }
    }
    
    renderResearchList() {
        if (!this.researchList) return;
        
        // Clear existing content
        this.researchList.innerHTML = '';
        
        if (this.filteredData.length === 0) {
            const category = this.activeCategory === 'all' ? 'research items' : this.activeCategory.replace('-', ' ');
            this.researchList.innerHTML = `<div class="loading"><div class="loading-text">No ${category} available.</div></div>`;
            return;
        }
        
        this.filteredData.forEach((item, index) => {
            const listItem = this.createResearchListItem(item, index);
            this.researchList.appendChild(listItem);
        });
    }
    
    createResearchListItem(item, index) {
        const listItem = document.createElement('div');
        listItem.className = 'research-list-item';
        listItem.dataset.id = item.id;
        listItem.dataset.index = index;
        
        const title = document.createElement('h4');
        title.textContent = item.title;
        
        const excerpt = document.createElement('p');
        excerpt.textContent = item.excerpt;
        
        const meta = document.createElement('div');
        meta.className = 'research-meta';
        
        const metaItems = [];
        if (item.date) metaItems.push(`${item.date}`);
        if (item.type) metaItems.push(`${item.type}`);
        if (item.status) metaItems.push(`${item.status}`);
        
        meta.innerHTML = metaItems.join(' • ');
        
        listItem.appendChild(title);
        listItem.appendChild(excerpt);
        listItem.appendChild(meta);
        
        return listItem;
    }
    
    setupEventListeners() {
        // Event delegation for research list items
        this.researchList.addEventListener('click', (e) => {
            const listItem = e.target.closest('.research-list-item');
            if (listItem && !listItem.classList.contains('loading')) {
                const itemId = listItem.dataset.id;
                const item = this.filteredData.find(r => r.id === itemId);
                if (item) {
                    this.showResearchDetail(item, listItem);
                }
            }
        });
        
        // Keyboard accessibility
        this.researchList.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const listItem = e.target.closest('.research-list-item');
                if (listItem && !listItem.classList.contains('loading')) {
                    e.preventDefault();
                    const itemId = listItem.dataset.id;
                    const item = this.filteredData.find(r => r.id === itemId);
                    if (item) {
                        this.showResearchDetail(item, listItem);
                    }
                }
            }
        });
    }
    
    setupCategoryListeners() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.setActiveCategory(category);
                this.filterResearchByCategory(category);
                this.renderResearchList();
                this.clearDetailView();
            });
        });
    }
    
    setActiveCategory(category) {
        this.activeCategory = category;
        
        // Update button states
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === category) {
                btn.classList.add('active');
            }
        });
    }
    
    filterResearchByCategory(category) {
        if (category === 'all') {
            this.filteredData = [...this.researchData];
        } else {
            this.filteredData = this.researchData.filter(item => item.category === category);
        }
    }
    
    clearDetailView() {
        if (this.activeItem) {
            this.activeItem.classList.remove('active');
            this.activeItem = null;
        }
        
        if (this.researchDetail) {
            this.researchDetail.innerHTML = `
                <div class="research-welcome">
                    <h2>Applied Econometrics Research</h2>
                    <p>Methodological contributions to causal inference, nowcasting, and policy evaluation through the integration of econometric theory and machine learning techniques.</p>
                    <div style="margin-top: 2rem; padding: 1.5rem; background: #111827; border: 1px solid #1f2937; border-radius: 4px;">
                        <h4 style="margin-bottom: 1rem; color: #f8fafc;">Current Focus Areas</h4>
                        <ul style="margin: 0; padding-left: 1.5rem; color: #94a3b8; line-height: 1.8; font-size: 0.9rem;">
                            <li>Double/debiased machine learning for causal inference</li>
                            <li>Real-time GDP nowcasting with alternative data</li>
                            <li>Heterogeneous treatment effects in policy evaluation</li>
                            <li>High-frequency econometric modeling</li>
                        </ul>
                    </div>
                    <p style="margin-top: 2rem; font-size: 0.9rem; color: #64748b;">Select a publication from the sidebar to view detailed abstracts and methodological contributions.</p>
                </div>
            `;
        }
    }
    
    showResearchDetail(item, listItem) {
        // Update active state
        if (this.activeItem) {
            this.activeItem.classList.remove('active');
        }
        listItem.classList.add('active');
        this.activeItem = listItem;
        
        // Render detail content
        const detailContent = this.createResearchDetail(item);
        this.researchDetail.innerHTML = '';
        this.researchDetail.appendChild(detailContent);
        
        // Enhanced mobile behavior
        if (window.innerWidth <= 1024) {
            // Add a small delay to ensure content is rendered
            setTimeout(() => {
                // Scroll to research content area on mobile/tablet
                const contentArea = this.researchDetail.closest('.research-content-area');
                if (contentArea) {
                    contentArea.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start',
                        inline: 'nearest'
                    });
                }
                
                // Also scroll the content area to top
                this.researchDetail.scrollTop = 0;
            }, 100);
        }
        
        // Add mobile-specific CSS class for enhanced styling
        if (window.innerWidth <= 768) {
            this.researchDetail.classList.add('mobile-detail-view');
        }
    }
    
    createResearchDetail(item) {
        const detailContainer = document.createElement('div');
        detailContainer.className = 'research-detail';
        
        // Header section
        const header = document.createElement('div');
        header.className = 'research-detail-header';
        
        const title = document.createElement('h2');
        title.className = 'research-detail-title';
        title.textContent = item.title;
        
        const meta = document.createElement('div');
        meta.className = 'research-detail-meta';
        
        // Create meta items
        const metaFields = [
            { label: 'Year', value: item.date },
            { label: 'Type', value: item.type },
            { label: 'Status', value: item.status },
            { label: 'Venue', value: item.venue }
        ];
        
        metaFields.forEach(field => {
            if (field.value) {
                const metaItem = document.createElement('div');
                metaItem.className = 'meta-item';
                
                const label = document.createElement('div');
                label.className = 'meta-label';
                label.textContent = field.label;
                
                const value = document.createElement('div');
                value.className = 'meta-value';
                value.textContent = field.value;
                
                metaItem.appendChild(label);
                metaItem.appendChild(value);
                meta.appendChild(metaItem);
            }
        });
        
        header.appendChild(title);
        header.appendChild(meta);
        detailContainer.appendChild(header);
        
        // Abstract section
        if (item.abstract) {
            const abstractSection = document.createElement('div');
            abstractSection.className = 'research-abstract';
            
            const abstractTitle = document.createElement('h4');
            abstractTitle.textContent = 'Abstract';
            
            const abstractText = document.createElement('p');
            abstractText.textContent = item.abstract;
            
            abstractSection.appendChild(abstractTitle);
            abstractSection.appendChild(abstractText);
            detailContainer.appendChild(abstractSection);
        }
        
        // Details section
        const detailsSection = document.createElement('div');
        detailsSection.className = 'research-details-section';
        
        // Authors
        if (item.authors && item.authors.length > 0) {
            const authorsDiv = document.createElement('div');
            authorsDiv.innerHTML = `<h4>Authors</h4><p>${item.authors.join(', ')}</p>`;
            detailsSection.appendChild(authorsDiv);
        }
        
        // Keywords
        if (item.keywords && item.keywords.length > 0) {
            const keywordsDiv = document.createElement('div');
            keywordsDiv.innerHTML = '<h4>Keywords</h4>';
            
            const keywordsContainer = document.createElement('div');
            keywordsContainer.className = 'research-keywords';
            
            item.keywords.forEach(keyword => {
                const tag = document.createElement('span');
                tag.className = 'keyword-tag';
                tag.textContent = keyword;
                keywordsContainer.appendChild(tag);
            });
            
            keywordsDiv.appendChild(keywordsContainer);
            detailsSection.appendChild(keywordsDiv);
        }
        
        detailContainer.appendChild(detailsSection);
        
        // Links section
        if (item.links && item.links.length > 0) {
            const linksSection = document.createElement('div');
            linksSection.className = 'research-links';
            
            item.links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.url;
                linkElement.className = 'research-link';
                linkElement.textContent = link.type;
                linkElement.target = '_blank';
                linkElement.rel = 'noopener noreferrer';
                
                linksSection.appendChild(linkElement);
            });
            
            detailContainer.appendChild(linksSection);
        }
        
        return detailContainer;
    }
    
    getLinkIcon(linkType) {
        // No icons - clean text-only links
        return '';
    }
    
    showError() {
        if (this.researchList) {
            this.researchList.innerHTML = `
                <div class="loading">
                    <div class="loading-text">Unable to load research data. Please try again later.</div>
                </div>
            `;
        }
        
        if (this.researchDetail) {
            this.researchDetail.innerHTML = `
                <div class="research-welcome">
                    <h2>Error Loading Research</h2>
                    <p>There was an error loading the research data. Please refresh the page and try again.</p>
                </div>
            `;
        }
    }
    
    // Mobile-specific interaction handling
    setupMobileInteractions() {
        if (this.isMobile || this.isTablet) {
            // Add touch-friendly classes
            document.body.classList.add('mobile-research-view');
            
            // Improve touch interactions for research list items
            if (this.researchList) {
                this.researchList.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
                this.researchList.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
            }
        }
    }
    
    handleTouchStart(e) {
        const listItem = e.target.closest('.research-list-item');
        if (listItem && !listItem.classList.contains('loading')) {
            listItem.classList.add('touch-active');
        }
    }
    
    handleTouchEnd(e) {
        const listItem = e.target.closest('.research-list-item');
        if (listItem) {
            // Remove touch-active class after a brief delay
            setTimeout(() => {
                listItem.classList.remove('touch-active');
            }, 150);
        }
    }
    
    // Handle window resize for responsive behavior
    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const wasMobile = this.isMobile;
                const wasTablet = this.isTablet;
                
                this.isMobile = window.innerWidth <= 768;
                this.isTablet = window.innerWidth <= 1024;
                
                // Update mobile classes if viewport changed
                if (this.isMobile !== wasMobile || this.isTablet !== wasTablet) {
                    this.updateMobileLayout();
                }
            }, 250);
        });
    }
    
    updateMobileLayout() {
        // Update body classes
        if (this.isMobile || this.isTablet) {
            document.body.classList.add('mobile-research-view');
        } else {
            document.body.classList.remove('mobile-research-view');
        }
        
        // Update research detail classes
        if (this.researchDetail) {
            if (this.isMobile) {
                this.researchDetail.classList.add('mobile-detail-view');
            } else {
                this.researchDetail.classList.remove('mobile-detail-view');
            }
        }
        
        // Re-render if needed
        if (this.activeItem && this.isMobile !== !this.isMobile) {
            const itemId = this.activeItem.dataset.id;
            const item = this.filteredData.find(r => r.id === itemId);
            if (item) {
                this.showResearchDetail(item, this.activeItem);
            }
        }
    }
    
    // Public method to add new research programmatically
    addResearch(newResearch) {
        this.researchData.push(newResearch);
        this.renderResearchList();
        
        // Clear detail view to show welcome message
        if (this.researchDetail) {
            this.researchDetail.innerHTML = `
                <div class="research-welcome">
                    <h2>Research Updated</h2>
                    <p>New research has been added. Select an item from the list to view details.</p>
                </div>
            `;
        }
    }
    
    // Public method to filter research
    filterResearch(filterFn) {
        const filteredData = this.researchData.filter(filterFn);
        const originalData = this.researchData;
        
        this.researchData = filteredData;
        this.renderResearchList();
        
        // Clear active state and detail view
        if (this.activeItem) {
            this.activeItem.classList.remove('active');
            this.activeItem = null;
        }
        
        if (this.researchDetail) {
            this.researchDetail.innerHTML = `
                <div class="research-welcome">
                    <h2>Filtered Results</h2>
                    <p>Showing ${filteredData.length} research item(s). Select an item from the list to view details.</p>
                </div>
            `;
        }
        
        // Return function to restore original data
        return () => {
            this.researchData = originalData;
            this.renderResearchList();
            
            if (this.researchDetail) {
                this.researchDetail.innerHTML = `
                    <div class="research-welcome">
                        <h2>Applied Econometrics Research</h2>
                        <p>Methodological contributions to causal inference, nowcasting, and policy evaluation through the integration of econometric theory and machine learning techniques.</p>
                        <div style="margin-top: 2rem; padding: 1.5rem; background: #111827; border: 1px solid #1f2937; border-radius: 4px;">
                            <h4 style="margin-bottom: 1rem; color: #f8fafc;">Current Focus Areas</h4>
                            <ul style="margin: 0; padding-left: 1.5rem; color: #94a3b8; line-height: 1.8; font-size: 0.9rem;">
                                <li>Double/debiased machine learning for causal inference</li>
                                <li>Real-time GDP nowcasting with alternative data</li>
                                <li>Heterogeneous treatment effects in policy evaluation</li>
                                <li>High-frequency econometric modeling</li>
                            </ul>
                        </div>
                        <p style="margin-top: 2rem; font-size: 0.9rem; color: #64748b;">Select a publication from the sidebar to view detailed abstracts and methodological contributions.</p>
                    </div>
                `;
            }
        };
    }
    
    // Public method to get current research data
    getResearchData() {
        return [...this.researchData];
    }
    
    // Public method to select research item by ID
    selectResearch(itemId) {
        const item = this.researchData.find(r => r.id === itemId);
        if (item) {
            const listItem = this.researchList.querySelector(`[data-id="${itemId}"]`);
            if (listItem) {
                this.showResearchDetail(item, listItem);
            }
        }
    }
}

// Initialize research manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize on research page
    if (document.getElementById('research-list') && document.getElementById('research-detail')) {
        window.researchManager = new ResearchManager();
    }
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ResearchManager;
}