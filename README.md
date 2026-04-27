# Web Application

A vanilla JavaScript web application template built with Webpack for modern frontend development. This project serves as a starting point for building web applications with audio and video capabilities.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Technology Stack](#technology-stack)
- [Development Guidelines](#development-guidelines)
- [License](#license)

## Features

- **Vanilla JavaScript** - No frameworks, pure JS for learning and flexibility
- **Webpack 5** - Modern module bundling with development server
- **ES Modules** - Using native JavaScript modules (`type: "module"`)
- **CSS Processing** - With loaders for modern CSS features
- **HTML Templating** - HtmlWebpackPlugin for automatic HTML generation
- **Asset Management** - Handles images, fonts, and other media assets
- **Development Tools** - ESLint and Prettier for code quality
- **Hot Module Replacement** - For seamless development experience
- **Production Optimizations** - Minified builds with webpack production mode

## Project Structure

```
project-name/
├── dist/                 # Production build output (generated)
├── src/                  # Source code
│   ├── index.html        # Main HTML template
│   ├── assets/
│   │   ├── css/          # Stylesheets
│   │   │   ├── styles.css     # Main styles
│   │   │   └── normalizing.css # CSS reset/normalization
│   │   ├── js/           # JavaScript files
│   │   │   └── index.js       # Entry point
│   │   └── resource/     # Static assets (fonts, images, etc.)
│   │       ├── fonts/
│   │       └── images/
│   └── styles.css        # Root stylesheet (alternative location)
├── webpack.config.js     # Webpack configuration
├── package.json          # Project dependencies and scripts
├── eslint.config.js      # ESLint configuration
├── .prettierrc           # Prettier formatting rules
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Installation

1. **Clone the repository** (if applicable)

```bash
git clone https://github.com/wjuma19dev2026-wq/vanilla-JavaScript-web-app-template.git
cd vanilla-JavaScript-web-app-template
```

2. **Install dependencies**

```bash
npm install
```

## Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm start
# or
npm run dev
```

The application will be available at `http://localhost:8080`

### Production Build

Create an optimized production build:

```bash
npm run build
```

Output files will be generated in the `dist/` directory

### Watch Mode

Watch for changes and rebuild automatically:

```bash
npm run watch
```

### Bundle Analysis

Generate webpack stats for bundle analysis:

```bash
npm run stats
```

This creates a `stats.json` file that can be analyzed with tools like [webpack-bundle-analyzer](https://webpack.github.io/analyse/)

### Clean Build

Remove the dist directory:

```bash
npm run clear
```

## Available Scripts

| Script          | Description                |
| --------------- | -------------------------- |
| `npm start`     | Start development server   |
| `npm run dev`   | Alias for start command    |
| `npm run build` | Create production build    |
| `npm run watch` | Watch mode for development |
| `npm run stats` | Generate bundle statistics |
| `npm run clear` | Remove dist directory      |

## Technology Stack

- **JavaScript** - ES6+ with module syntax
- **HTML5** - Semantic markup
- **CSS3** - Modern styling capabilities
- **Webpack 5** - Module bundler
- **Babel** - JavaScript transpilation (via webpack)
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **HtmlWebpackPlugin** - HTML generation
- **MiniCssExtractPlugin** - CSS extraction
- **css-loader, style-loader** - CSS processing
- **file-loader** - Asset handling
- **webpack-dev-server** - Development server

## Development Guidelines

### Code Style

- Follows Airbnb JavaScript style guide via ESLint
- Code formatting enforced with Prettier
- Consistent 2-space indentation
- Semicolons required
- Trailing commas in multi-line statements

### File Organization

- Keep JavaScript modular and split by concern
- Place styles in the `src/assets/css/` directory
- Store static assets (images, fonts) in `src/assets/resource/`
- Import CSS directly in JavaScript files where needed
- Use descriptive, kebab-case filenames for assets

### Best Practices

- Always run `npm run clear` before rebuilding if encountering caching issues
- Commit frequently with descriptive messages
- Run `npm run lint` before committing (if configured)
- Test responsive design across different screen sizes
- Optimize images before adding to the project

## Browser Support

This template targets modern browsers that support:

- ES6 Modules
- CSS Grid and Flexbox
- Fetch API
- Promise objects
- Arrow functions
- Const/Let declarations

For older browser support, consider adding Babel presets for transpilation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Wilson Juma

---

_Happy coding! 🎧📹_
