import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '../lib/utils'

export function Home() {
  const [currentCase, setCurrentCase] = useState(0)
  const [isCaseExpanded, setIsCaseExpanded] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)

  const breakthroughCases = [
    {
      title: "Advanced HIPEC Procedure for Ovarian Cancer",
      content: [
        "A 55-year-old woman diagnosed with advanced high-grade serous ovarian cancer presented after completing three cycles of neoadjuvant chemotherapy. She had responded well to treatment, with imaging showing significant disease resolution and tumour markers returning to normal levels.",
        "Following a comprehensive evaluation, she was planned for interval debulking surgery combined with Heated Intraperitoneal Chemotherapy (HIPEC). After detailed counselling and preoperative optimisation, the patient underwent surgery under the care of the expert team.",
        "A meticulous cytoreductive procedure was performed to remove all visible disease, followed by 90 minutes of HIPEC. The patient's recovery was exceptional, and she was discharged on the 5th postoperative day in stable condition.",
        "This breakthrough highlight's our hospital's expertise in managing complex high-risk oncology conditions with precision, resulting in a successful recovery and improved quality of life for the patient."
      ],
      image: "/case1.png",
      doctors: "Dr. Rachit Saxena, Dr. Vikas Kumar Keshari, and Dr. Kushant Gupta"
    },
    {
      title: "Complex CABG in a High-Risk Cardiac Patient",
      content: [
        "A 65-year-old male patient, weighing 44 kg, presented with long-standing coronary artery disease, a recent myocardial infarction, critical multivessel disease, unstable angina, and severe left ventricular dysfunction with a left ventricular ejection fraction (LVEF) of 20-25%.",
        "Considering the complexity of his condition, he underwent coronary artery bypass grafting (CABG) under the care of the expert cardiac team. The procedure was successfully performed, with the patient requiring minimal inotropic support and no intra-aortic balloon pump (IABP).",
        "He was extubated within four hours, reflecting a stable and well-managed immediate postoperative course. Post-surgery, the patient was closely monitored and managed with a highly calibrated clinical approach.",
        "The patient demonstrated steady clinical improvement, with stabilising metabolic parameters and gradual return to normal physiological activity. This enabled the phased withdrawal of advanced support measures, resulting in a successful recovery."
      ],
      image: "/case2.png",
      doctors: "Dr. Sandeep Singh, Dr. Anita Verma, and Dr. Rohan Mehra"
    },
    {
      title: "Robotic Neurosurgery for Complex Brain Tumor",
      content: [
        "A 42-year-old patient presented with a deep-seated lesion in the thalamic region, causing progressive motor deficits and severe headaches. Traditional surgical approaches carried significant risks of permanent neurological damage.",
        "Our neurosurgical team utilized a state-of-the-art robotic-assisted platform combined with real-time intraoperative MRI guidance. This allowed for sub-millimetric precision during the resection of the tumor, sparing critical neural pathways.",
        "The integration of AI-driven surgical planning enabled the team to navigate the complex vascular structure of the brain with unprecedented safety. The tumor was completely resected with zero deficit to the patient's motor or cognitive functions.",
        "The patient's recovery was remarkably swift, with discharge on the 3rd postoperative day. This case represents the pinnacle of neurosurgical innovation available at Lala Mahender Aggarwal Hospital."
      ],
      image: "/case3.png",
      doctors: "Dr. Vikram Sethi, Dr. Priya Chawla, and Dr. Amit Shah"
    }
  ]

  const experts = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Cardiology Director',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ3z0JKpfj49BinEPSJzdZ0FmkjNN7oCrzNiNljjZ6NA0qLaScWFvOZOjTKsJKvnLuJxxn5ppEcixv9LL0Q7vZTS76GF01NQC_W4doPu3awOyiRSFrX-r7ccmvyNby_6m3Iy69dm9adHff_oMfLBUl4GCbcBSdK6mooSrhPm_jTN-mLlrWN7Ct4_N7jaM2s25mXJugP9mnPOLPh-gt61ZnkDpX-ZntlyhUJ3v5_sTQ84jhjUvL7vC0yGejR1zc5hVdyJchKmz-mjKy'
    },
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Orthopedic Specialist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZjhWQasze9sO_UmQnsqo9a6J8cMtmcVCPaScjeTXY_L_jEyWLL6VY5PQXKSnQOfKqyiLRcfWTrZmxdhDHj3kymTLTKLmNh-skGCEpRyKTljJTT-uUwou7HdGG88zXnd1LYe7W65aQkeIWWFeSz9krV4ilE-veHJ7fV53vwX-ZrC3l2EVM8pl2YiJUP-z8M5b8KLZxlVCLRdR8XN4G68gFxo2lRoFUzzQSwLhBhpVssmNkxPUVnJ6y3AIQilJ312ISKhZdlKr7T22T'
    },
    {
      name: 'Dr. Maria Elena',
      role: 'Pediatrics Care',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFjJC8WpIVBy3veK3zdwwl9gWDGOEpnPiwxw3C97XEMhFCtRkEn72w9YYiy5l1ZwiVDCnkHJ8wU3qVUDpiU8lcq4oMT8ihk_BWOKjDsJFSbH6bdUN9uECEQH0h4dohvp08ZZ92me7_j0vxYeSVSoXoGXiR5T83NOl5oeqzMjf77Rgaedwxmb4t9zkDWpqHMckUJNkAS2rG3MEriUpjnrmfQ2-UI-uib1WR_Z-DgWfjagcPiuwWKjQl8FwRgt12l16gTtaNElDsxgcX'
    }
  ]

  const services = [
    { title: 'Cardiology Unit', desc: 'Advanced heart screenings, robotic-assisted surgery, and comprehensive post-operative cardiac rehabilitation.', icon: 'cardiology' },
    { title: 'Neurology Sciences', desc: 'Specialized care for neurological disorders utilizing 3T MRI diagnostics and expert neurosurgical teams.', icon: 'neurology' },
    { title: 'Radiology Imaging', desc: 'High-precision diagnostic imaging including PET-CT scans and advanced ultrasound for accurate medical reports.', icon: 'radiology' },
    { title: 'Blood Center', desc: 'A high-tech hematology laboratory supporting all specialized medical and surgical branches in the network.', icon: 'bloodtype' },
    { title: '24/7 Emergency', desc: 'Rapid response trauma center equipped to handle life-threatening situations with dedicated emergency physicians.', icon: 'emergency' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-14 overflow-hidden bg-[url(/hero-mobile.png)] md:bg-[url(/image5.png)] bg-cover bg-center">
        {/* Main Hero Image */}

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-32">
          <div className="lg:col-span-5 py-16 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-slate-900 text-[42px] md:text-[70px] lg:text-[60px] leading-[1.05] mb-8 md:mb-12 font-bold tracking-tight text-white"
            >
              Compassionate <br className="hidden md:block" />care, exceptional<br className="hidden md:block" />results.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-16"
            >
              <div className="flex flex-col items-center md:items-start gap-1 shrink-0">
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] text-white">LMA Hospital</span>
                <div className="w-10 h-[2px] bg-primary"></div>
              </div>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-sm font-medium text-white">
                Our team of experienced doctors and healthcare professionals are committed to providing quality care and personalized attention to our patients.
              </p>
            </motion.div>
          </div>

          {/* Floating Pill Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex absolute top-3 -right-14 bg-white/60 backdrop-blur-2xl p-2 pr-6 rounded-full items-center gap-4 shadow-2xl border border-white/50"
          >
            <div className="flex -space-x-3 ml-1">
              {[1, 2, 3].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?u=doc${i}`}
                  alt="Doctor"
                  className="w-7 h-7 rounded-full border-4 border-white/80 object-cover shadow-sm"
                />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <div className="text-xl font-black text-slate-900 leading-none">150K +</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Patient Recover</div>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-white text-[18px] font-black">check</span>
              </div>
            </div>
          </motion.div>


          {/* Expanded Bottom Stats Bar */}
          <div className="hidden lg:block absolute -bottom-[20px] -right-[9rem] max-w-[80%]">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/50 backdrop-blur-2xl rounded-tl-[50px] px-16 py-10 flex justify-between gap-16 border-t border-l border-white/40 shadow-[-20px_-20px_50px_-15px_rgba(0,0,0,0.05)]"
            >
              {[
                { value: '20+', label: 'years of experience' },
                { value: '95%', label: 'patient satisfaction' },
                { value: '5,000+', label: 'patients annually' },
                { value: '10+', label: 'staff doctors' },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start group">
                  <div className="text-[52px] font-black text-zinc-900 leading-none mb-3 tracking-tighter group-hover:text-primary transition-colors duration-500">{stat.value}</div>
                  <div className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] opacity-60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </section>

      {/* Technology & Infrastructure Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-900 text-[40px] md:text-[52px] font-bold mb-6"
          >
            World-Class Technology, Treatment & Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-5xl mx-auto text-sm md:text-base leading-relaxed opacity-80"
          >
            For over 3 decades, Lala Mahender Aggarwal Hospital has truly stood by every patient's side as a trustworthy and reliable source. It first began as a mission to provide better quality healthcare which is easily accessible to everyone. We make one simple promise: to bring together the expertise of exceptional doctors and the warmth of genuine care to every patient.
          </motion.p>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Side: Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-[500px] lg:h-auto group relative rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/10"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5XJIVDMqrKk_TpX5fOx48ogHdv-f-W1maygHA4_cTQsbcavZuxYCuPvMadCw6h1RmZ-izgPO9c4w9nZ_oVLTJ5rTldxZWDI9DSH86A2AGdJPmre2R32WjT4C3IhiQiImC_hzyVxB6KYwTVn3g357zesKNby24GbT8vNcdA5pDs0_BZ_Q6BPlHm7BdaM3TJX1tPCFgotpV8T-71lYvCUqdAsVwc5dP8Qekh29RRGfUrtOepz67QLyybLuAtO0yjggppXju6d-Fuhms"
              alt="Technology Video"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl fill-1">play_arrow</span>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-blue-900/80 to-transparent">
              <h4 className="text-white text-xl font-bold">Trusted Feedback, Trusted Care</h4>
            </div>
          </motion.div>

          {/* Right Side: 4 Image Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Technology-Driven Healthcare',
                desc: 'LMA Hospital integrates next-generation medical technology with internationally benchmarked protocols to deliver precise, safe, and effective treatments.',
                img: '/tech4.png'
              },
              {
                title: 'World-Class Healthcare Infrastructure',
                desc: 'Our facilities are designed to provide a healing environment with state-of-the-art infrastructure that meets global safety and hygiene standards.',
                img: '/tech1.png'
              },
              {
                title: '24/7 Critical Care & Emergency',
                desc: 'A high-speed emergency response trauma center equipped to handle life-threatening situations with dedicated emergency physicians.',
                img: '/tech3.png'
              },
              {
                title: 'Next-Generation Diagnostics',
                desc: 'Utilizing 3T MRI diagnostics and expert neurosurgical teams to provide high-precision diagnostic imaging and accurate reports.',
                img: '/tech2.png'
              }
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative h-[280px] rounded-[32px] overflow-hidden group shadow-xl shadow-blue-900/5"
              >
                <img src={tech.img} alt={tech.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                {/* Default Heading (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                  <h4 className="text-white text-xs font-bold tracking-wide uppercase leading-tight">{tech.title}</h4>
                </div>

                {/* Hover Slide-up Content */}
                <motion.div
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="absolute inset-0 bg-[#30628b]/95 flex flex-col justify-center p-8 text-center"
                >
                  <h4 className="text-white text-base font-bold mb-3">{tech.title}</h4>
                  <div className="w-10 h-[2px] bg-white/40 mx-auto mb-4"></div>
                  <p className="text-white/80 text-xs leading-relaxed">
                    {tech.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Statistics Section (Refined) */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white relative z-10">
          {[
            { value: '30+', label: 'Years With You' },
            { value: '38+', label: 'Awards Won' },
            { value: '250+', label: 'Specialists' },
            { value: '100K+', label: 'Happy Patients' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-1 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experts Section (Refined) */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl space-y-3">
              <h2 className="text-on-surface">Meet Our Experts</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Specialists who are world-renowned leaders in their respective fields, dedicated to clinical innovation.
              </p>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold group text-sm">
              View All Doctors
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group border border-outline-variant/10"
              >
                <div className="aspect-[5/4] overflow-hidden relative">
                  <img src={expert.image} alt={expert.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 text-center space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-on-surface leading-tight">{expert.name}</h4>
                    <p className="text-primary font-bold text-[11px] uppercase tracking-widest mt-1.5">{expert.role}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-2.5 rounded-lg bg-surface-container text-on-surface font-bold text-[10px] uppercase tracking-wider hover:bg-primary hover:text-white transition-all">Profile</button>
                    <button className="py-2.5 rounded-lg bg-primary text-white font-bold text-[10px] uppercase tracking-wider hover:opacity-90 shadow-md shadow-primary/10 transition-all">Book Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Refined) */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-on-surface">Specialized Services</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Comprehensive expert care through meticulous diagnostics and imaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors">{service.icon}</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-3">{service.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link">
                Details
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          ))}

          <div className="p-8 bg-primary rounded-2xl shadow-xl flex flex-col justify-between text-white group overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-3">Looking for an Expert?</h4>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                Find your specialist among our world-renowned doctors and book now.
              </p>
            </div>
            <button className="bg-white text-primary px-6 py-4 rounded-xl font-bold flex items-center justify-between group hover:scale-[1.02] transition-transform relative z-10 shadow-lg text-xs uppercase tracking-wider">
              Find A Doctor
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Global Stats (Refined) */}
      <section className="py-20 bg-surface-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'medical_services', val: '50+', label: 'Specialties' },
            { icon: 'bed', val: '200+', label: 'Bed Capacity' },
            { icon: 'precision_manufacturing', val: '15K+', label: 'Surgeries/Yr' },
            { icon: 'mood', val: '98%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-primary text-center hover:translate-y-[-4px] transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">{stat.icon}</span>
              <div className="text-3xl font-bold text-on-surface mb-1">{stat.val}</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Breakthrough Section (Custom Slider) */}
      <section className="py-24 bg-surface-container-low/30 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              >
                <div className="space-y-8 py-4">
                  <motion.div
                    layout
                    className={cn(
                      "space-y-6 transition-all duration-500 overflow-hidden",
                      isCaseExpanded ? "h-auto" : "h-auto lg:h-[450px]"
                    )}
                  >
                    <h2 className="text-slate-900 text-3xl md:text-5xl font-bold leading-tight">
                      {breakthroughCases[currentCase].title}
                    </h2>

                    <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                      {breakthroughCases[currentCase].content.map((p, i) => (
                        <p key={i} className={cn(!isCaseExpanded && i > 0 ? "hidden lg:block" : "")}>{p}</p>
                      ))}

                      {isCaseExpanded && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="pt-4 space-y-4 border-t border-slate-200"
                        >
                          <div className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-2">Treatment By:</div>
                          <div className="text-primary font-bold text-sm">{breakthroughCases[currentCase].doctors}</div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  <button
                    onClick={() => setIsCaseExpanded(!isCaseExpanded)}
                    className="text-primary font-bold text-sm uppercase tracking-widest hover:underline decoration-primary/30 flex items-center gap-2"
                  >
                    {isCaseExpanded ? 'Read Less' : 'Read More'}
                    <span className={cn("material-symbols-outlined text-sm transition-transform duration-300", isCaseExpanded ? "rotate-180" : "")}>
                      expand_more
                    </span>
                  </button>
                </div>

                {/* Right Side: Image */}
                <motion.div
                  layout
                  className="relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/10 group h-[300px] md:h-[500px]"
                >
                  <img
                    src={breakthroughCases[currentCase].image}
                    alt={breakthroughCases[currentCase].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-center gap-8 mt-16">
              <button
                onClick={() => {
                  setCurrentCase((prev) => (prev === 0 ? breakthroughCases.length - 1 : prev - 1))
                  setIsCaseExpanded(false)
                }}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <div className="flex gap-3">
                {breakthroughCases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentCase(i)
                      setIsCaseExpanded(false)
                    }}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      currentCase === i ? "bg-primary w-8" : "bg-slate-200 hover:bg-slate-300"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentCase((prev) => (prev === breakthroughCases.length - 1 ? 0 : prev + 1))
                  setIsCaseExpanded(false)
                }}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Hope (Continuous Ticker) */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-900 text-4xl md:text-5xl font-bold"
          >
            Stories of Hope
          </motion.h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Voices of recovery and gratitude from those who trusted us with their care.</p>
        </div>

        <div className="relative flex overflow-hidden">
          {/* Gradient Masks for Film Effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Ticker Container */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity
            }}
            className="flex gap-6 whitespace-nowrap py-8"
          >
            {[...Array(2)].map((_, containerIdx) => (
              <div key={containerIdx} className="flex gap-6">
                {[
                  { name: 'Robert Wilson', role: 'Cardiac Patient', text: 'The cardiac team here saved my life. Truly world-class professionalism.' },
                  { name: 'Emily Thompson', role: 'Mother', text: 'LMA Hospital has become family to us over the years. We trust them completely.' },
                  { name: 'Arthur Vance', role: 'Orthopedic', text: 'My knee surgery went smoother than imagined. I\'m back on the trails!' },
                  { name: 'Sarah Johnson', role: 'Wellness', text: 'Luxurious facilities combined with exceptional medical expertise.' },
                  { name: 'David Chen', role: 'Neurology', text: 'The precision of the neurosurgical team is unmatched. I owe my recovery to them.' },
                  { name: 'Lisa Ray', role: 'Oncology', text: 'Compassionate care that goes beyond medicine. They supported me at every step.' },
                  { name: 'Michael Brown', role: 'Emergency', text: 'Incredible response time during a critical moment. Best emergency care in the city.' },
                  { name: 'Sophia Gupta', role: 'Pediatrics', text: 'The pediatric ward is so welcoming. My kids actually enjoy visiting the doctor now.' },
                  { name: 'James Miller', role: 'Surgery', text: 'Advanced technology and skilled hands. My recovery time was cut in half.' },
                  { name: 'Anita Desai', role: 'Gastroenterology', text: 'Clear communication and expert diagnosis. Highly recommend LMA Hospital.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-[350px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between whitespace-normal"
                  >
                    <div className="space-y-4">
                      <div className="flex gap-1 text-amber-400">
                        {[1, 2, 3, 4, 5].map(s => (
                          <span key={s} className="material-symbols-outlined text-sm fill-1">star</span>
                        ))}
                      </div>
                      <p className="text-slate-600 text-[15px] italic leading-relaxed">"{item.text}"</p>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-xs">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                        <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{item.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* FAQ Section (Redesigned) */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="bg-slate-50/50 rounded-[32px] md:rounded-[48px] p-6 md:p-16 border border-slate-100 relative overflow-hidden">
            {/* Background Pattern Hint */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100" stroke="#30628b" fill="transparent" strokeWidth="0.1" />
                <path d="M0 80 C 30 10 60 10 100 80" stroke="#30628b" fill="transparent" strokeWidth="0.1" />
                <path d="M0 60 C 40 20 70 20 100 60" stroke="#30628b" fill="transparent" strokeWidth="0.1" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-slate-900 text-2xl md:text-4xl font-bold mb-8 md:mb-10"
                >
                  Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                  {[
                    { q: 'What specialities do I receive at LMA Hospital?', a: 'LMA Hospital offers expert care across Oncology, Neurosciences, Cardiac Surgery, Orthopaedics, Paediatrics, and more. We integrate advanced technology with a deeply personal touch for every patient.' },
                    { q: 'Can I consult doctors from home?', a: 'Yes, we provide secure tele-consultation services for follow-ups and non-emergency consultations, allowing you to connect with our specialists from the comfort of your home.' },
                    { q: 'Are lab and imaging services available 24/7?', a: 'Our diagnostic wing, including 3T MRI, PET-CT, and advanced pathology labs, operates round-the-clock to support both emergency and planned medical requirements.' },
                    { q: 'Can I access the pharmacy 24/7?', a: 'Yes, our in-house pharmacy is fully stocked and operational 24/7 to ensure you have immediate access to all prescribed medications at any time.' },
                  ].map((faq, i) => {
                    const isOpen = activeFaq === i;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "rounded-2xl transition-all duration-300 overflow-hidden border",
                          isOpen ? "bg-white shadow-xl shadow-blue-900/5 border-primary/20" : "bg-white/50 border-slate-200"
                        )}
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? -1 : i)}
                          className={cn(
                            "w-full flex justify-between items-center p-4 md:p-5 text-left transition-colors duration-300",
                            isOpen ? "bg-[#30628b] text-white" : "text-slate-700 hover:text-primary"
                          )}
                        >
                          <span className="font-bold text-[13px] md:text-base pr-4 md:pr-8">{faq.q}</span>
                          <span className={cn(
                            "material-symbols-outlined transition-transform duration-300 text-lg md:text-xl",
                            isOpen ? "rotate-180" : ""
                          )}>
                            {isOpen ? 'remove_circle' : 'add_circle'}
                          </span>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 md:p-6 text-slate-500 text-xs md:text-sm leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[300px] md:h-[400px] lg:h-[550px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl"
              >
                <img
                  src="/faq-doctor.png"
                  alt="Doctor with Family"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
