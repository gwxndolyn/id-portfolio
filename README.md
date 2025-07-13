# React Tailwind CSS Template

A minimal React template with Tailwind CSS. Clean and ready for your next project.

## ✨ Features

- **React 18** with functional components
- **Tailwind CSS 3** for utility-first styling
- **Clean Structure** - no unnecessary content or color schemes
- **Production Ready** with proper build configuration

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this template**

2. **Run the installation script:**
   ```bash
   chmod +x install.sh
   ./install.sh
   ```

   Or install manually:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
react-tailwind-template/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js             # Main App component
│   ├── index.js           # React entry point
│   └── index.css          # Tailwind CSS imports
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── install.sh             # Installation script
└── README.md              # This file
```

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 📦 Dependencies

### Production Dependencies
- `react` - React library
- `react-dom` - React DOM rendering
- `react-scripts` - Create React App scripts
- `web-vitals` - Web performance metrics

### Development Dependencies
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - CSS vendor prefixing
- `postcss` - CSS processing

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Various Platforms

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository and deploy automatically
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder contents

## 🎨 Customization

Start building your application by modifying `src/App.js`. The template includes:

- Basic Tailwind CSS setup
- Clean project structure
- No predefined color schemes or content
- Ready for your custom design

---

Happy coding! 🚀