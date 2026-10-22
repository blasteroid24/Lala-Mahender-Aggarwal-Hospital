/**
 * Single source of truth for all site content.
 * To reuse this template for another hospital, edit this file (and swap the
 * images in /public/img) — no component changes needed.
 *
 * NOTE: names, figures, prices and testimonials below are placeholders.
 * Replace them with verified information from the client before launch.
 */
import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplet,
  Eye,
  FlaskConical,
  HeartPulse,
  Microscope,
  Ribbon,
  ScanLine,
  Siren,
  Stethoscope,
  Video,
} from 'lucide-react'

export const hospital = {
  name: 'Lala Mahender Aggarwal Hospital',
  shortName: 'LMA Hospital',
  tagline: 'Multi-speciality Hospital',
  established: 1994,
  phone: '+91 99999 99999',
  emergencyPhone: '+91 12345 67890',
  whatsapp: '919999999999',
  email: 'care@lmahospital.in',
  address: 'Gla Badi, Nagla Baheri, Uttar Pradesh 250101',
  mapsUrl: 'https://maps.google.com/?q=Nagla+Baheri+Uttar+Pradesh+250101',
  hours: { opd: 'Mon – Sat · 9:00 AM – 8:00 PM', emergency: 'Open 24 × 7 × 365' },
  socials: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
}

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Specialities', path: '/specialities' },
  { name: 'Find a Doctor', path: '/doctors' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export type Speciality = {
  slug: string
  name: string
  icon: LucideIcon
  short: string
  description: string
  highlights: string[]
}

export const specialities: Speciality[] = [
  {
    slug: 'cardiology',
    name: 'Cardiology & Cardiac Surgery',
    icon: HeartPulse,
    short: 'Heart screenings, interventions and bypass surgery.',
    description:
      'Comprehensive heart care from preventive screening and 24/7 cath-lab interventions to complex bypass and valve surgery, followed by structured cardiac rehabilitation.',
    highlights: ['Cath lab & angioplasty', 'CABG & valve surgery', 'Cardiac rehab'],
  },
  {
    slug: 'neurosciences',
    name: 'Neurosciences',
    icon: Brain,
    short: 'Stroke, epilepsy, spine and brain surgery.',
    description:
      'An integrated neurology and neurosurgery team treating stroke, epilepsy, movement disorders, brain tumours and spine conditions with 3T MRI-guided precision.',
    highlights: ['Stroke unit', 'Navigation-guided surgery', 'Spine care'],
  },
  {
    slug: 'oncology',
    name: 'Cancer Care',
    icon: Ribbon,
    short: 'Medical, surgical and radiation oncology.',
    description:
      'Tumour-board led treatment plans combining surgical oncology, chemotherapy, immunotherapy and advanced procedures like HIPEC, with dedicated counselling support.',
    highlights: ['Tumour board', 'HIPEC', 'Day-care chemotherapy'],
  },
  {
    slug: 'orthopaedics',
    name: 'Orthopaedics & Joint Replacement',
    icon: Bone,
    short: 'Joint replacement, sports injuries and trauma.',
    description:
      'Minimally invasive knee and hip replacement, arthroscopy, sports medicine and trauma surgery with a focus on early mobilisation and faster recovery.',
    highlights: ['Knee & hip replacement', 'Arthroscopy', 'Physiotherapy'],
  },
  {
    slug: 'paediatrics',
    name: 'Paediatrics & Neonatology',
    icon: Baby,
    short: 'Child health, vaccination and NICU.',
    description:
      'Child-friendly care from newborn to adolescence, including a Level III NICU, vaccinations, developmental assessments and paediatric emergencies.',
    highlights: ['Level III NICU', 'Vaccination clinic', 'Child development'],
  },
  {
    slug: 'gynaecology',
    name: "Obstetrics & Women's Health",
    icon: Stethoscope,
    short: 'Pregnancy care, birthing and gynaecology.',
    description:
      'Personalised maternity care, high-risk pregnancy management, laparoscopic gynaecology and fertility counselling in a warm, private setting.',
    highlights: ['High-risk pregnancy', 'Painless delivery', 'Laparoscopy'],
  },
  {
    slug: 'radiology',
    name: 'Radiology & Imaging',
    icon: ScanLine,
    short: '3T MRI, CT, ultrasound and digital X-ray.',
    description:
      'High-precision diagnostic imaging including 3T MRI, multi-slice CT, Doppler and digital X-ray with fast, specialist-reported results.',
    highlights: ['3T MRI', '128-slice CT', 'Same-day reports'],
  },
  {
    slug: 'laboratory',
    name: 'Laboratory Medicine',
    icon: FlaskConical,
    short: 'Pathology, microbiology and blood bank.',
    description:
      'A fully automated, round-the-clock laboratory and blood centre supporting every clinical department with accurate, timely results.',
    highlights: ['24/7 lab', 'Blood centre', 'Home sample collection'],
  },
  {
    slug: 'nephrology',
    name: 'Nephrology & Urology',
    icon: Droplet,
    short: 'Dialysis, kidney stones and prostate care.',
    description:
      'Complete kidney and urinary care including haemodialysis, laser stone removal and minimally invasive prostate procedures.',
    highlights: ['Dialysis unit', 'Laser lithotripsy', 'Prostate care'],
  },
  {
    slug: 'gastro',
    name: 'Gastroenterology',
    icon: Microscope,
    short: 'Endoscopy, liver and digestive care.',
    description:
      'Diagnostic and therapeutic endoscopy, liver disease management and GI surgery under one coordinated team.',
    highlights: ['Endoscopy & ERCP', 'Liver clinic', 'GI surgery'],
  },
  {
    slug: 'ent-eye',
    name: 'ENT & Ophthalmology',
    icon: Eye,
    short: 'Ear, nose, throat and eye care.',
    description:
      'Modern ENT and eye care including cataract surgery, sinus endoscopy and hearing assessments.',
    highlights: ['Phaco cataract surgery', 'Sinus endoscopy', 'Audiology'],
  },
  {
    slug: 'emergency',
    name: 'Emergency & Trauma',
    icon: Siren,
    short: 'Round-the-clock emergency and critical care.',
    description:
      'A rapid-response emergency department with dedicated physicians, advanced life-support ambulances and a fully equipped ICU — open every hour of every day.',
    highlights: ['24/7 ER', 'ICU & HDU', 'ALS ambulances'],
  },
]

export type Doctor = {
  id: string
  name: string
  role: string
  speciality: string // matches Speciality.slug
  experience: number
  qualifications: string
  languages: string[]
  image?: string
  available: string
}

export const doctors: Doctor[] = [
  {
    id: 'neha-kapoor',
    name: 'Dr. Neha Kapoor',
    role: 'Senior Consultant, Cardiology',
    speciality: 'cardiology',
    experience: 16,
    qualifications: 'MBBS, MD, DM (Cardiology)',
    languages: ['English', 'Hindi'],
    image: '/img/doc-1.webp',
    available: 'Mon, Wed, Fri',
  },
  {
    id: 'arjun-mehta',
    name: 'Dr. Arjun Mehta',
    role: 'Director, Orthopaedics',
    speciality: 'orthopaedics',
    experience: 21,
    qualifications: 'MBBS, MS (Ortho), Fellowship Joint Replacement',
    languages: ['English', 'Hindi'],
    image: '/img/doc-2.webp',
    available: 'Tue, Thu, Sat',
  },
  {
    id: 'grace-thomas',
    name: 'Dr. Grace Thomas',
    role: 'Consultant, Paediatrics',
    speciality: 'paediatrics',
    experience: 12,
    qualifications: 'MBBS, MD (Paediatrics)',
    languages: ['English', 'Hindi'],
    image: '/img/doc-3.webp',
    available: 'Mon – Sat',
  },
  {
    id: 'rajesh-kumar',
    name: 'Dr. Rajesh Kumar',
    role: 'Medical Director, Internal Medicine',
    speciality: 'emergency',
    experience: 30,
    qualifications: 'MBBS, MD (Medicine), FICP',
    languages: ['English', 'Hindi', 'Punjabi'],
    image: '/img/doc-4.webp',
    available: 'Mon – Fri',
  },
  {
    id: 'vikram-sethi',
    name: 'Dr. Vikram Sethi',
    role: 'Senior Consultant, Neurosurgery',
    speciality: 'neurosciences',
    experience: 18,
    qualifications: 'MBBS, MS, MCh (Neurosurgery)',
    languages: ['English', 'Hindi'],
    image: '/img/doc-5.webp',
    available: 'Mon, Thu',
  },
  {
    id: 'rachit-saxena',
    name: 'Dr. Rachit Saxena',
    role: 'Consultant, Surgical Oncology',
    speciality: 'oncology',
    experience: 14,
    qualifications: 'MBBS, MS, MCh (Surgical Oncology)',
    languages: ['English', 'Hindi'],
    available: 'Tue, Fri',
  },
  {
    id: 'anita-verma',
    name: 'Dr. Anita Verma',
    role: 'Consultant, Obstetrics & Gynaecology',
    speciality: 'gynaecology',
    experience: 15,
    qualifications: 'MBBS, MS (OBG), DNB',
    languages: ['English', 'Hindi'],
    available: 'Mon – Sat',
  },
  {
    id: 'priya-chawla',
    name: 'Dr. Priya Chawla',
    role: 'Consultant, Radiology',
    speciality: 'radiology',
    experience: 11,
    qualifications: 'MBBS, MD (Radiodiagnosis)',
    languages: ['English', 'Hindi'],
    available: 'Mon – Sat',
  },
]

export const stats = [
  { value: 30, suffix: '+', label: 'Years of trusted care' },
  { value: 250, suffix: '+', label: 'Specialist doctors' },
  { value: 100, suffix: 'K+', label: 'Patients treated' },
  { value: 98, suffix: '%', label: 'Patient satisfaction' },
]

export const facilities = [
  {
    title: 'Robotic & Minimally Invasive Surgery',
    desc: 'Next-generation surgical platforms for smaller incisions, less pain and faster recovery.',
    img: '/img/tech4.webp',
    tag: 'Surgery',
  },
  {
    title: 'Advanced Critical Care',
    desc: 'Glass-walled ICUs with central monitoring and intensivists on site around the clock.',
    img: '/img/tech1.webp',
    tag: 'ICU',
  },
  {
    title: '3T MRI & Precision Diagnostics',
    desc: 'High-resolution imaging with specialist reporting, often available the same day.',
    img: '/img/tech2.webp',
    tag: 'Imaging',
  },
  {
    title: '24/7 Emergency & Trauma',
    desc: 'A rapid-response trauma bay with dedicated emergency physicians and ALS ambulances.',
    img: '/img/tech3.webp',
    tag: 'Emergency',
  },
  {
    title: 'Digital Command Centre',
    desc: 'Connected records and real-time monitoring that keep every care team in sync.',
    img: '/img/tech.webp',
    tag: 'Digital',
  },
]

export const caseStories = [
  {
    tag: 'Cancer Care',
    title: 'Advanced HIPEC procedure for ovarian cancer',
    summary:
      'A 55-year-old woman with advanced high-grade serous ovarian cancer underwent interval debulking surgery combined with 90 minutes of Heated Intraperitoneal Chemotherapy — and was discharged on the 5th post-operative day.',
    content: [
      'She had responded well to three cycles of neoadjuvant chemotherapy, with imaging showing significant disease resolution and tumour markers returning to normal.',
      'After detailed counselling and pre-operative optimisation, a meticulous cytoreductive procedure removed all visible disease, followed by HIPEC.',
      'Her recovery was exceptional — a reflection of our ability to manage complex, high-risk oncology conditions with precision.',
    ],
    image: '/img/case1.webp',
    doctors: 'Dr. Rachit Saxena, Dr. Vikas Kumar Keshari & Dr. Kushant Gupta',
    metric: { value: 'Day 5', label: 'Discharged' },
  },
  {
    tag: 'Cardiac Surgery',
    title: 'Complex CABG in a high-risk cardiac patient',
    summary:
      'A 65-year-old, 44 kg patient with critical multivessel disease and an ejection fraction of just 20–25% underwent bypass surgery without needing an intra-aortic balloon pump — and was extubated within four hours.',
    content: [
      'He presented with long-standing coronary artery disease, a recent heart attack, unstable angina and severe left-ventricular dysfunction.',
      'The procedure was performed with minimal inotropic support, followed by close, highly calibrated post-operative monitoring.',
      'Steady clinical improvement allowed phased withdrawal of advanced support and a successful recovery.',
    ],
    image: '/img/case2.webp',
    doctors: 'Dr. Sandeep Singh, Dr. Anita Verma & Dr. Rohan Mehra',
    metric: { value: '4 hrs', label: 'To extubation' },
  },
  {
    tag: 'Neurosurgery',
    title: 'Navigation-guided surgery for a deep brain tumour',
    summary:
      'A 42-year-old with a deep thalamic lesion had the tumour completely removed using robotic assistance and intra-operative imaging — with no motor or cognitive deficit.',
    content: [
      'Progressive weakness and severe headaches made treatment urgent, but conventional approaches carried a high risk of permanent damage.',
      'Robotic-assisted navigation and real-time imaging allowed sub-millimetre precision while sparing critical neural pathways.',
      'The patient was discharged on the 3rd post-operative day.',
    ],
    image: '/img/case3.webp',
    doctors: 'Dr. Vikram Sethi, Dr. Priya Chawla & Dr. Amit Shah',
    metric: { value: 'Day 3', label: 'Discharged' },
  },
]

export const testimonials = [
  { name: 'Ramesh Gupta', role: 'Cardiac patient', text: 'The cardiac team explained every step and treated me like family. I was back home sooner than I expected.' },
  { name: 'Pooja Sharma', role: 'New mother', text: 'From the first scan to delivery, the maternity team was calm, kind and always available. Truly grateful.' },
  { name: 'Arthur Vance', role: 'Knee replacement', text: 'My knee surgery went smoother than I imagined. Two months later I am walking every morning again.' },
  { name: 'Sunita Rawat', role: 'Daughter of patient', text: 'The ICU doctors updated us twice a day. That honesty and care meant everything to our family.' },
  { name: 'David Chen', role: 'Neurology', text: 'The precision of the neurosurgical team is remarkable. I owe my recovery to them.' },
  { name: 'Lisa Ray', role: 'Oncology', text: 'Compassionate care that goes beyond medicine. They supported me at every single step.' },
  { name: 'Mohit Aggarwal', role: 'Emergency', text: 'Incredible response time at 2 AM. The emergency team was ready the moment we arrived.' },
  { name: 'Sophia Gupta', role: 'Paediatrics', text: 'The children’s ward is so welcoming. My kids actually look forward to their check-ups now.' },
  { name: 'Anita Desai', role: 'Gastroenterology', text: 'Clear communication and an accurate diagnosis after months of uncertainty elsewhere.' },
  { name: 'Harish Bansal', role: 'Dialysis', text: 'Clean, punctual and caring. The dialysis staff know me by name and it makes a difference.' },
]

export const packages = [
  {
    name: 'Essential Health Check',
    price: '₹1,999',
    tests: 38,
    for: 'Adults under 35',
    items: ['Complete blood count', 'Blood sugar (fasting)', 'Lipid profile', 'Liver & kidney function', 'Physician consultation'],
  },
  {
    name: 'Comprehensive Check',
    price: '₹4,499',
    tests: 72,
    for: 'Adults 35+',
    featured: true,
    items: ['Everything in Essential', 'HbA1c & thyroid profile', 'ECG & chest X-ray', 'Ultrasound abdomen', 'Diet consultation'],
  },
  {
    name: 'Executive Heart Check',
    price: '₹7,999',
    tests: 85,
    for: 'High cardiac risk',
    items: ['Everything in Comprehensive', '2D Echo & TMT', 'Cardiac risk markers', 'Cardiologist consultation', 'Personalised care plan'],
  },
]

export const faqs = [
  { q: 'How do I book an appointment?', a: 'Use the “Book Appointment” button anywhere on this site, call our front desk, or message us on WhatsApp. You will receive a confirmation with your slot and doctor details.' },
  { q: 'Which specialities are available at LMA Hospital?', a: 'We offer care across cardiology, neurosciences, oncology, orthopaedics, paediatrics, women’s health, nephrology, gastroenterology, ENT, ophthalmology and more — supported by 24/7 emergency and critical care.' },
  { q: 'Can I consult a doctor from home?', a: 'Yes. Secure video consultations are available for follow-ups and non-emergency concerns. Choose “Video consult” when booking.' },
  { q: 'Are lab and imaging services available 24/7?', a: 'Our laboratory, CT and emergency imaging operate round the clock. MRI and other planned scans are scheduled with same-day reporting wherever possible.' },
  { q: 'Do you accept health insurance and cashless claims?', a: 'We work with most major insurers and TPAs for cashless treatment. Our insurance desk will help you with pre-authorisation and paperwork.' },
  { q: 'Is the pharmacy open all day?', a: 'Yes, our in-house pharmacy is fully stocked and open 24/7 so prescribed medicines are always available.' },
]

export const quickServices = [
  { icon: Activity, label: 'Health Check-ups', href: '/#packages' },
  { icon: FlaskConical, label: 'Lab Reports', href: '/contact' },
  { icon: Video, label: 'Video Consult', href: '/contact' },
]

export const values = [
  { title: 'Integrity', desc: 'Transparent advice, honest pricing and the highest ethical standards in every decision.' },
  { title: 'Innovation', desc: 'Continually adopting proven technology that leads to safer, better outcomes.' },
  { title: 'Empathy', desc: 'Treating every patient as family — with patience, dignity and warmth.' },
  { title: 'Excellence', desc: 'Evidence-based protocols, audited outcomes and a culture of continuous learning.' },
]

export const milestones = [
  { year: '1994', text: 'Founded as a 30-bed community hospital with a promise of accessible, quality care.' },
  { year: '2006', text: 'Expanded into a multi-speciality centre with dedicated cardiac and critical care units.' },
  { year: '2015', text: 'Launched advanced imaging with 3T MRI and a fully automated laboratory.' },
  { year: '2022', text: 'Introduced robotic-assisted surgery and a digital command centre.' },
  { year: 'Today', text: '250+ specialists, 200+ beds and more than 100,000 lives touched.' },
]
