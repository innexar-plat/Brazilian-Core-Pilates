import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/logo.png" alt="Brazilian Core Pilates" className="h-16 w-auto mb-4 brightness-0 invert" loading="lazy" width="200" height="64" />
            <p className="text-white/80 text-sm leading-relaxed">
              A modern Pilates experience designed for body and mind. 
              Strength, Balance & Brazilian Wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Booking', 'Plans', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gold mb-4 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {['Private Sessions', 'Group Classes', 'Online Classes', 'Rehabilitation', 'Workshops'].map((s) => (
                <li key={s}>
                  <span className="text-white/80 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-gold mb-4 text-sm tracking-wider uppercase">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: FaInstagram, href: '#' },
                { icon: FaFacebookF, href: '#' },
                { icon: FaYoutube, href: '#' },
                { icon: FaTiktok, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={`Follow us on ${Icon.name.replace('Fa', '')}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>

            <div className="text-white/80 text-sm space-y-2">
              <p>hello@braziliancorepilates.com</p>
              <p>+1 (305) 555-0199</p>
              <p>1200 Ocean Drive — Miami, FL</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Brazilian Core Pilates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-gold text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-gold text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
