// Rich profile for the founder, used on the dedicated Founder page (/founder).

export interface Award {
  title: string;
  org: string;
  year: string;
}

export const founderProfile = {
  name: 'Prince Kwakuvi Amaglo',
  role: 'Founder & CEO · The Jesus Heart Project',
  tagline: 'Visionary leader dedicated to uplifting the underprivileged through faith and action.',
  photos: [
    '/images/team/founder-1.jpg',
    '/images/team/founder-2.jpg',
    '/images/team/founder-3.jpg',
    '/images/team/founder-4.jpg',
  ],
  hats: ['Entrepreneur', 'Television Producer', 'Author', 'Philanthropist', 'Broadcaster'],
  // Full biography (verbatim).
  bio: [
    'Prince Kwakuvi Amaglo is a dynamic figure in the Ghanaian multimedia landscape, recognized for his multifaceted contributions as an entrepreneur, television producer, author, and philanthropist. As the visionary executive director of Atsu Prince A. Multimedia, he has established himself as a professional broadcaster and production manager, collaborating with esteemed media houses such as Sunshine TV, North Television Tamale, Mighty TV, and Main Gate TV.',
    'Prince’s academic background is impressive, holding a diploma in broadcast journalism and media studies from Doxa Open University. He further advanced his education with a Master’s in International Corporate Governance from Uni Athena University. His commitment to lifelong learning is evident through various certifications, including Humanitarian Management Essentials and AI Career Essentials. Currently, he is pursuing an Executive Diploma in Operations and Project Management, showcasing his dedication to personal and professional growth.',
    'Beyond his professional endeavors, Prince is deeply committed to humanitarian efforts. He is the founder and CEO of THE JESUS HEART PROJECT, a foundation dedicated to uplifting the underprivileged in his community. His philanthropic work is a reflection of his Christian values, as he actively participates in the Sanctuary of Wind and Fire Assemblies of God Church Tamale, embodying the spirit of service and compassion.',
    'Prince is also an accomplished author, having penned the groundbreaking book “Church Media: The Art of Worship.” In this work, he explores the intersection of media and faith, providing insights into the future of church communication and the vital role that media plays in worship.',
    'He was endorsed by FOYA, as Young Founder of the Year and Young Start-up Company of the Year under 30 years, in 2021 and 2022 organized in Kenya, and was recognized and nominated for best graphic designer (pencil sketch drawing) by the Ghana Youth Awards 2021, taking second position in that category in the country.',
    'With his inspiring journey and diverse talents, Prince Kwakuvi Amaglo stands as a formidable force in both the media and humanitarian sectors. His work not only empowers others to harness their potential for positive change but also paves the way for innovative approaches to media in the context of faith and community service. Through his relentless pursuit of knowledge and commitment to giving back, Prince continues to make significant waves, inspiring many along the way.',
  ],
  pullQuote:
    'Through his relentless pursuit of knowledge and commitment to giving back, Prince continues to make significant waves — inspiring many along the way.',
  education: [
    'Diploma, Broadcast Journalism & Media Studies — Doxa Open University',
    'Master’s, International Corporate Governance — Uni Athena University',
    'Certification — Humanitarian Management Essentials',
    'Certification — AI Career Essentials',
    'Executive Diploma, Operations & Project Management (in progress)',
  ],
  mediaHouses: ['Sunshine TV', 'North Television Tamale', 'Mighty TV', 'Main Gate TV'],
  church: 'Sanctuary of Wind and Fire Assemblies of God Church, Tamale',
  awards: [
    { title: 'Young Founder of the Year', org: 'FOYA — Kenya', year: '2021 & 2022' },
    { title: 'Young Start-up Company of the Year (under 30)', org: 'FOYA — Kenya', year: '2021 & 2022' },
    { title: 'Best Graphic Designer, Pencil Sketch — 2nd place', org: 'Ghana Youth Awards', year: '2021' },
  ] as Award[],
};
