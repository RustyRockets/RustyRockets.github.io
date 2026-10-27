// Single source for site content. Rules: see CLAUDE.md — no employer/client
// dollar figures, customer counts or program names; Home Depot = methods only.

export const profile = {
  name: 'Ranganathan Chandrashekhar',
  role: 'Data Scientist',
  location: 'Atlanta, GA',
  linkedin: 'https://www.linkedin.com/in/ranganathan-chandrashekhar',
  github: 'https://github.com/RustyRockets',
  tagline:
    'I turn messy behavioral, text and transaction data into decisions people can act on.',
  intro: [
    'Most of my work sits where a business question meets messy data: why products come back, whether a program actually worked, which credit strategy balances growth against risk, and how people find things in search.',
    'Away from data: guitar, history, and strategy games.',
  ],
};

// Narrative career path, newest first. One or two sentences each — the
// achievements live on the project cards, not here.
export const path = [
  {
    years: '2026 – now',
    place: 'The Home Depot',
    role: 'Data Scientist',
    text: 'Working on how customers find products through search and browse. Much of it is experimentation and causal analysis, plus making sure the numbers underneath can be trusted.',
  },
  {
    years: '2025 – 2026',
    place: 'Tiger Analytics',
    role: 'Sr. Analytics Consultant',
    text: 'A switch to banking: credit risk strategy for a lending client, where every decision trades growth against losses and an explainable model beats a clever one.',
  },
  {
    years: '2023 – 2024',
    place: 'University of Cincinnati',
    role: 'M.S. Business Analytics',
    text: 'Back to school full-time for machine learning, optimization, simulation and forecasting.',
  },
  {
    years: '2017 – 2023',
    place: 'Merkle',
    role: 'Co-op to Lead Analyst',
    text: 'Started as a co-op while finishing my engineering degree and stayed six years, through five roles. Retail and e-commerce analytics end to end: returns, reviews, supply chain, forecasting and a lot of reporting.',
  },
  {
    years: '2018',
    place: 'Kumaraguru College of Technology',
    role: 'B.E. Computer Science',
    text: 'Where it started.',
  },
];

export type Project = {
  title: string;
  label: string;
  problem: string;
  approach: string;
  outcome: string;
  tools: string[];
  link?: { href: string; text: string };
};

// Method-focused case studies. Written as problem types, not client engagements.
export const projects: Project[] = [
  {
    title: 'What changed in search?',
    label: 'Causal inference · Home Depot',
    problem:
      'A metric drops right after a release, but several things shipped at once. Which one did it, and how do you catch the next one sooner?',
    approach:
      'Difference-in-differences to isolate the cause, then an independent release-testing framework that checks ranking models around each launch.',
    outcome: 'Pinned the drop on a specific change; the framework later caught a ranking regression in production.',
    tools: ['Difference-in-differences', 'BigQuery', 'Python'],
  },
  {
    title: 'Trust the numbers first',
    label: 'Data quality · Home Depot',
    problem:
      'Dashboards everyone relies on can drift quietly when tracking or pipelines break upstream.',
    approach:
      'A full audit reconciling each reported figure against source data, tracing every gap back to the tracking or pipeline step behind it.',
    outcome: 'Every figure validated, and several upstream breaks found that were silently undercounting activity.',
    tools: ['BigQuery', 'SQL', 'Data validation'],
  },
  {
    title: 'Did the program actually work?',
    label: 'Experimentation · Merkle',
    problem:
      'Quality programs were rolling out to products, but nobody could tell whether they reduced returns or just coincided with seasonality.',
    approach:
      'SKU-level A/B test design, plus an R Shiny app so category managers could check program impact themselves.',
    outcome: 'Program coverage grew 27% in the first quarter.',
    tools: ['R', 'R Shiny', 'A/B testing'],
  },
  {
    title: 'Making customer text measurable',
    label: 'NLP · Merkle',
    problem:
      'Reviews, return reasons and call logs held the "why" behind product problems, but nobody could read them at scale.',
    approach:
      'Topic modeling and n-grams to group complaints into themes, sentiment scoring to track them, and reporting that routed each theme to the team that could fix it.',
    outcome: 'Linked to a 15% rise in positive reviews.',
    tools: ['Python', 'Topic modeling', 'Sentiment analysis'],
  },
  {
    title: 'Simpler, explainable credit strategy',
    label: 'Risk strategy · Tiger Analytics',
    problem:
      'A custom scoring model was hard to explain and maintain for credit line decisions.',
    approach:
      'Replaced it with a transparent score-and-utilization grid, sized the volume-versus-loss trade-offs, and automated the monitoring pipeline behind it.',
    outcome: '80% less manual pipeline work; dashboards about 40% faster.',
    tools: ['SQL', 'Python', 'Airflow'],
  },
  {
    title: 'Can a betting system beat the house?',
    label: 'Side project',
    problem:
      'The Martingale promises steady wins: double your bet after every loss and the first win recovers everything. What really happens to the bankroll?',
    approach:
      'A simulator in R for classic and reverse Martingale with configurable win probability, stop-loss and profit targets, playing each run out until the target or ruin.',
    outcome: 'Across 10,000 simulated players, 98% were ahead at some point, yet even quitting on doubling their money, only 35% would have made it.',
    tools: ['R', 'tidyverse', 'Simulation'],
    link: { href: 'https://github.com/RustyRockets/martingale-simulator', text: 'Code and results on GitHub' },
  },
];

export const skills = ['Python', 'SQL', 'R', 'BigQuery', 'Snowflake', 'Airflow', 'Tableau', 'Power BI', 'A/B testing', 'Causal inference', 'Forecasting', 'Machine learning', 'NLP'];

export const interests = [
  {
    title: 'Guitar, metal & rock',
    text: 'I play guitar and listen to a lot of metal and rock.',
  },
  {
    title: 'History & strategy games',
    text: 'Especially the kind of history about how things actually worked: trade, logistics and institutions. Grand strategy and RPGs scratch the same itch.',
  },
  {
    title: 'Reading',
    text: 'Plenty of it is statistics: causal inference, experimentation and machine learning are favorites.',
  },
];
