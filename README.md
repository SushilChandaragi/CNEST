# CNEST - Centre for Next Gen Entrepreneurship

Official website for CNEST Incubation Center at KLE Technological University, Belgaum.

## Features

- Modern React + Vite setup
- Responsive landing page with sections:
  - Hero
  - About
  - Achievements
  - Services
  - Team
  - Contact
- Tailwind CSS for styling
- TypeScript for type safety
- Lucide React icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)

### Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set up environment variables:**
   - Copy your Gemini API key into `.env.local`:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

- `App.tsx` - Main app layout and routing
- `components/` - All UI sections (Hero, About, Services, Achievements, Team, Contact, Footer, Header)
- `constants.tsx` - Navigation, services, and contact info
- `types.ts` - TypeScript interfaces
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

## License

This project is for educational and demonstration purposes.