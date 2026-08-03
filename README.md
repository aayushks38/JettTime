# JettTime - Premium Travel Website

A stunning, modern travel website built with Next.js, Tailwind CSS, and Framer Motion. Featuring smooth animations, glassmorphism effects, and a responsive design that works perfectly on all devices.

## 🎨 Features

### Visual Excellence
- ✨ **Next-Level Animations** - Smooth parallax scrolling, fade-in effects, hover animations
- 🎭 **Glassmorphism Design** - Modern glass-effect UI components
- 🌈 **Gradient Effects** - Beautiful color gradients throughout
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop

### Sections Included
- **Navigation Bar** - Sticky nav with smooth scroll and mobile menu
- **Hero Banner** - Eye-catching landing section with parallax effect
- **Search Bar** - Interactive trip search with glassmorphism design
- **Popular Destinations** - Animated destination cards with hover effects
- **Travel Packages** - 6 curated packages with dynamic pricing
- **Featured Offers** - Eye-catching discount deals and promotions
- **Image Gallery** - Category-filtered gallery with lightbox modal
- **Customer Reviews** - Auto-playing carousel with verified testimonials
- **About Us** - Company information with statistics and features
- **Contact Form** - Fully validated contact form with React Hook Form
- **Footer** - Newsletter signup, social links, and company info

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd e:\JettTime
```

2. Install dependencies:
```bash
npm install
```

Or if you prefer yarn:
```bash
yarn install
```

### Running the Development Server

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 🛠️ Build for Production

```bash
npm run build
npm start
```

Or with yarn:
```bash
yarn build
yarn start
```

## 📁 Project Structure

```
JettTime/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── HeroBanner.tsx      # Hero section
│   ├── SearchBar.tsx       # Search functionality
│   ├── PopularDestinations.tsx  # Destination cards
│   ├── TravelPackages.tsx  # Package listings
│   ├── FeaturedOffers.tsx  # Special offers
│   ├── ImageGallery.tsx    # Photo gallery with lightbox
│   ├── CustomerReviews.tsx # Review carousel
│   ├── AboutUs.tsx         # Company information
│   ├── ContactForm.tsx     # Contact form with validation
│   └── Footer.tsx          # Footer with links
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── next.config.js          # Next.js configuration
```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#FF6B6B',      // Coral red
  secondary: '#4ECDC4',    // Teal
  accent: '#FFE66D',       // Yellow
  dark: '#1a1a1a',         // Dark background
  light: '#f9f9f9',        // Light text
}
```

### Animations
Custom animations are defined in `tailwind.config.ts` and can be modified or extended.

### Images
Images are sourced from Unsplash. Replace URLs in components to use your own images.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

### Environment Variables

Create a `.env.local` file for any API endpoints:
```
NEXT_PUBLIC_API_URL=your_api_url_here
```

## 📦 Dependencies

- **Next.js** - React framework
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation
- **TypeScript** - Type safety

## 🎯 Performance Optimizations

- Image optimization through Next.js Image component
- Code splitting and lazy loading
- CSS Tailwind purging for smaller bundle
- Smooth 60fps animations with Framer Motion
- Responsive design that adapts to all screen sizes

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Smooth Scrolling**: The site uses CSS smooth scrolling. Navigate using section IDs (e.g., #home, #destinations, #packages)

2. **Mobile Responsive**: All sections are mobile-first responsive. Test on various devices.

3. **Animation Performance**: Framer Motion animations are GPU-accelerated for smooth performance.

4. **Customization**: Feel free to modify colors, text, and images to match your brand.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📧 Support

For questions or issues, feel free to reach out or create an issue in the repository.

---

**Made with ❤️ for travel enthusiasts**
