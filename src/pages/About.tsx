import { motion } from 'motion/react'

export function About() {
  return (
    <div className="w-full bg-background pt-32 pb-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-on-surface tracking-tight leading-tight">
            Our Commitment to <br />
            <span className="text-primary italic">Global Healthcare</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed font-medium">
            Lala Mahender Aggarwal Hospital was founded with a single mission: to provide world-class medical excellence with a human touch that reaches every patient.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5XJIVDMqrKk_TpX5fOx48ogHdv-f-W1maygHA4_cTQsbcavZuxYCuPvMadCw6h1RmZ-izgPO9c4w9nZ_oVLTJ5rTldxZWDI9DSH86A2AGdJPmre2R32WjT4C3IhiQiImC_hzyVxB6KYwTVn3g357zesKNby24GbT8vNcdA5pDs0_BZ_Q6BPlHm7BdaM3TJX1tPCFgotpV8T-71lYvCUqdAsVwc5dP8Qekh29RRGfUrtOepz67QLyybLuAtO0yjggppXju6d-Fuhms" alt="Hospital Architecture" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-on-surface uppercase tracking-widest text-xs opacity-60">Our Mission</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-on-surface leading-tight">Leading through clinical excellence and empathy</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              For over three decades, we have been at the forefront of medical innovation. Our institution is not just about buildings and technology; it is about the thousands of families we have served and the lives we have transformed through dedicated care.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">30+</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">Years of Legacy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100K+</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-surface-container rounded-[50px] p-12 lg:p-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-on-surface">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', icon: 'verified_user', desc: 'We maintain the highest ethical standards in every medical procedure.' },
              { title: 'Innovation', icon: 'biotech', desc: 'Constantly integrating tomorrow\'s technology for better patient outcomes.' },
              { title: 'Empathy', icon: 'favorite', desc: 'Treating every patient like family with deep compassion and care.' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all text-center space-y-6">
                <span className="material-symbols-outlined text-primary text-[48px]">{value.icon}</span>
                <h4 className="text-2xl font-bold text-on-surface">{value.title}</h4>
                <p className="text-on-surface-variant font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
