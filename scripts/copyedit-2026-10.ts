/**
 * Copyedit pass — October 2026.
 *
 * Writes the new copy as DRAFTS. Nothing goes live until you review and press
 * Publish on each document in the dashboard (/studio). Fields not listed here
 * (logos, portrait, CV, links you've set, etc.) are left exactly as they are.
 *
 * Run:  npx sanity exec scripts/copyedit-2026-10.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-10-01" });

let n = 0;
const key = () => `ce${(n++).toString(36).padStart(4, "0")}`;

type Span = string | { text: string; href?: string; em?: boolean };
function block(...spans: Span[]) {
  const markDefs: { _type: "link"; _key: string; href: string }[] = [];
  const children = spans.map((s) => {
    if (typeof s === "string") return { _type: "span", _key: key(), text: s, marks: [] as string[] };
    const marks: string[] = [];
    if (s.href) {
      const k = key();
      markDefs.push({ _type: "link", _key: k, href: s.href });
      marks.push(k);
    }
    if (s.em) marks.push("em");
    return { _type: "span", _key: key(), text: s.text, marks };
  });
  return { _type: "block", _key: key(), style: "normal", markDefs, children };
}

// ---------------------------------------------------------------------------
// The copy
// ---------------------------------------------------------------------------

const edits: Record<string, Record<string, unknown>> = {
  siteSettings: {
    seoDescription:
      "Sebastian Rodriguez is a researcher and software engineer who studies how technology shapes people and power — and uses that understanding to build AI and education tools responsibly.",
  },

  homePage: {
    headline: "I study how technology shapes people and power, and use what I learn to build it responsibly.",
    intro: [
      block(
        "I’m a software engineer and researcher at metaLAB (at) Harvard, where I lead engineering on the AI Pedagogy Project — an open resource that has reached more than 200,000 people in 167 countries. I also work with the Data Nutrition Project on tools for understanding the datasets behind AI systems.",
      ),
      block(
        "I came to engineering through the social sciences. Studying information at the University of Toronto and the social science of the internet at Oxford, I researched surveillance, disinformation, and how institutions use technology to exercise power. That work taught me to ask who a system serves, who it leaves out, and what could go wrong — questions I now bring to everything I build, in research and in industry.",
      ),
    ],
    facts: [
      { _key: "k0009", _type: "factColumn", heading: "Currently", lines: ["metaLAB (at) Harvard", "AI Pedagogy Project", "Data Nutrition Project"] },
      {
        _key: "k0010",
        _type: "factColumn",
        heading: "Focus",
        lines: ["Responsible AI, AI in education, human–computer interaction, surveillance, and disinformation"],
      },
      { _key: "k0011", _type: "factColumn", heading: "Education", lines: ["MSc, University of Oxford", "BI, University of Toronto"] },
    ],
    allWorkLabel: "All work, including research and teaching",
  },

  aboutPage: {
    lede: "I’m a researcher and engineer working on the social, political, and ethical dimensions of AI — and on building technology that holds up to that scrutiny.",
    body: [
      block(
        "At metaLAB (at) Harvard, I lead engineering on the ",
        { text: "AI Pedagogy Project", href: "/work" },
        ", building open tools that help educators understand generative AI and teach with it thoughtfully. I also work with the Data Nutrition Project, which develops ways to document and assess the datasets that AI systems are built on.",
      ),
      block(
        "My path into engineering ran through research. At the University of Toronto’s Faculty of Information, I studied how information systems are designed and governed, and published a review of U.S. mass surveillance law. At the Oxford Internet Institute, my MSc thesis examined how activists use physical and digital design to resist AI-driven policing. Along the way, research on state disinformation campaigns and a summer at Harvard’s Berkman Klein Center showed me how quickly well-intended technology can be turned to other ends.",
      ),
      block(
        "That background shapes how I build. I start by asking who a tool is for, who it might harm, and what it should never do — then I make it open, accessible, and maintainable. It’s the same discipline whether I’m writing a paper, designing a course, or shipping software, and it’s what I bring to teams in both universities and industry.",
      ),
    ],
  },

  workPage: {
    headline: "Tools I’ve built, research I’ve published, and courses I’ve helped teach.",
  },

  contactPage: {
    heading: "Open to engineering roles and research collaborations.",
    intro:
      "I bring a researcher’s questions and an engineer’s toolkit to teams building technology people can trust — in universities, nonprofits, and industry. I’m open to full-time roles, research partnerships, and select contract work.",
    services: [
      {
        _key: "k0046",
        _type: "service",
        title: "Research engineering",
        description: "Turning research questions and frameworks into working tools, platforms, and prototypes for labs and research teams.",
      },
      {
        _key: "k0047",
        _type: "service",
        title: "Web & product development",
        description:
          "Accessible, maintainable websites and applications built with React, Next.js, WordPress, and headless CMSs — from AI-powered tools to sites that tell a project’s human story.",
      },
      {
        _key: "k0048",
        _type: "service",
        title: "Responsible AI & education",
        description: "Research, curriculum, and resources that help educators, students, and organizations use AI thoughtfully.",
      },
    ],
    organizationsHeading: "Where I’ve worked, studied, and done research",
  },

  // ----- Work items -----

  "work-aipp": {
    summary: "Open assignments and hands-on guides that help educators teach with — and about — generative AI.",
    description:
      "An open educational resource that helps educators engage critically and creatively with generative AI. It pairs a curated library of classroom assignments, contributed by educators around the world, with interactive guides: an introduction to how large language models work, a tool for comparing responses across models, and a configurator that shows how settings like temperature and system prompts change an answer. Since launching in 2023, it has reached more than 200,000 people in 167 countries.",
  },

  "work-flip": {
    summary: "Open resources that help students treat failure as part of learning, and help instructors support them.",
    description:
      "An open resource on failure in higher education, grounded in research that treats struggle as a normal part of learning — with particular attention to first-generation, international, Indigenous, and racialized students. The site brings together in-class activities, syllabus templates, publications, and podcasts, alongside an annotated bibliography and a glossary of key terms.",
  },

  "work-reflect": {
    summary: "An interactive tool that turns a national teaching framework into a guided self-assessment for educators.",
    description:
      "An interactive visualization tool that helps post-secondary educators reflect on their practice. It turns a teaching and learning framework developed by the 3M National Teaching Fellows into a guided self-assessment, pairing each dimension with reflective questions and charting the results so instructors can see where they want to grow.",
  },

  "work-beyond-disinfo": {
    summary: "How states use fake personas, covert news sites, and hidden social networks to shape public opinion.",
    description:
      "An international research project on how hybrid and neo-authoritarian states use digital communication to shape opinion at home and abroad. I contributed comparative case studies of state-run influence campaigns — networks of fake social media personas, covert news websites, and a clandestine SMS-based social network — to a policy report on how identity narratives, lawfare, and marketcraft work together.",
    link: { _type: "link", label: "Read the report", href: "https://hdl.handle.net/1807/142554" },
  },

  "work-us-surveillance": {
    summary: "The laws, programs, and court cases behind U.S. mass surveillance, and why oversight has struggled to keep up.",
    description:
      "A review of the laws, programs, and court cases that enable mass surveillance in the United States, how oversight has struggled to keep pace, and the role encryption can play in protecting privacy.",
    link: { _type: "link", label: "Read the article", href: "https://ideah.pubpub.org/pub/v9cnwi34" },
  },

  "work-sage-ai": {
    description:
      "A self-paced, non-technical course for anyone new to AI. It covers where AI already shows up in daily life, when generative AI is the right tool, how to check its outputs for bias, errors, and hallucinations, and the social, environmental, and labor costs behind the technology — along with how people and communities can shape where it goes next.",
    link: {
      _type: "link",
      label: "View course",
      href: "https://learningresources.sagepub.com/campus/courses/information-literacy/introduction-to-artificial-intelligence",
    },
  },

  "work-ocean-ai": {
    description:
      "A four-day January-term design course at Harvard. Students learn about challenges facing the ocean, from coral loss to overfishing, use generative AI tools for creative ideation, and develop prototype interventions — while weighing the environmental costs of both ocean degradation and AI itself.",
    link: { _type: "link", label: "Course site", href: "https://oceans.aipedagogy.org/" },
  },
};

// ---------------------------------------------------------------------------

async function run() {
  for (const [id, set] of Object.entries(edits)) {
    const draftId = `drafts.${id}`;
    // Build on an existing draft if you have unpublished edits, so they're kept
    const base =
      (await client.getDocument(draftId)) ?? (await client.getDocument(id));
    if (!base) {
      console.warn(`skip ${id}: not found`);
      continue;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _rev, _updatedAt, _createdAt, ...rest } = base;
    await client.createOrReplace({ ...rest, ...set, _id: draftId });
    console.log(`draft ready: ${id}`);
  }
  console.log("\nDone. Open /studio, review each document (the changes are highlighted), then Publish.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
