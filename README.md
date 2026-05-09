# Prity - Premium Developer Portfolio

A high-end, responsive portfolio website built with React, TypeScript, and Vanilla CSS. Featuring glassmorphism, smooth animations, and dynamic GitHub integration.

## ✨ Features

- 🚀 **Modern Tech Stack**: React 18, TypeScript, Vite.
- 🎨 **Premium UI/UX**: Custom design system with glassmorphism and frosted-glass effects.
- 📊 **GitHub Connection**: Live fetching of repositories using the GitHub REST API.
- 🎭 **Animations**: Smooth transitions and staggered entrance effects powered by Framer Motion.
- 📱 **Fully Responsive**: Optimized for all devices (Mobile, Tablet, Desktop).
- 🛠️ **Vanilla CSS**: Maximum flexibility without the overhead of utility frameworks.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rajkishor124/prity-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd prity-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## ⚙️ Configuration

To customize the portfolio with your details, edit `src/constants/config.ts`:

```typescript
export const PORTFOLIO_CONFIG = {
  name: "Prity",
  role: "Full Stack Developer",
  githubUsername: "Rajkishor124", // Your GitHub username
  // ... other details
};
```

## 📄 License

This project is open source.
