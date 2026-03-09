# Federico Researcher - Applied Econometrics Portfolio

A professional, technical academic portfolio website showcasing research in econometrics, causal machine learning, and economic nowcasting.

## ✨ Features

- **Professional Dark Theme**: Clean, technical design with monospace typography
- **Academic Focus**: Serious, professional presentation suitable for academic audiences
- **Sidebar Research Layout**: Desktop sidebar (1/3) with detailed content area (2/3)
- **Data-Driven Publications**: Add new research via JSON configuration
- **Mobile-First Responsive**: Adapts seamlessly across all device sizes
- **Technical Typography**: JetBrains Mono and Inter fonts for professional appearance
- **GitHub Pages Ready**: Optimized for easy deployment

## 📁 Project Structure

```
fede/
├── index.html                 # Main landing page
├── home/
│   └── index.html            # Home page content  
├── research/
│   └── index.html            # Publications page with sidebar layout
├── about/
│   └── index.html            # About page with expertise areas
└── assets/
    ├── css/
    │   └── styles.css        # Dark theme styling (technical design)
    ├── js/
    │   ├── main.js           # Navigation functionality
    │   └── research.js       # Sidebar research interface
    ├── data/
    │   └── research.json     # Research publications data
    └── images/               # Image assets directory
```

## 🚀 Getting Started

1. **Local Development**: Use a local server for full functionality:
   ```bash
   python3 -m http.server 8000
   # or
   npx serve .
   ```

2. **GitHub Pages Deployment**: 
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings
   - Select source branch (main/master)
   - Site will be available at `https://yourusername.github.io/repository-name/`

## 📊 Adding New Research

To add new publications, edit `assets/data/research.json`:

```json
{
  "research": [
    {
      "id": "unique-research-id",
      "title": "Machine Learning Approaches to Economic Nowcasting",
      "excerpt": "Brief description for sidebar preview",
      "abstract": "Full abstract with methodological contributions...",
      "date": "2024",
      "type": "Journal Article",
      "status": "Published",
      "venue": "Journal of Applied Econometrics",
      "authors": ["Author 1", "Author 2"],
      "keywords": ["nowcasting", "machine learning", "econometrics"],
      "links": [
        {"type": "Paper", "url": "https://link-to-paper"},
        {"type": "Code", "url": "https://github.com/..."},
        {"type": "Dataset", "url": "https://data-link"}
      ]
    }
  ]
}
```

The research page automatically displays new entries with full sidebar interaction.

## 🎨 Design Philosophy

### Technical Aesthetic
- **Dark Professional Theme**: `#0a0f1c` background with technical color scheme
- **Clean Typography**: JetBrains Mono for technical elements, Inter for content
- **Minimal Design**: No decorative elements, focus on content and functionality
- **Academic Presentation**: Serious, professional styling appropriate for research portfolios

### Color Scheme
Primary colors in `assets/css/styles.css`:
- Background: `#0a0f1c` (dark blue-black)
- Cards: `#111827` (dark gray)
- Borders: `#1f2937` (medium gray)
- Text: `#f8fafc` (light gray)
- Accent: `#64748b` (blue-gray)

### Layout
- **Desktop**: Sidebar navigation (1/3) + content area (2/3)
- **Mobile**: Full-width stacked layout
- **Typography**: Monospace headers, clean sans-serif body text
- **Interactions**: Subtle hover effects, no animations

## 🔧 Technical Implementation

- **Pure HTML/CSS/JS**: No build process or frameworks
- **Responsive Breakpoints**: 768px and 480px
- **Performance Optimized**: Minimal JavaScript, efficient CSS
- **Accessibility**: Semantic HTML, keyboard navigation
- **Browser Support**: Modern browsers with CSS Grid support

## 📱 Responsive Design

- **Mobile (< 768px)**: Single column, stacked navigation
- **Tablet (768px - 1024px)**: Adaptive layouts
- **Desktop (> 1024px)**: Full sidebar + content area

## 🔬 Research Focus Areas

The website showcases expertise in:
- **Causal Machine Learning**: Double/debiased ML, causal forests
- **Economic Nowcasting**: Real-time forecasting with alternative data
- **Policy Evaluation**: Treatment effects and program assessment
- **Econometric Methods**: High-dimensional analysis, synthetic control

## 🛠 Technical Stack

- **Languages**: Python, R, MATLAB
- **Methods**: Econometrics, Machine Learning, Statistical Computing
- **Focus**: Applied economic research and policy evaluation

## ✏️ Customization

### Content Updates
- **Publications**: Edit `assets/data/research.json`
- **About**: Modify `about/index.html`
- **Focus Areas**: Update research areas in HTML files

### Styling Changes
- **Colors**: Modify CSS variables in `assets/css/styles.css`
- **Typography**: Adjust font imports and CSS font-family declarations
- **Layout**: Modify CSS Grid and Flexbox properties

## 📄 License

This project is open source and available under the MIT License.