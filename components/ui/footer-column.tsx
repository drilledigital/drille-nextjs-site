import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/* ---------------- TYPES ---------------- */

type ContactInfo = {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  isAddress?: boolean;
};

/* ---------------- DATA ---------------- */

const data = {
  linkedinLink: 'https://www.linkedin.com/company/drille-digital',
  instaLink: 'https://www.instagram.com/drille_digital',
  twitterLink: 'https://x.com/drille_digital',
  services: {
    webdev: '',
    webdesign: '',
    marketing: '',
    googleads: '',
  },
  about: {
    company: '#about',
  },
  quick: {
    home: '#',
    work: '#projects',
    vision: '#about',
    faqs: '#faqs',
  },
  contact: {
    email: 'hi@drilledigital.com',
    phone: '+233 55 999 4125',
    address: 'Accra, Ghana',
  },
  company: {
    name: 'Drille Digital',
    description:
      'Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.',
    logo: '/assets/images/Drille Digital Logo White.svg',
  },
};

/* ---------------- LINKS ---------------- */

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
];

const aboutLinks = [
  { text: 'Company', href: data.about.company },
];

const serviceLinks = [
  { text: 'Web Development', href: data.services.webdev },
  { text: 'Web Design', href: data.services.webdesign },
  { text: 'Marketing', href: data.services.marketing },
  { text: 'Branding', href: data.services.googleads },
];

const quickLinks = [
  { text: 'Home', href: data.quick.home },
  { text: 'Our Work', href: data.quick.work },
  { text: 'About', href: data.quick.vision },
  { text: 'FAQs', href: data.quick.faqs },
];

const contactInfo: ContactInfo[] = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

/* ---------------- COMPONENT ---------------- */

export default function Footer4Col() {
  return (
    <footer className="bg-black text-white mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-3 sm:justify-start items-center">
              <Image
                src={data.company.logo}
                alt="Drille Digital Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-white/70 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white hover:text-white/70 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-white/70 hover:text-white transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-white/70 hover:text-white transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Quick Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {quickLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-white/70 hover:text-white transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map((item) => (
                  <li key={item.text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <item.icon className="text-white size-5 shrink-0 shadow-sm" />
                      {item.isAddress ? (
                        <address className="text-white/70 -mt-0.5 flex-1 not-italic hover:text-white transition">
                          {item.text}
                        </address>
                      ) : (
                        <span className="text-white/70 flex-1 hover:text-white transition">
                          {item.text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-white/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2026 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}