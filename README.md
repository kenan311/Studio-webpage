# Wedding Photography & Videography Platform

A modern, elegant, and professional web application designed for wedding photography and videography services. This platform delivers a seamless user experience for both clients (couples planning weddings) and the photography team.

## Features

### 🎨 **Design & Aesthetics**
- Luxury wedding-inspired design language
- Clean, modern, and timeless aesthetic
- Responsive design across all devices
- Smooth animations and transitions
- Professional color palette with gold, cream, and sage tones

### 📸 **Core Functionality**
- **Photo/Video Gallery System**: Beautiful, responsive galleries with lightbox viewing
- **Client Booking System**: Multi-step booking process with package selection
- **Event Management**: Comprehensive event tracking and scheduling
- **Personalized Client Dashboards**: Custom dashboards for each client
- **Admin Dashboard**: Complete management interface for photographers

### 🚀 **Key Pages & Features**

#### **Homepage**
- Hero section with compelling messaging
- Services showcase with detailed packages
- Portfolio gallery with filtering
- About section with team values
- Client testimonials with carousel
- Contact form with comprehensive fields

#### **Booking System** (`/book`)
- 4-step booking process:
  1. Event Details (type, date, location, guest count)
  2. Contact Information
  3. Package Selection with add-ons
  4. Review & Submit
- Real-time form validation
- Package comparison and pricing
- Success confirmation with next steps

#### **Client Dashboard** (`/dashboard`)
- Overview with quick stats and recent activity
- Event management and timeline
- Gallery access and management
- Account settings and preferences
- Wedding countdown and milestones

#### **Photo Gallery** (`/gallery/[id]`)
- Responsive grid layout with filtering
- Lightbox modal for full-screen viewing
- Favorites system
- Download and share functionality
- Video support with custom controls
- Mobile-optimized touch interactions

#### **Admin Dashboard** (`/admin`)
- Business overview with key metrics
- Booking management and client communication
- Event scheduling and calendar
- Gallery management and delivery
- Revenue tracking and analytics
- Settings and business configuration

### 🛠 **Technology Stack**

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Heroicons for consistent iconography
- **TypeScript**: Full type safety throughout
- **Responsive**: Mobile-first design approach

### 🎯 **Design System**

#### **Color Palette**
- **Gold**: Primary brand color (#f5c23a)
- **Cream**: Warm, elegant backgrounds (#fefcf9)
- **Sage**: Natural, calming accents (#5f735f)
- **Charcoal**: Professional text and UI elements
- **Blush**: Romantic accent color (#e25a5a)

#### **Typography**
- **Serif**: Playfair Display for headings and elegant text
- **Sans**: Inter for body text and UI elements
- **Script**: Dancing Script for decorative elements

#### **Components**
- Reusable button styles (primary, secondary, ghost)
- Card components with hover effects
- Form inputs with focus states
- Navigation with smooth scrolling
- Modal and lightbox components

### 📱 **Responsive Design**

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Streamlined interface with collapsible navigation

### 🚀 **Getting Started**

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 📁 **Project Structure**

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage
│   ├── book/              # Booking system
│   ├── dashboard/         # Client dashboard
│   ├── gallery/           # Photo galleries
│   └── admin/             # Admin dashboard
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Hero.tsx          # Homepage hero section
│   ├── Services.tsx      # Services showcase
│   ├── Portfolio.tsx     # Portfolio gallery
│   ├── About.tsx         # About section
│   ├── Testimonials.tsx  # Client testimonials
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Site footer
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies and scripts
```

### 🎨 **Customization**

The platform is designed to be easily customizable:

- **Colors**: Update the color palette in `tailwind.config.js`
- **Content**: Modify text and images in component files
- **Packages**: Update pricing and features in the booking system
- **Branding**: Change logos, fonts, and brand elements

### 🔮 **Future Enhancements**

The MVP focuses on core booking and gallery delivery, with room for expansion:

- **Payment Integration**: Stripe/PayPal for online payments
- **Calendar Integration**: Google Calendar/Outlook sync
- **Email Automation**: Automated client communication
- **File Upload**: Client photo uploads and feedback
- **Analytics**: Detailed business analytics and reporting
- **Mobile App**: Native mobile applications
- **CRM Integration**: Customer relationship management
- **Inventory Management**: Equipment and resource tracking

### 📞 **Support**

For questions or support, please contact:
- Email: hello@weddingstudio.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ for couples in love**

