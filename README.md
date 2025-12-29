# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring multi-language support, dark/light theme toggle, and interactive animations.

## 🚀 Features

- **Multi-language Support**: Available in English, Arabic, and French
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Animations**: AOS (Animate On Scroll) for smooth section transitions
- **Particle Background**: Animated particle effects using tsparticles
- **Contact Form**: Functional contact form with email integration
- **Dynamic Loading**: Optimized component loading with Next.js dynamic imports
- **Modern UI**: Clean and modern interface built with Tailwind CSS

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Features Breakdown](#features-breakdown)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Customization](#customization)

## 🛠 Tech Stack

### Core

- **Next.js 16.0.10** - React framework with App Router
- **React 19.2.1** - UI library
- **TypeScript** - Type safety

### Styling

- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Custom CSS** - Global styles and animations

### Libraries & Tools

- **AOS (Animate On Scroll) 2.3.4** - Scroll animations
- **tsparticles 3.9.1** - Particle effects for background
- **FontAwesome** - Icon library
- **Zod 4.2.1** - Schema validation
- **Nodemailer 7.0.11** - Email sending functionality

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Contact form API endpoint
│   ├── components/
│   │   ├── About/                # About section component
│   │   ├── Contact/              # Contact form component
│   │   │   └── contactSchema.js  # Zod validation schema
│   │   ├── Footer/               # Footer component
│   │   ├── Global/               # Reusable global components
│   │   │   ├── Background/       # Particle background
│   │   │   ├── Button/           # Button component
│   │   │   ├── container/        # Container wrapper
│   │   │   ├── Head/             # Section headers
│   │   │   ├── LangToggle/       # Language switcher
│   │   │   ├── logo/             # Logo component
│   │   │   └── theme/            # Theme toggle
│   │   ├── Hero/                 # Hero section
│   │   ├── navbar/               # Navigation bar
│   │   ├── Projects/             # Projects showcase
│   │   ├── Scroll/               # Scroll to top button
│   │   └── Skills/               # Skills section
│   ├── Data/
│   │   ├── data/
│   │   │   ├── Ar.json           # Arabic translations
│   │   │   ├── En.json           # English translations
│   │   │   ├── Fr.json           # French translations
│   │   │   └── projects.json     # Projects data
│   │   └── LangContext.jsx       # Language context provider
│   ├── AOSProvider.jsx           # AOS animation provider
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/                       # Static assets
│   ├── Image/                    # Project images
│   ├── cv.pdf                    # Resume/CV
│   └── ...                       # Other assets
├── next.config.ts                # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies

```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

   > **Note**: For Gmail, you'll need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

| Variable     | Description                                        | Required |
| ------------ | -------------------------------------------------- | -------- |
| `EMAIL_USER` | Your Gmail address for sending contact form emails | Yes      |
| `EMAIL_PASS` | Gmail App Password (not your regular password)     | Yes      |

### Setting up Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate a new app password for "Mail"
5. Use this password in `EMAIL_PASS`

## ✨ Features Breakdown

### Multi-language Support

The portfolio supports three languages:

- **English (en)** - Default
- **Arabic (ar)** - RTL support
- **French (fr)**

Language preference is saved in localStorage and persists across sessions. Translations are stored in JSON files under `app/Data/data/`.

**Usage in components:**

```jsx
import { useLang } from "./Data/LangContext";

function MyComponent() {
  const { t, lang, changeLang } = useLang();

  return (
    <div>
      <h1>{t.header.about}</h1>
      <button onClick={() => changeLang("ar")}>العربية</button>
    </div>
  );
}
```

### Theme Toggle

Dark and light themes are available with persistent storage. The theme preference is saved in localStorage.

### Contact Form

The contact form includes:

- Name validation (minimum 3 characters)
- Email validation
- Phone number validation (minimum 11 digits, numbers only)
- Optional message field
- Email sending via Nodemailer

Form validation is handled by Zod schema in `app/components/Contact/contactSchema.js`.

### Animations

- **AOS (Animate On Scroll)**: Sections animate as you scroll
- **tsparticles**: Interactive particle background
- **Smooth scrolling**: Enhanced user experience

### Dynamic Imports

Components are dynamically imported for better performance:

- Skills
- About
- Projects
- Contact
- Footer
- Head

This reduces initial bundle size and improves page load time.

## 📜 Available Scripts

| Script          | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Start development server on http://localhost:3000 |
| `npm run build` | Create production build                           |
| `npm run start` | Start production server                           |
| `npm run lint`  | Run ESLint to check code quality                  |

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASS`
4. Deploy!

### Other Platforms

The project can be deployed on any platform that supports Next.js:

- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

Make sure to:

- Set environment variables
- Run `npm run build` before deployment
- Configure Node.js version (18+)

## 🎨 Customization

### Adding a New Language

1. Create a new JSON file in `app/Data/data/` (e.g., `De.json` for German)
2. Copy the structure from `En.json` and translate the content
3. Update `LangContext.jsx`:

   ```jsx
   import de from "./data/De.json";

   // In the component:
   if (lang === "de") {
     t = de;
   }
   ```

4. Add language option to the language toggle component

### Modifying Projects

Edit `app/Data/data/projects.json` to add, remove, or modify projects.

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes or add CSS modules

### Changing Colors/Theme

Modify the theme colors in:

- `app/globals.css` - CSS variables for colors
- `tailwind.config.js` - Tailwind theme extensions

### Contact Form Email

Update the recipient email in `app/api/contact/route.js`:

```javascript
to: "your-email@example.com",
```

## 📝 Notes

- The project uses a mix of TypeScript (`.tsx`) and JavaScript (`.jsx`) files
- Some components use client-side rendering (`"use client"`) for interactivity
- Language and theme preferences are stored in browser localStorage
- The contact form requires proper email configuration to function

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Omar Elbastawesy**

- Portfolio: [Your Portfolio URL]
- Email: omarelbastawesy1@gmail.com

---

Built with ❤️ using Next.js and React
