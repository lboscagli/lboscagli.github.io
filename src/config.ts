export const siteConfig = {
  name: "Luca Boscagli",
  title: "MSCA Fellow | Fluid Dynamics Researcher",
  description: "Portfolio website of Luca Boscagli",
  accentColor: "#1d4ed8",
  hero: {
    portraitImage: "/images/LucaBoscagli_Valdorcia.jpg",
    portraitAlt: "A photo of Luca Boscagli enjoying a motorbike ride near his hometown (Val d'Orcia, Tuscany, Italy)",
    portraitPosition: "center",
    // portraitPosition: "50% 30%",
    backgroundImage: "/images/background.jpeg",
    backgroundImageOpacity: 0.35,
    backgroundImagePosition: "center",
  },
  social: {
    email: "luca.boscagli@santannapisa.it",
    linkedin: "https://www.linkedin.com/in/luca-boscagli-researcher",
    github: "https://github.com/lboscagli",
  },
  aboutMe:
    "I am a MSCA Fellow at Sant'Anna School of Advanced Studies in Pisa. With my research I want to better quantify and minimize the impact on novel engineering solutions on the environment. \
    To achieve this, I use numerical methods to integrate computational fluid dynamics (CFD) and experimental data to improve predictive accuracy of computational models. \
    My research focuses on aerospace applications, from subsonic to hypersonic regimes.",
  skills: ["Fluid Dynamics", "High Performance Computing", "Python", "Fortran", "C++", "Linux"],
  projects: [
    {
      name: "CASSANDRA - Coupled Aerosol-jet Simulation and Sensitivity Analysis with Nonlinear Data Recovery and Assimilation",
      description:
        "Condensation trails (contrails) are a significant yet poorly characterized contributors to aviation-induced radiative forcing. CASSANDRA (Coupled Aerosol-jet Simulation and Sensitivity Analysis with Non-linear Data Recovery and Assimilation) will investigate the coupled microphysical and fluid-dynamics processes controlling contrail formation under conventional and novel jet engine fuels. CASSANDRA will provide the first data assimilation framework tailored to contrail formation, and reduce model predictive uncertainty. By leveraging, 3D computational fluid dynamics, experimental and flight test data, the research will produce robust insights to improve 1D climate models. Ultimately, CASSANDRA will support evidence-based policy and aero-engine optimisation for sustainable fuels to mitigate aviation's non-CO2 climate impact.",
      link: "https://cordis.europa.eu/project/id/101263613",
      skills: ["LES-PBE","Data assimilation","Reduced Order Modelling"],
    }
  ],
  outreach: [
    {
      type: "article",
      title: "La ricerca che merita. Borsa Slodowska-Curie a tre progetti Sant' Anna",
      date: "17 February 2026",
      description: "Scelti nel programma di finanziamento europeo per sostenere la carriera la carriera di ricercatrici e ricercatori in possesso di un dottorato di ricerca.",
      link: "https://www.lanazione.it/pisa/cronaca/la-ricerca-che-merita-borsa-a8ecbad0",
      linkText: "Read the article",
      image: "/images/outreach-la-nazione-Mar2026.png",
      imageAlt: "Placeholder image for a newspaper article",
    },
    {
      type: "event",
      title: "BRIGHT Night 2026",
      date: "25 September 2026",
      description: "La fisica (e la matematica) delle scie degli aerei",
      link: "https://www.santannapisa.it/it/terza-missione/public-engagement/bright-night-la-notte-europea-delle-ricercatrici-e-dei-ricercatori-toscana",
      linkText: "Read the article",
      image: "/images/outreach-BRIGHT2026.jpeg",
      imageAlt: "Placeholder image for an outreach activity",
    },
  ],
  experience: [
    {
      company: "Sant'Anna School of Advanced Studies",
      title: "MSCA Fellow at Center of Interdisciplinary research on Sustainability and Climate (CISC)",
      dateRange: "Jun 2026 - Present",
      bullets: [
      ],
    },
    {
      company: "Imperial College London",
      title: "Research Associate in Fluid Dynamics",
      dateRange: "Jan 2024 - Apr 2026",
      bullets: [
        "Developed a numerical model to determine and quantify the effectiveness of a novel flow management technique for hypersonic transition control (project: WSRF-T0105)",
        "Developed a novel numerical model to assess the role of turbulent jet dynamics in contrail formation (project: JetZero)",
      ],
    },
    {
      company: "Cranfield University",
      title: "Research Fellow in Propulsion Aerodynamics (project ODIN)",
      dateRange: "May 2021 - Dec 2023",
      bullets: [
        "Designed a novel configuration to assess the aerodynamic characteristics of a compact aero-engine nacelle under off-design (engine windmilling) conditions (project: ODIN)",
        "Validated the numerical model against experimental data",
        "Provided useful guidance for the design of future novel compact aero-engine nacelles for ultra-high bypass ratio engines",
      ],
    },
    {
      company: "Baker Hughes, a GE Company (Nuovo Pignone, Florence, Italy)",
      title: "Technical Intern in Turbomachinery Aerothermodynamics",
      dateRange: "Feb 2018 - Jun 2018",
      bullets: [
        "Developed a numerical tool for fast assessment of the aerodynamic performance of multi-stage axial compressors",
      ],
    },    
  ],
  education: [
    {
      school: "Cranfield University",
      degree: "PhD in Aerospace Engineering",
      dateRange: "2018 - 2022",
      achievements: [],
    },
    {
      school: "Polytechnic of Milan",
      degree: "Laurea Magistrale in Aeronautical Engineering",
      dateRange: "2015 - 2017",
      achievements: [],
    },
    {
      school: "University of Pisa",
      degree: "Bachelor of Science in Aerospace Engineering",
      dateRange: "2011 - 2014",
      achievements: [],
    },
  ],
};
