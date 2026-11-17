/*
  CONTENT FOR SAHASRA'S SITE

  This is the only file you need to touch to add things.
  Every list below is a set of entries inside [ ... ]. To add one, copy an
  existing entry (from its opening { to its closing }, plus the comma),
  paste it where you want it to appear, and change the words.

  Rules that keep it from breaking:
    - Keep the quotes around text. If your text has a " in it, write \" instead.
    - Entries in a list are separated by commas.
    - You can use <a href="...">link text</a> inside any text.

  What lives where:
    updates    the "Lately" list on the home page (newest first)
    research   the Research page
    projects   the Projects page
    awards     the Leadership page, top list
    roles      the Leadership page, second list
    season     the Leadership page, "This year" list
    about      the About page
*/

window.SITE = {

  email: "ssarapu09@gmail.com",
  github: "https://github.com/ss8792student",
  updated: "November 2026",

  /* ---------- Home page: "Lately" ---------- */
  updates: [
    { date: "Nov 2026", text: "Started my own study of how LLM judges score answers that mix Telugu and English." },
    { date: "Nov 2026", text: "Became co-service coordinator for my school's National Honor Society chapter." },
    { date: "Oct 2026", text: "Submitted Fine Print to the Congressional App Challenge." },
    { date: "Fall 2026", text: "Joined a research team in the Algoverse AI Research Program." },
    { date: "2026", text: "Placed 2nd in the nation in Computer Network Technology at the BPA National Leadership Conference." }
  ],

  /* ---------- Research page ---------- */
  research: {
    interests: [
      "LLM-as-judge reliability",
      "Multilingual evaluation",
      "Code-switching",
      "Lower-resource languages"
    ],
    items: [
      {
        title: "Does a judge's belief outlast its verdict under pressure?",
        where: "Algoverse AI Research Program, team project, fall 2026",
        status: "Paper in preparation",
        sections: [
          { label: "The question", text: "When an LLM judge gets pushed into changing its verdict, did it change its mind, or only its answer? We pressure a judge until it flips, then check whether its original preference is still there." },
          { label: "Why it matters", text: "LLM judges now score benchmarks and other models' answers. If a judge gives in to pressure, the scores built on it are hard to trust." },
          { label: "My part", text: "I own the data track: the datasets and test conditions, the preregistration, and sections of the paper. I also keep the record of the exact software environment we ran, so the results can be reproduced. Everything goes into the team repo through pull requests that our mentor reviews, and the experiments run on Kaggle." },
          { label: "Where it stands", text: "We're writing the paper now and plan to submit it to a workshop." }
        ],
        links: []
      },
      {
        title: "Do LLM judges mark down answers that mix Telugu and English?",
        where: "Independent project, started November 2026",
        status: "Just started",
        sections: [
          { label: "The question", text: "If two answers are equally correct and one of them mixes Telugu and English, does an LLM judge score it lower?" },
          { label: "Why it matters", text: "A lot of bilingual people mix languages when they talk and type. If judges mark that down, the same content gets a worse score because of how it was said." },
          { label: "The plan", text: "Matched answer pairs where the content stays fixed and only the language mix changes. Several judge models score each pair, and I compare the scores within each pair." },
          { label: "Where it stands", text: "I'm working out the study design. The goal is a four-page workshop paper in six to eight weeks, run on Kaggle's free GPUs or a small API budget." }
        ],
        links: []
      }
    ]
  },

  /* ---------- Projects page ---------- */
  projects: {
    items: [
      {
        title: "Fine Print",
        where: "2026 Congressional App Challenge, Texas District 26, team of two",
        status: "Submitted October 2026",
        body: [
          "Official letters were the hardest part of English for my parents, long after everyday conversation got easy. Fine Print is a phone app for those letters: utility notices, school letters, lease renewals, insurance denials.",
          "You take a photo and it explains the letter in plain language. Every sentence links back to the passage it came from, so you can check it against the original."
        ],
        stepsTitle: "How it works",
        steps: [
          "You photograph the letter, and the photo is read on your phone.",
          "Names, addresses and account numbers are hidden before anything leaves the phone.",
          "The app rewrites the letter in plain language, in the language and reading level you pick.",
          "A second model checks the rewrite against the original, and code verifies every date and number.",
          "Deadlines are calculated in code, never guessed, and can go into your calendar with reminders."
        ],
        tags: ["30+ languages", "3 reading levels", "React", "Vite", "Vercel", "Claude API"],
        note: "The two-step checking came from my research on LLM judges. We built the app with an AI coding assistant and said so in our submission.",
        links: [
          { label: "Code on GitHub", href: "https://github.com/ss8792student/fine-print" }
        ]
      },
      {
        title: "Books Without Borders",
        where: "Founder, 501(c)(3) nonprofit",
        status: "Ongoing",
        body: [
          "I started Books Without Borders to get books to schools that don't have enough of them.",
          "Our first project was Readathon Revolution, a readathon and community book drive. It paid for the first library at a government school in Telangana, India, the school my dad went to. The money also covered the school's newspaper subscriptions, and about 240 students use the library.",
          "I took the project to DECA as a Community Giving Project and qualified for state.",
          "Now I'm rebuilding the nonprofit around language and AI, starting with children's books."
        ],
        tags: ["Readathon Revolution", "Telangana, India", "DECA state qualifier"],
        links: [
          { label: "bwbglobal.org", href: "https://bwbglobal.org" }
        ]
      }
    ]
  },

  /* ---------- Leadership page ---------- */
  awards: [
    { org: "Business Professionals of America", lead: "2nd place in the nation", detail: "Computer Network Technology. National Leadership Conference, 2026." },
    { org: "Texas DECA", lead: "State qualifier", detail: "Community Giving Project, 2026." }
  ],

  roles: [
    { org: "Business Professionals of America", lead: "Vice president.", detail: "I've been an officer for two years and I run our competitive events. Last year I was VP of marketing and communications." },
    { org: "Science National Honor Society", lead: "Co-founder and co-president.", detail: "" },
    { org: "Mu Alpha Theta", lead: "Competition coordinator", detail: "in the chapter's first year. I'm working on bringing the AMC to our school." },
    { org: "National Honor Society", lead: "Co-service coordinator", detail: "for a chapter of more than 250 members." },
    { org: "Bollywood Dance Club", lead: "Treasurer", detail: "in the club's first year." }
  ],

  season: [
    { org: "USACO", lead: "", detail: "Training for this season's contests." },
    { org: "NACLO", lead: "", detail: "Preparing for the computational linguistics olympiad." },
    { org: "DECA", lead: "", detail: "Writing a Buying and Merchandising Operations Research paper on an independent bookstore. Districts are in December." }
  ],

  /* ---------- About page ---------- */
  about: {
    coursesNow: ["AP Calculus BC", "AP Statistics", "AP Physics C", "Computer Science 3", "AP English Language", "AP Spanish"],
    coursesDone: ["AP Computer Science A", "AP Computer Science Principles", "AP Calculus AB"],
    tools: ["Python", "Git and GitHub", "Kaggle"]
  }
};
