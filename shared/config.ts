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
  linkedin: "https://www.linkedin.com/in/ishu-kumar-5a0940281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  youtube: "https://youtube.com/@gamearena",
  discord: "https://discord.gg/gamearena",
  telegram: "https://t.me/gamearena",
};

// BGMI Tournament Google Forms Configuration
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

// Free Fire Max Tournament Google Forms Configuration
// NOTE: embedUrl values are currently set to short forms.gle URLs
// For optimal iframe embedding, these should be updated to full Google Forms embed URLs
// Format: https://docs.google.com/forms/d/e/[FORM_ID]/viewform?embedded=true
// To get the full URL: Open the form in browser, copy the full URL, and add ?embedded=true
// The FormEmbed component will fall back to showing "Open Form" button if embedding fails
export const FREEFIRE_FORMS = {
  solo: {
    url: "https://forms.gle/JJCZGc4XUT4RqAde7",
    embedUrl: "https://forms.gle/JJCZGc4XUT4RqAde7", // TODO: Replace with full embed URL for better UX
  },
  duo: {
    url: "https://forms.gle/1medSE28F9m46fd19",
    embedUrl: "https://forms.gle/1medSE28F9m46fd19", // TODO: Replace with full embed URL for better UX
  },
  squad: {
    url: "https://forms.gle/dYGFZggmnqFP2hcC7",
    embedUrl: "https://forms.gle/dYGFZggmnqFP2hcC7", // TODO: Replace with full embed URL for better UX
  },
};

// BGMI Tournament Configuration
export const TOURNAMENTS = {
  solo: {
    title: "BGMI Solo Tournament",
    mode: "Solo",
    entryFee: 20,
    slots: 100,
    slotsText: "100 Players",
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/solo",
    formUrl: GOOGLE_FORMS.solo.url,
    embedUrl: GOOGLE_FORMS.solo.embedUrl,
    description: "Welcome to the official BGMI Solo Tournament hosted by GameArena 🎮. Please fill out the registration form carefully. Your slot will be confirmed only after successful payment and verification.",
    shortDescription: "Individual battle royale competition",
    note: "⚠️ Note: Incorrect or incomplete details may lead to disqualification.",
  },
  duo: {
    title: "BGMI Duo Tournament",
    mode: "Duo",
    entryFee: 40,
    slots: 50,
    slotsText: "50 Teams",
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/duo",
    formUrl: GOOGLE_FORMS.duo.url,
    embedUrl: GOOGLE_FORMS.duo.embedUrl,
    description: "Welcome to the BGMI Duo Tournament by GameArena! 👬 Register your 2-player team to participate in the competition. Fill all the details carefully, upload the payment proof, and wait for admin approval.",
    shortDescription: "Partner up for duo domination",
  },
  squad: {
    title: "BGMI Squad Tournament",
    mode: "Squad",
    entryFee: 80,
    slots: 25,
    slotsText: "25 Squads",
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/squad",
    formUrl: GOOGLE_FORMS.squad.url,
    embedUrl: GOOGLE_FORMS.squad.embedUrl,
    description: "Enter your squad of 4 players to compete in the BGMI Squad Tournament organized by GameArena 🎮. Ensure all member details are filled correctly and payment proof is uploaded.",
    shortDescription: "4-player team championship",
  },
};

// Free Fire Max Tournament Configuration
export const FREEFIRE_TOURNAMENTS = {
  solo: {
    title: "Free Fire Max Solo Tournament",
    mode: "Solo",
    entryFee: 20,
    slots: 50,
    slotsText: "50 Players",
    winner: 350,
    runnerUp: 150,
    perKill: 5,
    path: "/freefire-solo",
    formUrl: FREEFIRE_FORMS.solo.url,
    embedUrl: FREEFIRE_FORMS.solo.embedUrl,
    description: "Welcome to the official Free Fire Max Solo Tournament hosted by GameArena 🎮. Please fill out the registration form carefully. Your slot will be confirmed only after successful payment and verification.",
    shortDescription: "Individual Free Fire battle royale",
    note: "⚠️ Note: Incorrect or incomplete details may lead to disqualification.",
  },
  duo: {
    title: "Free Fire Max Duo Tournament",
    mode: "Duo",
    entryFee: 40,
    slots: 50,
    slotsText: "50 Teams",
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/freefire-duo",
    formUrl: FREEFIRE_FORMS.duo.url,
    embedUrl: FREEFIRE_FORMS.duo.embedUrl,
    description: "Welcome to the Free Fire Duo Tournament by GameArena! 👬 Register your 2-player team to participate in the competition. Fill all the details carefully, upload the payment proof, and wait for admin approval.",
    shortDescription: "Partner up for duo domination",
  },
  squad: {
    title: "Free Fire Max Squad Tournament",
    mode: "Squad",
    entryFee: 80,
    slots: 12,
    slotsText: "12 Squads",
    winner: 200,
    runnerUp: 150,
    perKill: 8,
    path: "/freefire-squad",
    formUrl: FREEFIRE_FORMS.squad.url,
    embedUrl: FREEFIRE_FORMS.squad.embedUrl,
    description: "Welcome to the Free Fire Max Squad Tournament by GameArena! 👬 Register your 4-player team to participate in the competition. Fill all the details carefully, upload the payment proof, and wait for admin approval.",
    shortDescription: "4-player team championship",
  },
};

export const COMPANY_INFO = {
  name: "GameArena",
  tagline: "India's Most Trusted BGMI & Free Fire Tournament Platform",
  description: "Professional BGMI and Free Fire tournament platform with transparent payment verification and guaranteed prize pools.",
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
