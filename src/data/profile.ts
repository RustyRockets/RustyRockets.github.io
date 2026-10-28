// Single source for site content. The page is told as a story: a thesis in the
// hero, four chapters in chronological order (each with the projects from that
// era), an "off the clock" interlude, and an epilogue about what's next.
//
// Content rules: no employer/client dollar figures, customer counts or program
// names. Home Depot = methods only; past roles may use general percentages.

export const profile = {
  firstName: 'Ranganathan',
  nickname: 'Rusty',
  lastName: 'Chandrashekhar',
  name: 'Ranganathan “Rusty” Chandrashekhar',
  role: 'Data Scientist',
  location: 'Atlanta, GA',
  linkedin: 'https://www.linkedin.com/in/ranganathan-chandrashekhar',
  github: 'https://github.com/RustyRockets',
  // The through-line of the whole page.
  thesis: "I'm curious about how things really work: in data, in history, and in a long game of grand strategy.",
  thesisFollowUp: 'For most of the last decade, that curiosity has also been my job.',
};

export type Project = {
  title: string;
  label: string;
  problem: string;
  approach: string;
  outcome: string;
  tools: string[];
  link?: { href: string; text: string };
};

export type Chapter = {
  id: string;
  years: string;
  place: string;
  role: string;
  title: string;
  story: string[];
  projects: Project[];
};

export const chapters: Chapter[] = [
  {
    id: 'merkle',
    years: '2017 – 2023',
    place: 'Merkle',
    role: 'Co-op to Lead Analyst',
    title: 'Learning how things really work',
    story: [
      'I studied computer science, but it was a co-op at Merkle in 2017 that made data click for me: analysis was the fastest way to find out what was actually going on in a business.',
      'I stayed six years, through five roles from co-op to lead analyst, working on retail and e-commerce. Why do products come back? What are customers really saying? Did that program actually change anything? Two of those questions shaped how I work.',
    ],
    projects: [
      {
        title: 'Making customer text measurable',
        label: 'NLP',
        problem:
          'Reviews, return reasons and call logs held the "why" behind product problems, but nobody could read them at scale.',
        approach:
          'Topic modeling and n-grams to group complaints into themes, sentiment scoring to track them, and reporting that routed each theme to the team that could fix it.',
        outcome: 'Linked to a 15% rise in positive reviews.',
        tools: ['Python', 'Topic modeling', 'Sentiment analysis'],
      },
      {
        title: 'Did the program actually work?',
        label: 'Experimentation',
        problem:
          'Quality programs were rolling out to products, but nobody could tell whether they reduced returns or just coincided with seasonality.',
        approach:
          'SKU-level A/B test design, plus an R Shiny app so category managers could check program impact themselves.',
        outcome: 'Program coverage grew 27% in the first quarter.',
        tools: ['R', 'R Shiny', 'A/B testing'],
      },
    ],
  },
  {
    id: 'masters',
    years: '2023 – 2024',
    place: 'University of Cincinnati',
    role: 'M.S. Business Analytics',
    title: 'Stepping back to go deeper',
    story: [
      'After six years of answering questions with the tools I had, I wanted better ones. I went back to school full-time for an M.S. in Business Analytics: machine learning, optimization, simulation and forecasting.',
    ],
    projects: [],
  },
  {
    id: 'tiger',
    years: '2025 – 2026',
    place: 'Tiger Analytics',
    role: 'Sr. Analytics Consultant',
    title: 'A different kind of risk',
    story: [
      'Next came a deliberate change of scenery: credit risk strategy for a lending client, a field where being wrong shows up as losses.',
      'It taught me that a model people can explain and trust often beats a cleverer one.',
    ],
    projects: [
      {
        title: 'Simpler, explainable credit strategy',
        label: 'Risk strategy',
        problem:
          'A custom scoring model was hard to explain and maintain for credit line decisions.',
        approach:
          'Replaced it with a transparent score-and-utilization grid, sized the volume-versus-loss trade-offs, and automated the monitoring pipeline behind it.',
        outcome: '80% less manual pipeline work; dashboards about 40% faster.',
        tools: ['SQL', 'Python', 'Airflow'],
      },
    ],
  },
  {
    id: 'homedepot',
    years: '2026 – now',
    place: 'The Home Depot',
    role: 'Data Scientist',
    title: 'How people find things',
    story: [
      'Today I work on search and browse at The Home Depot. Search is a system with many moving parts (queries, filters, rankings and the people using them), and when a number moves, the first job is figuring out what really moved it.',
    ],
    projects: [
      {
        title: 'What changed in search?',
        label: 'Causal inference',
        problem:
          'A metric drops right after a release, but several things shipped at once. Which one did it, and how do you catch the next one sooner?',
        approach:
          'Difference-in-differences to isolate the cause, then an independent release-testing framework that checks ranking models around each launch.',
        outcome: 'Pinned the drop on a specific change; the framework later caught a ranking regression in production.',
        tools: ['Difference-in-differences', 'BigQuery', 'Python'],
      },
      {
        title: 'Trust the numbers first',
        label: 'Data quality',
        problem:
          'Dashboards everyone relies on can drift quietly when tracking or pipelines break upstream.',
        approach:
          'A full audit reconciling each reported figure against source data, tracing every gap back to the tracking or pipeline step behind it.',
        outcome: 'Every figure validated, and several upstream breaks found that were silently undercounting activity.',
        tools: ['BigQuery', 'SQL', 'Data validation'],
      },
    ],
  },
];

// Interlude: the same curiosity outside work.
export const interlude = {
  title: 'Off the clock',
  intro: 'Same curiosity, different settings.',
  interests: [
    {
      title: 'Guitar, metal & rock',
      text: "Self-taught, mostly by learning the songs I love: Alice in Chains, Stone Temple Pilots, Metallica, Guns N' Roses. Working a song out until it finally sounds right is its own kind of problem-solving.",
    },
    {
      title: 'History & strategy games',
      text: 'Mostly the history of how things actually worked: trade, logistics and institutions. Grand strategy and RPGs scratch the same itch.',
    },
    {
      title: 'Reading',
      text: 'History, fantasy and sci-fi, and a fair amount of statistics. On the stats shelf, my favorites are Trustworthy Online Controlled Experiments, the go-to book on A/B testing, and The StatQuest Illustrated Guide to Machine Learning.',
    },
  ],
  project: {
    title: 'Can a betting system beat the house?',
    label: 'Side project',
    problem:
      'The Martingale promises steady wins: double your bet after every loss and the first win recovers everything. Can any betting system beat roulette?',
    approach:
      'Six strategies analysed two independent ways in R, by Monte Carlo simulation and by solving each game exactly as a Markov chain, tested against each other and published results. Includes an interactive explorer that runs in the browser.',
    outcome: 'On an American wheel, every system loses the same 5.26% of what it bets. Trying to double $400, one bold bet succeeds 47% of the time; the Martingale manages 35%.',
    tools: ['R', 'Simulation', 'Markov chains', 'Quarto', 'Shiny'],
    link: { href: 'https://rustyrockets.github.io/martingale-simulator/', text: 'Read the analysis' },
  } satisfies Project,
};

// Epilogue: where the story goes next.
export const epilogue = {
  title: "What's next",
  intro: 'The questions I want to spend the next few years on:',
  directions: [
    { title: 'Causal inference at scale', text: 'Finding out what really caused a change when a clean A/B test is not an option.' },
    { title: 'Search and ranking', text: 'How people find things, and how to measure whether results are actually getting better.' },
    { title: 'ML in production', text: 'Moving from analysis to models that ship, and keeping them honest once they do.' },
    { title: 'Product data science', text: 'Working alongside product teams so the data shapes what gets built, not just what gets reported.' },
  ],
  closing: "If you're working on any of these, I'd like to hear about it.",
  toolkit: ['Python', 'SQL', 'R', 'BigQuery', 'Snowflake', 'Airflow', 'Tableau', 'Power BI'],
};
