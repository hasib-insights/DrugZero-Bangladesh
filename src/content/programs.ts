/**
 * Programs — the organization's core focus areas.
 *
 * ── HOW TO EDIT ─────────────────────────────────────────────────────────
 * • Each entry becomes a card on /programs and its own detail page at
 *   /programs/<slug>. Keep slugs lowercase-with-dashes (slugs are URLs and
 *   are NOT translated).
 * • `icon` must be the name of a Lucide icon (https://lucide.dev/icons).
 * • `status` is free text, e.g. "Core program area" or "Pilot phase".
 * • Display text is bilingual: tx("English", "বাংলা").
 * • Only add facts (dates, locations, partners, numbers) that are real
 *   and verified. Ongoing activities linked to a program appear
 *   automatically on the program page once added in activities.ts.
 * ────────────────────────────────────────────────────────────────────────
 */
import { tx, type LText } from "@/lib/i18n";

export type Program = {
  slug: string;
  title: LText;
  /** One-sentence summary used on cards. */
  summary: LText;
  /** Longer description shown on the program detail page. */
  description: LText[];
  /** What the program focuses on (bullet list). */
  focus: LText[];
  /** Intended audiences. */
  audience: LText[];
  /** Plain-text status, e.g. "Core program area". */
  status: LText;
  /** Lucide icon name. */
  icon: string;
};

export const programs: Program[] = [
  {
    slug: "awareness-campaigns",
    title: tx("Drug Awareness Campaigns", "মাদক সচেতনতা প্রচারণা"),
    summary: tx(
      "Clear, honest public messaging about the risks of drug use — designed to reach young people where they live, study, and spend time online.",
      "মাদক ব্যবহারের ঝুঁকি নিয়ে পরিষ্কার ও সৎ জনসচেতনতামূলক বার্তা — যা তরুণদের কাছে পৌঁছায় সেখানেই, যেখানে তারা বাস করে, পড়াশোনা করে এবং অনলাইনে সময় কাটায়।"
    ),
    description: [
      tx(
        "Drug prevention starts with understanding. Our awareness campaigns aim to replace myths, stigma, and silence with accurate information about how drug use harms health, families, and futures — and where help and support can be found.",
        "মাদক প্রতিরোধ শুরু হয় বোঝাপড়া দিয়ে। আমাদের সচেতনতা প্রচারণার লক্ষ্য হলো কুসংস্কার, সামাজিক কলঙ্ক ও নীরবতার জায়গায় সঠিক তথ্য পৌঁছে দেওয়া — মাদক কীভাবে স্বাস্থ্য, পরিবার ও ভবিষ্যৎ নষ্ট করে, আর সাহায্য ও সমর্থন কোথায় পাওয়া যায়, তা নিয়ে।"
      ),
      tx(
        "Campaigns are designed to be respectful and non-judgmental. Rather than shock tactics, we focus on truthful information, empathy for those affected, and practical guidance that young people and their families can actually use.",
        "প্রচারণাগুলো শ্রদ্ধাশীল ও বিচারহীন দৃষ্টিভঙ্গি নিয়ে তৈরি। নাড়িয়ে দেওয়ার কৌশলের বদলে আমরা বিশ্বাস করি প্রকৃত তথ্য, আক্রান্তদের প্রতি সহমর্মিতা এবং তরুণ ও তাদের পরিবারের বাস্তবে কাজে লাগে এমন ব্যবহারিক পরামর্শকে।"
      ),
    ],
    focus: [
      tx("Public messaging on the risks and realities of drug use", "মাদক ব্যবহারের ঝুঁকি ও বাস্তবতা নিয়ে জনসচেতনতামূলক বার্তা"),
      tx("Campaigns in campuses, neighborhoods, and online spaces", "ক্যাম্পাস, পাড়া-মহল্লা ও অনলাইনে সচেতনতা প্রচারণা"),
      tx("Observance of national and international awareness days", "জাতীয় ও আন্তর্জাতিক সচেতনতা দিবস পালন"),
      tx("Materials that encourage early, honest conversations at home", "পরিবারে আগেভাগে খোলামেলা আলোচনার প্রেরণা জোগানো এমন উপকরণ"),
    ],
    audience: [
      tx("General public", "সাধারণ জনগণ"),
      tx("Students and young people", "শিক্ষার্থী ও তরুণরা"),
      tx("Families", "পরিবার"),
    ],
    status: tx("Core program area", "মূল প্রোগ্রাম ক্ষেত্র"),
    icon: "Megaphone",
  },
  {
    slug: "youth-engagement",
    title: tx("Youth Engagement", "তরুণদের সম্পৃক্ততা"),
    summary: tx(
      "Involving young people directly in prevention — as volunteers, peer educators, and voices of change in their own communities.",
      "প্রতিরোধ কাজে তরুণদের সরাসরি সম্পৃক্ত করা — স্বেচ্ছাসেবক, সহকর্মী-শিক্ষক এবং নিজেদের সমাজে পরিবর্তনের কণ্ঠস্বর হিসেবে।"
    ),
    description: [
      tx(
        "Young people are the most credible messengers for other young people. Our youth engagement work invites students and young adults to take an active role in prevention — organizing activities, sharing accurate information among their peers, and modeling healthy choices.",
        "তরুণদের কাছে সবচেয়ে বিশ্বাসযোগ্য বার্তাবাহক তরুণরা নিজেরাই। আমাদের তরুণ-সম্পৃক্ততা কার্যক্রম শিক্ষার্থী ও তরুণদের প্রতিরোধ কাজে সক্রিয় ভূমিকা নিতে আমন্ত্রণ জানায় — কার্যক্রম আয়োজন, সহপাঠীদের মাঝে সঠিক তথ্য ছড়িয়ে দেওয়া এবং সুস্থ পছন্দের দৃষ্টান্ত হয়ে ওঠা।"
      ),
      tx(
        "By participating, volunteers gain public-speaking, teamwork, and leadership experience while doing work that genuinely matters to their communities.",
        "অংশগ্রহণের মাধ্যমে স্বেচ্ছাসেবকরা জনসম্মুখে বক্তৃতা, দলগত কাজ ও নেতৃত্বের অভিজ্ঞতা অর্জন করেন — পাশাপাশি করেন এমন কাজ, যা তাদের সমাজের জন্য সত্যিকার অর্থেই গুরুত্বপূর্ণ।"
      ),
    ],
    focus: [
      tx("Volunteer opportunities for students and young adults", "শিক্ষার্থী ও তরুণদের জন্য স্বেচ্ছাসেবক সুযোগ"),
      tx("Peer-to-peer awareness activities", "সহকর্মীভিত্তিক সচেতনতা কার্যক্রম"),
      tx("Leadership and organizing experience for volunteers", "স্বেচ্ছাসেবকদের নেতৃত্ব ও আয়োজনের অভিজ্ঞতা"),
      tx("Positive alternatives: community, purpose, and healthy habits", "ইতিবাচক বিকল্প: সমাজ, উদ্দেশ্য ও সুস্থ অভ্যাস"),
    ],
    audience: [
      tx("Students", "শিক্ষার্থীরা"),
      tx("Young adults", "তরুণরা"),
      tx("Youth groups", "যুব সংগঠন"),
    ],
    status: tx("Core program area", "মূল প্রোগ্রাম ক্ষেত্র"),
    icon: "Users",
  },
  {
    slug: "educational-programs",
    title: tx("Educational Awareness Programs", "শিক্ষামূলক সচেতনতা কর্মসূচি"),
    summary: tx(
      "Structured awareness sessions and learning materials for schools, colleges, and community groups.",
      "স্কুল, কলেজ ও কমিউনিটি গোষ্ঠীর জন্য বিন্যস্ত সচেতনতা অধিবেশন ও শিক্ষা উপকরণ।"
    ),
    description: [
      tx(
        "Lasting prevention is built on education. Our educational programs bring structured sessions to classrooms and community spaces, covering what drugs are, how addiction develops, its consequences, and how to seek help.",
        "টেকসই প্রতিরোধের ভিত্তি শিক্ষা। আমাদের শিক্ষামূলক কর্মসূচি শ্রেণিকক্ষ ও কমিউনিটিতে নিয়ে যায় বিন্যস্ত অধিবেশন — যেখানে থাকে মাদক কী, আসক্তি কীভাবে গড়ে ওঠে, তার পরিণতি এবং সাহায্য চাওয়ার উপায়।"
      ),
      tx(
        "Sessions are designed to be age-appropriate and interactive — encouraging questions and open discussion rather than one-way lecturing.",
        "অধিবেশনগুলো বয়স-উপযোগী ও আন্তঃক্রিয়ামূলক — একমুখী বক্তৃতার বদলে প্রশ্ন করার ও মুক্ত আলোচনার সুযোগ নিশ্চিত করা হয়।"
      ),
    ],
    focus: [
      tx("Awareness sessions for schools, colleges, and institutions", "স্কুল, কলেজ ও প্রতিষ্ঠানে সচেতনতা অধিবেশন"),
      tx("Age-appropriate, interactive learning formats", "বয়স-উপযোগী ও আন্তঃক্রিয়ামূলক শেখার ফরম্যাট"),
      tx("Practical guidance on refusal, peer pressure, and seeking help", "\u2018না\u2019 বলা, সহকর্মীর চাপ মোকাবিলা ও সাহায্য চাওয়ার ব্যবহারিক দিকনির্দেশনা"),
      tx("Printable and digital educational materials", "প্রিন্টযোগ্য ও ডিজিটাল শিক্ষা উপকরণ"),
    ],
    audience: [
      tx("Schools", "স্কুলসমূহ"),
      tx("Colleges and universities", "কলেজ ও বিশ্ববিদ্যালয়"),
      tx("Community groups", "কমিউনিটি গোষ্ঠী"),
    ],
    status: tx("Core program area", "মূল প্রোগ্রাম ক্ষেত্র"),
    icon: "BookOpen",
  },
  {
    slug: "community-outreach",
    title: tx("Community Outreach", "কমিউনিটি আউটরিচ"),
    summary: tx(
      "Taking prevention beyond the classroom — into neighborhoods and public spaces — and connecting people with trustworthy information and support.",
      "প্রতিরোধ কাজ শ্রেণিকক্ষের বাইরে — পাড়া-মহল্লা ও জনসমাগমের স্থানে — নিয়ে যাওয়া, এবং মানুষকে বিশ্বাসযোগ্য তথ্য ও সমর্থনের সাথে যুক্ত করা।"
    ),
    description: [
      tx(
        "Drug prevention cannot succeed in isolation. Our community outreach work brings the conversation to where people already are: neighborhoods, local institutions, and public events.",
        "মাদক প্রতিরোধ একাকীত্বে সফল হয় না। আমাদের কমিউনিটি আউটরিচ কার্যক্রম আলোচনা পৌঁছে দেয় সেখানেই, যেখানে মানুষ আছে: পাড়া-মহল্লায়, স্থানীয় প্রতিষ্ঠানে ও জনসমাগমে।"
      ),
      tx(
        "Outreach also means listening. By working alongside community members, we aim to understand local concerns and connect individuals and families with reliable information and appropriate support services.",
        "আউটরিচ মানে শোনাও। স্থানীয় মানুষের পাশে কাজ করার মাধ্যমে আমরা এলাকার উদ্বেগগুলো বুঝতে চাই, এবং ব্যক্তি ও পরিবারকে যুক্ত করি নির্ভরযোগ্য তথ্য ও উপযুক্ত সহায়তা সেবার সাথে।"
      ),
    ],
    focus: [
      tx("Awareness activities in neighborhoods and public spaces", "পাড়া-মহল্লা ও জনসমাগমে সচেতনতা কার্যক্রম"),
      tx("Cooperation with local community organizations", "স্থানীয় কমিউনিটি সংগঠনের সাথে সহযোগিতা"),
      tx("Connecting individuals with trustworthy information and help", "ব্যক্তিদের বিশ্বাসযোগ্য তথ্য ও সাহায্যের সাথে যুক্ত করা"),
      tx("Reducing stigma so that asking for help feels safe", "কলঙ্ক কমিয়ে সাহায্য চাওয়াকে নিরাপদ অভিজ্ঞতা করে তোলা"),
    ],
    audience: [
      tx("Local communities", "স্থানীয় সমাজ"),
      tx("Parents and guardians", "বাবা-মা ও অভিভাবক"),
      tx("Community leaders", "সমাজনেতা"),
    ],
    status: tx("Core program area", "মূল প্রোগ্রাম ক্ষেত্র"),
    icon: "HeartHandshake",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
