# React Essentials

A small React tutorial application for learning the concepts used in almost
every React project. The page demonstrates:

- Components and component composition
- JSX
- Props
- State and interactive UI updates

## Prerequisites

- Node.js 18 or later
- npm

## Getting Started

1. Clone the repository and move into the project directory:

   ```bash
   git clone https://github.com/mohamedmahroofa/react-basic.git
   cd react-basic
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

   Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the development server with Vite.    |
| `npm run build`   | Create a production build in `dist/`.      |
| `npm run preview` | Preview the production build locally.      |
| `npm run deploy`  | Build and publish `dist/` to GitHub Pages. |

## Project Structure

- `src/components/` contains the reusable React components.
- `src/data.js` contains the core concept and example content.
- `src/App.jsx` composes the page sections.
- `src/index.css` contains the global styles.

## Deployment

The Vite base path is configured for the repository's GitHub Pages site. To
deploy the latest production build, run:

```bash
npm run deploy
```

The configured site URL is:
https://mohamedmahroofa.github.io/react-basic/
