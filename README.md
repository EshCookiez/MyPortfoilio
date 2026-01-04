# My Portfolio Website

A professional, responsive portfolio website built with **Vite + React** for job and internship applications. This portfolio showcases your skills, projects, and experience in a modern, component-based architecture.

## Features

- ⚛️ **Built with React** - Modern component-based architecture
- ⚡ **Vite** - Fast development and build tool
- 🎨 Modern, professional design with smooth animations
- 📱 Fully responsive (mobile, tablet, and desktop)
- 🚀 Fast loading and optimized performance
- 💼 Sections for About, Skills, Projects, and Contact
- 🎯 Easy to customize with your own information
- 📧 Contact form with React state management
- 🔗 Social media integration

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

3. **Build for Production**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder.

## Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Replace "Your Name" with your actual name
   - Update the subtitle and description
   - Add your social media links

2. **About Section** (`src/components/About.jsx`):
   - Write your personal story
   - Update location, education, and status
   - Add your resume PDF to the `public` folder

3. **Skills Section** (`src/components/Skills.jsx`):
   - Modify the `skillCategories` array with your actual skills
   - Add or remove skill categories as needed

4. **Projects Section** (`src/components/Projects.jsx`):
   - Update the `projects` array with your real projects
   - Add project descriptions, tech stacks, and links
   - Change project icons

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and LinkedIn links
   - Customize the contact form (add backend if needed)

6. **Footer** (`src/components/Footer.jsx`):
   - Update copyright year and name
   - Add/remove social media links

### Customize Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #7c3aed;
  --text-dark: #1f2937;
  --text-light: #6b7280;
}
```

## Project Structure

```
MyPortfoilio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Option 2: Netlify
1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com](https://www.netlify.com)
3. Or connect your GitHub repository for automatic deployments

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Add `base: '/MyPortfoilio/'` to `vite.config.js`
4. Run: `npm run deploy`

### Option 4: Other Platforms
- **Render**: Connect GitHub and deploy
- **Firebase Hosting**: Use Firebase CLI
- **AWS Amplify**: Connect repository for CI/CD

## Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool
- **CSS3** - Styling with modern features
- **Font Awesome** - Icons
- **ESLint** - Code linting

## Tips for Job Applications

1. **Keep it Updated**: Regularly update your projects and skills
2. **Add Real Projects**: Replace placeholder projects with your actual work
3. **Professional Content**: Write clear, concise descriptions
4. **Resume PDF**: Add your resume to the `public` folder
5. **Test Responsiveness**: Check on mobile, tablet, and desktop
6. **Performance**: Run `npm run build` and test the production build
7. **Analytics**: Consider adding Google Analytics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Feel free to use this template for your personal portfolio.

---

**Built with Vite + React. Good luck with your applications! 🚀**
