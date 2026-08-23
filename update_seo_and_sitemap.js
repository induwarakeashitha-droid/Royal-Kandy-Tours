const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.royalkandytours.com';

// European and international target countries for schema
const europeanAreaServed = [
  { "@type": "Country", "name": "United Kingdom" },
  { "@type": "Country", "name": "Germany" },
  { "@type": "Country", "name": "France" },
  { "@type": "Country", "name": "Netherlands" },
  { "@type": "Country", "name": "Switzerland" },
  { "@type": "Country", "name": "Italy" },
  { "@type": "Country", "name": "Spain" },
  { "@type": "Country", "name": "Belgium" },
  { "@type": "Country", "name": "Austria" },
  { "@type": "Country", "name": "Sweden" },
  { "@type": "Country", "name": "Norway" },
  { "@type": "Country", "name": "Denmark" },
  { "@type": "Country", "name": "Ireland" },
  { "@type": "Country", "name": "Australia" },
  { "@type": "Country", "name": "United States" },
  { "@type": "Country", "name": "Sri Lanka" }
];

const seoData = {
  'index.html': {
    title: 'Royal Kandy Tours | Private Sri Lanka Tours for European & International Travelers',
    description: 'Explore Sri Lanka with Nalinda — your private English-speaking chauffeur & guide. Tailored 5, 7, and 10-day private tours for UK & European tourists visiting Sigiriya, Kandy, Ella, Yala & Galle.',
    keywords: 'Sri Lanka private tours, Sri Lanka tours from UK, Sri Lanka tour packages for European travelers, private chauffeur guide Sri Lanka, Sri Lanka holiday private driver, Nalinda tour guide, English speaking driver Sri Lanka, tailor made Sri Lanka tours Europe, Kandy tours, Sigiriya Ella Yala private tour',
    canonical: `${BASE_URL}/`,
    image: 'assets/og-preview.jpg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TravelAgency",
          "@id": `${BASE_URL}/#organization`,
          "name": "Royal Kandy Tours",
          "url": BASE_URL,
          "logo": `${BASE_URL}/assets/logo.png`,
          "image": `${BASE_URL}/assets/og-preview.jpg`,
          "description": "Premium private tours and English-speaking chauffeur guide service in Sri Lanka tailored for European, British, and international holidaymakers.",
          "telephone": "+94770266988",
          "email": "info@royalkandytours.com",
          "knowsLanguage": ["English", "Sinhala"],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kandy",
            "addressRegion": "Central Province",
            "addressCountry": "LK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "7.2906",
            "longitude": "80.6337"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "priceRange": "$$",
          "currenciesAccepted": "EUR, GBP, USD, CHF, AUD, LKR",
          "paymentAccepted": "Cash, Bank Transfer",
          "areaServed": europeanAreaServed,
          "audience": {
            "@type": "Audience",
            "audienceType": "European Tourists, UK Holidaymakers & International Travelers"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "120",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          "url": BASE_URL,
          "name": "Royal Kandy Tours",
          "publisher": {
            "@id": `${BASE_URL}/#organization`
          },
          "inLanguage": ["en-GB", "en-US", "en"]
        }
      ]
    }
  },

  'tours.html': {
    title: 'Sri Lanka Tour Packages | Private Chauffeur Tours for European Tourists',
    description: 'Discover tailor-made Sri Lanka private tour packages for European travelers. 5-day cultural escapes, 7-day highland highlights, and 10-day luxury heritage journeys with an English-speaking chauffeur.',
    keywords: 'Sri Lanka tour packages, Sri Lanka private tour UK, Sri Lanka holiday packages Europe, Sri Lanka 10 day itinerary, Sri Lanka 7 day tour, Sri Lanka 5 day tour, English speaking driver Sri Lanka, tailor made Sri Lanka tours',
    canonical: `${BASE_URL}/tours.html`,
    image: 'assets/10day-private-tour.avif',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Tours",
              "item": `${BASE_URL}/tours.html`
            }
          ]
        },
        {
          "@type": "CollectionPage",
          "@id": `${BASE_URL}/tours.html#webpage`,
          "url": `${BASE_URL}/tours.html`,
          "name": "Sri Lanka Tour Packages | Royal Kandy Tours",
          "isPartOf": {
            "@type": "WebSite",
            "@id": `${BASE_URL}/#website`,
            "name": "Royal Kandy Tours",
            "url": BASE_URL
          },
          "description": "Curated Sri Lanka private tour packages for international holidaymakers."
        }
      ]
    }
  },

  'tour-detail.html': {
    title: 'The Royal Ceylon Heritage Tour (10 Days) | Sri Lanka Private Tour for UK & Europe',
    description: '10 days exploring Sigiriya, Kandy, Ella scenic train, Yala safari, Mirissa beach & Galle Fort. Custom-crafted private tour with English-speaking chauffeur Nalinda for European guests.',
    keywords: '10 day Sri Lanka tour, Sri Lanka private driver 10 days, Sri Lanka 10 day itinerary UK, Sigiriya Kandy Ella Yala tour, Sri Lanka luxury holiday Europe, private chauffeur Sri Lanka',
    canonical: `${BASE_URL}/tour-detail.html`,
    image: 'assets/10day-private-tour.avif',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Tours",
              "item": `${BASE_URL}/tours.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "10-Day Royal Ceylon Heritage Tour",
              "item": `${BASE_URL}/tour-detail.html`
            }
          ]
        },
        {
          "@type": "TouristTrip",
          "@id": `${BASE_URL}/tour-detail.html#trip`,
          "name": "The Royal Ceylon Heritage Tour (10 Days)",
          "description": "10 days through the best of Sri Lanka: Sigiriya, Kandy, Nuwara Eliya, Ella scenic train, Yala safari, Mirissa beach, and Galle Fort with dedicated private driver-guide.",
          "touristType": ["Cultural tourism", "Nature tourism", "Wildlife tourism", "Beach vacation", "European holidaymakers"],
          "provider": {
            "@type": "TravelAgency",
            "name": "Royal Kandy Tours",
            "url": BASE_URL
          },
          "areaServed": europeanAreaServed,
          "offers": {
            "@type": "Offer",
            "price": "860",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "description": "Starting from $860 / ~€795 / ~£680 for up to 3 people including private vehicle, fuel, driver accommodation, and airport transfers."
          },
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 10,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Day 1: Airport Arrival to Negombo / Sigiriya" },
              { "@type": "ListItem", "position": 2, "name": "Day 2: Sigiriya Rock Fortress & Dambulla Caves" },
              { "@type": "ListItem", "position": 3, "name": "Day 3: Sacred City of Kandy & Temple of the Tooth" },
              { "@type": "ListItem", "position": 4, "name": "Day 4: Royal Botanical Gardens & Tea Country Nuwara Eliya" },
              { "@type": "ListItem", "position": 5, "name": "Day 5: Scenic Train Ride to Ella & Nine Arch Bridge" },
              { "@type": "ListItem", "position": 6, "name": "Day 6: Ella Gap, Little Adam's Peak & Ravana Falls" },
              { "@type": "ListItem", "position": 7, "name": "Day 7: Yala National Park Leopard Safari" },
              { "@type": "ListItem", "position": 8, "name": "Day 8: Mirissa Coast & Whale Watching" },
              { "@type": "ListItem", "position": 9, "name": "Day 9: Historic Galle Fort & Southern Coast" },
              { "@type": "ListItem", "position": 10, "name": "Day 10: Colombo City & Airport Departure" }
            ]
          }
        }
      ]
    }
  },

  'tour-7-day-highlights.html': {
    title: '7-Day Highlights Tour: Sigiriya, Kandy & Ella | Private Sri Lanka Tour',
    description: '7 days exploring Sri Lanka\'s UNESCO ancient wonders and misty tea hills — Sigiriya, Dambulla, Kandy, Nuwara Eliya, and Ella with private English-speaking chauffeur Nalinda.',
    keywords: '7 day Sri Lanka highlights, Sri Lanka 1 week tour from UK, Sigiriya Kandy Ella tour, central highlands Sri Lanka tour, private driver Sri Lanka 7 days, cultural triangle Sri Lanka',
    canonical: `${BASE_URL}/tour-7-day-highlights.html`,
    image: 'assets/selfie-at-nine-arch.avif',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Tours",
              "item": `${BASE_URL}/tours.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "7-Day Highlights Tour",
              "item": `${BASE_URL}/tour-7-day-highlights.html`
            }
          ]
        },
        {
          "@type": "TouristTrip",
          "@id": `${BASE_URL}/tour-7-day-highlights.html#trip`,
          "name": "7-Day Highlights Tour",
          "description": "7 days exploring Sri Lanka's ancient wonders and misty tea hills — Sigiriya, Dambulla, Kandy, Nuwara Eliya, and Ella with a private guide.",
          "touristType": ["Cultural tourism", "Nature tourism", "Scenic train ride"],
          "provider": {
            "@type": "TravelAgency",
            "name": "Royal Kandy Tours",
            "url": BASE_URL
          },
          "areaServed": europeanAreaServed,
          "offers": {
            "@type": "Offer",
            "price": "620",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "description": "Starting from $620 / ~€575 / ~£490 for up to 3 people including private vehicle, chauffeur guide, and fuel."
          }
        }
      ]
    }
  },

  'tour-5-day-round.html': {
    title: '5-Day Cultural & Wildlife Round Tour | Sri Lanka Private Chauffeur',
    description: '5-day Sri Lanka private round tour visiting Sigiriya Rock Fortress, Polonnaruwa, Minneriya elephant safari, Kandy Temple, and Pinnawala for European tourists.',
    keywords: '5 day Sri Lanka round tour, Minneriya elephant safari tour, Sigiriya Polonnaruwa Kandy tour, short Sri Lanka private tour, Sri Lanka cultural tour, UK Europe Sri Lanka short break',
    canonical: `${BASE_URL}/tour-5-day-round.html`,
    image: 'assets/selfie-with-chinese-tourists.avif',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Tours",
              "item": `${BASE_URL}/tours.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "5-Day Cultural & Wildlife Round Tour",
              "item": `${BASE_URL}/tour-5-day-round.html`
            }
          ]
        },
        {
          "@type": "TouristTrip",
          "@id": `${BASE_URL}/tour-5-day-round.html#trip`,
          "name": "5-Day Cultural & Wildlife Round Tour",
          "description": "5 days exploring Sigiriya Rock Fortress, Polonnaruwa, Minneriya elephant safari, Kandy Temple, and Pinnawala on a private chauffeur tour.",
          "touristType": ["Cultural tourism", "Wildlife safari", "Ancient ruins"],
          "provider": {
            "@type": "TravelAgency",
            "name": "Royal Kandy Tours",
            "url": BASE_URL
          },
          "areaServed": europeanAreaServed,
          "offers": {
            "@type": "Offer",
            "price": "450",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "description": "Starting from $450 / ~€415 / ~£355 for up to 3 people with private transport and guide."
          }
        }
      ]
    }
  },

  'destinations.html': {
    title: 'Top Sri Lanka Destinations | Must-See Places for European Travelers',
    description: 'Plan your dream Sri Lanka holiday from Europe & UK. Explore Sigiriya Rock, Kandy Temple, Ella Nine Arch Bridge, Yala Wildlife Safari, Mirissa beaches, and Galle Fort.',
    keywords: 'Sri Lanka destinations, places to visit in Sri Lanka, Sri Lanka holiday guide for UK tourists, Kandy Sri Lanka, Ella Sri Lanka, Sigiriya Rock, Galle Fort, Dambulla Cave Temple, Mirissa beach',
    canonical: `${BASE_URL}/destinations.html`,
    image: 'assets/Ella-9arch-landscapejpg.jpg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Destinations",
              "item": `${BASE_URL}/destinations.html`
            }
          ]
        },
        {
          "@type": "CollectionPage",
          "@id": `${BASE_URL}/destinations.html#webpage`,
          "url": `${BASE_URL}/destinations.html`,
          "name": "Top Sri Lanka Destinations | Royal Kandy Tours",
          "description": "Curated collection of the most beautiful and culturally significant destinations across Sri Lanka."
        }
      ]
    }
  },

  'destination-detail.html': {
    title: 'Ella Travel Guide | Nine Arch Bridge & Highlands | Royal Kandy Tours',
    description: 'Explore Ella, Sri Lanka\'s mountain paradise. Visit the iconic Nine Arch Bridge, Little Adam\'s Peak, Ravana Falls, and emerald tea estates with your private guide.',
    keywords: 'Ella Sri Lanka, Nine Arch Bridge, Little Adams Peak, Ella travel guide, Ella train journey, tea plantations Ella, private tour Ella, Sri Lanka highlands tour',
    canonical: `${BASE_URL}/destination-detail.html`,
    image: 'assets/ella-ninearch.jpg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Destinations",
              "item": `${BASE_URL}/destinations.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Ella",
              "item": `${BASE_URL}/destination-detail.html`
            }
          ]
        },
        {
          "@type": "TouristDestination",
          "@id": `${BASE_URL}/destination-detail.html#destination`,
          "name": "Ella, Sri Lanka",
          "description": "A tranquil village in Sri Lanka's central highlands known for the Nine Arch Bridge, tea plantations, and hiking trails.",
          "touristType": ["Highland hiking", "Scenic photography", "Tea tourism", "Train travel"],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "6.8667",
            "longitude": "81.0466"
          }
        }
      ]
    }
  },

  'destination-kandy.html': {
    title: 'Kandy Travel Guide | Temple of the Tooth & Botanical Gardens | Royal Kandy Tours',
    description: 'Visit the sacred Temple of the Tooth Relic, scenic Kandy Lake, Royal Botanical Gardens Peradeniya, and cultural heritage sites with your private guide.',
    keywords: 'Kandy Sri Lanka, Temple of the Tooth, Sri Dalada Maligawa, Kandy Lake, Royal Botanical Gardens Peradeniya, Kandy cultural tour, Kandy private guide',
    canonical: `${BASE_URL}/destination-kandy.html`,
    image: 'assets/kandy-lake.jpg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Destinations",
              "item": `${BASE_URL}/destinations.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Kandy",
              "item": `${BASE_URL}/destination-kandy.html`
            }
          ]
        },
        {
          "@type": "TouristDestination",
          "@id": `${BASE_URL}/destination-kandy.html#destination`,
          "name": "Kandy, Sri Lanka",
          "description": "The cultural capital of Sri Lanka and home to the sacred Temple of the Tooth Relic and lush Royal Botanical Gardens.",
          "touristType": ["Cultural tourism", "Spiritual tourism", "Botanical gardens"],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "7.2906",
            "longitude": "80.6337"
          }
        }
      ]
    }
  },

  'destination-galle.html': {
    title: 'Galle Fort Travel Guide | UNESCO Heritage Coastal Haven | Royal Kandy Tours',
    description: 'Explore the UNESCO-listed Galle Fort, 17th-century ramparts, colonial boutique streets, iconic lighthouse, and stunning southern coastline with your private guide.',
    keywords: 'Galle Fort Sri Lanka, Galle lighthouse, UNESCO Galle Fort, Galle Dutch colonial history, Galle day tour, southern coast Sri Lanka',
    canonical: `${BASE_URL}/destination-galle.html`,
    image: 'assets/Lighthouse-Fort-Galle-Sri-Lanka.jpg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Destinations",
              "item": `${BASE_URL}/destinations.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Galle",
              "item": `${BASE_URL}/destination-galle.html`
            }
          ]
        },
        {
          "@type": "TouristDestination",
          "@id": `${BASE_URL}/destination-galle.html#destination`,
          "name": "Galle Fort, Sri Lanka",
          "description": "A UNESCO World Heritage coastal fortress renowned for its Dutch-colonial architecture, historic lighthouse, and vibrant culture.",
          "touristType": ["Historical tourism", "Architecture", "Coastal sightseeing"],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "6.0535",
            "longitude": "80.2210"
          }
        }
      ]
    }
  },

  'destination-mirissa.html': {
    title: 'Mirissa Beach & Whale Watching Guide | Royal Kandy Tours',
    description: 'Unwind on Mirissa\'s golden beach, experience blue whale watching safaris, visit picturesque Coconut Tree Hill, and savor fresh seafood on Sri Lanka\'s southern coast.',
    keywords: 'Mirissa Sri Lanka, Mirissa whale watching, Coconut Tree Hill Mirissa, Mirissa beach tour, southern Sri Lanka beaches, private transfer Mirissa',
    canonical: `${BASE_URL}/destination-mirissa.html`,
    image: 'assets/mirissa-coconuttreehill-srilanka.jpg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Destinations",
              "item": `${BASE_URL}/destinations.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Mirissa",
              "item": `${BASE_URL}/destination-mirissa.html`
            }
          ]
        },
        {
          "@type": "TouristDestination",
          "@id": `${BASE_URL}/destination-mirissa.html#destination`,
          "name": "Mirissa, Sri Lanka",
          "description": "A laid-back tropical beach paradise on Sri Lanka's south coast famous for blue whale watching and Coconut Tree Hill.",
          "touristType": ["Beach vacation", "Whale watching", "Surfing", "Tropical relaxation"],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "5.9482",
            "longitude": "80.4716"
          }
        }
      ]
    }
  },

  'destination-dambulla.html': {
    title: 'Dambulla Cave Temple Travel Guide | UNESCO Site | Royal Kandy Tours',
    description: 'Visit the magnificent Dambulla Cave Temple — a UNESCO World Heritage Site filled with ancient Buddhist statues, rock art, and painted granite caves.',
    keywords: 'Dambulla Cave Temple, Dambulla Sri Lanka, Golden Temple Dambulla, Cultural Triangle Sri Lanka, Buddhist cave temples, private driver Dambulla',
    canonical: `${BASE_URL}/destination-dambulla.html`,
    image: 'assets/Dambulla-Cave-Temple.jpg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Destinations",
              "item": `${BASE_URL}/destinations.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Dambulla",
              "item": `${BASE_URL}/destination-dambulla.html`
            }
          ]
        },
        {
          "@type": "TouristDestination",
          "@id": `${BASE_URL}/destination-dambulla.html#destination`,
          "name": "Dambulla Cave Temple, Sri Lanka",
          "description": "The largest and best-preserved cave-temple complex in Sri Lanka, boasting over 150 Buddha statues and ancient murals.",
          "touristType": ["Spiritual tourism", "Ancient rock art", "Cultural heritage"],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "7.8567",
            "longitude": "80.6483"
          }
        }
      ]
    }
  },

  'destination-anuradhapura.html': {
    title: 'Anuradhapura Sacred Ancient City Guide | Royal Kandy Tours',
    description: 'Discover the ancient sacred city of Anuradhapura — one of the oldest continuously inhabited cities in the world, home to Ruwanwelisaya and the sacred Sri Maha Bodhi tree.',
    keywords: 'Anuradhapura ancient city, Sri Maha Bodhi, Ruwanwelisaya stupa, Anuradhapura pilgrimage tour, cultural triangle Sri Lanka, ancient kingdom Sri Lanka',
    canonical: `${BASE_URL}/destination-anuradhapura.html`,
    image: 'assets/Anuradhapura-Sri-Lanka-Cultural-Triangle.jpeg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Destinations",
              "item": `${BASE_URL}/destinations.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Anuradhapura",
              "item": `${BASE_URL}/destination-anuradhapura.html`
            }
          ]
        },
        {
          "@type": "TouristDestination",
          "@id": `${BASE_URL}/destination-anuradhapura.html#destination`,
          "name": "Anuradhapura, Sri Lanka",
          "description": "An ancient capital of Sri Lanka celebrated for its remarkably preserved ruins of ancient Lankan civilization and sacred Buddhist pilgrimage sites.",
          "touristType": ["Archaeological tourism", "Spiritual pilgrimage", "Ancient history"],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "8.3114",
            "longitude": "80.4037"
          }
        }
      ]
    }
  },

  'book.html': {
    title: 'Book Your Private Sri Lanka Tour | Royal Kandy Tours',
    description: 'Book your customized private Sri Lanka tour with English-speaking chauffeur Nalinda. Direct booking and WhatsApp consultation for European and international travelers.',
    keywords: 'Book Sri Lanka tour, hire private driver Sri Lanka, Sri Lanka tour booking UK Europe, Nalinda tour guide booking, Sri Lanka chauffeur reservation',
    canonical: `${BASE_URL}/book.html`,
    image: 'assets/og-preview.jpg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Book Tour",
              "item": `${BASE_URL}/book.html`
            }
          ]
        },
        {
          "@type": "ContactPage",
          "@id": `${BASE_URL}/book.html#webpage`,
          "url": `${BASE_URL}/book.html`,
          "name": "Book Your Tour | Royal Kandy Tours",
          "description": "Customize and book your private Sri Lanka tour with direct chauffeur assistance."
        }
      ]
    }
  },

  'cookies.html': {
    title: 'Cookie Policy | Royal Kandy Tours',
    description: 'Learn how Royal Kandy Tours uses cookies and respects user privacy across our website in compliance with international and European privacy standards.',
    keywords: 'Cookie policy, privacy policy, GDPR compliance, Royal Kandy Tours privacy',
    canonical: `${BASE_URL}/cookies.html`,
    image: 'assets/og-preview.jpg',
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Cookie Policy",
              "item": `${BASE_URL}/cookies.html`
            }
          ]
        }
      ]
    }
  },

  '404.html': {
    title: '404 — Page Not Found | Royal Kandy Tours',
    description: 'Looks like you wandered off the path. Head back and explore Sri Lanka with Royal Kandy Tours.',
    keywords: 'Royal Kandy Tours, 404, Page Not Found',
    canonical: `${BASE_URL}/404.html`,
    image: 'assets/og-preview.jpg',
    ogType: 'website',
    noindex: true
  }
};

// Sitemap URLs configuration
const sitemapUrls = [
  { loc: `${BASE_URL}/`, lastmod: '2025-02-23', changefreq: 'daily', priority: '1.0' },
  { loc: `${BASE_URL}/tours.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE_URL}/tour-detail.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE_URL}/tour-7-day-highlights.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE_URL}/tour-5-day-round.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE_URL}/destinations.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE_URL}/destination-detail.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE_URL}/destination-kandy.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE_URL}/destination-galle.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE_URL}/destination-mirissa.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE_URL}/destination-dambulla.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE_URL}/destination-anuradhapura.html`, lastmod: '2025-02-23', changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE_URL}/book.html`, lastmod: '2025-02-23', changefreq: 'monthly', priority: '0.8' },
  { loc: `${BASE_URL}/cookies.html`, lastmod: '2025-02-23', changefreq: 'monthly', priority: '0.3' }
];

function generateSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('sitemap.xml', xml.trim() + '\n', 'utf-8');
  console.log('Created: sitemap.xml');
}

function generateRobotsTxt() {
  const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /404.html

# XML Sitemap
Sitemap: ${BASE_URL}/sitemap.xml
`;

  fs.writeFileSync('robots.txt', robots, 'utf-8');
  console.log('Created: robots.txt');
}

function updateHtmlFiles() {
  for (const [filename, data] of Object.entries(seoData)) {
    if (!fs.existsSync(filename)) {
      console.warn(`File ${filename} does not exist, skipping.`);
      continue;
    }

    let html = fs.readFileSync(filename, 'utf-8');

    // 1. Update <title>
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${data.title}</title>`);

    // 2. Remove all existing SEO & OpenGraph & Twitter tags and ld+json scripts from head
    html = html.replace(/\s*<!-- SEO & Social Share Previews[\s\S]*?-->/gi, '');
    html = html.replace(/\s*<!-- SEO & Social Sharing[\s\S]*?-->/gi, '');
    html = html.replace(/\s*<!-- Primary SEO Meta Tags[\s\S]*?-->/gi, '');
    html = html.replace(/\s*<!-- Geographic & Regional Tags[\s\S]*?-->/gi, '');
    html = html.replace(/\s*<!-- European & Global Audience Targeting[\s\S]*?-->/gi, '');
    html = html.replace(/\s*<!-- Open Graph \/ Facebook \/ WhatsApp[\s\S]*?-->/gi, '');
    html = html.replace(/\s*<!-- Twitter Cards[\s\S]*?-->/gi, '');
    html = html.replace(/\s*<!-- Structured Data \(JSON-LD\)[\s\S]*?-->/gi, '');
    html = html.replace(/\s*<link rel="canonical"[^>]*>/gi, '');
    html = html.replace(/\s*<link rel="alternate"[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="description"[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="keywords"[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="author"[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="robots"[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="geo\.[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="ICBM"[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="coverage"[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="distribution"[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="target"[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="audience"[^>]*>/gi, '');
    html = html.replace(/\s*<meta property="og:[^>]*>/gi, '');
    html = html.replace(/\s*<meta name="twitter:[^>]*>/gi, '');
    html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

    const imageUrl = `${BASE_URL}/${data.image}`;
    const robotsTag = data.noindex 
      ? '<meta name="robots" content="noindex, follow">' 
      : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">';

    const schemaTag = data.schema ? `
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
${JSON.stringify(data.schema, null, 2).split('\n').map(line => '    ' + line).join('\n')}
    </script>` : '';

    const seoBlock = `
    <!-- Primary SEO Meta Tags -->
    <link rel="canonical" href="${data.canonical}">
    <link rel="alternate" hreflang="x-default" href="${data.canonical}">
    <link rel="alternate" hreflang="en" href="${data.canonical}">
    <link rel="alternate" hreflang="en-GB" href="${data.canonical}">
    <link rel="alternate" hreflang="en-US" href="${data.canonical}">
    <link rel="alternate" hreflang="en-DE" href="${data.canonical}">
    <link rel="alternate" hreflang="en-FR" href="${data.canonical}">
    <link rel="alternate" hreflang="en-NL" href="${data.canonical}">
    <meta name="description" content="${data.description}">
    <meta name="keywords" content="${data.keywords}">
    <meta name="author" content="Royal Kandy Tours">
    ${robotsTag}

    <!-- European & Global Audience Targeting -->
    <meta name="coverage" content="Worldwide">
    <meta name="distribution" content="Global">
    <meta name="target" content="all">
    <meta name="audience" content="all">

    <!-- Open Graph / Facebook / WhatsApp (Europe & International) -->
    <meta property="og:type" content="${data.ogType || 'website'}">
    <meta property="og:site_name" content="Royal Kandy Tours">
    <meta property="og:url" content="${data.canonical}">
    <meta property="og:title" content="${data.title}">
    <meta property="og:description" content="${data.description}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:secure_url" content="${imageUrl}">
    <meta property="og:image:type" content="${data.image.endsWith('.avif') ? 'image/avif' : data.image.endsWith('.png') ? 'image/png' : 'image/jpeg'}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${data.title}">
    <meta property="og:locale" content="en_GB">
    <meta property="og:locale:alternate" content="en_US">
    <meta property="og:locale:alternate" content="de_DE">
    <meta property="og:locale:alternate" content="fr_FR">
    <meta property="og:locale:alternate" content="nl_NL">

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${data.canonical}">
    <meta name="twitter:title" content="${data.title}">
    <meta name="twitter:description" content="${data.description}">
    <meta name="twitter:image" content="${imageUrl}">
    <meta name="twitter:image:alt" content="${data.title}">${schemaTag}`;

    // Insert before </head>
    html = html.replace('</head>', `${seoBlock}\n</head>`);

    fs.writeFileSync(filename, html, 'utf-8');
    console.log(`Updated SEO metadata in: ${filename}`);
  }
}

generateSitemap();
generateRobotsTxt();
updateHtmlFiles();
console.log('All European-targeted SEO metadata, sitemap.xml, and robots.txt have been generated successfully!');
