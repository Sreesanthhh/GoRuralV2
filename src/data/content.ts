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
  /** Punchy tagline shown under the title on the category page. */
  tagline?: string;
  /** Intro paragraph shown on the category's own page. */
  description?: string;
  /** Checklist / bullet points (from the corporate profile). */
  points?: string[];
  /** Big red highlight stat line. */
  highlight?: string;
  /** Wide hero photograph for the category's own page. */
  image?: string;
  /** What the hero photograph actually shows, for alt text. */
  imageAlt?: string;
  /** Campaign the hero photograph came from, shown as a caption. */
  imageCredit?: string;
};

export const workCategories: WorkCategory[] = [
  {
    slug: "mobile-van-campaign",
    image: "/images/work/mobile-van-campaign.jpg",
    imageAlt:
      "A branded LED van screening crop content to a village crowd after dark",
    imageCredit: "Crystal Crop LED van campaign, Rajanna Sircilla, Telangana",
    title: "Mobile Van Campaign",
    icon: "Truck",
    short: "Branded LED & box vans that take your message door to door.",
    tagline: "Reach Out!",
    description:
      "Distance is never a barrier for us at GoRural India. From towns to the semi-urban localities, villages to the interior most landscapes; the uniquely tailored Mobile Van Promotions take your brand to the farthest corner on the map and deeper into the hearts of the rural populace.",
    points: [
      "140 High-End Digital LED Vans",
      "28 14ft & 17ft Canter Vans",
      "60 Tata Ace Vans",
      "100 Tri Cycles",
      "50 Scooters",
    ],
    highlight: "2,00,000 kms per month average campaign",
  },
  {
    slug: "haat-mela-mandi-activations",
    image: "/images/work/haat-mela-mandi.jpg",
    imageAlt:
      "A branded canopy and product stall drawing a crowd on market day",
    imageCredit: "TVS XL100 mandi activation, Tamil Nadu",
    title: "Haat, Mela & Mandi Activations",
    icon: "Storefront",
    short: "Rythu Bazaars, weekly haats, and mandi-day brand activations.",
    tagline: "Turning Rural Markets into Brand Powerhouses!",
    points: [
      "Rural India's mandis, haats, melas and special village trade days drive billions of rupees in annual commerce.",
      "These vibrant local markets represent high-impact touchpoints for brands to connect directly with consumers.",
      "Recognising these vibrant marketplaces as untapped economic hubs, GoRural India has designed a series of targeted initiatives to engage and empower these grassroots trading centres.",
    ],
  },
  {
    slug: "ooh-branding",
    image: "/images/work/ooh-branding.jpg",
    imageAlt:
      "A full-height painted brand campaign on a building wall above a Hyderabad street",
    imageCredit: "Wall and building branding, Hyderabad",
    title: "OOH Branding",
    icon: "Buildings",
    short: "Building wraps, hoardings, wall paintings, arches, and more.",
    description:
      "From high-rise building wraps to village wall paintings, our out-of-home work makes brands physically impossible to miss. Every unit is executed end to end, with photographic proof.",
    points: [
      "Hoardings",
      "Building Wraps",
      "Bus Shelters",
      "Digital Walls",
      "Police Umbrellas",
      "Wall Paintings",
      "Retail Store Branding",
      "Arch Branding",
      "Innovations: Hut & Boat Branding",
    ],
  },
  {
    slug: "rural-influencer-campaign",
    image: "/images/work/rural-influencer-campaign.jpg",
    imageAlt:
      "A regional creator in festival dress on a marigold-dressed set",
    imageCredit: "TVS Dasara influencer shoot, September 2025",
    title: "Rural Influencer Campaign",
    icon: "Megaphone",
    short: "Regional creators and local voices your audience actually trusts.",
    description:
      "In rural markets, trust travels through familiar voices. We pair brands with regional influencers, local creators, and community figures, combining their on-ground presence with short-form content that carries your message into feeds and phone screens across the heartland.",
  },
  {
    slug: "festival-activation",
    image: "/images/work/festival-activation.jpg",
    imageAlt:
      "A branded welcome arch spanning a crowded festival street",
    imageCredit: "Fortune branding at Khairatabad Ganesh, Hyderabad",
    title: "Festival Activation",
    icon: "Confetti",
    short: "Brand presence at jataras, festivals, and mega congregations.",
    tagline: "Where Culture Meets Branding Excellence",
    points: [
      "Rural festivals bring communities together, attracting thousands of devotees and visitors to a single location.",
      "These gatherings create excellent opportunities for branding, trade exhibitions, and promotional activities.",
      "Initiatives like water kiosks, first-aid centres, and help desks offer valuable CSR engagement while enhancing brand visibility.",
      "Prominent celebrations include Medaram Jatara, Ganesh Utsavam, and Bathukamma festivals.",
    ],
  },
  {
    slug: "fabrication-digital-signage",
    image: "/images/work/fabrication-digital-signage.jpg",
    imageAlt:
      "A lit LED arch fabricated over a store entrance at night",
    imageCredit: "KLM Fashion Dasara arches, Hyderabad",
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
    tagline: "Transforming Screen Time into Brand Time",
    points: [
      "Movies possess an unmatched ability to attract and engage mass audiences throughout the year.",
      "Through our strong partnerships with leading theatre networks across South India, GoRural India offers brands high-impact, cost-effective promotions, both on-screen and off-screen.",
      "A perfect blend of entertainment and brand visibility that delivers measurable results.",
    ],
  },
  {
    slug: "campus-activation",
    title: "Campus Activation",
    icon: "GraduationCap",
    short: "College fests, school programs, and youth-audience engagement.",
    tagline: "Where Brands Meet Tomorrow's Consumers",
    points: [
      "For brands aiming to engage young audiences, GoRural India is the perfect partner.",
      "With strong associations across 430 colleges in rural and semi-urban regions, we offer a ready-to-activate platform for youth-focused campaigns, events and brand experiences.",
      "Reach the next generation of consumers, where aspiration meets opportunity.",
    ],
    highlight: "430 colleges across rural & semi-urban India",
  },
  {
    slug: "events-dealer-meets",
    image: "/images/work/events-dealer-meets.jpg",
    imageAlt:
      "A dealer being felicitated on stage in front of a branded screen",
    imageCredit: "TVS PD Plan roll-out meet, Taj Vivanta, Hyderabad",
    title: "Events & Dealer Meets",
    icon: "Microphone",
    short: "Dealer meets, award nights, and corporate events end-to-end.",
    description:
      "From dealer conferences and award nights at five-star venues to product launches and public-sector events, we handle the full stack: venue, staging, AV, branding, hospitality, and show flow, so the brand team can focus on their guests, not the logistics.",
  },
  {
    slug: "rural-sports",
    image: "/images/work/rural-sports.jpg",
    imageAlt:
      "An LED van announcing a community run on a town high street",
    imageCredit: "Khammam She Teams Run, March 2022",
    title: "Rural Sports & Runs",
    icon: "PersonSimpleRun",
    short: "Community runs and sporting events that rally whole towns.",
    description:
      "Mass-participation sports (5K runs, kabaddi tournaments, cricket leagues) turn entire towns into brand experiences. We have organised community runs drawing thousands of participants, giving sponsors visibility that lasts far beyond race day.",
  },
  {
    slug: "experiential-marketing",
    image: "/images/work/experiential-marketing.jpg",
    imageAlt:
      "Branded canopies and display panels set up inside a residential community at night",
    imageCredit: "Residential community activation, Hyderabad",
    title: "Experiential Marketing",
    icon: "Sparkle",
    short: "RWA activations, community carnivals, and live brand experiences.",
    description:
      "Inside gated communities and residential welfare associations (RWAs), we build brand experiences people can walk into: product demo zones, family carnivals, weekend markets, and engagement events that put brands in front of high-intent urban households in a trusted setting.",
    points: [
      "In villages the same job is done by folk performance and interactive games, which hold a rural crowd in a way a hoarding cannot.",
      "We work with 120 folk art troupes across South India, from Puli Vesham and Burrakatha to Yakshagana and Ugadolu drum beats.",
      "The troupe carries the brand message inside the performance, so the audience stays for the show rather than tolerating an ad.",
    ],
    highlight: "120 folk art troupes across South India",
  },
  {
    slug: "csr",
    image: "/images/work/csr.jpg",
    imageAlt:
      "Officials flagging off a branded environment-day campaign vehicle",
    imageCredit: "SBI World Environment Day campaign, Hyderabad",
    title: "CSR Campaigns",
    icon: "HandHeart",
    short: "Purpose-led campaigns executed with community depth.",
    tagline: "A humane perspective!",
    points: [
      "GoRural India partners with brands to design and execute impactful CSR initiatives that strengthen both social value and brand equity.",
      "Our action-driven programs span environment, consumer welfare, employee engagement, and community development, helping organisations build a positive and responsible image.",
      "Notable initiatives include the Village Catalyst Model and the 'Save a Life' Tour, both recognised for creating meaningful social impact.",
    ],
  },
  {
    slug: "door-to-door-campaigns",
    title: "Door To Door Campaigns",
    icon: "House",
    short: "One-to-one selling and sampling, household by household.",
    tagline: "Branding at the doorstep!",
    points: [
      "In rural India, one-to-one communication still outperforms everything else for marketing and sales activity.",
      "We field trained promoters with the persuasive skill to turn a first doorstep conversation into a loyal customer.",
      "It works hardest running alongside a van campaign or a mandi activation, converting the awareness those create into trial.",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "ChartLineUp",
    short: "Search, social, content and paid media, measured end to end.",
    tagline: "Performance meets perception.",
    description:
      "The same audiences we reach on the ground are on a phone by evening. Our digital team runs the other half of the campaign: search, social, paid media and content, with reporting that ties spend to reach, engagement and conversions rather than impressions alone.",
    points: [
      "Social media marketing: strategy, content, publishing, paid social and influencer work",
      "Search engine optimisation, including local SEO",
      "Google Ads and PPC across search, display, video and shopping",
      "Content marketing: blogs, reels, video and creatives",
      "Branding and design: identity, brochures and digital creative",
      "Web development: responsive sites, landing pages and e-commerce",
      "Email and WhatsApp marketing with automation and analytics",
      "Video production, corporate reels and content strategy",
      "PR and celebrity management",
      "Monthly analytics and growth reporting",
    ],
  },
  {
    slug: "others",
    title: "Others",
    icon: "CirclesThreePlus",
    short: "Election campaigns, public-sector work, and everything between.",
    description:
      "Some campaigns don't fit a neat box: election outreach, rural research, public-sector communication, and one-off special projects. If it needs on-ground execution at scale, we've probably done it, and if we haven't, we'll figure it out.",
    points: [
      "Police and public-safety work, including FIT COP 2022 at the Telangana Police Command and Control Centre, Surakshana Dinotsavam and police vehicle rallies.",
      "Civic and state occasions: Telangana Formation Day, the Tiranga March marking seventy-five years of independence, and Khammam Sambaralu.",
      "Election outreach, rural research and special projects that need execution at scale on short notice.",
    ],
  },
];

/**
 * Folk performance is how a brand message actually travels in a village, and
 * the company's standing network of troupes is the least reproducible thing
 * it owns. Taken from the 2025 corporate profile.
 */
export const folkArts = {
  groups: 120,
  region: "South India",
  forms: [
    "Puli Vesham",
    "Burrakatha",
    "Dasakathia",
    "Palla Lavni",
    "Yakshagana",
    "Butta Bommalu",
    "Palle Sudhulu",
    "Ugadolu Drum Beats",
    "Mimicry",
    "Magic Shows",
  ],
};

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
  // ─────────────────────────────────────────────────────────────
  // 1. MOBILE VAN CAMPAIGN
  // ─────────────────────────────────────────────────────────────
  {
    title: "TVS Motor: Multi-State LED Van Programme",
    tag: "Mobile Van",
    years: "2024–2026",
    description:
      "A continuous multi-year LED and demo van programme for TVS Motor spanning Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Gujarat, Madhya Pradesh, Maharashtra, Uttar Pradesh, Bihar, Jharkhand, Odisha, Chhattisgarh and West Bengal. The fleet covers the Raider, Radeon, Apache, Star City, Sport, Jupiter and NTorq lines with LED screens, L-shape displays and demo units.",
    image: "/images/work/card-0.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Sangeetha Mobiles",
    tag: "Mobile Van",
    years: "2025–2026",
    description:
      "Multi-van retail campaigns across Telangana, Hyderabad and Andhra Pradesh, scaling from 5 vans over 20 days to a 10-van, 30-day deployment.",
    image: "/images/work/card-1.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Syngenta",
    tag: "Agri Business",
    years: "2024–2026",
    description:
      "Sustained van campaigns for Syngenta's crop-protection portfolio (Incipio, Sarvam, Udaan, Simodis Cotton and Vestoria Pro) using branded Tata Ace and LED vehicles across Andhra Pradesh and Telangana.",
    image: "/images/work/card-2.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Muthoot Finance",
    tag: "Finance",
    years: "2024–2026",
    description:
      "Rolling LED van campaigns for Muthoot's gold-loan and financial services across Gujarat, Karnataka and Tamil Nadu, scaling to a 4-van deployment.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Vodafone",
    tag: "Telecom",
    years: "2024–2026",
    description:
      "Mobile promotion vans, L-shape display vehicles and pond-vehicle activations for Vodafone across Andhra Pradesh, Telangana, Karnataka and Hyderabad.",
    image: "/images/work/card-4.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "FMC",
    tag: "Agri Business",
    years: "2024–2026",
    description:
      "Multi-van crop-science campaigns across Karimnagar, Jangaon and Peddapalli, including the NewGen product line, scaling to a 4-van deployment.",
    image: "/images/work/card-5.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Kaveri Seeds",
    tag: "Agri Business",
    years: "2026",
    description:
      "LED and standard mobile van activations promoting Kaveri's hybrid crop varieties across Telangana and Andhra Pradesh, tracked with daily route reporting.",
    image: "/images/work/card-6.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Nuziveedu Seeds",
    tag: "Agri Business",
    years: "2026",
    description:
      "LED van campaigns carrying Nuziveedu's seed portfolio directly to rural retail points and farming belts.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Crystal Crop",
    tag: "Agri Business",
    years: "2026",
    description:
      "Van campaigns for Crystal Crop's agri-input range, including a 60-day continuous LED van deployment.",
    image: "/images/work/card-8.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Shriram Bio Seeds",
    tag: "Agri Business",
    years: "2025–2026",
    description:
      "Three-van campaigns taking Shriram's bio-seed range into farming communities across the Telugu states.",
    image: "/images/work/card-9.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Ankur Seeds",
    tag: "Agri Business",
    years: "2025–2026",
    description:
      "Tata Ace and LED van activations introducing Ankur's seed varieties to rural retail networks.",
    image: "/images/work/card-10.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Coromandel",
    tag: "Agri Business",
    years: "2025–2026",
    description:
      "Van campaigns for Coromandel's agri-input portfolio, running as a continuation programme across multiple cycles.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Dhanuka Agritech",
    tag: "Agri Business",
    years: "2025",
    description:
      "Tata Ace van activations around Madanapalle, taking Dhanuka's crop-protection products to farming clusters.",
    image: "/images/work/card-12.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Max Seeds",
    tag: "Agri Business",
    years: "2026",
    description:
      "LED van campaign introducing Max Seeds' hybrid range across rural markets.",
    image: "/images/work/card-13.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Genomix",
    tag: "Agri Business",
    years: "2026",
    description:
      "Box van campaign carrying the Genomix agri portfolio into rural retail territories.",
    image: "/images/work/card-14.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Kubota",
    tag: "Agri Machinery",
    years: "2024",
    description:
      "Multi-state van campaign across Andhra Pradesh, Karnataka and Telangana promoting Kubota's farm machinery to agricultural buyers.",
    image: "/images/work/card-15.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Tata BlueScope Steel",
    tag: "Building Materials",
    years: "2026",
    description:
      "Van activity extending Tata BlueScope's reach along construction supply routes and dealer territories.",
    image: "/images/work/card-16.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Tata Rallis",
    tag: "Agri Business",
    years: "2026",
    description:
      "Van activity carrying Tata Rallis' agri-input range into farming communities.",
    image: "/images/work/card-17.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Astral Pipes",
    tag: "Building Materials",
    years: "2025",
    description:
      "Multi-month Tata Ace van campaign across Telangana, targeting plumbing and construction trade networks.",
    image: "/images/work/card-18.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Sagar Cement",
    tag: "Building Materials",
    years: "2025",
    description:
      "Rural van campaign blending product demonstration, folk-art engagement and dealer outreach across village and mandi touchpoints.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Skipper Metzer",
    tag: "Industrial",
    years: "2026",
    description:
      "Van-based brand activation across Maharashtra for Skipper Metzer's irrigation product line.",
    image: "/images/work/card-20.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "LIC",
    tag: "Insurance",
    years: "2025",
    description:
      "Mobile promotion vans carrying LIC's life-insurance messaging into residential and rural markets.",
    image: "/images/work/card-21.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Sensodyne (Impact)",
    tag: "FMCG",
    years: "2025–2026",
    description:
      "Continuation van campaign for Sensodyne, plus two-sided LED branding vehicles across Maharashtra.",
    image: "/images/work/card-22.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Royal Stag",
    tag: "Beverages",
    years: "2025",
    description:
      "Van campaign delivering Royal Stag's brand presence across target rural and semi-urban markets.",
    image: "/images/work/card-23.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Mobil Oil",
    tag: "Automotive",
    years: "2024",
    description:
      "L-shape canter van activation for Mobil's lubricant range, targeting mechanics and vehicle-owner clusters.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Skylar",
    tag: "Consumer",
    years: "2025",
    description:
      "Six-van, 14-foot canter campaign delivering large-format brand presence across target markets.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Hello Life",
    tag: "Healthcare",
    years: "2024",
    description:
      "Three-van LED campaign spanning Andhra Pradesh, Telangana and Odisha.",
    image: "/images/work/card-26.jpg",
    category: "mobile-van-campaign",
  },
  {
    title: "Cream Stone",
    tag: "F&B",
    years: "2025",
    description:
      "L-shape van activation building Cream Stone's presence across urban and semi-urban catchments.",
    placeholder: true,
    category: "mobile-van-campaign",
  },
  {
    title: "Axiom",
    tag: "Consumer",
    years: "2024",
    description:
      "T-shape van activity delivering high-visibility mobile branding across target routes.",
    placeholder: true,
    category: "mobile-van-campaign",
  },

  // ─────────────────────────────────────────────────────────────
  // 2. HAAT / MELA / MANDI ACTIVATIONS
  // ─────────────────────────────────────────────────────────────
  {
    title: "TVS Motor: Pan-India Mandi Programme",
    tag: "Mandi Activation",
    years: "2025–2026",
    description:
      "Our largest running programme: LED demo vans working the weekly mandi circuit across twelve states (Uttar Pradesh, Rajasthan, Haryana, Bihar, Odisha, Jharkhand, West Bengal, Chhattisgarh, Maharashtra, Madhya Pradesh, Tamil Nadu and AP/Telangana) with route plans built around each market's trading day and repeatedly extended on client request.",
    image: "/images/work/card-29.jpg",
    category: "haat-mela-mandi-activations",
  },
  {
    title: "TVS Sport: Mandi Mileage Challenge",
    tag: "Mandi Activation",
    years: "2026",
    description:
      "An interactive mileage-challenge format run from mandi vans across Jharkhand and Chhattisgarh, pairing product demonstration with hands-on test rides at market gatherings.",
    image: "/images/work/card-30.jpg",
    category: "haat-mela-mandi-activations",
  },
  {
    title: "TVS: Mega Loan Mela",
    tag: "Mandi Activation",
    years: "2024",
    description:
      "Finance-led mela activations across Hyderabad and Secunderabad, converting footfall into qualified two-wheeler loan enquiries.",
    image: "/images/work/card-31.jpg",
    category: "haat-mela-mandi-activations",
  },
  {
    title: "Chambal Fertilisers: PMKSK Retailer Arches",
    tag: "Agri Retail",
    years: "2025",
    description:
      "Retailer arch branding across PMKSK outlets in Andhra Pradesh and Telangana, marking Chambal's presence at the point of farmer purchase.",
    image: "/images/work/card-32.jpg",
    category: "haat-mela-mandi-activations",
  },

  // ─────────────────────────────────────────────────────────────
  // 3. OOH BRANDING
  // ─────────────────────────────────────────────────────────────
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
    title: "Freedom Refined Oil: Charminar Building Wraps",
    tag: "Building Branding",
    years: "2025–2026",
    description:
      "A rolling six-month building-wrap programme at Charminar, one of Hyderabad's highest-footfall landmarks, with periodic flex changes to keep creative fresh.",
    image: "/images/work/card-34.jpg",
    category: "ooh-branding",
  },
  {
    title: "TVS Motor: Building Wraps & Hoardings",
    tag: "OOH",
    years: "2024–2026",
    description:
      "Sustained out-of-home presence across Telangana and Andhra Pradesh: Charminar building wraps, 60+ hoardings, 50 new building sites, wall wraps, Dasara hoardings and Punjab digital walls.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "TVS Motor: Arch & Pandal Branding",
    tag: "OOH",
    years: "2024–2025",
    description:
      "2D and 3D arch installations across the AP region plus 100 festival pandal arches in Hyderabad, turning public gathering points into brand landmarks.",
    image: "/images/work/card-36.jpg",
    category: "ooh-branding",
  },
  {
    title: "TVS Motor: Bus Shelter Campaign",
    tag: "OOH",
    years: "2024",
    description:
      "Bus shelter branding across Hyderabad, capturing commuter attention at high-dwell-time transit points.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "Zomato: LED Arch Installations",
    tag: "OOH",
    years: "2026",
    description:
      "LED arch installations marking Zomato's presence at high-traffic public locations.",
    image: "/images/work/card-38.jpg",
    category: "ooh-branding",
  },
  {
    title: "Kalamandir / KLM: LED Arch Programme",
    tag: "OOH",
    years: "2024–2025",
    description:
      "LED arch fabrication and installation across KLM Shopping Mall and Dasara festival sites, delivered end to end from design to on-site build.",
    image: "/images/work/card-39.jpg",
    category: "ooh-branding",
  },
  {
    title: "GRT Jewellers: Retail Branding",
    tag: "Jewellery & Retail",
    years: "2025",
    description:
      "Store-front and in-shop branding across five Hyderabad stores plus Narasaraopet and Tadepalligudem outlets: Kukatpally, Chandanagar, Somajiguda, AS Rao Nagar and Nizamabad.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "Tata BlueScope Steel: Auto Branding",
    tag: "Transit Branding",
    years: "2026",
    description:
      "Vehicle branding across 500+ auto-rickshaws, turning everyday transit into a moving media network along construction supply routes.",
    image: "/images/work/card-41.jpg",
    category: "ooh-branding",
  },
  {
    title: "TVS NTorq: Auto Branding",
    tag: "Transit Branding",
    years: "2025",
    description:
      "500-unit auto-rickshaw branding campaign putting the NTorq in front of exactly the urban commuter audience it targets.",
    image: "/images/work/card-42.jpg",
    category: "ooh-branding",
  },
  {
    title: "Gemini TV: Building Wraps",
    tag: "Media",
    years: "2024",
    description:
      "Multi-month building-wrap campaign for Gemini TV across prime Hyderabad sites.",
    image: "/images/work/card-43.jpg",
    category: "ooh-branding",
  },
  {
    title: "Vodafone: Wall Painting",
    tag: "Rural OOH",
    years: "2026",
    description:
      "Village and roadside wall-painting campaign, the most durable, lowest-cost-per-impression medium in rural markets.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "Nuziveedu Seeds: Digital Walls",
    tag: "Rural OOH",
    years: "2025",
    description:
      "4x2 digital wall installations across rural retail points and village approach roads.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "Crystal Crop: Digital Walls",
    tag: "Rural OOH",
    years: "2026",
    description:
      "Digital wall branding placing Crystal Crop's range at farmer-facing retail touchpoints.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "Coromandel: Retail Board Network",
    tag: "Rural OOH",
    years: "2025",
    description:
      "Site recce, fabrication and installation of non-lit and backlit retail boards across the dealer network.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "Swiggy: Restaurant & Rider Branding",
    tag: "Food Tech",
    years: "2024",
    description:
      "Restaurant branding across partner outlets including Bawarchi, plus a rider T-shirt branding campaign turning the delivery fleet into moving media.",
    image: "/images/work/card-48.jpg",
    category: "ooh-branding",
  },
  {
    title: "CMR: Dasara LED Arch",
    tag: "Retail",
    years: "2024",
    description:
      "30-day LED arch fabrication and installation at CMR Patny for the Dasara retail season.",
    placeholder: true,
    category: "ooh-branding",
  },
  {
    title: "Casagrand: Khairatabad Ganesh LED Arch",
    tag: "Real Estate",
    years: "2026",
    description:
      "Single-side LED arch at Khairatabad Ganesh, one of Hyderabad's highest-footfall festival sites.",
    image: "/images/work/card-50.jpg",
    category: "ooh-branding",
  },
  {
    title: "aha: Khairatabad LED Arch Innovation",
    tag: "Media & OTT",
    years: "2024",
    description:
      "Custom LED arch innovation for the streaming platform aha at the Khairatabad festival site.",
    image: "/images/work/card-51.jpg",
    category: "ooh-branding",
  },
  {
    title: "Fortune: Hoardings",
    tag: "FMCG",
    years: "2024",
    description:
      "Hoarding campaign building Fortune's visibility across key Hyderabad corridors.",
    placeholder: true,
    category: "ooh-branding",
  },

  // ─────────────────────────────────────────────────────────────
  // 4. RURAL INFLUENCER CAMPAIGN
  // ─────────────────────────────────────────────────────────────
  {
    title: "TVS Raider: Influencer Campaign",
    tag: "Influencer Marketing",
    years: "2026",
    description:
      "An influencer-led activation for the TVS Raider, pairing on-ground vehicle display with regional creator content for amplified reach.",
    placeholder: true,
    category: "rural-influencer-campaign",
  },
  {
    title: "TVS: Dasara Influencer Shoot",
    tag: "Influencer Marketing",
    years: "2025",
    description:
      "A festival-season content shoot with regional influencers, building creative around Dasara for social distribution.",
    placeholder: true,
    category: "rural-influencer-campaign",
  },
  {
    title: "TVS: Mandi Influencer Integration",
    tag: "Influencer Marketing",
    years: "2026",
    description:
      "Regional influencers embedded into the mandi van circuit across Madhya Pradesh and Maharashtra, combining on-ground demonstration with creator-led social reach.",
    image: "/images/work/card-55.jpg",
    category: "rural-influencer-campaign",
  },
  {
    title: "TVS: Kurnool Showroom Launch",
    tag: "Influencer Marketing",
    years: "2026",
    description:
      "Influencer-driven launch campaign for a new TVS showroom in Kurnool, driving local footfall through trusted regional voices.",
    placeholder: true,
    category: "rural-influencer-campaign",
  },

  // ─────────────────────────────────────────────────────────────
  // 5. FESTIVAL ACTIVATION
  // ─────────────────────────────────────────────────────────────
  {
    title: "Medaram Jatara",
    tag: "Festival Activation",
    years: "2026",
    description:
      "On-ground brand presence at the world's largest tribal congregation: LED billboards, festival branding, and activations for UltraTech Cement, Swastik Masala, and more, reaching millions of pilgrims across Telangana.",
    image: "/images/work/medaram-jatara-1.jpg",
    category: "festival-activation",
  },
  {
    title: "Medaram Jatara: Multi-Brand Programme",
    tag: "Festival Activation",
    years: "2026",
    description:
      "The full sponsor roster we executed at Medaram: UltraTech Cement LED arches, Wipro, Swastik Masala, Tata BlueScope Steel, Freedom, Zee Telugu, MTR and Lalith Jewellery, each with bespoke stalls, arches and branded zones across the festival footprint.",
    image: "/images/work/card-58.jpg",
    category: "festival-activation",
  },
  {
    title: "Mango Fest: Multi-Brand RWA Programme",
    tag: "Festival Activation",
    years: "2025–2026",
    description:
      "A seasonal community festival franchise run across residential communities, with sponsor activations for LG, GRT Jewellers, Freedom, Swastik Mirchi, Skoda, Muthoot Group, TVS Motors, ACT Fibre, Porter, SV Saree House, Unacademy, Urban Rise, Casagrand, Bosch and Zee Telugu.",
    image: "/images/work/card-59.jpg",
    category: "festival-activation",
  },
  {
    title: "Ganesh Utsav: Eco Idol Programme",
    tag: "Festival Activation",
    years: "2024–2026",
    description:
      "A large-scale eco-friendly Ganesh idol supply and distribution programme: over 10,000 idols for UltraTech/Aditya Birla, Titan, MTR, Hindware, JSW Energy, Ramky, Kalamandir, Landvision, Axis Energy, Green Mark, Tridasa, CMR and Heritage, combining brand visibility with an environmental message.",
    image: "/images/work/card-60.jpg",
    category: "festival-activation",
  },
  {
    title: "Khairatabad Ganesh: Brand Branding",
    tag: "Festival Activation",
    years: "2024–2026",
    description:
      "Branding elements at Khairatabad Ganesh, one of India's most-visited festival sites, executed for Shriram Finance, MTR, Polycab, Big Basket and Heritage.",
    image: "/images/work/card-61.jpg",
    category: "festival-activation",
  },
  {
    title: "Dasara: Vijayawada Event Programme",
    tag: "Festival Activation",
    years: "2025",
    description:
      "Festival event execution at Vijayawada during Dasara for Adani, MTR and KEI: stage, branding and on-ground engagement across the celebration.",
    image: "/images/work/card-62.jpg",
    category: "festival-activation",
  },
  {
    title: "Fortune: Bonalu Event",
    tag: "Festival Activation",
    years: "2026",
    description:
      "Brand activation at Bonalu in Hyderabad, embedding Fortune into one of Telangana's most participatory local festivals.",
    image: "/images/work/card-63.jpg",
    category: "festival-activation",
  },
  {
    title: "JK Cement: Simhachalam Activation",
    tag: "Festival Activation",
    years: "2026",
    description:
      "Pilgrimage-site activation at Simhachalam, reaching devotee footfall with JK Cement's brand messaging.",
    image: "/images/work/card-64.jpg",
    category: "festival-activation",
  },
  {
    title: "CMR: Sankranti Decor",
    tag: "Festival Activation",
    years: "2024",
    description:
      "Sankranti festive decor and in-store theming at CMR Patny for the peak retail season.",
    image: "/images/work/card-65.jpg",
    category: "festival-activation",
  },

  // ─────────────────────────────────────────────────────────────
  // 6. FABRICATION & DIGITAL SIGNAGE
  // ─────────────────────────────────────────────────────────────
  {
    title: "Mahyco: ICRISAT Stall",
    tag: "Fabrication",
    years: "2026",
    description:
      "Custom exhibition stall design and fabrication for Mahyco at ICRISAT, built in-house end to end.",
    placeholder: true,
    category: "fabrication-digital-signage",
  },
  {
    title: "Shriram Seeds: ICRISAT Stall",
    tag: "Fabrication",
    years: "2026",
    description:
      "Exhibition stall fabrication for Shriram Seeds at ICRISAT, delivered on the same build cycle.",
    image: "/images/work/card-67.jpg",
    category: "fabrication-digital-signage",
  },
  {
    title: "Shriram Bio Seeds: Marigold Hotel Stall",
    tag: "Fabrication",
    years: "2025",
    description:
      "Conference stall fabrication and installation at Marigold Hotel for Shriram Bio Seeds.",
    image: "/images/work/card-68.jpg",
    category: "fabrication-digital-signage",
  },
  {
    title: "Syngenta: LED Display Supply",
    tag: "Digital Signage",
    years: "2025–2026",
    description:
      "Large-format LED display supply and operation: 12x8 and 14x8 rigs running 18–20 day cycles, including a 16-day Udaan deployment across Tamil Nadu.",
    image: "/images/work/card-69.jpg",
    category: "fabrication-digital-signage",
  },
  {
    title: "Nuziveedu Seeds: Spin Wheel Units",
    tag: "Fabrication",
    years: "2026",
    description:
      "Design and fabrication of five interactive spin-wheel engagement units for retail and event activation.",
    placeholder: true,
    category: "fabrication-digital-signage",
  },
  {
    title: "GRT: T-Hub Stall Branding",
    tag: "Fabrication",
    years: "2025",
    description:
      "Stall design and branding for GRT at T-Hub, Hyderabad's flagship innovation campus.",
    image: "/images/work/card-71.jpg",
    category: "fabrication-digital-signage",
  },
  {
    title: "Tricom: Leonia Resort Selfie Booth",
    tag: "Fabrication",
    years: "2026",
    description:
      "Custom selfie-booth build at Leonia Resort, designed for high-volume guest engagement and social sharing.",
    placeholder: true,
    category: "fabrication-digital-signage",
  },
  {
    title: "Skylar: Event Backdrop & Carpet",
    tag: "Fabrication",
    years: "2025",
    description:
      "Backdrop and red-carpet production for Skylar's brand event.",
    placeholder: true,
    category: "fabrication-digital-signage",
  },
  {
    title: "Freedom: Vehicle Fabrication",
    tag: "Fabrication",
    years: "2024–2026",
    description:
      "Custom vehicle fabrication and branding builds for Freedom's promotional fleet.",
    image: "/images/work/card-74.jpg",
    category: "fabrication-digital-signage",
  },

  // ─────────────────────────────────────────────────────────────
  // 7. THEATER BRANDING: awaiting case studies
  // ─────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────
  // 8. CAMPUS ACTIVATION
  // ─────────────────────────────────────────────────────────────
  {
    title: "JNTU: Campus Sponsorship",
    tag: "Campus Activation",
    years: "2024",
    description:
      "Campus sponsorship and on-ground presence at JNTU, engaging a concentrated student audience.",
    placeholder: true,
    category: "campus-activation",
  },

  // ─────────────────────────────────────────────────────────────
  // 9. EVENTS & DEALER MEETS
  // ─────────────────────────────────────────────────────────────
  {
    title: "TVS Motor: PD Awards, Taj Vivanta",
    tag: "Corporate Events",
    years: "2026",
    description:
      "End-to-end execution of TVS's PD Awards night at Taj Vivanta: staging, AV, branding and hospitality for the dealer partner network.",
    image: "/images/work/card-76.jpg",
    category: "events-dealer-meets",
  },
  {
    title: "TVS Motor: Pragathi Resorts Event",
    tag: "Corporate Events",
    years: "2026",
    description:
      "Full event production at Pragathi Resorts for TVS's partner and channel programme.",
    image: "/images/work/card-77.jpg",
    category: "events-dealer-meets",
  },
  {
    title: "TVS Motor: 3-Wheeler Chirala Launch",
    tag: "Corporate Events",
    years: "2026",
    description:
      "Product launch event at Chirala for the TVS three-wheeler range, targeting commercial-vehicle buyers.",
    image: "/images/work/card-78.jpg",
    category: "events-dealer-meets",
  },
  {
    title: "Astral Pipes: Dealer Meets",
    tag: "Dealer Meets",
    years: "2025",
    description:
      "Back-to-back dealer conferences at Vijayawada and Visakhapatnam, covering venue, staging, branding and delegate management.",
    image: "/images/work/card-79.jpg",
    category: "events-dealer-meets",
  },
  {
    title: "Priya Gold: Dealers Meet",
    tag: "Dealer Meets",
    years: "2024",
    description:
      "Dealer meet execution at Aditya Park, Hyderabad for Priya Gold's channel network.",
    placeholder: true,
    category: "events-dealer-meets",
  },
  {
    title: "Vodafone: Awards & Recognition Programme",
    tag: "Corporate Events",
    years: "2026",
    description:
      "Design and supply of certificates, medals and mementoes for Vodafone's partner recognition programme.",
    placeholder: true,
    category: "events-dealer-meets",
  },

  // ─────────────────────────────────────────────────────────────
  // 10. RURAL SPORTS & RUNS
  // ─────────────────────────────────────────────────────────────
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
      "A city-wide 5K run in Nellore bringing together schools, colleges and local institutions, with community engagement at street level.",
    placeholder: true,
    category: "rural-sports",
  },
  {
    title: "Vodafone: Cricket Activation",
    tag: "Sports Marketing",
    years: "2026",
    description:
      "Cricket-themed retail activations with green mat and stumps set-ups at Madhapur and Secunderabad stores, turning store forecourts into play zones.",
    image: "/images/work/card-84.jpg",
    category: "rural-sports",
  },

  // ─────────────────────────────────────────────────────────────
  // 11. EXPERIENTIAL MARKETING (RWA & community)
  // ─────────────────────────────────────────────────────────────
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
    title: "BIG FM: Big Family Fest",
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
    title: "TVS Motor: RWA & Test Ride Programme",
    tag: "RWA Activation",
    years: "2024–2026",
    description:
      "A continuous residential-community programme: Jupiter and Raider RWA activations, gazebo set-ups across Karnataka, and test-ride drives in Hyderabad, Vijayawada, Visakhapatnam, Nizamabad, Khammam, Karimnagar, Tumkur, Warangal, Tamil Nadu, Maharashtra and Odisha.",
    image: "/images/work/card-89.jpg",
    category: "experiential-marketing",
  },
  {
    title: "CMR",
    tag: "Retail",
    years: "2026",
    description:
      "Promoter-led residential community activations for CMR across 30+ gated communities.",
    image: "/images/work/card-90.jpg",
    category: "experiential-marketing",
  },
  {
    title: "Tanishq",
    tag: "Jewellery",
    years: "2026",
    description:
      "RWA activations paired with a seven-day Tata Ace van campaign, reaching affluent residential catchments.",
    image: "/images/work/card-91.jpg",
    category: "experiential-marketing",
  },
  {
    title: "Mahindra",
    tag: "Automotive",
    years: "2026",
    description:
      "Residential community activation putting Mahindra vehicles in front of family buyers at home.",
    image: "/images/work/card-92.jpg",
    category: "experiential-marketing",
  },
  {
    title: "Hyundai",
    tag: "Automotive",
    years: "2026",
    description:
      "RWA activation programme showcasing the Hyundai range inside gated communities.",
    placeholder: true,
    category: "experiential-marketing",
  },
  {
    title: "Citroën",
    tag: "Automotive",
    years: "2026",
    description:
      "Community-level brand experience for Citroën, targeting first-time and upgrade car buyers.",
    placeholder: true,
    category: "experiential-marketing",
  },
  {
    title: "Škoda",
    tag: "Automotive",
    years: "2026",
    description:
      "RWA activation for Škoda run alongside the Mango Fest community programme.",
    image: "/images/work/card-95.jpg",
    category: "experiential-marketing",
  },
  {
    title: "GRT Jewellers: RWA Activation",
    tag: "Jewellery",
    years: "2026",
    description:
      "Residential community activations bringing GRT's collections directly to household audiences.",
    placeholder: true,
    category: "experiential-marketing",
  },
  {
    title: "MTR Foods",
    tag: "FMCG",
    years: "2026",
    description:
      "RWA sampling and engagement programme for MTR's food range.",
    image: "/images/work/card-97.jpg",
    category: "experiential-marketing",
  },
  {
    title: "BIG FM: Big Pickle Mix",
    tag: "Media & Events",
    years: "2026",
    description:
      "A seasonal community activation built around home pickle-making, a culturally rooted format that drew families into the brand experience.",
    image: "/images/work/card-98.jpg",
    category: "experiential-marketing",
  },
  {
    title: "Coca-Cola: Apartment Activity",
    tag: "Beverages",
    years: "2024",
    description:
      "Apartment-complex sampling and engagement programme for Coca-Cola across Hyderabad residential clusters.",
    placeholder: true,
    category: "experiential-marketing",
  },
  {
    title: "Unacademy",
    tag: "Education",
    years: "2026",
    description:
      "RWA activation introducing Unacademy's programmes to parents inside residential communities.",
    image: "/images/work/card-100.jpg",
    category: "experiential-marketing",
  },
  {
    title: "Kedia Rice",
    tag: "FMCG",
    years: "2025",
    description:
      "Residential community sampling and engagement for Kedia's rice portfolio.",
    placeholder: true,
    category: "experiential-marketing",
  },
  {
    title: "ACT Fibernet",
    tag: "Telecom",
    years: "2025",
    description:
      "RWA activation driving broadband sign-ups directly inside target residential communities.",
    image: "/images/work/card-102.jpg",
    category: "experiential-marketing",
  },
  {
    title: "Porter",
    tag: "Logistics",
    years: "2025",
    description:
      "Community activation introducing Porter's on-demand logistics service to household users.",
    placeholder: true,
    category: "experiential-marketing",
  },
  {
    title: "Urban Rise",
    tag: "Real Estate",
    years: "2026",
    description:
      "Residential community programme showcasing Urban Rise developments to prospective buyers.",
    placeholder: true,
    category: "experiential-marketing",
  },
  {
    title: "Sampangi Infra",
    tag: "Real Estate",
    years: "2025",
    description:
      "RWA activation programme for Sampangi Infra's residential projects.",
    image: "/images/work/card-105.jpg",
    category: "experiential-marketing",
  },
  {
    title: "TDH",
    tag: "Consumer",
    years: "2025",
    description:
      "Residential community activation programme for TDH.",
    image: "/images/work/card-106.jpg",
    category: "experiential-marketing",
  },

  // ─────────────────────────────────────────────────────────────
  // 12. CSR CAMPAIGNS
  // ─────────────────────────────────────────────────────────────
  {
    title: "RE Sustainability / Ramky: Eco Ganesh Drive",
    tag: "CSR",
    years: "2024",
    description:
      "Eco-friendly Ganesh idol distribution across Kapra and surrounding wards, pairing environmental messaging with community participation.",
    image: "/images/work/card-107.jpg",
    category: "csr",
  },
  {
    title: "BIG FM & SBI: Plants Donation Campaign",
    tag: "CSR",
    years: "2026",
    description:
      "A green CSR campaign with BIG FM and SBI distributing saplings through community touchpoints.",
    image: "/images/work/card-108.jpg",
    category: "csr",
  },
  {
    title: "UPL: Plantation Drive",
    tag: "CSR",
    years: "2026",
    description:
      "Sapling supply and plantation programme supporting UPL's environmental commitments.",
    placeholder: true,
    category: "csr",
  },

  // ─────────────────────────────────────────────────────────────
  // 13. OTHERS
  // ─────────────────────────────────────────────────────────────
  {
    title: "AP Assembly & Lok Sabha Elections",
    tag: "Public Affairs",
    years: "2024",
    description:
      "Large-scale multi-constituency campaign support across Andhra Pradesh: LED and L-shape van fleets, 3D vehicles and on-ground field teams deployed for candidates and party units across Anantapur, Ongole, Guntur, Amalapuram, Gudivada, Tuni, Prakasam and more.",
    image: "/images/work/card-110.jpg",
    category: "others",
  },
  {
    title: "Telangana Election Campaigns",
    tag: "Public Affairs",
    years: "2023–2024",
    description:
      "Constituency-level campaign execution across Telangana including BJP MP election work, Zaheerabad and Nizamabad campaigns, and hoarding programmes.",
    image: "/images/work/card-111.jpg",
    category: "others",
  },
  {
    title: "Maharashtra Assembly Elections",
    tag: "Public Affairs",
    years: "2024",
    description:
      "Campaign support for candidates in the Maharashtra assembly elections, extending our election capability beyond the Telugu states.",
    image: "/images/work/card-112.jpg",
    category: "others",
  },
  {
    title: "BJP: Municipal Election Campaign",
    tag: "Public Affairs",
    years: "2026",
    description:
      "On-ground campaign support for municipal election outreach, including day-wise field activations.",
    image: "/images/work/card-113.jpg",
    category: "others",
  },
  {
    title: "KSMCA: Social Media & PR",
    tag: "Digital",
    years: "2025–2026",
    description:
      "An ongoing monthly retainer handling social media management and public relations for KSMCA, our digital practice running continuously alongside the on-ground work.",
    placeholder: true,
    category: "others",
  },
  {
    title: "Syngenta: Field Manpower Supply",
    tag: "Manpower",
    years: "2025",
    description:
      "Trained field manpower deployed across Syngenta's Andhra Pradesh division to support on-ground sales and demonstration activity.",
    placeholder: true,
    category: "others",
  },
  {
    title: "APSRTC: District Programme",
    tag: "Transit",
    years: "2023",
    description:
      "District-level transit branding programme delivered across the APSRTC network.",
    placeholder: true,
    category: "others",
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
