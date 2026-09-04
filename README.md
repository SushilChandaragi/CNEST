# CNEST - Centre for Next Gen Entrepreneurship in Science & Technology

![CNEST Logo](https://img.shields.io/badge/CNEST-KLE%20Tech%20University-blue?style=for-the-badge)
![Government Funded](https://img.shields.io/badge/Funded%20By-Government%20of%20Karnataka-orange?style=for-the-badge)

## 🚀 About CNEST

CNEST is a premier incubation center based at KLE Technological University, Udyambagh, Belagavi, Karnataka. Funded by the Government of Karnataka with ₹10 Crores, we are committed to nurturing innovative startups in science and technology, providing comprehensive support through funding, mentorship, and world-class infrastructure.

---

## 🌐 Website Structure

This is a **multi-page React application** built with modern web technologies, featuring:

### Pages:
1. **Home** (`/`) - Hero section, highlights, services, and team overview
2. **About** (`/about`) - Vertical timeline showing CNEST's journey, mission, vision, and goals
3. **Gallery** (`/gallery`) - Interactive carousel showcasing:
   - CTIE Inauguration photos
   - Innoverse innovation showcase
   - Incubated startups and events
4. **Careers** (`/careers`) - Job openings with detailed descriptions
5. **Contact** (`/contact`) - Google Maps integration, contact form, and location details

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.3 + TypeScript
- **Routing:** React Router DOM 7.1.1
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Static hosting ready

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

```bash
# Navigate to project directory
cd "CNEST 1ST DRAFT"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📸 Gallery Configuration

The gallery automatically displays optimized WebP images across categories (Innoverse, Incubated Startups & Events, and Infrastructure):

### Image Categories:

**Innoverse - Innovation Showcase:**
- `/images/gallery/full/innoverse-01.webp` (Full display / Lightbox)
- `/images/gallery/cards/innoverse-01.webp` (Grid view)
- `/images/gallery/thumbs/innoverse-01.webp` (Thumbnail navigation)
- And more...

**Incubated Startups & Events:**
- `/images/gallery/full/startups-ideation.webp`
- `/images/gallery/full/startups-ipyatra.webp`
- `/images/gallery/full/startups-kimi-motors.webp`
- `/images/gallery/full/startups-img-4500.webp`

**Infrastructure:**
- `/images/gallery/full/infra-01.webp`
- And more...

To add or remove images, edit the `galleryData` array in `/pages/Gallery.tsx`.

---

## 💼 Careers Page

The Careers page is pre-populated with 3 job openings:
1. **Incubation Manager**
2. **Technology Coordinator**
3. **Marketing & Outreach Executive**

### To Update Job Postings:

1. Open `/pages/Careers.tsx`
2. Edit the `jobOpenings` array
3. Add/remove job objects with these fields:
   - `title`, `department`, `location`, `type`, `experience`
   - `description`, `responsibilities[]`, `requirements[]`, `preferred[]`

---

## 📍 Google Maps Integration

The Contact page features an embedded Google Map centered on:
**KLE Technological University, Udyambagh, Belagavi**

Coordinates: `15.854871, 74.509860`

---

## 🎨 Design Philosophy

- **Theme:** Professional, corporate, clean (White/Blue/Grey palette)
- **Typography:** Inter font family (300, 400, 600, 700, 900 weights)
- **Vibe:** National Innovation Hub - Authoritative yet accessible
- **Responsive:** Mobile-first design, fully responsive across all devices

---

## 🔍 SEO Optimization

### Meta Tags Implemented:
- ✅ Primary meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook sharing)
- ✅ Twitter Card tags
- ✅ Geo-location tags for local SEO
- ✅ Semantic HTML5 elements (`<header>`, `<main>`, `<article>`, `<footer>`)

### Keywords Targeted:
- Incubation Center Belagavi
- KLE Technological University
- Startup Ecosystem Karnataka
- Government Funded Incubator
- CTIE, CNEST, North Karnataka Innovation

---

## 📂 Project Structure

```
CNEST 1ST DRAFT/
├── components/
│   ├── Header.tsx           # Navigation with routing
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Home hero section
│   ├── About.tsx            # Home about preview
│   ├── Services.tsx         # Services offered
│   ├── Achievements.tsx     # Funding achievements
│   ├── Team.tsx             # Team section
│   └── Contact.tsx          # Contact component (legacy)
├── pages/
│   ├── Home.tsx             # Home page (combines components)
│   ├── AboutPage.tsx        # Full About page with timeline
│   ├── Gallery.tsx          # Gallery with carousel
│   ├── Careers.tsx          # Careers/job listings
│   └── ContactPage.tsx      # Contact page with map
├── public/
│   ├── images/
│   │   └── gallery/         # Optimized WebP gallery derivatives
│   │       ├── full/        # Carousel and Lightbox full display
│   │       ├── cards/       # Photo grid view
│   │       └── thumbs/      # Carousel thumbnail navigation
│   └── PICTURES/            # Event and infrastructure photo archives
├── App.tsx                  # Main app with routing
├── index.tsx                # Entry point
├── constants.tsx            # Navigation & content constants
├── types.ts                 # TypeScript type definitions
├── index.html               # HTML template with SEO
└── package.json             # Dependencies
```

---

## 🚦 Navigation Menu

- **Home** - Landing page with hero and highlights
- **About** - Journey timeline and mission
- **Gallery** - Photo carousel with categories
- **Careers** - Job openings
- **Contact** - Location and contact form

---

## ✨ Key Features

### 1. **Vertical Timeline** (About Page)
A visually stunning timeline showing CNEST's journey from foundation to future vision with:
- Icon-based milestones
- Gradient timeline connector
- Responsive alternating layout

### 2. **Interactive Gallery**
- Tabbed categories (CTIE Inauguration, Innoverse, Events)
- Full-screen carousel with controls
- Thumbnail navigation
- Lightbox modal for full-size viewing
- Responsive grid layout

### 3. **Professional Careers Portal**
- Detailed job descriptions
- Responsibilities, requirements, and preferred skills
- "Apply Now" email integration
- Clean card-based design

### 4. **Google Maps Integration**
- Embedded interactive map
- Responsive iframe
- Accurate location pinning

### 5. **Smooth Routing**
- Client-side navigation with React Router
- Active link highlighting
- Mobile-responsive menu

---

## 🎯 Performance Optimizations

- ✅ Lightweight CSS (Tailwind CDN)
- ✅ Lazy-loaded images
- ✅ Smooth scroll behavior
- ✅ Optimized asset loading
- ✅ Minimal JavaScript bundle

---

## 📧 Contact Information

**Address:**  
KLE Technological University  
Udyambagh, Belagavi  
Karnataka, India

**Email:**  
- info@cnest.in  
- careers@cnest.in

**Working Hours:**  
Mon - Fri: 9:00 AM - 6:00 PM  
Sat: 10:00 AM - 4:00 PM

---

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is developed for CNEST - KLE Technological University.  
© 2024 CNEST. All rights reserved.

---

## 🙏 Acknowledgments

- **Funded by:** Government of Karnataka
- **Supported by:** KLE Technological University
- **Part of:** CTIE (Centre for Technology Innovation and Entrepreneurship)

---

## 📞 Need Help?

For questions or support:
- Email: info@cnest.in
- Visit us at KLE Tech University, Udyambagh, Belagavi

---

**Built with ❤️ for the future of entrepreneurship in North Karnataka**

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