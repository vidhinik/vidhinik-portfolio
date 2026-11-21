// ============================================================
// CENTRAL CONTENT FILE. Edit everything here. No other file needs changing.
// Replace every value marked "PLACEHOLDER" with real information.
// Put images in /public/images and reference them like "/images/portrait.jpg".
// Put videos in /public/videos and reference them like "/videos/reel-1.mp4".
// Leave an image as null to show a labelled placeholder.
// ============================================================

export const site = {
  name: 'Vidhi Nikam',
  monogram: 'VN',
  tagline:
    'Creative storytelling. Data-driven strategy. Meaningful digital experiences.',
  intro:
    'I plan social content, collaborate with creators, read the numbers and build the websites that bring it together.',
  roles: [
    'Social Media Manager',
    'Content Creator',
    'Data Analyst',
    'Web Developer',
  ],
  portrait: '/images/portrait.jpg',
  aboutImage: '/images/about.jpg',
}

export const links = {
  email: 'vidhinikam9@gmail.com',
  instagram: 'https://www.instagram.com/vidhi_nik',
  linkedin: 'https://www.linkedin.com/in/vidhi-nikam-3b3469290/',
  github: 'https://github.com/your-username', // PLACEHOLDER
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Creator', href: '#creator' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  heading: 'Stories need strategy. Strategy needs proof.',
  paragraphs: [
    'I work where content, data and code meet. A good post starts with an idea people care about, gets sharper with analytics and reaches further when the website behind it works well.',
    'B.Sc. IT graduate from Pillai College of Arts, Commerce and Science. Curious about creativity, data and all things digital.',
  ],
  principles: [
    {
      title: 'Start with the audience',
      text: 'Every campaign begins with who it is for and what they need.',
    },
    {
      title: 'Measure what matters',
      text: 'Numbers guide the next decision, not just the report.',
    },
    {
      title: 'Build it properly',
      text: 'Clean, fast and accessible experiences that feel considered.',
    },
  ],
}

export const expertise = [
  {
    id: 'social',
    icon: 'Megaphone',
    title: 'Social Media Management',
    color: 'coral',
    text: 'Content calendars, community management and platform strategy that keep a brand consistent and present.',
    points: ['Content planning', 'Community management', 'Platform strategy'],
  },
  {
    id: 'influencer',
    icon: 'Sparkles',
    title: 'Influencer & Content Creation',
    color: 'lime',
    text: 'Short-form video, photography and creator partnerships that feel authentic to the audience.',
    points: ['Reels and short video', 'Brand collaborations', 'Creator outreach'],
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Data Analytics',
    color: 'blue',
    text: 'Turning raw data into dashboards and insights people can act on.',
    points: ['Dashboards', 'Data cleaning', 'Insight reporting'],
  },
  {
    id: 'web',
    icon: 'Code2',
    title: 'Web Development',
    color: 'ink',
    text: 'Responsive, fast websites and web apps built with modern tools.',
    points: ['React front-ends', 'Responsive design', 'Performance'],
  },
]

export const categories = [
  'All',
  'Social Media',
  'Influencer',
  'Analytics',
  'Web Development',
]

// Projects and work experience shown in Featured Work.
// Items whose summary contains "PLACEHOLDER:" are hidden automatically.
// Experience items use: organisation, type, learnings, closing.
//
// Screenshot projects (HerCalendar, FoodyGo) use:
//   images:      list of screenshots. The FIRST one is the card cover.
//                Missing files are skipped automatically in the gallery.
//   projectType: short label shown under the title
//   tools:       tags shown under the description
//   tint:        soft background colour behind the screenshots
//   fit:         'cover' (fills the card, crops from the top)
//                or 'contain' (shows the whole screenshot)
export const projects = [
  {
    id: 'exp-lgm',
    title: 'Data Analyst Intern',
    organisation: "Let's Grow More",
    type: 'Internship',
    category: 'Analytics',
    summary:
      'Worked with real datasets to clean, analyse and turn raw data into meaningful insights.',
    description:
      "During my Data Analyst internship at Let's Grow More, I worked with real datasets and explored how raw data is cleaned, analysed and transformed into meaningful insights. The experience strengthened my analytical thinking, attention to detail and problem-solving skills, while helping me understand the role of data in informed decision-making.",
    learnings: [
      'Data Cleaning',
      'Data Analysis',
      'Analytical Thinking',
      'Problem Solving',
      'Data-driven Decision Making',
    ],
    closing: 'A valuable step in my data journey.',
    // Save the photo at: public/images/experience/lets-grow-more.jpg
    image: '/images/experience/lets-grow-more.jpg',
    link: null,
  },
  {
    id: 'hercalendar',
    title: 'HerCalendar',
    category: 'Web Development',
    projectType: 'Menstrual Cycle Tracking Application',
    summary:
      'A menstrual cycle tracking concept that makes keeping track of periods and personal wellness simpler.',
    description:
      'HerCalendar is a menstrual cycle tracking concept designed to make keeping track of periods, cycle patterns, and personal wellness simpler. Built with a focus on a clean, approachable interface and a user-friendly experience that makes everyday tracking feel effortless.',
    tools: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    // Save screenshots in public/images/projects/hercalendar/
    images: [
      '/images/projects/hercalendar/hc1.jpg',
      '/images/projects/hercalendar/hc2.jpg',
      '/images/projects/hercalendar/hc3.jpg',
    ],
    tint: 'bg-[#F9DCE3]',
    fit: 'cover',
  },
  {
    id: 'foodygo',
    title: 'FoodyGo',
    category: 'Web Development',
    projectType: 'Food Ordering Application',
    summary:
      'A food ordering application that makes exploring food options and placing orders simple and intuitive.',
    description:
      'FoodyGo is a food ordering application designed to provide users with a convenient and intuitive way to explore food options and place orders. The interface focuses on a smooth browsing experience and an approachable food-ordering journey.',
    tools: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    // Save screenshots in public/images/projects/foodygo/
    // Add or remove lines to match your files. Missing files are skipped.
    images: [
      '/images/projects/foodygo/foodygo-1.jpg',
      '/images/projects/foodygo/foodygo-2.jpg',
      '/images/projects/foodygo/foodygo-3.jpg',
      '/images/projects/foodygo/foodygo-4.jpg',
      '/images/projects/foodygo/foodygo-5.jpg',
      '/images/projects/foodygo/foodygo-6.jpg',
    ],
    tint: 'bg-[#FCE3C2]',
    fit: 'cover',
  },
  {
    id: 'p2',
    title: 'Creator Collaboration Project',
    category: 'Influencer',
    year: 'Year',
    summary: 'PLACEHOLDER: one-line summary of the collaboration.',
    description:
      'PLACEHOLDER: describe the creators involved, the content produced and your contribution.',
    role: 'PLACEHOLDER role',
    tools: ['CapCut', 'Instagram'],
    image: null, // e.g. '/images/projects/creator-collab.jpg'
    link: null,
  },
  {
    id: 'p3',
    title: 'Analytics Dashboard Project',
    category: 'Analytics',
    year: 'Year',
    summary: 'PLACEHOLDER: one-line summary of the dashboard.',
    description:
      'PLACEHOLDER: describe the dataset, the questions asked and the insights found.',
    role: 'PLACEHOLDER role',
    tools: ['Excel', 'Power BI', 'SQL'],
    image: null, // e.g. '/images/projects/dashboard.jpg'
    link: null,
  },
  {
    id: 'p4',
    title: 'Website Project',
    category: 'Web Development',
    year: 'Year',
    summary: 'PLACEHOLDER: one-line summary of the website.',
    description:
      'PLACEHOLDER: describe the goal, the build and what you learned.',
    role: 'PLACEHOLDER role',
    tools: ['React', 'Tailwind CSS'],
    image: null,
    link: 'https://example.com',
  },
  {
    id: 'p6',
    title: 'Data Analysis Project',
    category: 'Analytics',
    year: 'Year',
    summary: 'PLACEHOLDER: one-line summary of the analysis.',
    description:
      'PLACEHOLDER: describe the data source, method and findings.',
    role: 'PLACEHOLDER role',
    tools: ['Python', 'Tableau'],
    image: null,
    link: null,
  },
]

export const creator = {
  heading: 'Behind the content',
  text: "From everyday lifestyle content to dance, beauty, and brand collaborations, I enjoy creating content that feels natural, relatable, and true to my style. Here's a glimpse into my creator journey and the brands I've had the opportunity to work with.",
  handle: '@vidhi_nik',

  // Tile images go in public/images/creator/ (post-1.jpg ... post-4.jpg)
  // Tile videos go in public/videos/ (reel-1.mp4, reel-2.mp4). Use lowercase .mp4 and H.264.
  // `poster` is an optional still shown before a video loads.
  // `url` is where a click goes. null = your Instagram link above.
  thumbnails: [
    {
      id: 't1',
      label: 'Reel',
      video: '/videos/reel-1.mp4',
      poster: null, // e.g. '/images/creator/reel-1.jpg'
      image: null,
      url: null,
    },
    { id: 't2', label: 'Photo post', image: '/images/creator/post-1.jpg', url: null },
    { id: 't3', label: 'Carousel', image: '/images/creator/post-2.jpg', url: null },
    { id: 't4', label: 'Story', image: '/images/creator/post-3.jpg', url: null },
    { id: 't5', label: 'Reel', image: '/images/creator/post-4.jpg', url: null },
    {
      id: 't6',
      label: 'Reel',
      video: '/videos/reel-2.mp4',
      poster: null, // e.g. '/images/creator/reel-2.jpg'
      image: null,
      url: null,
    },
  ],

  // Each row links to the brand's Instagram. Add a collaboration type to `note` if you like.
  collaborations: [
    {
      name: 'Paradyes',
      note: 'Instagram reel',
      url: 'https://www.instagram.com/reel/DOgjwvAE115/',
    },
    {
      name: 'Plum Goodness',
      note: 'Instagram profile',
      url: 'https://www.instagram.com/plumgoodness',
    },
    {
      name: 'Love Beauty and Planet',
      note: 'Instagram profile',
      url: 'https://www.instagram.com/lovebeautyandplanet_in',
    },
  ],
}

// ------------------------------------------------------------
// ANALYTICS SHOWCASE: performance case studies.
// To add another case study, copy one object in `caseStudies` and edit it.
// `video` is the main visual. Save videos in public/videos/ (lowercase .mp4, H.264).
// `poster` is an optional still shown before the video loads.
// ------------------------------------------------------------
export const analytics = {
  heading: 'Content that travels.',
  text: 'A real performance case study from a collaborative Instagram Reel.',
  caseStudies: [
    {
      id: 'reel-devashree',
      label: 'Instagram Reel collaboration',
      collaborator: '@devashree._x',
      headline: '1.2M+ Views. One Reel. Massive Reach.',

      // Latest total supplied by Vidhi. The counter animates to this value.
      totalViews: { value: 1.2, suffix: 'M+', caption: 'Total views (latest)' },

      video: '/videos/reel-2.mp4',
      poster: null, // e.g. '/images/analytics/reel-poster.jpg'

      // Metrics below come from an EARLIER Instagram Insights screenshot.
      snapshotNote:
        'Supporting metrics are from an earlier Instagram Insights snapshot, taken when the Reel had 590,492 views. The 1.2M+ total above is the latest figure.',

      metrics: [
        { label: 'Accounts reached', value: '409,602', wide: true },
        { label: 'Likes', value: '35.2K' },
        { label: 'Reposts', value: '123' },
        { label: 'Skip rate', value: '27.5%' },
        { label: 'Share rate', value: '2.1%' },
      ],

      about:
        'A collaborative Instagram Reel with @devashree._x that generated significant audience reach and engagement through short-form content.',
    },
  ],
}

export const webProjects = [
  {
    id: 'w1',
    title: 'Website project',
    image: null, // e.g. '/images/web/website-1.jpg'
    description: 'PLACEHOLDER: what it does and who it is for.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    live: 'https://example.com',
    github: 'https://github.com/your-username/repo',
  },
  {
    id: 'w2',
    title: 'Web app project',
    image: null,
    description: 'PLACEHOLDER: what it does and who it is for.',
    tech: ['JavaScript', 'Framer Motion'],
    live: null,
    github: 'https://github.com/your-username/repo',
  },
  {
    id: 'w3',
    title: 'Landing page project',
    image: null,
    description: 'PLACEHOLDER: what it does and who it is for.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://example.com',
    github: null,
  },
]

export const tools = {
  'Social & Content': [
    'Instagram',
    'Meta Business Suite',
    'Canva',
    'CapCut',
    'Notion',
  ],
  Data: ['Excel', 'Google Sheets', 'SQL', 'Power BI', 'Tableau', 'Python'],
  Web: [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Framer Motion',
    'Git & GitHub',
    'Vite',
  ],
}

// PLACEHOLDER: replace with real, permissioned client feedback.
// (Not shown on the site at the moment. Add <Testimonials /> back to App.jsx to show it.)
export const testimonials = [
  {
    id: 'r1',
    quote: 'Real client feedback will appear here once you add it.',
    name: 'Client name',
    role: 'Role, Company',
    placeholder: true,
  },
  {
    id: 'r2',
    quote: 'Add a short, honest line about working with you.',
    name: 'Client name',
    role: 'Role, Company',
    placeholder: true,
  },
  {
    id: 'r3',
    quote: 'Each testimonial needs permission from the person quoted.',
    name: 'Client name',
    role: 'Role, Company',
    placeholder: true,
  },
]

export const contact = {
  heading: "Have an idea? Let's make it work.",
  text: 'Whether it is a campaign, a creator partnership, a dashboard or a website, I would love to hear about it.',
}

// Football accounts shown under "Social Media" and "All" in Featured Work.
// Save each club logo in /public/images/clubs/ using the file name below.
// NOTE: only add per-account numbers here if you can verify them.

export const footballShowcase = {
  title: "Football Clubs & Pages I've Worked With",
  subtitle:
    "Managed content for some of India's football communities, with selected reels and posts crossing 1M+ views.",

  clubs: [
    {
      id: 'mfa',
      name: 'Mumbai Football Association',
      handle: '@officialmfa83',
      url: 'https://www.instagram.com/officialmfa83/',
      label: 'Social Media Management',
      image: '/images/clubs/mfa.jpg',
      art: 'Maharashtra State Youth League poster',
      tint: 'bg-[#F9D84A]',
    },
    {
      id: 'kenkre',
      name: 'Kenkre FC',
      handle: '@mumbaikenkrefc',
      url: 'https://www.instagram.com/mumbaikenkrefc/',
      label: 'Social Media Management',
      image: '/images/clubs/kenkre-fc.jpg',
      art: 'Kenkre FC matchday creative',
      tint: 'bg-blue/25',
    },
    {
      id: 'sudeva',
      name: 'Sudeva Sports',
      handle: '@sudevasportsofficial',
      url: 'https://www.instagram.com/sudevasportsofficial/',
      label: 'Social Media Management',
      image: '/images/clubs/sudeva-sports.jpg',
      art: 'Sudeva Sports campaign creative',
      tint: 'bg-lime/60',
    },
    {
      id: 'fw',
      name: 'Football World',
      handle: '@footballworld.in',
      url: 'https://www.instagram.com/footballworld.in/',
      label: 'Social Media Management',
      image: '/images/clubs/football-world.jpg',
      art: 'Football World post creative',
      tint: 'bg-[#2F9E5B]/30',
    },
  ],
}