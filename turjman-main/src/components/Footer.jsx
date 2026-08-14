import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Languages, Mail } from "lucide-react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://x.com/",
    icon: FaTwitter,
    label: "Twitter / X",
  },
  {
    href: "https://instagram.com/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com/",
    icon: FaYoutube,
    label: "YouTube",
  },
  {
    href: "mailto:support@turjman.ai",
    icon: Mail,
    label: "Email",
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const goToFeature = (id) => {
  if (id === "home") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  const section = document.getElementById(id);

  section?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname === "/turjman/";

  return (
    <motion.footer
      className={`w-full bg-[#0B1739] text-slate-400 ${
        isHomePage ? "" : "mt-24"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Logo */}
          <div>
            <a
              href="/"
              className="flex items-center gap-3 text-white font-bold text-xl"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-400 shadow-lg shadow-blue-500/20">
                <Languages size={18} />
              </span>

              <span>Turjman</span>
            </a>

            <p className="mt-6 max-w-xs leading-8 text-slate-400">
              Breaking language barriers and making global communication
              accessible to everyone, anywhere.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-white font-semibold">Services</h3>

            <div className="space-y-3">
              <button
                onClick={() => goToFeature("text-translation")}
                className="block hover:text-blue-400 transition"
              >
                Text Translation
              </button>

              <button
                onClick={() => goToFeature("voice-mode")}
                className="block hover:text-blue-400 transition"
              >
                Voice Mode
              </button>

              <button
                onClick={() => goToFeature("camera-mode")}
                className="block hover:text-blue-400 transition"
              >
                Camera Mode
              </button>

              <button
                onClick={() => goToFeature("offline-packs")}
                className="block hover:text-blue-400 transition"
              >
                Offline Packs
              </button>

              <button
                onClick={() => goToFeature("live-conversation")}
                className="block hover:text-blue-400 transition"
              >
                Live Conversation
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-5 text-white font-semibold">Links</h3>

            <div className="space-y-3">
             <button onClick={() => goToFeature("home")}>
  Home
</button>

           <button
  onClick={() => goToFeature("features")}
  className="block hover:text-blue-400 transition"
>
  Features
</button>
          <button
  onClick={() => goToFeature("faq")}
  className="block hover:text-blue-400 transition"
>
  FAQ
</button>
              <Link
                to="/privacy"
                className="block hover:text-blue-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="block hover:text-blue-400 transition"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="mb-5 text-white font-semibold">Follow Us</h3>

            <div className="space-y-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-400 transition"
                >
                  <Icon size={17} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Turjman. All rights reserved.</p>

          <p>Breaking language barriers worldwide.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;