// Centralized configuration for GameArena
// All contact information, social links, and tournament data

export const CONTACT_INFO = {
  phone: "+917541024846",
  whatsapp: "+917541024846",
  email: "ishu_2312res305@iitp.ac.in",
  address: {
    street: "IIT Patna Campus",
    city: "Patna",
    state: "Bihar",
    zip: "801106",
  },
  businessHours: "Mon-Sat: 10AM-8PM IST",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ishukr10?igsh=OTNoaTJ2bm1ndWlp",
  facebook: "https://www.facebook.com/profile.php?id=100017427288981",
  twitter: "https://x.com/ISHU_IITP?t=82EvrueT768xlAszIyWvfQ&s=09",
  linkedin: "https://www.linkedin.com/in/ishu-kumar-5a0940281",
  youtube: "https://youtube.com/@gamearena",
  discord: "https://discord.gg/gamearena",
  telegram: "https://t.me/gamearena",
};

export const GOOGLE_FORMS = {
  solo: {
    url: "https://forms.gle/BE1TENZbKCapdEw28",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdHXqX9BqMZE7Ys8xEZ0qYzKzJqYZJXqYzKzJqYZJXqYzK/viewform?embedded=true",
  },
  duo: {
    url: "https://forms.gle/dRg6VVQfg7EerJRq6",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc8XqYzKzJqYZJXqYzKzJqYZJXqYzKzJqYZJXqYzKzJqYZ/viewform?embedded=true",
  },
  squad: {
    url: "https://forms.gle/Hq3yPHZyESBv47P29",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf9XqYzKzJqYZJXqYzKzJqYZJXqYzKzJqYZJXqYzKzJqYZ/viewform?embedded=true",
  },
};

export const TOURNAMENTS = {
  solo: {
    title: "BGMI Solo Tournament",
    mode: "Solo",
    entryFee: 20,
    slots: 100,
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/solo",
    formUrl: GOOGLE_FORMS.solo.url,
    embedUrl: GOOGLE_FORMS.solo.embedUrl,
    description: "Individual battle royale competition",
  },
  duo: {
    title: "BGMI Duo Tournament",
    mode: "Duo",
    entryFee: 40,
    slots: 50,
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/duo",
    formUrl: GOOGLE_FORMS.duo.url,
    embedUrl: GOOGLE_FORMS.duo.embedUrl,
    description: "Partner up for duo domination",
  },
  squad: {
    title: "BGMI Squad Tournament",
    mode: "Squad",
    entryFee: 80,
    slots: 25,
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/squad",
    formUrl: GOOGLE_FORMS.squad.url,
    embedUrl: GOOGLE_FORMS.squad.embedUrl,
    description: "4-player team championship",
  },
};

export const COMPANY_INFO = {
  name: "GameArena",
  tagline: "India's Most Trusted BGMI Tournament Platform",
  description: "Professional BGMI tournament platform with transparent payment verification and guaranteed prize pools.",
  foundedYear: 2024,
  website: "https://gamearena.replit.app",
};

export const PAYMENT_METHODS = [
  "UPI",
  "Google Pay",
  "PhonePe",
  "Paytm",
  "Direct Bank Transfer",
];

export const SUPPORT_CHANNELS = [
  {
    name: "WhatsApp Support",
    availability: "24/7 Available",
    description: "Instant replies for urgent issues",
    responseTime: "Within 5 minutes",
  },
  {
    name: "Email Support",
    availability: "9 AM - 9 PM IST",
    description: "Detailed inquiries and documentation",
    responseTime: "Within 4 hours",
  },
  {
    name: "Discord Community",
    availability: "24/7 Community",
    description: "Community help and announcements",
    responseTime: "Mods online 16 hours daily",
  },
  {
    name: "Live Chat",
    availability: "10 AM - 11 PM IST",
    description: "Real-time assistance on website",
    responseTime: "Average wait time: 2 minutes",
  },
];
