import type { Project } from '@/types';

// Helper to build an ordered list of optimized image paths for a folder.
const imgs = (folder: string, count: number, start = 1): string[] =>
  Array.from({ length: count }, (_, i) => `/images/projects/${folder}/img-${i + start}.jpg`);

const galleryImgs = (count: number, start = 1): string[] =>
  Array.from({ length: count }, (_, i) => `/images/gallery/img-${i + start}.jpg`);

export const projects: Project[] = [
  {
    slug: 'digital-literacy-enhancement-programme',
    title: 'Digital Literacy Enhancement Programme',
    category: 'Digital Literacy',
    status: 'upcoming',
    date: 'Upcoming · 12-month programme',
    year: 2025,
    location: 'Central Gonja District, Savannah Region',
    metricLabel: 'Target Students',
    metricValue: '450',
    tagline: 'Bridging the digital divide for 450 students in rural Ghana.',
    summary:
      'Establishing a 30-seat community ICT centre to train 450 students across three rural communities — bridging the digital divide.',
    need: [
      'In rural Ghana, only 34–40% of people have access to the internet, compared with 59–66% in urban areas. Just 10% of people in rural communities own a computer, versus 24% in the cities.',
      'For students in Sankpala, Belamposo and Wamgbon, this digital gap means falling behind their peers, missing out on online learning, and facing far fewer opportunities for jobs and innovation — a gap that hits girls hardest.',
    ],
    description: [
      'The Digital Literacy Enhancement Programme seeks to empower the digital skills of 450 students across three clustered communities — Sankpala, Belamposo and Wamgbon — in the Central Gonja District of the Savannah Region of Ghana.',
      'The programme will establish a 30-seat ICT centre and train students over twelve months using modern digital tools, fostering innovation and promoting digital inclusion, with a special focus on empowering girls.',
      'It will be delivered in partnership with the Central Gonja District Assembly, Ghana Education Service, GIFEC and other stakeholders to ensure smooth implementation and long-term sustainability.',
    ],
    highlights: [
      'A fully-equipped 30-seat community ICT centre.',
      'Hands-on training in the internet, Microsoft Office and digital tools.',
      'A special focus on empowering girls and bridging the gender gap.',
      'Local volunteer teachers trained to keep the centre running.',
    ],
    outcomes: [
      'Target: 450 students trained in digital literacy and skills.',
      'A bridged digital divide across three rural communities.',
      'New opportunities for jobs, creativity and innovation.',
      'A community-owned, sustainable digital learning centre.',
    ],
    stats: [
      { value: '450', label: 'Students to be trained' },
      { value: '30', label: 'Computer workstations' },
      { value: '3', label: 'Communities reached' },
      { value: '12', label: 'Month programme' },
    ],
    timeline: [
      { phase: 'Phase 1', title: 'Community entry & setup', detail: 'Engagement, materials, electrical wiring, painting and finishing (8 weeks).' },
      { phase: 'Phase 2', title: 'Build the lab', detail: 'Furniture assembly, computer setup, network installation and testing (4 weeks).' },
      { phase: 'Phase 3', title: 'Training & evaluation', detail: 'Grand opening, training of 450 students, monitoring and evaluation (24 weeks).' },
      { phase: 'Phase 4', title: 'Sustainability & handover', detail: 'Sustainability forums, handover and continuous supervision (12 weeks).' },
    ],
    budget: [
      { label: 'Technology equipment (computers, network)', amount: 7848 },
      { label: '12-month running cost', amount: 7019 },
      { label: 'Furniture & classroom setup', amount: 4820 },
      { label: 'Electrical & climate control', amount: 4516 },
      { label: 'Labour & construction', amount: 3840 },
      { label: 'Transportation (motorbikes & logistics)', amount: 3850 },
      { label: 'Structural renovations', amount: 2820 },
      { label: 'Presentation equipment', amount: 1270 },
      { label: 'Power management & protection', amount: 1195 },
      { label: 'Network & internet connectivity', amount: 1170 },
      { label: 'Miscellaneous & contingency', amount: 1650 },
    ],
    budgetTotal: 39998,
    budgetCurrency: 'USD',
    tiers: [
      { amount: 100, title: 'Equip a Learner', impact: 'Provides learning materials for one student through the programme.', image: '/images/projects/back-to-school/img-2.jpg' },
      { amount: 1000, title: 'Sponsor a Workstation', impact: 'Funds a refurbished computer, monitor and accessories for the lab.', image: '/images/gallery/img-10.jpg' },
      { amount: 5000, title: 'Fund the Network', impact: 'Helps connect the centre with internet, routers and cabling.', image: '/images/gallery/img-12.jpg' },
    ],
    fund: { goal: 40000, raised: 8500, currency: 'USD', donors: 32, placeholder: true },
    partnersInvolved: [
      'Central Gonja District Assembly',
      'Ghana Education Service',
      'GIFEC',
      'IT For Youth Ghana',
      'Africa ICT Right',
    ],
    cover: '/images/gallery/img-10.jpg',
    gallery: galleryImgs(6, 9),
  },
  {
    slug: 'possibilities-empowerment-pwd-2024',
    title: 'Possibilities Empowerment Conference for Persons with Disabilities',
    category: 'Disability & Inclusion',
    status: 'completed',
    date: '18 May 2024',
    year: 2024,
    location: 'West Mamprusi Municipal Assembly, North East Region',
    metricLabel: 'Attendees',
    metricValue: '247',
    tagline: 'Disability does not equate to inability.',
    summary:
      'A day of empowerment, mental-health support and essential donations for 247 persons with disabilities and their caregivers.',
    need: [
      'Persons with disabilities in northern Ghana often face stigma, exclusion and very limited access to mental-health support or essential resources.',
      'This conference set out to change that — bringing dignity, practical help and a sense of belonging to PWDs and their caregivers, and engaging the whole community in their inclusion.',
    ],
    description: [
      'The Possibilities Empowerment Conference for Persons with Disabilities (PWDs) was held on 18 May 2024 at the West Mamprusi Municipal Assembly in Ghana’s North East Region. The initiative aimed to empower PWDs, foster community engagement and promote inclusivity.',
      'The event welcomed 247 participants — persons with disabilities, caregivers and family members, volunteers, representatives from NGOs and local organizations, and government officials including the Honourable DCE, MCE and the Director for Social Welfare.',
    ],
    highlights: [
      'Motivational talk by Prophet Joshua Duut — “disability does not equate to inability.”',
      'Mental-health talk and free psychological screening by Dr. Divine (TOLEGHCGH).',
      'Distribution of rice, drinks, water, biscuits, clothing and snacks.',
      'Networking with NGOs, caregivers and local government.',
    ],
    outcomes: [
      '247 persons with disabilities empowered and supported.',
      'Mental-health needs identified, with on-the-spot counseling and referrals.',
      'Raised disability awareness across the community.',
      'A stronger network of ongoing support for PWDs.',
    ],
    stats: [
      { value: '247', label: 'People supported' },
      { value: '50', label: 'Bags of rice donated' },
      { value: '200', label: 'Bags of water given' },
      { value: 'Free', label: 'Psychological screenings' },
    ],
    tiers: [
      { amount: 100, title: 'Relief Box', impact: 'A box of rice, water and essentials for a PWD household.', image: '/images/projects/pwd/img-3.jpg' },
      { amount: 300, title: 'Inclusion Pack', impact: 'Relief plus a mental-health screening for a person with a disability.', image: '/images/projects/pwd/img-5.jpg' },
      { amount: 700, title: 'Empower a Caregiver', impact: 'Supports a caregiver and family with resources and guidance.', image: '/images/projects/pwd/img-8.jpg' },
    ],
    testimonial: {
      quote:
        'For the first time I felt seen. I left believing my disability is not my inability.',
      name: 'Conference Attendee',
      role: 'Person with a disability (sample)',
      image: '/images/projects/pwd/img-5.jpg',
      placeholder: true,
    },
    partnersInvolved: [
      'West Mamprusi Municipal Assembly',
      'Department of Social Welfare',
      'TOLEGHCGH',
    ],
    cover: '/images/projects/pwd/img-2.jpg',
    gallery: imgs('pwd', 14),
  },
  {
    slug: 'back-to-school-empowerment-2023',
    title: 'Back-to-School Empowerment Conference',
    category: 'Education',
    status: 'completed',
    date: '14 September 2023',
    year: 2023,
    location: 'Mbanayili DA Primary School, Tamale',
    metricLabel: 'Students',
    metricValue: '400',
    tagline: 'Equipping the next generation to learn and thrive.',
    summary:
      'Inspiring and equipping 400 junior-high students with school supplies, motivation and guidance for the digital age.',
    need: [
      'Many students in deprived schools start the year without basic materials like exercise books and pens, and with little guidance on using technology and social media safely.',
      'The Back-to-School Empowerment Conference set out to remove those barriers — equipping students to learn, stay motivated and navigate the digital world responsibly.',
    ],
    description: [
      'The Back-to-School Empowerment Conference was held on 14 September 2023 at Mbanayili DA Primary School. It aimed to inspire and equip students to excel academically and navigate the digital age responsibly.',
      'A total of 400 students from Junior High 1 to Junior High 2 attended, alongside teachers, school staff, guest speakers and volunteers.',
    ],
    highlights: [
      'Motivational talk by Mr. Kwame Boateng on focus, perseverance and goal-setting.',
      'Main talk on technology and responsible social-media use by Ms. Linda Mensah.',
      'School-supply packs for every student (exercise books, pens and pencils).',
      'Awards and certificates for best-performing students and prefects.',
    ],
    outcomes: [
      '400 students reached, motivated and equipped for the school year.',
      'Greater awareness of safe and responsible technology use.',
      'Excellence recognized and celebrated among students and prefects.',
      'A positive example set to encourage continued academic success.',
    ],
    stats: [
      { value: '400', label: 'Students reached' },
      { value: '5', label: 'Exercise books each' },
      { value: '2', label: 'Expert speakers' },
      { value: 'JHS 1–2', label: 'Year groups served' },
    ],
    tiers: [
      { amount: 50, title: 'School Supply Pack', impact: 'Exercise books, pens and pencils for one student.', image: '/images/projects/back-to-school/img-2.jpg' },
      { amount: 250, title: 'Sponsor a Term', impact: 'Helps keep a struggling student in school for a term.', image: '/images/projects/back-to-school/img-4.jpg' },
      { amount: 1000, title: 'Equip a Classroom', impact: 'Supplies a whole class with materials for the new year.', image: '/images/projects/back-to-school/img-7.jpg' },
    ],
    testimonial: {
      quote:
        'The conference gave my children the books and confidence they needed for the new school year.',
      name: 'Parent, Mbanayili',
      role: 'Beneficiary (sample)',
      image: '/images/projects/back-to-school/img-6.jpg',
      placeholder: true,
    },
    partnersInvolved: ['Mbanayili DA Primary School', 'Ghana Education Service'],
    cover: '/images/projects/back-to-school/img-1.jpg',
    gallery: imgs('back-to-school', 12),
  },
  {
    slug: 'dining-with-the-project-2022',
    title: 'Dining With The Project',
    category: 'Food & Community',
    status: 'completed',
    date: 'February 2022',
    year: 2022,
    location: 'Tamale, Northern Region',
    metricLabel: 'Focus',
    metricValue: 'Food & Dignity',
    tagline: 'Sharing a meal, restoring dignity.',
    summary:
      'One of our earliest outreaches — sharing food, household essentials and fellowship with families in need around Tamale.',
    need: [
      'Hunger and isolation weigh heavily on vulnerable families. Beyond food, people long to be seen, valued and treated with dignity.',
      'Dining With The Project was our response — combining practical relief with genuine fellowship, sharing a meal as equals with our neighbours in need.',
    ],
    description: [
      'Dining With The Project was one of the organization’s earliest community outreaches. The team came together to share food, distribute household essentials and offer fellowship to families in need around Tamale.',
      'Reflecting the scriptural principle of feeding the hungry, the outreach combined practical relief with genuine human connection — embodying the project’s “Humanity at Heart” spirit from its very first days.',
    ],
    highlights: [
      'Distribution of food and household essentials to families in need.',
      'Fellowship and a shared meal with the community.',
      'Words of encouragement and prayer with beneficiaries.',
    ],
    outcomes: [
      'Immediate relief delivered to vulnerable families.',
      'Stronger bonds built within the local community.',
      'A foundation laid for the project’s wider humanitarian work.',
    ],
    stats: [
      { value: '2022', label: 'Our first major outreach' },
      { value: 'Food', label: '+ household essentials' },
      { value: 'Families', label: 'Reached with dignity' },
    ],
    tiers: [
      { amount: 100, title: 'A Family Food Box', impact: 'Rice, water and staple foods for a family in need.', image: '/images/projects/dining/img-1.jpg' },
      { amount: 250, title: 'Household Essentials', impact: 'Food plus household items like detergent and tissue.', image: '/images/projects/dining/img-5.jpg' },
      { amount: 600, title: 'Feed Several Families', impact: 'Supports a small feeding outreach for multiple households.', image: '/images/projects/dining/img-8.jpg' },
    ],
    partnersInvolved: ['Community volunteers'],
    cover: '/images/projects/dining/img-1.jpg',
    gallery: imgs('dining', 12),
  },
];

export const featuredProjects = projects.filter((p) => p.status === 'completed').slice(0, 3);

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
