const fs = require('fs');

// Per-page OG data
const pages = {
  'index.html': {
    title: 'Royal Kandy Tours | Private Sri Lanka Tours',
    description: 'Explore Sri Lanka with Nalinda — your personal driver and guide. Private tours to Sigiriya, Kandy, Ella, Yala & more. Tailored for 3 people.',
    image: 'assets/kandy-lake-bg.jpg',
  },
  'tours.html': {
    title: 'Tour Packages | Royal Kandy Tours',
    description: 'Choose from our curated Sri Lanka tour packages — 5-day, 7-day, and 10-day private tours with your own chauffeur-guide.',
    image: 'assets/10day-private-tour.avif',
  },
  'destinations.html': {
    title: 'Destinations | Royal Kandy Tours',
    description: 'Discover the best of Sri Lanka — from the ancient city of Sigiriya to the misty highlands of Ella and the colonial charm of Galle.',
    image: 'assets/Ella-9arch-landscapejpg.jpg',
  },
  'book.html': {
    title: 'Book Your Tour | Royal Kandy Tours',
    description: 'Ready to explore Sri Lanka? Book your private tour with Royal Kandy Tours in just a few steps and chat directly with Nalinda on WhatsApp.',
    image: 'assets/kandy-lake-bg.jpg',
  },
  'tour-detail.html': {
    title: 'The Royal Ceylon Heritage Tour | Royal Kandy Tours',
    description: '10 days through the best of Sri Lanka — Sigiriya, Kandy, Ella, Yala safari, Mirissa beaches and Galle Fort. Private tour for 3 people.',
    image: 'assets/10day-private-tour.avif',
  },
  'tour-7-day-highlights.html': {
    title: '7-Day Highlights Tour | Royal Kandy Tours',
    description: '7 days through Sri Lanka\'s ancient wonders — Sigiriya, Dambulla, Kandy, Nuwara Eliya and Ella with a private guide.',
    image: 'assets/selfie-at-nine-arch.avif',
  },
  'tour-5-day-round.html': {
    title: '5-Day Round Tour | Royal Kandy Tours',
    description: '5 days exploring Sigiriya, Polonnaruwa, Minneriya Safari, Kandy and Pinnawala on a private tour with airport transfers.',
    image: 'assets/selfie-with-chinese-tourists.avif',
  },
  'destination-kandy.html': {
    title: 'Kandy | Royal Kandy Tours',
    description: 'Visit the sacred Temple of the Tooth, Kandy Lake and the lush botanical gardens with your own private guide.',
    image: 'assets/Kandy-Sri-lanka.jpg',
  },
  'destination-galle.html': {
    title: 'Galle | Royal Kandy Tours',
    description: 'Explore the UNESCO-listed Galle Fort, colonial streets and the stunning southern coastline of Sri Lanka.',
    image: 'assets/galle-lanscape-view.jpg',
  },
  'destination-mirissa.html': {
    title: 'Mirissa | Royal Kandy Tours',
    description: 'Unwind on Mirissa\'s golden beach, watch whales and enjoy fresh seafood on the southern coast of Sri Lanka.',
    image: 'assets/mirissa-coconuttreehill-srilanka.jpg',
  },
  'destination-anuradhapura.html': {
    title: 'Anuradhapura | Royal Kandy Tours',
    description: 'Discover the ancient sacred city of Anuradhapura — one of the oldest continuously inhabited cities in the world.',
    image: 'assets/Anuradhapura-Sri-Lanka-Cultural-Triangle.jpeg',
  },
  'destination-dambulla.html': {
    title: 'Dambulla | Royal Kandy Tours',
    description: 'Visit the magnificent Dambulla Cave Temple — a UNESCO World Heritage Site carved into a massive granite rock.',
    image: 'assets/Dambulla-Cave-Temple.jpg',
  },
  '404.html': {
    title: '404 — Page Not Found | Royal Kandy Tours',
    description: 'Looks like you wandered off the path. Head back and explore Sri Lanka with Royal Kandy Tours.',
    image: 'assets/kandy-lake-bg.jpg',
  },
  'cookies.html': {
    title: 'Cookie Policy | Royal Kandy Tours',
    description: 'Learn how Royal Kandy Tours uses cookies on our website.',
    image: 'assets/kandy-lake-bg.jpg',
  },
};

const defaultPage = {
  title: 'Royal Kandy Tours | Private Sri Lanka Tours',
  description: 'Explore Sri Lanka with Nalinda — your personal driver and guide. Private tours to Sigiriya, Kandy, Ella, Yala & more.',
  image: 'assets/kandy-lake-bg.jpg',
};

// Base URL — update this when the site goes live
const BASE_URL = 'https://www.royalkandytours.com';

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');

    // Remove any existing OG tags first to avoid duplicates
    content = content.replace(/\s*<meta property="og:[^>]*>/g, '');
    content = content.replace(/\s*<meta name="twitter:[^>]*>/g, '');
    content = content.replace(/\s*<meta name="description"[^>]*>/g, '');

    const p = pages[file] || defaultPage;
    const imageUrl = `${BASE_URL}/${p.image}`;
    const pageUrl = `${BASE_URL}/${file}`;

    const ogTags = `
    <!-- SEO & Social Sharing -->
    <meta name="description" content="${p.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:title" content="${p.title}">
    <meta property="og:description" content="${p.description}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Royal Kandy Tours">
    <meta property="og:locale" content="en_US">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${p.title}">
    <meta name="twitter:description" content="${p.description}">
    <meta name="twitter:image" content="${imageUrl}">`;

    // Insert before </head>
    content = content.replace('</head>', ogTags + '\n</head>');

    fs.writeFileSync(file, content, 'utf-8');
    console.log('Updated: ' + file);
}
console.log('Done.');
