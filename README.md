# Construction News & 3D Viewer

A Nuxt 3 application showcasing construction news and 3D building visualization using Speckle Viewer.

## Features

- **Home Page**: Displays latest construction news with responsive card layout
- **3D Visualization**: Interactive 3D model viewing with Speckle Viewer integration  
- **Dark/Light Mode**: Theme switching with persistent user preference
- **Responsive Design**: Mobile-friendly interface using Nuxt UI components

## Tech Stack

- **Frontend Framework**: Nuxt 3
- **UI Components**: Nuxt UI
- **Styling**: Tailwind CSS
- **3D Rendering**: Speckle Viewer
- **API**: Server-side API routes with mock data

## Getting Started

### Prerequisites

- Node.js (version 16.x or later)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/LesiaUKR/nuxt_test_project.git

# Navigate to the project directory
cd nuxt_test_project

# Install dependencies
npm install
# or
yarn install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
# or
yarn dev
```

### Build for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

- `pages/` - Application pages (home, 3D visualization)
- `components/` - Reusable UI components
- `composables/` - Shared functionality (date formatting, Speckle Viewer)
- `assets/` - CSS styles
- `server/api/` - Mock API endpoints
- `public/` - Public assets like images

## 3D Visualization

The 3D visualization page features:

- Interactive 3D model viewing
- Rotation, zoom, and pan controls
- Loading state management
- Responsive container sizing

## API

The mock API provides construction news articles with:
- Title
- Image URL
- Description text
- Full description
- Publication date

## Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com/)
- [Speckle Viewer Documentation](https://speckle.guide/dev/viewer.html)