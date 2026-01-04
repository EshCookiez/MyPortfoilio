# Portfolio Customization Guide

This guide will help you personalize your portfolio website for your job and internship applications.

## Step 1: Update Personal Information in index.html

### Replace Your Name
Find and replace `"Your Name"` with your actual name:
- Line 46: `<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>`
- Line 243: `<p>&copy; 2026 Your Name. All rights reserved.</p>`

### Update Your Title/Role
Line 47: `<p class="hero-subtitle">Software Developer | Problem Solver | Tech Enthusiast</p>`
- Customize this to reflect your role (e.g., "Computer Science Student | Full-Stack Developer")

### Update About Me Section
Lines 65-66: Replace the placeholder text with your own story:
- Your background and interests
- What you're currently learning or working on
- Your career goals

### Update Personal Details
Lines 68-76: Update your information:
```html
<span>Location: Your City, Country</span>
<span>Education: Your University/Degree</span>
<span>Status: Available for Internships</span>
```

## Step 2: Update Social Media Links

Find and replace these placeholder URLs throughout the file:

- **GitHub**: Replace `https://github.com/yourusername` with your GitHub profile
- **LinkedIn**: Replace `https://linkedin.com/in/yourprofile` with your LinkedIn profile
- **Twitter**: Replace `https://twitter.com/yourusername` with your Twitter (optional)
- **Email**: Replace `your.email@example.com` with your actual email
- **Phone**: Replace `+1 (234) 567-890` with your phone number

These links appear in:
- Hero section (lines 55-58)
- Contact section (lines 206-224)
- Footer section (lines 244-248)

## Step 3: Customize Skills

### Programming Languages (lines 91-98)
Add or remove skills based on your expertise:
```html
<span class="skill-tag">Python</span>
<span class="skill-tag">JavaScript</span>
<!-- Add more languages you know -->
```

### Web Development (lines 101-108)
### Database & Tools (lines 111-118)
### Other Skills (lines 121-128)

Modify these sections to reflect your actual skills.

## Step 4: Update Projects

For each project (there are 4 placeholder projects):

1. **Project Title**: Replace with your actual project name
2. **Description**: Write a brief, compelling description
3. **Technologies**: Update the technology tags
4. **Links**: Replace `#` with actual GitHub repository and demo URLs

Example structure (starting around line 143):
```html
<div class="project-card">
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/yourusername/project" target="_blank">Code</a>
            <a href="https://your-demo-url.com" target="_blank">Demo</a>
        </div>
    </div>
</div>
```

## Step 5: Add Your Resume

1. Create or export your resume as a PDF file
2. Name it exactly `resume.pdf`
3. Place it in the root directory (same folder as index.html)
4. The "Download Resume" button will automatically work

## Step 6: Customize Colors (Optional)

Edit `styles.css` lines 7-13 to change the color scheme:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #7c3aed;    /* Accent color */
    --text-dark: #1f2937;          /* Main text color */
    --text-light: #6b7280;         /* Secondary text color */
    --bg-light: #f9fafb;           /* Light background */
    --bg-white: #ffffff;           /* White background */
}
```

## Step 7: Test Locally

1. Open `index.html` in your web browser
2. Test all navigation links
3. Verify all external links work
4. Test on mobile view (resize browser window or use browser dev tools)
5. Ensure all your information is correct

## Step 8: Deploy Your Portfolio

Choose one of these deployment options:

### GitHub Pages (Free & Easy)
1. Push your changes to GitHub
2. Go to repository Settings > Pages
3. Select your branch and save
4. Your site will be live at: `https://yourusername.github.io/MyPortfoilio`

### Netlify (Free with Custom Domain)
1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder
3. Get instant deployment with HTTPS

### Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Automatic deployments on every push

## Quick Checklist

Before deploying, make sure you've:

- [ ] Updated your name in all places
- [ ] Added your real email and phone number
- [ ] Updated all social media links (GitHub, LinkedIn, etc.)
- [ ] Customized the About Me section
- [ ] Listed your actual skills
- [ ] Added your real projects with working links
- [ ] Added your resume.pdf file
- [ ] Tested all links and buttons
- [ ] Tested on mobile view
- [ ] Proofread all content for typos

## Need Help?

- Check the main README.md for deployment instructions
- Test your website locally before deploying
- Use browser developer tools (F12) to debug issues
- Validate your HTML at [validator.w3.org](https://validator.w3.org)

## Tips for Job Applications

1. **Keep it updated**: Add new projects and skills regularly
2. **Quality over quantity**: Showcase your best 3-4 projects
3. **Be specific**: Use metrics and outcomes in project descriptions
4. **Professional photo**: Consider adding a professional photo to the About section
5. **Consistent branding**: Use the same photo/links across all platforms
6. **Proofread**: Have someone review your content for errors
7. **Analytics**: Consider adding Google Analytics to track visitors

Good luck with your applications! 🚀
