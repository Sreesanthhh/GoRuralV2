/**
 * One-off: removes em-dashes from user-facing copy in src/data/content.ts.
 * Each replacement is written out in full rather than pattern-matched, so the
 * punctuation that replaces each dash is the one that actually reads best
 * (comma for an appositive, colon before a list, parentheses for an aside).
 */
import { promises as fs } from "node:fs";

const FILE = "src/data/content.ts";

const edits = [
  // Appositive / trailing clause -> comma
  [
    "our out-of-home work makes brands physically impossible to miss — executed end to end, with photographic proof of every unit.",
    "our out-of-home work makes brands physically impossible to miss. Every unit is executed end to end, with photographic proof.",
  ],
  [
    "local creators, and community figures — combining their on-ground presence",
    "local creators, and community figures, combining their on-ground presence",
  ],
  [
    "high-impact, cost-effective promotions — both on-screen and off-screen.",
    "high-impact, cost-effective promotions, both on-screen and off-screen.",
  ],
  [
    "Reach the next generation of consumers — where aspiration meets opportunity.",
    "Reach the next generation of consumers, where aspiration meets opportunity.",
  ],
  [
    "hospitality, and show flow — so the brand team can focus",
    "hospitality, and show flow, so the brand team can focus",
  ],
  [
    "West Bengal — covering the Raider, Radeon, Apache",
    "West Bengal. The fleet covers the Raider, Radeon, Apache",
  ],
  [
    "Telangana, Hyderabad and Andhra Pradesh — scaling from 5 vans",
    "Telangana, Hyderabad and Andhra Pradesh, scaling from 5 vans",
  ],
  [
    "including the NewGen product line — scaling to a 4-van deployment.",
    "including the NewGen product line, scaling to a 4-van deployment.",
  ],
  [
    "the most durable, lowest-cost-per-impression medium in rural markets.",
    "the most durable, lowest-cost-per-impression medium in rural markets.",
  ],
  [
    "wall-painting campaign — the most durable",
    "wall-painting campaign, the most durable",
  ],
  [
    "at Khairatabad Ganesh — one of Hyderabad's highest-footfall festival sites.",
    "at Khairatabad Ganesh, one of Hyderabad's highest-footfall festival sites.",
  ],
  [
    "Madhya Pradesh and Maharashtra — combining on-ground demonstration",
    "Madhya Pradesh and Maharashtra, combining on-ground demonstration",
  ],
  [
    "MTR and Lalith Jewellery — each with bespoke stalls",
    "MTR and Lalith Jewellery, each with bespoke stalls",
  ],
  [
    "most-visited festival sites — executed for Shriram Finance",
    "most-visited festival sites, executed for Shriram Finance",
  ],
  [
    "schools, colleges and local institutions — community engagement at street level.",
    "schools, colleges and local institutions, with community engagement at street level.",
  ],
  [
    "built around home pickle-making — a culturally rooted format",
    "built around home pickle-making, a culturally rooted format",
  ],
  [
    "public relations for KSMCA — our digital practice running continuously",
    "public relations for KSMCA, our digital practice running continuously",
  ],

  // Introducing a list -> colon
  [
    "brand experiences people can walk into — product demo zones",
    "brand experiences people can walk into: product demo zones",
  ],
  [
    "Some campaigns don't fit a neat box — election outreach",
    "Some campaigns don't fit a neat box: election outreach",
  ],
  [
    "plus Narasaraopet and Tadepalligudem outlets — Kukatpally",
    "plus Narasaraopet and Tadepalligudem outlets: Kukatpally",
  ],
  [
    "world's largest tribal congregation — LED billboards",
    "world's largest tribal congregation: LED billboards",
  ],
  [
    "idol supply and distribution programme — over 10,000 idols",
    "idol supply and distribution programme: over 10,000 idols",
  ],
  [
    "for Adani, MTR and KEI — stage, branding and on-ground engagement",
    "for Adani, MTR and KEI: stage, branding and on-ground engagement",
  ],
  [
    "display supply and operation — 12x8 and 14x8 rigs",
    "display supply and operation: 12x8 and 14x8 rigs",
  ],
  [
    "PD Awards night at Taj Vivanta — staging, AV, branding and hospitality",
    "PD Awards night at Taj Vivanta: staging, AV, branding and hospitality",
  ],
  [
    "campaign support across Andhra Pradesh — LED and L-shape van fleets",
    "campaign support across Andhra Pradesh: LED and L-shape van fleets",
  ],

  // Paired dashes -> parentheses, so the inner list stays unambiguous
  [
    "Mass-participation sports — 5K runs, kabaddi tournaments, cricket leagues — turn entire towns",
    "Mass-participation sports (5K runs, kabaddi tournaments, cricket leagues) turn entire towns",
  ],
  [
    "crop-protection portfolio — Incipio, Sarvam, Udaan, Simodis Cotton and Vestoria Pro — using branded",
    "crop-protection portfolio (Incipio, Sarvam, Udaan, Simodis Cotton and Vestoria Pro) using branded",
  ],
  [
    "across twelve states — Uttar Pradesh, Rajasthan, Haryana, Bihar, Odisha, Jharkhand, West Bengal, Chhattisgarh, Maharashtra, Madhya Pradesh, Tamil Nadu and AP/Telangana — with route plans",
    "across twelve states (Uttar Pradesh, Rajasthan, Haryana, Bihar, Odisha, Jharkhand, West Bengal, Chhattisgarh, Maharashtra, Madhya Pradesh, Tamil Nadu and AP/Telangana) with route plans",
  ],
  [
    "programme at Charminar — one of Hyderabad's highest-footfall landmarks — with periodic flex changes",
    "programme at Charminar, one of Hyderabad's highest-footfall landmarks, with periodic flex changes",
  ],

  // Label -> colon
  ["\"Innovations — Hut & Boat Branding\"", "\"Innovations: Hut & Boat Branding\""],
  ["// 7. THEATER BRANDING — awaiting case studies", "// 7. THEATER BRANDING: awaiting case studies"],

  // British spelling, to match the rest of the site
  ["grassroots trading centers", "grassroots trading centres"],
  ["Recognizing these vibrant marketplaces", "Recognising these vibrant marketplaces"],
  ["We've organized community runs", "We have organised community runs"],
  ["organizations", "organisations"],
  ["recognized", "recognised"],
];

const src = await fs.readFile(FILE, "utf8");
let out = src;
const missed = [];

for (const [from, to] of edits) {
  if (!out.includes(from)) {
    if (from !== to) missed.push(from.slice(0, 60));
    continue;
  }
  out = out.split(from).join(to);
}

await fs.writeFile(FILE, out);

const left = (out.match(/—/g) ?? []).length;
console.log(`Applied ${edits.length - missed.length} edits.`);
if (missed.length) {
  console.log("NOT FOUND (check these):");
  for (const m of missed) console.log("  " + m);
}
console.log(`Em-dashes remaining in ${FILE}: ${left}`);
