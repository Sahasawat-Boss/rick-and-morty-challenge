# Rick and Morty Frontend Challenge

Build a React application that displays Rick and Morty character data from the [public API](https://rickandmortyapi.com/).

## Requirements

- Use **Next.js 15+** (App Router), **React 19+**, **TypeScript**, and **Tailwind CSS**
- Implement a responsive character listing page with:
  - Character cards in a grid layout
  - Status filter (All/Alive/Dead/unknown)
- Create a character detail page with:
  - Dynamic routing (`/character/[id]`)
  - Character image and information display
- Fetch data server-side where appropriate
- Write clean, type-safe code with proper TypeScript definitions

## API Information

You'll need to use the following endpoints:

1. **Get all characters:**

   ```
   GET https://rickandmortyapi.com/api/character
   ```

   - Contains an `info` object with pagination details
   - Contains a `results` array with character data

2. **Get a single character:**
   ```
   GET https://rickandmortyapi.com/api/character/{id}
   ```
   - Replace `{id}` with the character's ID (e.g., 1 for Rick Sanchez)
   - Returns detailed information about a specific character

Each character object contains properties like `id`, `name`, `status`, `species`, `image`, etc.

## Styling System

This project uses a custom color system with CSS variables that are mapped to Tailwind utility classes. This allows you to use semantic color names in your components.

The color system includes variables for:

- Background/foreground colors
- Primary/secondary colors
- Accent colors
- Status indicators (success, warning, error)
- And more

You can find all available color variables in the `globals.css` file.

## Live Reference

A working implementation is available at (https://rick-and-morty-six-ashen.vercel.app/). Use this as a visual guide for your implementation.

## Getting Started

```bash
npm install
npm run dev
```

## Evaluation Criteria

You'll be evaluated on:

- Functionality and code quality
- TypeScript usage
- UI/UX implementation with Tailwind CSS
- Component design and API integration
