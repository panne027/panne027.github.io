# Harish Panneer Selvam - Portfolio

Personal portfolio website showcasing my work in physics-guided ML for vehicles, energy, and mission-critical decisions.

## 🚀 Live Site

Visit: [https://panne027.github.io](https://panne027.github.io)

## 🛠️ Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/panne027/panne027.github.io.git
   cd panne027.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment process:

1. **Automatic Deployment**: Every push to the `main` branch triggers a build and deployment
2. **Manual Deployment**: You can also deploy manually using:
   ```bash
   npm run deploy
   ```

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The site will be available at `https://panne027.github.io`

## 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── .github/workflows/   # GitHub Actions for deployment
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - CI/CD pipeline

## 📝 License

This project is open source and available under the [LICENSE.txt](LICENSE.txt) file.
