// Research page functionality with sidebar layout

const RESEARCH_DATA = [
  {
    id: "reverse-cross-fitting-dml",
    category: "working-papers",
    title: "Double Machine Learning for Time Series",
    excerpt: "Modifies the Double Machine Learning estimator for macroeconomic time-series settings using Reverse Cross-Fitting, improving efficiency and robustness to model misspecification. We propose a calibration rule targeting a 'Goldilocks zone', a region of tuning parameters that delivers stable, partialled-out signals and reduced small-sample bias.",
    abstract: "We modify the Double Machine Learning estimator to broaden its applicability to macroeconomic time-series settings. A deterministic cross-fitting step, termed Reverse Cross-Fitting, leverages the time-reversibility of stationary series to improve sample utilization and efficiency. We detail and prove the conditions under which the estimator is asymptotically valid. We then demonstrate, through simulations, that its performance remains valid in realistic finite samples and is robust to model misspecification and violations of assumptions, such as heteroskedasticity. In high dimensions, predictive metrics for tuning nuisance learners do not generally minimize bias in the causal score. We propose a calibration rule targeting a 'Goldilocks zone', a region of tuning parameters that delivers stable, partialled-out signals and reduced small-sample bias. Finally, we apply our procedure to residualized Local Projections to estimate the dynamic effects of a rise in Tier 1 regulatory capital. The results underscore the usefulness of the methodology for inference in macroeconomic applications.",
    date: "2026",
    type: "Working Paper",
    status: "R&R",
    venue: "",
    authors: ["F. D'Amario", "M. Ciganovic (Sapienza)", "M. Tancioni (Sapienza)"],
    keywords: ["double/debiased machine learning", "cross-fitting", "time series", "causal inference", "local projections", "capital regulation"],
    links: [{ type: "Preprint", url: "https://arxiv.org/abs/2603.10999" }]
  },
  {
    id: "boe-bank-capital-regulation",
    category: "working-papers",
    title: "The Economic Effects of Shocks to Bank Capital Regulation: Evidence from the United Kingdom",
    excerpt: "Uses a structural VAR with sign and narrative restrictions to assess how prudential capital shocks affect UK lending and macroeconomic activity. A 100bp Tier 1 capital ratio increase causes a 0.18pp GDP contraction.",
    abstract: "We use a structural VAR with sign and narrative restrictions to assess prudential capital shocks' effects on UK lending and macroeconomic activity. We base narrative restrictions on 2014-2016 stress test events. We find that banks comply primarily by reducing risk-weighted assets rather than raising capital, with corporate lending contracting more than household lending, and a 100 basis point Tier 1 capital ratio increase causing a 0.18 percentage point GDP contraction. We demonstrate significant state-dependent effects and provide evidence that tighter capital requirements temporarily reduce banking sector competition.",
    date: "2026",
    type: "Staff Working Paper",
    status: "Published",
    venue: "Bank of England Staff Working Paper",
    authors: ["F. D'Amario", "W.B. Francis (Bank of England)", "S. De-Ramon (Bank of England)"],
    keywords: ["bank capital regulation", "macroprudential policy", "structural VAR", "UK", "lending", "banking competition"],
    links: [{ type: "Paper", url: "https://www.bankofengland.co.uk/working-paper/2026/the-economic-effects-of-changes-to-bank-capital-regulation-evidence-from-the-uk" }]
  },
  {
    id: "news-driven-coincident-index",
    category: "working-papers",
    title: "News-Driven Coincident Index: High-Frequency Monitoring of the Italian Economy Using Transformers",
    excerpt: "A transformer-based coincident economic indicator for Italy built from 2.5 million news tweets (2012–2022). The sentiment index tracks real GDP more accurately than benchmarks, especially during COVID-19.",
    abstract: "We introduce a transformer-based coincident economic indicator for Italy, built from 2.5 million news tweets (2012–2022). Our sentiment index, derived via cosine distance of aggregated article embeddings, tracks real GDP more accurately and timely than benchmarks, especially during COVID-19.",
    date: "2024",
    type: "Working Paper",
    status: "Working Paper",
    venue: "",
    authors: ["F. D'Amario", "M. Ciganovic (Sapienza)", "T. Aliaj (European Central Bank)"],
    keywords: ["nowcasting", "transformers", "NLP", "coincident index", "Italy", "GDP", "news sentiment"],
    links: [{ type: "Preprint", url: "#" }]
  },
  {
    id: "misbelieved-uncertainty-inflation",
    category: "working-papers",
    title: "A Misbelieved Uncertainty-driven Inflation",
    excerpt: "Investigates how ex-ante uncertainty in professional inflation forecasts affects recent inflation dynamics using a monthly VAR with heteroskedasticity-based identification.",
    abstract: "We investigate how ex-ante uncertainty in inflation professional forecasts affects recent inflation dynamics using a monthly VAR with heteroskedasticity-based identification. We find that uncertainty about expected inflation increases both inflation and unemployment, even when consensus forecasts remain sticky. Our results show that unfunded fiscal shocks (fiscal expansions accommodated by the central bank) account for a large share of recent inflation dynamics through uncertainty's amplifying role. Counterfactual analysis reveals that uncertainty has stronger medium-term effects, particularly on unemployment outcomes.",
    date: "2024",
    type: "Working Paper",
    status: "Working Paper",
    venue: "",
    authors: ["F. D'Amario", "M. Ciganovic (Sapienza)", "V. Patella (Sapienza)"],
    keywords: ["inflation uncertainty", "VAR", "heteroskedasticity", "fiscal shocks", "monetary policy", "professional forecasts"],
    links: [{ type: "Preprint", url: "#" }]
  },
  {
    id: "tourist-presence-export",
    category: "working-papers",
    title: "Tourist Presence and Export: An Instrumental Variable and Panel VAR Analysis for Italy",
    excerpt: "A 1% rise in tourist presence corresponds to a ~0.89% boost in Italian exports. Tourism shocks account for 8–10% of export fluctuations, identified using scheduled flights as an instrument.",
    abstract: "This study examines how foreign tourists affect Italian export performance over 2008–2022 for 45 partner countries. Using both an IV-augmented panel regression (with scheduled flights as an instrument for tourist numbers) and a panel VAR, we find that a 1% rise in tourist presence corresponds to roughly a 0.89% boost in exports, and that shocks to tourism and exports mutually reinforce each other — tourism shocks alone account for about 8–10% of export fluctuations over time.",
    date: "2025",
    type: "Working Paper",
    status: "Under Review",
    venue: "",
    authors: ["F. D'Amario", "S. Di Sanzo (Confcommercio)", "M. Bella (Confcommercio)"],
    keywords: ["tourism", "exports", "instrumental variables", "panel VAR", "Italy", "trade"],
    links: [{ type: "Preprint", url: "#" }]
  },
  {
    id: "crypto-lasso-var",
    category: "publications",
    title: "Forecasting Cryptocurrencies Log-Returns: a LASSO-VAR and Sentiment Approach",
    excerpt: "Using LASSO-VAR with Twitter, Reddit sentiment and Google Trends to forecast log-returns of ten cryptocurrencies. Sentiment boosts directional accuracy for smaller, less capitalized currencies.",
    abstract: "Using daily data from January 2018 to January 2022, this study employs Twitter and Reddit sentiment alongside Google Trends indices within a LASSO-VAR framework to forecast the log-returns of ten cryptocurrencies. In 30-day recursive forecasts, the model achieves over 50% mean directional accuracy and shows that adding sentiment and attention variables significantly boosts accuracy for smaller, less capitalized currencies. This improvement is not reflected in the RMSE. A post-double-LASSO Granger-causality analysis further reveals that social-media sentiment does not Granger-cause cryptocurrency returns.",
    date: "2023",
    type: "Journal Article",
    status: "Published",
    venue: "Applied Economics",
    authors: ["F. D'Amario", "M. Ciganovic (Sapienza)"],
    keywords: ["cryptocurrencies", "sentiment", "LASSO-VAR", "forecasting", "Granger causality", "machine learning"],
    links: [{ type: "Paper", url: "https://www.tandfonline.com/doi/abs/10.1080/00036846.2023.2289930" }]
  },
  {
    id: "inflationary-shocks-green-transition",
    category: "publications",
    title: "Inflationary Shocks, Economic Aggregates and Households' Green Transition: a Causal Machine-Learning Analysis Using Mixed-Frequency Data",
    excerpt: "Investigates the causal effects of inflation on household economic indicators, labour markets, and energy-saving housing infrastructure adoption using causal machine learning with mixed-frequency data.",
    abstract: "This paper aims to investigate the causal effects of inflation on household economic indicators, unemployment rates, and other critical labour market indicators. Furthermore, we seek to explore the causal impact of inflation on the adoption of energy-saving housing infrastructure policies, with the goal of providing valuable insights into the wider implications of this critical economic phenomenon.",
    date: "2024",
    type: "Peer Reviewed Article",
    status: "Published",
    venue: "Publications Office of the European Union",
    authors: ["F. D'Amario", "M. Ciganovic (Sapienza)", "M. Tancioni (Sapienza)"],
    keywords: ["inflation", "causal machine learning", "mixed-frequency data", "green transition", "labour market", "household"],
    links: [{ type: "Paper", url: "https://op.europa.eu/publication-detail/-/publication/a26def09-3e64-11ef-ab8f-01aa75ed71a1" }]
  },
  {
    id: "housing-price-living-conditions",
    category: "publications",
    title: "Housing Price Triggers and Living Conditions in the EU: Insights from a Structural Dynamic Analysis",
    excerpt: "Examines drivers of real house price variability across 20 Euro Area countries (2005–2023) using a Bayesian Structural Panel VAR and assesses housing price impacts on living conditions.",
    abstract: "This study examines the main factors influencing real house price index (HPI) variability in 20 Euro Area countries from 2005 to 2023 using a Bayesian Structural Panel Vector Autoregression (S-PVAR). It identifies structural drivers of house price shocks, differentiating them from supply-side (productivity, labor) and demand-side shocks (private investment, monetary policy). Local Projections are used to assess the impact of housing prices on ten living condition indicators from EU-SILC data. The findings indicate that demand-side shocks drive a persistent increase in HPI, while house price shocks result in long-term market changes and affect living conditions, particularly in Northern and Southern EA countries.",
    date: "2025",
    type: "Peer Reviewed Article",
    status: "Forthcoming",
    venue: "Publications Office of the European Union",
    authors: ["F. D'Amario", "M. Ciganovic (Sapienza)", "M. Tancioni (Sapienza)"],
    keywords: ["house prices", "Bayesian PVAR", "Euro Area", "living conditions", "local projections", "structural VAR"],
    links: [{ type: "Paper", url: "https://op.europa.eu/publication-detail/-/publication/dbb08046-91de-11f0-97c8-01aa75ed71a1" }]
  },
  {
    id: "carbon-penalized-ppi",
    category: "other",
    title: "Optimal Design of Carbon-Penalized Proportional Portfolio Insurance Strategies in a Partially Observable Market Model",
    excerpt: "Studies optimal PPI strategies that hedge downside risk while penalizing carbon risk, with stochastic filtering transforming the partial-information problem into a full-information one for a CRRA investor.",
    abstract: "We study optimal proportional-portfolio-insurance (PPI) strategies that hedge downside risk while preserving upside potential, explicitly penalizing carbon risk. Risky asset prices follow geometric Brownian motions whose drifts depend on an unobservable economy-wide factor; using stochastic filtering, we transform the partial-information problem into a full-information one and solve it for a CRRA investor. We derive closed-form, carbon-penalized PPI allocations under both information regimes and quantify the utility loss from incomplete information.",
    date: "2025",
    type: "Work in Progress",
    status: "Work in Progress",
    venue: "",
    authors: ["F. D'Amario", "K. Colaneri (Tor Vergata)", "D. Mancinelli (Tor Vergata)"],
    keywords: ["portfolio insurance", "carbon risk", "stochastic filtering", "partial information", "CRRA", "green finance"],
    links: []
  },
  {
    id: "monetary-policy-causal-ml",
    category: "other",
    title: "Monetary Policy Identification via Causal Machine Learning in a High-Dimensional Time Series Controls Set",
    excerpt: "Develops a time-series DML estimator with reverse-time cross-fitting to identify monetary policy shocks, controlling for high-dimensional confounders and obtaining puzzle-free transmission results.",
    abstract: "We develop a time-series double/debiased machine learning estimator with reverse-time cross-fitting to efficiently identify monetary policy shocks. By controlling for high-dimensional confounders and focusing on unpredictable interest rate movements, we obtain puzzle-free transmission results aligned with recent monetary policy empirical literature.",
    date: "2024",
    type: "Work in Progress",
    status: "Work in Progress",
    venue: "",
    authors: ["F. D'Amario", "M. Ciganovic (Sapienza)", "M. Tancioni (Sapienza)"],
    keywords: ["monetary policy", "double/debiased machine learning", "causal inference", "high-dimensional", "time series", "interest rates"],
    links: []
  },
  {
    id: "machines-rise-or-fall",
    category: "other",
    title: "Machines: Rise or Fall?",
    excerpt: "Evaluates the finite-sample properties of machine-learning-based inference methods to assess whether their purported benefits hold in practice, providing a practical manual for researchers.",
    abstract: "We evaluate the finite-sample properties of machine-learning-based inference methods to assess whether the purported benefits of these techniques hold in practice. Building on recent theoretical insights, we provide a practical manual that guides researchers in applying these methods most effectively.",
    date: "2024",
    type: "Work in Progress",
    status: "Work in Progress",
    venue: "",
    authors: ["F. D'Amario", "M. Ciganovic (Sapienza)", "G. Ragusa (Sapienza)"],
    keywords: ["machine learning inference", "finite-sample", "simulation study", "causal inference", "econometrics"],
    links: []
  }
];

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
        this.researchData = RESEARCH_DATA;
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
                    <h2>Research</h2>
                    <p>Select a paper from the sidebar to view its abstract, authors, and links.</p>
                    <div style="margin-top: 2rem; padding: 1.5rem; background: #111827; border: 1px solid #1f2937; border-radius: 4px;">
                        <h4 style="margin-bottom: 1rem; color: #f8fafc;">Research Interests</h4>
                        <ul style="margin: 0; padding-left: 1.5rem; color: #94a3b8; line-height: 1.8; font-size: 0.9rem;">
                            <li>Double/debiased machine learning for causal inference</li>
                            <li>Macroeconometrics and forecasting</li>
                            <li>Macroprudential policy and banking regulation</li>
                            <li>High-dimensional time series and nowcasting</li>
                            <li>Bayesian econometrics</li>
                        </ul>
                    </div>
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
                        <h2>Research</h2>
                        <p>Select a paper from the sidebar to view its abstract, authors, and links.</p>
                        <div style="margin-top: 2rem; padding: 1.5rem; background: #111827; border: 1px solid #1f2937; border-radius: 4px;">
                            <h4 style="margin-bottom: 1rem; color: #f8fafc;">Research Interests</h4>
                            <ul style="margin: 0; padding-left: 1.5rem; color: #94a3b8; line-height: 1.8; font-size: 0.9rem;">
                                <li>Double/debiased machine learning for causal inference</li>
                                <li>Macroeconometrics and forecasting</li>
                                <li>Macroprudential policy and banking regulation</li>
                                <li>High-dimensional time series and nowcasting</li>
                                <li>Bayesian econometrics</li>
                            </ul>
                        </div>
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