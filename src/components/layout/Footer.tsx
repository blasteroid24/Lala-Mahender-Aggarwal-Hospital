import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Branding */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-[32px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield_with_heart
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight tracking-tighter">Lala Mahender Aggarwal</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] -mt-1">Hospital</span>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
            Dedicated to compassionate care and medical excellence across the globe. Our institution stands as a pillar of trust and healing.
          </p>
          <div className="flex gap-4">
            {['public', 'alternate_email', 'call'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-primary font-bold mb-8 text-xs uppercase tracking-[0.2em]">Quick Links</h5>
          <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
            {['Emergency Services', 'Specialist Directory', 'Medical Records', 'Careers'].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline decoration-primary/30">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h5 className="text-primary font-bold mb-8 text-xs uppercase tracking-[0.2em]">Departments</h5>
          <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
            {['Cardiology', 'Neurology', 'Orthopedics', 'Oncology'].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline decoration-primary/30">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h5 className="text-primary font-bold mb-8 text-xs uppercase tracking-[0.2em]">Contact Us</h5>
          <ul className="space-y-6 text-sm font-medium text-on-surface-variant">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>gla Badi, Nagla Baheri, Uttar Pradesh 250101</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <span>+91 999999999</span>
            </li>
            <li>
              <Link to="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline decoration-primary/30">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-outline-variant/30 text-center">
        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest opacity-60">
          © 2026 Lala Mahender Aggarwal Hospital. Dedicated to compassionate care and medical excellence.
        </p>
      </div>
    </footer>
  )
}
