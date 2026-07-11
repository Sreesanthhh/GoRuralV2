export const company = {
  name: "Go Rural India",
  legalName: "Go Rural India Pvt Ltd",
  phone: "+91 99485 19998",
  phoneHref: "tel:+919948519998",
  whatsappHref: "https://wa.me/919948519998",
  email: "contact@goruralindia.in",
  address: "126 & 127 Swarnajayanthi Complex, Ameerpet, Hyderabad, India – 500038",
  social: {
    facebook: "https://www.facebook.com/GoRuralIndPvtLimited",
    linkedin: "https://www.linkedin.com/company/go-rural-india",
  },
};

export type WorkCategory = {
  slug: string;
  title: string;
  icon: string;
  /** One-liner for the homepage card. */
  short: string;
  /** Full explanation shown on the category's own page. */
  description: string;
};

export const workCategories: WorkCategory[] = [
  {
    slug: "mobile-van-campaign",
    title: "Mobile Van Campaign",
    icon: "Truck",
    short: "Branded LED & box vans that take your message door to door.",
    description:
      "Our fleet of branded promotion vans — LED-screen vehicles, box vans, and Tata Ace units — carries your brand into towns and villages that mass media never reaches. With GPS-tracked routes, trained crews, and live daily reporting, every kilometre is accountable: product demos, audio announcements, sampling, and lead capture happen right at the customer's doorstep.",
  },
  {
    slug: "haat-mela-mandi-activations",
    title: "Haat, Mela & Mandi Activations",
    icon: "Storefront",
    short: "Rythu Bazaars, weekly haats, and mandi-day brand activations.",
    description:
      "Weekly haats, melas, mandis, and Rythu Bazaars are where rural India actually shops. We set up branded stalls, demo zones, and engagement activities on the busiest market days — putting your product in the hands of farmers and rural families at the exact moment they're in a buying mindset.",
  },
  {
    slug: "ooh-branding",
    title: "OOH Branding",
    icon: "Buildings",
    short: "Building wraps, hoardings, wall paintings, arches, and more.",
    description:
      "From high-rise building wraps to village wall paintings, pole medians, LED arches, and auto branding — our out-of-home work makes brands physically impossible to miss. We handle everything in-house: site scouting, permissions, printing, installation, and photographic proof of every executed unit.",
  },
  {
    slug: "rural-influencer-campaign",
    title: "Rural Influencer Campaign",
    icon: "Megaphone",
    short: "Regional creators and local voices your audience actually trusts.",
    description:
      "In rural markets, trust travels through familiar voices. We pair brands with regional influencers, local creators, and community figures — combining their on-ground presence with short-form content that carries your message into feeds and phone screens across the heartland.",
  },
  {
    slug: "festival-activation",
    title: "Festival Activation",
    icon: "Confetti",
    short: "Brand presence at jataras, festivals, and mega congregations.",
    description:
      "Festivals are rural India's biggest media moments. From Medaram Jatara — the world's largest tribal congregation — to seasonal festivals like Mango Fest and Ganesh Utsav, we build branded arches, LED billboards, stalls, and experience zones where millions gather with time to engage.",
  },
  {
    slug: "fabrication-digital-signage",
    title: "Fabrication & Digital Signage",
    icon: "Monitor",
    short: "In-house production of signage, kiosks, and branded structures.",
    description:
      "Our in-house fabrication unit produces the physical infrastructure of great campaigns: digital signage, LED installations, branded kiosks, stalls, arches, and custom structures. Owning production means faster turnarounds, tighter quality control, and better pricing for our clients.",
  },
  {
    slug: "theater-branding",
    title: "Theater Branding",
    icon: "FilmSlate",
    short: "Cinema advertising and theatre branding across the regions.",
    description:
      "Single screens and regional multiplexes remain one of the most attentive audiences in tier-2 and tier-3 India. We place brands on screen and around the venue — on-screen ads, standees, foyer branding, and seat-back placements — timed to blockbuster regional releases.",
  },
  {
    slug: "campus-activation",
    title: "Campus Activation",
    icon: "GraduationCap",
    short: "College fests, school programs, and youth-audience engagement.",
    description:
      "Campuses concentrate exactly the audience many brands struggle to reach — young, connected, and influential at home. We run college fest sponsorships, sampling drives, competitions, and ambassador programs across schools and colleges in Telangana and Andhra Pradesh.",
  },
  {
    slug: "events-dealer-meets",
    title: "Events & Dealer Meets",
    icon: "Microphone",
    short: "Dealer meets, award nights, and corporate events end-to-end.",
    description:
      "From dealer conferences and award nights at five-star venues to product launches and public-sector events, we handle the full stack: venue, staging, AV, branding, hospitality, and show flow — so the brand team can focus on their guests, not the logistics.",
  },
  {
    slug: "rural-sports",
    title: "Rural Sports & Runs",
    icon: "PersonSimpleRun",
    short: "Community runs and sporting events that rally whole towns.",
    description:
      "Mass-participation sports — 5K runs, kabaddi tournaments, cricket leagues — turn entire towns into brand experiences. We've organized community runs drawing thousands of participants, giving sponsors visibility that lasts far beyond race day.",
  },
  {
    slug: "experiential-marketing",
    title: "Experiential Marketing",
    icon: "Sparkle",
    short: "RWA activations, community carnivals, and live brand experiences.",
    description:
      "Inside gated communities and residential welfare associations (RWAs), we build brand experiences people can walk into — product demo zones, family carnivals, weekend markets, and engagement events that put brands in front of high-intent urban households in a trusted setting.",
  },
  {
    slug: "csr",
    title: "CSR Campaigns",
    icon: "HandHeart",
    short: "Purpose-led campaigns executed with community depth.",
    description:
      "We help brands execute CSR initiatives with the same on-ground rigor as our commercial campaigns — public awareness drives, health and education programs, and environmental initiatives, delivered through our deep network of rural and civic partnerships.",
  },
  {
    slug: "others",
    title: "Others",
    icon: "CirclesThreePlus",
    short: "Election campaigns, research, and everything in between.",
    description:
      "Some campaigns don't fit a neat box — election outreach, rural research, public-sector communication, and one-off special projects. If it needs on-ground execution at scale, we've probably done it, and if we haven't, we'll figure it out.",
  },
];

export type CaseStudy = {
  title: string;
  tag: string;
  years?: string;
  description: string;
  image?: string;
  placeholder?: boolean;
  category: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Medaram Jatara",
    tag: "Festival Activation",
    years: "2026",
    description:
      "On-ground brand presence at the world's largest tribal congregation — LED billboards, festival branding, and activations for UltraTech Cement, Swastik Masala, and more, reaching millions of pilgrims across Telangana.",
    image: "/images/work/medaram-jatara-1.jpg",
    category: "festival-activation",
  },
  {
    title: "Adani Cement",
    tag: "Building Branding",
    years: "2026",
    description:
      "Large-format building-wrap branding on an active high-rise construction site, putting Adani Cement directly in the sightline of thousands of daily commuters.",
    image: "/images/work/adani.jpg",
    category: "ooh-branding",
  },
  {
    title: "LG Electronics",
    tag: "RWA Activation",
    years: "2026",
    description:
      "Branded product showcases and demo kiosks inside gated residential communities across Hyderabad, putting LG's home appliances directly in front of high-intent buyers.",
    image: "/images/work/lg.jpg",
    category: "experiential-marketing",
  },
  {
    title: "Casagrand",
    tag: "Real Estate",
    years: "2026",
    description:
      "Promoter-led activations inside premium residential communities, showcasing Casagrand Sierra villas to qualified homebuyer audiences.",
    image: "/images/work/casagrand.jpg",
    category: "experiential-marketing",
  },
  {
    title: "BIG FM — Big Family Fest",
    tag: "Media & Events",
    years: "2026",
    description:
      "A branded community carnival inside residential complexes with live stage entertainment, games, and brand experiences for BIG FM's Big Family Fest Season 3.",
    image: "/images/work/bigfm.jpg",
    category: "experiential-marketing",
  },
  {
    title: "Allen Career Institute",
    tag: "Education",
    years: "2026",
    description:
      "Direct-to-resident engagement inside RWA communities across Hyderabad, introducing Allen's career-coaching programs to parents and students where they live.",
    image: "/images/work/allen.jpg",
    category: "experiential-marketing",
  },
  {
    title: "TVS Motor — Pan-India Mandi Activity",
    tag: "Mandi Activation",
    years: "2026",
    description:
      "Multi-state mandi (rural market) van campaigns across Maharashtra, Odisha, Chhattisgarh, Jharkhand, West Bengal, and Tamil Nadu — taking TVS two-wheelers directly to rural retail hubs.",
    placeholder: true,
    category: "haat-mela-mandi-activations",
  },
  {
    title: "TVS Raider — Influencer Campaign",
    tag: "Influencer Marketing",
    years: "2026",
    description:
      "An influencer-led activation for the TVS Raider, pairing on-ground vehicle display with creator content for wider reach.",
    placeholder: true,
    category: "rural-influencer-campaign",
  },
  {
    title: "TVS — Corporate Awards Event",
    tag: "Corporate Events",
    years: "2026",
    description:
      "End-to-end execution of TVS's PD Awards event at Taj Vivanta, recognizing top-performing dealer partners.",
    placeholder: true,
    category: "events-dealer-meets",
  },
  {
    title: "Vodafone",
    tag: "Telecom",
    years: "2026",
    description:
      "Mobile promotion vans, wall paintings, and cricket-themed retail branding for Vodafone across Hyderabad.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Syngenta",
    tag: "Agri Business",
    years: "2026",
    description:
      "Tata Ace van activations carrying Syngenta's crop-protection products directly into farming communities.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Tata BlueScope Steel — Auto Branding",
    tag: "Building Materials",
    years: "2026",
    description:
      "Large-scale vehicle branding across 500+ units for Tata BlueScope Steel, extending reach along construction supply routes.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "Muthoot Finance",
    tag: "Finance",
    years: "2026",
    description:
      "On-ground mobile promotion for Muthoot Finance's gold loan and financial services, reaching neighborhoods mass media misses.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Kaveri Seeds",
    tag: "Agri Business",
    years: "2026",
    description:
      "LED and standard mobile van activations promoting Kaveri Seeds' hybrid crop varieties across Telangana & Andhra Pradesh.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Nuziveedu Seeds",
    tag: "Agri Business",
    years: "2026",
    description:
      "LED van campaigns and digital wall installations spreading Nuziveedu Seeds' brand across rural retail points.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Crystal Crop",
    tag: "Agri Business",
    years: "2026",
    description:
      "Mobile van activity and digital wall branding introducing Crystal Crop's agri-input range to farming communities.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "FMC",
    tag: "Agri Business",
    years: "2026",
    description:
      "Multi-van mobile promotion for FMC's crop science portfolio across key agricultural belts.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "GRT",
    tag: "Jewellery & Retail",
    years: "2026",
    description:
      "Stall branding at T-Hub and festival activations for GRT, blending retail presence with cultural moments.",
    placeholder: true,
    category: "festival-activation",
  },
  {
    title: "Zee Telugu — Mango Fest",
    tag: "Media & Entertainment",
    years: "2026",
    description:
      "Brand presence for Zee Telugu at Mango Fest, a high-footfall seasonal consumer festival.",
    placeholder: true,
    category: "festival-activation",
  },
  {
    title: "Bosch — Mango Fest",
    tag: "Consumer Tech",
    years: "2026",
    description:
      "Mango Fest activation putting Bosch's consumer offerings in front of festival crowds.",
    placeholder: true,
    category: "festival-activation",
  },
  {
    title: "Freedom",
    tag: "FMCG",
    years: "2026",
    description:
      "Festival-scale brand presence for Freedom Refined Oil at Medaram Jatara and Mango Fest activations.",
    placeholder: true,
    category: "festival-activation",
  },
  {
    title: "CMR",
    tag: "Real Estate",
    years: "2026",
    description:
      "Promoter-led residential community activations for CMR across 30+ gated communities.",
    placeholder: true,
    category: "experiential-marketing",
  },
  {
    title: "BJP — Municipal Election Campaign",
    tag: "Public Affairs",
    years: "2026",
    description:
      "On-ground campaign support for municipal election outreach, including day-wise field activations.",
    placeholder: true,
    category: "others",
  },
  {
    title: "Zomato",
    tag: "Food Tech",
    years: "2026",
    description:
      "LED arch installations marking Zomato's presence at high-traffic public locations.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "LIC",
    tag: "Insurance",
    years: "2025",
    description:
      "Mobile promotion vans carrying LIC's life insurance messaging into residential and rural markets.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Skipper Metzer",
    tag: "Industrial",
    years: "2026",
    description:
      "Van-based brand activation for Skipper Metzer across Maharashtra.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Godavari 5K Run",
    tag: "Community Sports",
    years: "2014",
    description:
      "A mass-participation community run along the Godavari, rallying thousands of runners and giving sponsors visibility across the entire event footprint.",
    placeholder: true,
    category: "rural-sports",
  },
  {
    title: "Nellore 5K Run",
    tag: "Community Sports",
    description:
      "A city-wide 5K run in Nellore bringing together schools, colleges, and local institutions — community engagement at street level.",
    placeholder: true,
    category: "rural-sports",
  },
];

export const clients = [
  "UltraTech Cement",
  "Swastik",
  "Adani",
  "LG",
  "Casagrand",
  "BIG FM",
  "Allen",
  "TVS Motor",
  "Vodafone",
  "Syngenta",
  "Muthoot Finance",
  "Tata BlueScope Steel",
  "Kaveri Seeds",
  "Nuziveedu Seeds",
  "Crystal Crop",
  "FMC",
  "GRT",
  "CMR",
  "Zee Telugu",
  "Freedom",
  "Bosch",
];

export const stats = [
  { value: "20+", label: "Years in rural & regional marketing" },
  { value: "1000+", label: "Campaigns executed on ground" },
  { value: "2", label: "States covered: Telangana & Andhra Pradesh" },
  { value: "360°", label: "Full-funnel: on-ground to digital" },
];

export const taglines = [
  "Taking Your Brand To Hinterlands",
  "Add Wheels To Your Ads",
  "Innovative Concepts. Inventive Strategies.",
];
