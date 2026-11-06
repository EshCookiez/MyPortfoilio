// Everything the site says. Edit here; the components only lay it out.

export const profile = {
  name: 'JV Bayona',
  fullName: 'Jaevie Bayona',
  role: 'Junior Software Developer',
  company: 'Homes.ph',
  companyUrl: 'https://www.homes.ph',
  location: 'Cebu City, Philippines',
  status: 'Open to new roles',
  headline: 'I build web platforms, mobile apps and the tools that keep a team shipping.',
  intro:
    'Junior software developer at Homes.ph, a real estate platform for the Philippines. I work across the stack: Next.js on the web, React Native on mobile, the APIs between them, and desktop tools that automate the team’s day.',
  shortName: 'JV',
  tagline: 'Junior software developer at Homes.ph, building for the web, phones and the desktop.',
  focus: ['Web', 'Mobile', 'Desktop'],
  // A cut-out on a transparent background, 1000 × 1000.
  photo: '/files/portrait-suit.webp',
  photoAlt: 'JV Bayona in a black suit, white shirt, black tie and round glasses, looking up and to the left',
  resume: '/files/resume.pdf',
  email: 'jaevie.bayona14@gmail.com',
  links: {
    github: 'https://github.com/EshCookiez',
    linkedin: 'https://www.linkedin.com/in/jaevie-bayona-254378168/',
  },
};

export const stats = [
  { value: '400+', label: 'commits shipped in 2026' },
  { value: '5', label: 'apps worked on this year' },
  { value: '3', label: 'platforms: web, mobile, desktop' },
];

// `blurb` is the short version the Work grid shows. `visual` picks the
// picture: a screenshot, or phone screens for the mobile apps.
export const featured = [
  {
    id: 'homesph',
    title: 'Homes.ph',
    tagline: 'A real estate platform for the Philippines',
    blurb: 'A real estate platform for the Philippines. I built its mobile API, the agent and franchise dashboards, and its support and site-health tools.',
    role: 'Junior Software Developer',
    period: '2026 – present',
    summary:
      'Property listings, agents, developers, franchise offices, home loans and CPD seminars for real estate professionals, in one Next.js platform.',
    built: [
      'A mobile API that serves the agent and buyer apps from the website’s own dashboard code: listings, leads, inquiries, events, profiles and mortgage applications.',
      'Dashboards for agents, developers and franchise offices, plus a magazine flipbook, follow-up surveys and site analytics.',
      'Support-ticket replies, a content review queue, an automated site-health crawler and email outreach to CPD providers.',
      'Franchise microsites on their own subdomains, with per-office themes and templates.',
      'Security and test fixes across sign-up, roles and data access.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vitest'],
    links: [{ label: 'Visit homes.ph', href: 'https://www.homes.ph' }],
    note: 'Company code, private repository',
    visual: { kind: 'browser', src: '/work/homesph.jpg', url: 'homes.ph', alt: 'The Homes.ph home page: “Your Home Starts Here”, with a grid of Philippine cities' },
  },
  {
    id: 'homesph-mobile',
    title: 'Homes.ph mobile apps',
    tagline: 'A buyer app and an agent app',
    blurb: 'A buyer app and an agent app on the same API as the website: city picker, search, saved homes and inquiries for buyers; leads, sales records and tools for agents.',
    role: 'Junior Software Developer',
    period: 'Sep – Oct 2026',
    summary: 'Two Expo apps that bring Homes.ph to the phone, built on the same API as the website.',
    built: [
      'Buyer app: a welcome flow that picks your city, email-code and Google sign-in, search with suggestions, a saved shortlist and recently viewed homes, an inquiry inbox, news, agent pages and a mortgage application.',
      'Agent app: leads and inquiries with assign, return and archive, a four-step record-sales wizard, notifications and a guided tour of every page.',
      'Agent tools: a zonal value lookup, a lot plotter that draws a lot from its title’s bearings, events with raffle draws, and social posts made from the website’s templates.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Jest', 'REST API'],
    links: [],
    note: 'Company apps, private repositories',
    // Buyer-app screens: status and nav bars cropped, agents’ photos blurred.
    visual: {
      kind: 'phones',
      screens: [
        { src: '/work/mobile-city.webp', alt: 'Buyer app: choosing a city' },
        { src: '/work/mobile-home.webp', alt: 'Buyer app: home screen with search' },
        { src: '/work/mobile-search.webp', alt: 'Buyer app: search results in Cebu' },
      ],
    },
  },
  {
    id: 'pickleplay',
    title: 'Pickleplay',
    tagline: 'Courts, bookings and tournaments for pickleball',
    blurb: 'Courts, bookings and tournaments for pickleball. I built the tournament wizard, court bookings, and a security and speed pass.',
    role: 'Full-stack developer',
    period: '2026',
    summary: 'The home of the Philippines’ fastest-growing sport: find courts, book them, and join tournaments and squads.',
    built: [
      'A tournament creation wizard, admin pages for each tournament, and open registration for players.',
      'Court-owner bookings and the court calendar.',
      'A security and speed pass: authenticated APIs, row-level security for roles and bookings, code-split routes and recovery from failed page loads.',
    ],
    stack: ['React', 'Vite', 'TypeScript', 'Express', 'Supabase', 'Tailwind CSS'],
    links: [
      { label: 'Visit pickleplay.ph', href: 'https://www.pickleplay.ph' },
      { label: 'Code', href: 'https://github.com/jfibra/Pickleplay', code: true },
    ],
    visual: { kind: 'browser', src: '/work/pickleplay.jpg', url: 'pickleplay.ph', alt: 'The Pickleplay home page: “Pickleplay Philippines” with a court search box' },
  },
  {
    id: 'koki',
    title: 'Homes.ph Koki',
    tagline: 'A desktop app for a developer’s day',
    blurb: 'A desktop app for a developer’s day: tasks linked to commits, a daily sheet drafted from my commits and tasks, and a trending-news finder.',
    role: 'Designer and developer',
    period: '2026',
    summary:
      'An internal Windows app I designed and built. It turns my commits and tasks into the reports and daily sheets my team needs, and runs the chores around them.',
    built: [
      'A task board whose keys link to commits, a git log across every repo, and reports and weekly insights built from each task’s history.',
      'A daily sheet for my supervisor, drafted from the day’s commits and tasks, with AI writing it up on request.',
      'A launch panel for dev servers, editors and checks with live output, plus reminders, a site-health monitor, support tickets and CPD outreach with reply and bounce tracking.',
      'A trending-news finder for the content team that checks every cited source against the actual search results.',
    ],
    stack: ['Electron', 'JavaScript', 'Node.js', 'Generative AI'],
    links: [],
    note: 'Internal tool',
    visual: { kind: 'window', src: '/work/koki.jpg', alt: 'Koki’s task board, with To do, Doing and Done columns of sample tasks' },
  },
];

export const experience = [
  {
    role: 'Junior Software Developer',
    org: 'Homes.ph',
    orgUrl: 'https://www.homes.ph',
    period: '2026 – present',
    summary: 'web platform, mobile apps, internal tools',
    points: [
      'Build features across the Homes.ph web platform (Next.js) and its buyer and agent apps (Expo).',
      'Wrote the mobile API that serves both apps from the web platform’s own code.',
      'Built Koki, the team’s internal desktop app, and AI-assisted workflows for reporting and content.',
    ],
  },
  {
    role: 'Full-stack developer',
    org: 'Pickleplay',
    orgUrl: 'https://www.pickleplay.ph',
    period: '2026',
    summary: 'tournaments, bookings, security pass',
    points: ['Tournaments, court bookings, and a security and performance pass on the web app.'],
  },
];

export const education = {
  school: 'Cebu Institute of Technology – University',
  degree: 'BS Information Technology',
  year: '2026',
};

export const certificates = [
  // StackTrek micro-credentials, May 2026 (IDs SAUT-D8GA44FMB, SAUT-2TSH7PH3U, SAUT-7C77NBPCY, SAUT-4ZR66AD73).
  { name: 'StackTrek: AI Prompting for Automation Level III', year: '2026' },
  { name: 'AWS Academy Cloud Architecture', year: '2025' },
  { name: 'AWS Academy Cloud Foundations', year: '2025' },
  { name: 'CodeChum Java Programming', year: '2024' },
  { name: 'Huawei ICT Academy: Data Communication and Networking Basics', year: '2023' },
];

export const skills = [
  { title: 'Frontend', icon: 'layout', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML & CSS', 'Responsive UI'] },
  { title: 'Mobile', icon: 'phone', items: ['React Native', 'Expo', 'Kotlin', 'Jetpack Compose'] },
  { title: 'Backend & data', icon: 'server', items: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'REST APIs', 'Spring Boot', 'Firebase'] },
  { title: 'Languages', icon: 'code', items: ['TypeScript', 'JavaScript', 'Java', 'Kotlin', 'SQL', 'Python', 'PHP', 'C++'] },
  { title: 'Desktop & tooling', icon: 'tool', items: ['Electron', 'Git & GitHub', 'Vercel', 'Vitest', 'Jest', 'Figma'] },
  // From the StackTrek AI Prompting for Automation Level III courses.
  { title: 'AI', icon: 'spark', items: ['Generative AI', 'AI automation tools', 'Prompting for automation', 'Data privacy and ethics'], note: 'Certified: AI Prompting for Automation Level III, StackTrek, May 2026' },
];

export const moreProjects = [
  {
    title: 'SKyber',
    description: 'A digital governance platform for the Sangguniang Kabataan, on web and Android.',
    tech: ['React', 'Kotlin', 'Mantine UI', 'Tailwind CSS'],
    code: 'https://github.com/VinceKimlo/IT342-SKyber',
    demo: 'https://skyber-coral.vercel.app',
    year: '2025',
  },
  {
    title: 'WanderWays',
    description: 'A travel agency management system with flight booking, hotel reservations and payments.',
    tech: ['React', 'Node.js', 'Material UI', 'Java'],
    code: 'https://github.com/EshCookiez/WanderWays_AppDev',
    year: '2024',
  },
  {
    title: 'Blockchain Notes',
    description: 'Collaborative notes with real-time updates and storage on Cardano.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Cardano SDK'],
    code: 'https://github.com/Enriquez-EthanM/Notes-App--Munchkin',
  },
  {
    title: 'FitQuest',
    description: 'An Android fitness tracker for workouts, goals, routines and achievements.',
    tech: ['Kotlin', 'Android SDK', 'Firebase'],
    code: 'https://github.com/Enriquez-EthanM/FitQuest',
  },
  {
    title: 'PromptQuest',
    description: 'A browser game made for the Galactic Pulse Hackathon.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/Japh11/PromptQuest--Galactic-Pulse-Hackathon-',
  },
];
