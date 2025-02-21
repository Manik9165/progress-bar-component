# Progress Bar Component

A modern, animated progress bar component built with React, TypeScript, and Tailwind CSS. This component provides a sleek and responsive way to display progress in your web applications.

## Features

- Smooth animation transitions
- Customizable progress values
- Responsive design
- Built with TypeScript for type safety
- Styled with Tailwind CSS
- Modern React practices using hooks

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Usage

Import and use the ProgressBar component in your React application:

```tsx
import ProgressBar from './ProgressBar';

function App() {
  return (
    <ProgressBar progress={75} />
  );
}
```

The `progress` prop accepts a number between 0 and 100.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## License

This project is open source and available under the MIT license.
