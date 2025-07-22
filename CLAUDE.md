# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Matt's Random Decision Maker is a vanilla HTML/CSS/JavaScript web application that helps users make random decisions by inputting options and receiving random selections.

## Architecture

- **Frontend**: Vanilla HTML/CSS/JavaScript with no frameworks or build tools
- **Structure**: Single-page application with three core files:
  - `index.html` - Main HTML structure
  - `script.js` - JavaScript logic using ES6 class-based architecture
  - `style.css` - CSS styling with responsive design

### Key JavaScript Architecture
- `DecisionMaker` class handles all application logic
- Event-driven architecture with DOM event listeners
- Methods: `addOption()`, `removeOption()`, `makeDecision()`, `clearAll()`, `updateDisplay()`
- Dynamic DOM manipulation for option management

## Development

### Running the Application
Open `index.html` directly in a web browser, or serve via any static web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server

# Using PHP
php -S localhost:8000
```

### Testing
Manual testing in browser - verify:
- Adding/removing options works
- Random selection functions correctly
- Responsive design works on mobile
- Form validation prevents duplicates/empty entries

## Code Style

- ES6+ JavaScript features (classes, arrow functions, template literals)
- CSS uses modern features (flexbox, grid, custom properties would fit the pattern)
- Mobile-first responsive design with media queries
- Semantic HTML structure
- Clean separation of concerns between HTML/CSS/JS

## Common Modifications

When enhancing this application:
- Add features by extending the `DecisionMaker` class
- Maintain the vanilla JavaScript approach unless adding complex functionality
- Keep responsive design principles for any new UI elements
- Consider localStorage for option persistence across sessions