/* ==========================================================================
   DATA.JS — Rumit Walia Portfolio
   Events, mentions, and blog data for dynamic rendering
   ========================================================================== */

const EVENTS_DATA = {
  "2024": {
    label: "2024",
    note: "To be updated soon.",
    events: []
  },
  "2023": {
    label: "2023",
    note: "To be updated soon.",
    events: []
  },
  "2022": {
    label: "2022 (Online & Major Engagements)",
    note: "Several Online Engagements; major ones are mentioned below:",
    events: [
      "Moral and Innovative Environmental Leadership Program (January)",
      "Facets of Faith, led by Yash Dhamija (February)",
      "ILMEC (I Love my Earth Campaign) Digital Campaign (May – August)",
      "Realms of Equality",
      "Connecting the Lines",
      "Future Forward Summit",
      "The Green Switch Conference",
      "ILMEC Part - II"
    ]
  },
  "2019": {
    label: "2019",
    events: [
      "Feb 28 – Space Diplomacy Program, Screening and Discussion – American Center",
      "Feb 28 – Citizen Engagement In Environmental Health Research – American Center",
      "Mar 20 – NEXUS Master Class on Intellectual Property, Nexus Hub",
      "Mar 20 – NEXUS Master Class on Environmental Sustainability, Nexus Hub",
      "Mar 28 – Innovative Methods and Strategies to Tackle Air Pollution by Mr. Jack Broadbent – American Center",
      "Mar 22–31 – AstraX and SDNx Workshop on Satellite Monitoring of Atmospheric Parameters – IIT Mandi",
      "Apr 12 – Spaceflight Commemoration (Yuri Gagarin) – Russian Centre of Science and Culture",
      "Apr 12 – Talk on 'Strong Libraries: Strong Communities' by Sarah Ziebell – iHub",
      "Apr 24 – Talk by Dr. Diane Evans and Richard Cook of NASA – American Center",
      "Apr 25 – Workshop on Air Pollution Monitoring Device – GIZ, Delhi",
      "Apr 29–May 01 – 5th ORF Kalpana Chawla Space Policy Dialogue – New Delhi",
      "May 07 – Digital Citizenship 101, Workshop on Digital Media – American Center",
      "May 08 – SPAN Magazine Panel Discussion on Sustainability – American Center",
      "May 16 – Creative Cities Program by UNESCO – UNESCO House New Delhi",
      "May 18 – Smile Session with IYHWS by Global Peace Foundation – Karol Bagh",
      "May 22 – Smart City India Expo – Pragati Maidan",
      "May 25 – American Center Mela",
      "Jun 05 – World Environment Expo & Conference – Pragati Maidan",
      "Jun 05 – Moral and Innovative Leadership Program by GPF India – Lajpat Nagar",
      "Jun 05 – Breathless: Documenting India's Air Emergency – Bikaner House",
      "Jun 10 – Russia National Day – Russian Centre for Science and Culture",
      "Jun 11 – Climate Policy Discussion (Substantial Energy) – American Center",
      "Jun 17 – Smile Event by GPF India with Mr. Kawabata and Mr. Aya Goto",
      "Jun 20 – Seminar: Environmental Consciousness – Vishwa Yuvak Kendra",
      "Jun 22 – Air Pollution Talk with Dr. Arvind Kumar, Dr. Peter Orris – American Center",
      "Jun 26 – Acapella Concert by Whim 'n Rhythm: Yale University – American Center",
      "Jun 27 – Post 377 Panel Discussion – American Center",
      "Jul 05 – Family Day Event – Russian Centre for Science and Culture",
      "Jul 12 – Space Diplomacy, Screening of 'First Man' – American Center",
      "Jul 15 – Chat with an Astronaut: Dorothy Metcalf-Lindenburger, NASA – Virtual",
      "Jul 17 – Chat with a Diplomat with Mr Christopher – American Center",
      "Jul 30 – Apollo-11 Moon Landing Anniversary: U.S.-India Space Cooperation – iHub",
      "Aug 27 – Literary Evening – Russian Centre for Science and Culture",
      "Sep 09–10 – Intl Conference on Sustainability Education – IHC, New Delhi",
      "Sep 29 – SDNX Visit – Dwarka",
      "Sep 30 – Talk on U.S.-India Space Collaboration by Ann Devereaux, JPL – American Center",
      "Sep 30 – US Embassy Officer Reception – U.S Embassy",
      "Oct 01 – Space Exploration Event – American Center",
      "Oct 03 – Ahimsa Gandhi Event – American Center",
      "Oct 04 – Space Week Events – Russian Centre for Science and Culture",
      "Oct 18 & 21 – Be a Diplomat Session – American Center",
      "Nov 19 – Lecture: Sergey Revon Cosmonaut – IITD Okhla",
      "Nov 30 – Seminar on Satellite Remote Sensing – The Institute of Engineers, Delhi",
      "Dec 02 – Book Release: Hindi-Russian Dictionary – Russian Centre for Science and Culture"
    ]
  },
  "2018": {
    label: "2018",
    events: [
      "Jan 19 – American Center Screening and Discussion of Selma",
      "Jan 31 – Maritime Security in the Indo-Pacific – American Center",
      "Feb 12 – Using Film For Social Awareness: Empowering Women through STEM – American Center",
      "Feb 24 – Black History Month Film Festival – American Center",
      "Mar 24 – Symposium on Writing – UChicago",
      "Apr 19 – Exhibition on River Ganga – American Center",
      "Apr 19 – Talk on Empowering Survivors of GBV in India – American Center",
      "Apr 23 – Talk on Clean Energy in India – American Center",
      "Apr 25 – Chat with a Diplomat: Earth Month Special – American Center",
      "Apr 28 – World IP Film Festival – American Center",
      "May 05 – Join Hands Day Event SNS F. – Bahai House of Worship",
      "May 09 – Cleaning the Air – American Center",
      "Jun 01 – Screening and Discussion: A Plastic Ocean – American Center",
      "Jun 16 – Chat with a Diplomat – American Center",
      "Jun 26 – WE ME Discussion – American Center",
      "Jul 11 – 70 Years of U.S-India Relations – American Center",
      "Aug 22–24 – IIC Annual Symposium – UChicago",
      "Sep 03 – Theatre Performance – UChicago",
      "Oct 17 – Korea U Event – Gandhi Peace Foundation",
      "Nov 16 – Hidden Figures Screening and Discussion – American Center",
      "Nov 22–24 – L-COY14 – CEE, Ahmedabad",
      "Dec 04 – Panel Discussion – UChicago"
    ]
  },
  "2017": {
    label: "2017",
    events: [
      "Jan 16 – Connection Series: Literary Readings by Anne Waldman – UChicago Center",
      "Feb 07 – Talk on US-India Relations – American Center",
      "Feb 10–11 – Black History Month Festival – American Center",
      "Feb 11 – UN NGO Forum at Delhi Technical University",
      "Mar 05 – Blood Donation Camp – J.K Foundation",
      "Mar 23 – Exhibition: Wings of Change – American Center",
      "Apr 10 – Talk on IP Protection in Entertainment Industry – American Center",
      "Apr 26 – Panel Discussion on World IP Day – American Center",
      "Apr 28 – Talk on Delhi's Air Quality – American Center",
      "Apr 28–29 – IPR Film Festival – American Center",
      "May 02 – Discussion on Air Quality in India – American Center",
      "May 09 – Talk on Freedom of Speech and Media – American Center",
      "May 12 – Poetry Slam Open Mic – American Center",
      "Jun 29 – Discussion on LGBTQI Acceptance – American Center",
      "Jul 12 – Talk on India-US Security Relationships – American Center",
      "Jul 13 – Talk on Population Stabilization in India – American Center",
      "Jul 14 – Social Achiever Award",
      "Jul 18 – Talk on India's Defense Modernization – American Center",
      "Jul 25 – Chat with a Diplomat: Defense – American Center",
      "Jul 25 – Discussion on Cinema, Culture, Policy – American Center",
      "Jul 27 – Discussion on Maritime Security – American Center",
      "Aug 21 – EPIC Special Talk: Pollution – UChicago",
      "Aug 24 – Discussion on Future Space Collaboration of India-US",
      "Sep 08 – SDG Presentation: Earthling Council – HRIT",
      "Sep 22 – Open Mic Poetry – American Center",
      "Sep 22–23 – Indo-American Film Festival – American Center",
      "Oct 04 – How is Digital Technology Transforming India – American Center",
      "Nov 09 – Art Exhibition on Women Empowerment – American Center",
      "Nov 27 – Discussion on Air Pollution and Health – American Center",
      "Nov 29 – Challenges of Urbanization in India – UChicago",
      "Nov 30 – Discussion on World AIDS Day – American Center",
      "Dec 16 – Exploring the Dark Universe – UChicago",
      "Dec 20 – How Civil Society is Reshaping India's Battle against GBV – American Center"
    ]
  },
  "2016": {
    label: "2016",
    events: [
      "Feb 27 – Talk: Exploring the Universe, 'Search for Signs of Life' with Dr. Jakob van Zyl, NASA JPL – American Center",
      "Mar 03 – I-View World International Film Festival – American Center",
      "Mar 10 – 2016 U.S Presidential Election Discussion – American Center",
      "Apr 22 – Earth Day Exhibition: 'Melting: An Art Show on Global Warming'",
      "Apr 29 – World IP Day Film Festival – American Center",
      "Apr 30 – Movie Marathon – American Center",
      "May 03 – World Press Freedom Day Film Screening + Discussion – American Center",
      "May 09 – Interaction with Actor Kal Penn – American Center",
      "May 09 – Abating Delhi's Air Pollution: EPIC Series – UChicago Center",
      "May 20–21 – BRICS Education Conclave – Asia Pacific Institute of Management",
      "Jun 10 – 'Prithvi,' Hinglish version of 'Extreme Weather' – American Center",
      "Jun 16 – Essay Competition on Gay Rights are Human Rights",
      "Jun 17 – Chat with a Diplomat – American Center",
      "Jun 20–21 – Workshop on Present Yourself – American Center",
      "Jun 30 – U.S Independence Day Celebration – American Center",
      "Sep 22 – Discussion on Protecting India's Wildlife – American Center",
      "Sep 27 – World Tourism Day Visa Session and Jazz Concert – American Center",
      "Oct 05 – World Space Week Celebration: NISAR Discussion – American Center",
      "Oct 06 – Remembering Daniel Pearl – American Center",
      "Oct 17 – Discussion on Urban Transport Solutions – American Center",
      "Oct 21 – Special Screening: Our Rising Oceans – American Center",
      "Nov 15 – Discussion: Global Entrepreneurship Week 2016",
      "Nov 20 – Street Play at IITF 2016"
    ]
  },
  "2015": {
    label: "2015",
    events: [
      "Jun 08 – Job Skill Workshop – American Center",
      "Jun 15 – South Asian Youth Environment Conclave (Earth Day Network & CEE) – American Center",
      "Aug 27 – Seeds of Discussion by Seeds for Change – American Center",
      "Aug 28 – Theory of Everything Screening – American Center",
      "Sep 24 – Talk on Civil Society and Public Policy – American Center",
      "Oct 07 – COP 21 Global Web Chat – American Center",
      "Oct 08 – CMS Vatavaran Film Fest – American Center",
      "Oct 29 – Maya Azucina Concert – Kamani Auditorium",
      "Oct 31 – Novel to Screen Film Fest – American Center",
      "Nov 17 – Remembering Daniel Pearl – UChicago Center, New Delhi",
      "Nov 18 – Air Quality Panel Discussion – American Center",
      "Nov 23 – Art Exhibit: Ray of Hope – American Center",
      "Dec 10 – GBV Play and Documentary – American Center",
      "Dec 17 – Book Launch by Ronojoy Sen – UChicago Center",
      "Dec 19 – Talk: Network Modelling and AIDS – UChicago Center",
      "Dec 23 – EPIC India Seminar: Nuclear Power and India's Energy Needs – UChicago Center"
    ]
  },
  "pre-2015": {
    label: "Pre-2015 (Early Initiatives)",
    events: [
      "Plantation Drives",
      "Independent G.K Competitions",
      "Multiple School Events",
      "Cleanup Drives at Shanti Van",
      "Paper and Aluminium Recycling Drives",
      "Environmental Journal",
      "Switch to Metal Drive",
      "Science Models on New and Renewable Energy"
    ]
  }
};

const MENTIONS_DATA = [
  {
    source: "Tatler Asia",
    date: "April 20, 2023",
    description: "Rumit Walia's background, work at Tears of the Earth, and winning the GGC Heroes Award were mentioned in a feature on sustainability.",
    link: "https://www.tatlerasia.com/power-purpose/sustainability/pollution-crisis-south-asia-youth-initiatives",
    category: "Magazine"
  },
  {
    source: "UNESCO",
    date: "Published 2022",
    description: "Rumit Walia's contribution to 'Youth demands for quality climate change education' is cited in this UNESCO publication.",
    link: "https://unesdoc.unesco.org/ark:/48223/pf0000383615/PDF/383615eng.pdf.multi",
    category: "International Body"
  },
  {
    source: "India Today",
    date: "February 26, 2024",
    description: "Highlighted Mr. Rumit Walia's Podcast on Planet vs. Plastics, featuring ways to end plastic pollution.",
    link: "#",
    category: "News"
  },
  {
    source: "Global Peace Foundation",
    date: "December 10, 2023",
    description: "Rumit Walia at the GP Festival 2023 in the Philippines highlighted his view on unity despite differences.",
    link: "https://globalpeace.org/youth-engagement-thinking-before-during-after/",
    category: "Organization"
  },
  {
    source: "Galway Pulse",
    date: "February 12, 2023",
    description: "Mr. Rumit Walia discusses increased earthquakes as a sign of the worsening climate crisis.",
    link: "https://galwaypulse.com/2023/02/12/climate-crisis/",
    category: "News"
  },
  {
    source: "Pluc.tv",
    date: "November 06, 2022",
    description: "Rumit was featured in a video showcased at the International Film Festival 2022, Goa.",
    link: "https://pluc.tv/episode/-1152",
    category: "Media"
  },
  {
    source: "The Tribune",
    date: "August 17, 2023",
    description: "Rumit spoke on 'Peace, Food Security and Sustainable Agriculture' at DAV Institute of Engineering & Tech.",
    link: "https://www.tribuneindia.com/news/jalandhar/st-soldier-students-celebrate-i-day-535531",
    category: "News"
  },
  {
    source: "Earth Day Network",
    date: "2023",
    description: "Featured for the '53 Lives in 53 Days for 53 Ways to Invest in Our Planet' Instagram Live series.",
    link: "https://www.earthday.org/get-inspired-53-lives-in-53-days-for-53-ways-to-invest-in-our-planet/",
    category: "Organization"
  }
];

const BLOGS_DATA = [
  {
    title: "The Power of 5: Integrating Sustainability into Everyday Necessities",
    category: "Sustainability",
    date: "2024",
    excerpt: "Exploring how five simple daily habits can transform our environmental footprint and create lasting change in our communities.",
    link: "https://www.rumitwalia.in/post/the-power-of-5-integrating-sustainability-into-everyday-necessities"
  },
  {
    title: "Space Diplomacy Week",
    category: "Space Exploration",
    date: "2024",
    excerpt: "Reflections on the intersection of space exploration and international diplomacy, highlighting collaborative efforts for peace.",
    link: "https://www.rumitwalia.in/post/space-diplomacy-week"
  }
];

const ASSOCIATIONS = [
  "Tears of the Earth",
  "EARTHDAY.ORG",
  "Global Peace Foundation",
  "American Center",
  "UNESCO",
  "World Youth Festival",
  "SGAC",
  "BeVisioneers",
  "OpenSpace Intl",
  "BHARAT РОССИЯ"
];

// Make data available globally
window.EVENTS_DATA = EVENTS_DATA;
window.MENTIONS_DATA = MENTIONS_DATA;
window.BLOGS_DATA = BLOGS_DATA;
window.ASSOCIATIONS = ASSOCIATIONS;
