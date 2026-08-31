export type WorkItem = {
  slug: string;
  index: string;
  title: string;
  status: "Active" | "Public" | "Lab";
  year: string;
  stack: string[];
  summary: string;
  blurb: string;
  href?: string;
  problem: string;
  approach: string;
  outcome: string;
  notes: string[];
};

export type NoteItem = {
  slug: string;
  index: string;
  title: string;
  date: string;
  reading: string;
  dek: string;
  body: string[];
};

export const work: WorkItem[] = [
  {
    slug: "axiom",
    index: "01",
    title: "Axiom",
    status: "Active",
    year: "2025",
    stack: ["Python", "DNS", "WHOIS", "HTTP probing"],
    summary:
      "A local-first infrastructure reconnaissance platform. It maps hosts, records, and services into structured reports you actually own.",
    blurb: "Recon that prepares data for intelligence — not another raw scan dump.",
    href: "https://github.com/gh0st359/axiom",
    problem:
      "Most reconnaissance tools stop at a pile of ports, banners, and subdomains. The data is useful for about ten minutes, then it becomes another text file you cannot query, correlate, or hand to an analyst without more work.",
    approach:
      "Axiom runs entirely on your machine. It performs DNS enumeration, WHOIS lookup, subdomain discovery, port scanning with banners, and HTTP/HTTPS probing, then writes structured reports under your control. No paid APIs. No cloud telemetry. Version 2.0 is deliberately the foundation layer: collection and organization before scoring and enrichment.",
    outcome:
      "A private, repeatable recon workflow that turns a target into linked findings instead of a wall of stdout. The roadmap is explicit: threat enrichment and risk scoring next, then correlation and SIEM/SOAR-shaped interfaces later.",
    notes: [
      "Local-first by design — the report lives with you",
      "Structured output meant to be parsed, not just read",
      "Built to grow from recon into operational intelligence",
    ],
  },
  {
    slug: "tyraxes",
    index: "02",
    title: "Tyraxes",
    status: "Public",
    year: "2026",
    stack: ["Rust", "TUI", "local models", "ACP"],
    summary:
      "A fullscreen terminal agent for authorized security work. Plans, executes, and reports — interactively or headless.",
    blurb: "An operator harness: specialists, methodology skills, and a workspace you can audit.",
    href: "https://github.com/gh0st359/tyraxes-",
    problem:
      "Language models are easy to wrap in a chat box and hard to keep useful on long, scoped security engagements. They loop, they drift, and they forget the rules of engagement the moment the context window gets crowded.",
    approach:
      "Tyraxes is a fullscreen, mouse-interactive TUI with a dedicated red-team harness for authorized labs and engagements. Specialist paths cover recon, vulnerability triage, and reporting. Provider presets include local runtimes so the loop can stay on your machine. Scope, attack graph, findings, and artifacts live in a workspace you can inspect.",
    outcome:
      "A harness that treats the model as an operator behind controls — not a chatbot with extra tools. Interactive for engagements, headless for scripting, and embeddable in editors through the Agent Client Protocol.",
    notes: [
      "Authorized-use framing: scoped labs and engagements only",
      "Works with local models as a first-class path",
      "Workspace artifacts stay reviewable after the session",
    ],
  },
  {
    slug: "xmcp",
    index: "03",
    title: "xmcp",
    status: "Public",
    year: "2026",
    stack: ["Python", "FastMCP", "X API"],
    summary:
      "A local MCP server that turns the X API into tools an agent can actually call.",
    blurb: "Agent infrastructure: OpenAPI in, constrained tools out.",
    href: "https://github.com/gh0st359/xmcp",
    problem:
      "Agents are only as useful as the tools you give them. Dumping an entire public API into a model is noisy, risky, and hard to reason about. You want a local server, an explicit allowlist, and credentials that never leave your machine.",
    approach:
      "xmcp loads the X OpenAPI spec, excludes streaming and webhook surfaces, and exposes the rest as MCP tools through FastMCP. An allowlist lets you ship a small, intentional set of calls. OAuth stays in-process for the life of the server.",
    outcome:
      "A pattern for connecting agents to real platforms without handing them the whole internet: local process, filtered tools, explicit auth.",
    notes: [
      "Allowlist at startup — restart to change the surface",
      "Streaming and webhook paths are excluded",
      "Useful as a template for other API-to-agent bridges",
    ],
  },
];

export const notes: NoteItem[] = [
  {
    slug: "closing-the-loop",
    index: "01",
    title: "Closing the loop",
    date: "Nov 2025",
    reading: "4 min",
    dek: "Static models are impressive calculators. The systems that matter will sense, act, and improve without waiting for another prompt.",
    body: [
      "Most of the industry is still optimizing the wrapper around a single completion. That is understandable. Completions are visible. You can screenshot them. You can ship a demo in a weekend. They are also a ceiling.",
      "A static model has no durable memory it earned, no objective it is pursuing while you are away, and no loop that updates its own policy from outcomes. It is a powerful function. It is not an operator.",
      "The architecture that compounds is older than the current hype cycle: perceive, update an internal model, choose an action, observe what happened, and get slightly better. That loop is how reconnaissance becomes intelligence. It is how a terminal agent stays inside scope. It is how software stops being a pile of prompts and starts being a system.",
      "I am building toward that loop — in security tooling first, because the feedback is honest. Either you mapped the surface or you did not. Either the finding is reproducible or it is theater.",
    ],
  },
  {
    slug: "from-scan-to-signal",
    index: "02",
    title: "From scan to signal",
    date: "Nov 2025",
    reading: "3 min",
    dek: "Raw reconnaissance is cheap. Operational understanding is the actual product.",
    body: [
      "Anyone can run a scanner. The interesting problem starts after the first open port: what is this thing, what does it talk to, and why should anyone care before the next standup?",
      "Axiom exists because I wanted the collection layer to be honest about what it is. Version 2.0 does not pretend to score risk. It maps infrastructure, keeps the data local, and writes reports you can parse. Intelligence is a later stage. Pretending you have it on day one is how tools become noise generators.",
      "Local-first is not nostalgia. Security work still happens in places you cannot ship to a vendor API. If the first hop of your recon pipeline is someone else's cloud, you have already made a decision about trust, retention, and cost that most teams never write down.",
      "The goal is a shift in sentence: not “here is what is exposed,” but “here is the risk, and here is why it matters.” That sentence requires structure. Structure is the unglamorous part I am willing to build first.",
    ],
  },
];

export const stats = [
  { label: "Public systems", value: "3" },
  { label: "Station", value: "Pittsburgh" },
  { label: "Lane", value: "Security + agents" },
  { label: "Mode", value: "Builder" },
] as const;

export const skills = [
  "Python",
  "TypeScript",
  "Rust",
  "Recon",
  "MCP",
  "Local models",
  "DNS / WHOIS",
  "Agent harnesses",
  "TUI",
  "Threat research",
] as const;

export const practices = [
  {
    index: "01",
    title: "Reconnaissance",
    copy: "Map what is actually there. DNS, services, and surfaces collected locally and written into something you can query later.",
  },
  {
    index: "02",
    title: "Agentic systems",
    copy: "Harnesses, tools, and loops — not chat skins. Models that plan, act, and leave an audit trail.",
  },
  {
    index: "03",
    title: "Local-first tooling",
    copy: "Your data stays on your machine until you decide otherwise. Useful when the work is sensitive, scoped, or offline.",
  },
  {
    index: "04",
    title: "Security research",
    copy: "Authorized labs, structured findings, and a bias toward systems you can explain to another operator.",
  },
];

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}

export function getNote(slug: string) {
  return notes.find((item) => item.slug === slug);
}
