import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Find Doctor', path: '#' },
    { name: 'Blog', path: '#' },
    { name: 'Contact', path: '#' },
  ]

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm h-16" : "bg-transparent h-20"
      )}>
        <div className="max-w-[1400px] mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={cn(
              "w-8 h-8 md:w-9 md:h-9 rounded-full border-2 flex items-center justify-center transition-all duration-500",
              isScrolled || isMenuOpen ? "border-primary text-primary" : "border-white text-white"
            )}>
              <span className="material-symbols-outlined text-base md:text-lg font-bold">shield_with_heart</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-base md:text-lg font-bold tracking-tighter leading-none transition-colors duration-500",
                isScrolled || isMenuOpen ? "text-slate-900" : "text-white"
              )}>
                <span className="md:hidden">LMA</span>
                <span className="hidden md:inline">Lala Mahender Aggarwal</span>
              </span>
              <span className={cn(
                "text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] transition-colors duration-500",
                isScrolled || isMenuOpen ? "text-primary" : "text-white/60"
              )}>
                Hospital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[12px] font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-100 hover:text-primary",
                  isScrolled ? "text-slate-600 opacity-70" : "text-white opacity-80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Section: Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "p-2 transition-colors duration-500 z-50",
                isScrolled || isMenuOpen ? "text-slate-900" : "text-white"
              )}
            >
              <span className="material-symbols-outlined text-[32px]">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out lg:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full pt-32 px-10 gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 flex items-center justify-between group",
                "animate-in fade-in slide-in-from-right duration-500"
              )}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {link.name}
              <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </Link>
          ))}
          
          <div className="mt-auto mb-16 space-y-6">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Emergency Contact</div>
            <div className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">call</span>
              +91 123 456 7890
            </div>
            <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/20">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
