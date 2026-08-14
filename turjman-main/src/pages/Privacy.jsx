import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Ban, Languages, LockKeyhole, ShieldCheck } from 'lucide-react';
import PageShell from '../components/PageShell';

const sections = [
  [
    'Information We Collect',
    'Turjman collects only the information necessary to provide translation services. This includes text, voice recordings, images, or camera input that you submit for translation. We also collect basic usage data such as app version, device type, and session duration to improve performance. We do not collect your name, email, or personal identity unless you voluntarily create an account.',
  ],
  [
    'How We Use Your Information',
    'Your translation inputs are processed in real time to deliver accurate results and are not stored on our servers beyond the active session. Aggregated, anonymized usage data may be used to improve AI models and app performance. We do not sell, rent, or share your personal data with third parties for marketing purposes.',
  ],
  [
    'Offline Mode & Local Storage',
    'When you download language packs for offline use, those packs are stored locally on your device. Any translations performed offline are processed entirely on-device and never transmitted to our servers. You can delete downloaded packs at any time from the app settings.',
  ],
  [
    'Data Security',
    'All data transmitted between your device and our servers is protected with end-to-end encryption using industry-standard TLS 1.3 protocols. We apply strict access controls and regular security audits to safeguard your information. In the event of a data breach, we will notify affected users within 72 hours in accordance with applicable regulations.',
  ],
  [
    'Third-Party Services',
    'Turjman may integrate with third-party services (such as cloud AI providers) solely to process translation requests. These providers are contractually bound to confidentiality and are not permitted to use your data for any purpose beyond providing the requested service. We carefully vet all third-party partners for compliance with privacy standards.',
  ],
  [
    "Children's Privacy",
    'Turjman is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately and we will take steps to delete it from our systems.',
  ],
  [
    'Your Rights',
    'Depending on your location, you may have the right to access, correct, or delete personal data we hold about you. You may also have the right to object to processing or request data portability. To exercise any of these rights, contact us at privacy@turjman.app. We will respond to all requests within 30 days.',
  ],
  [
    'Changes to This Policy',
    'We may update this Privacy Policy from time to time. When we do, we will revise the Last Updated date at the top of the page and notify users via in-app notice for material changes. Continued use of the app after changes constitute your acceptance of the updated policy.',
  ],
]

const badges = [
  { icon: LockKeyhole, label: 'End-to-End Encrypted' },
  { icon: Ban, label: 'No Data Selling' },
  { icon: Ban, label: 'No Ads Tracking' },
];

export default function Privacy() {
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);
return (
   <PageShell
    noPadding
    className="bg-slate-100 text-slate-900"
    contentClassName="w-full"
   >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
        <header className="relative w-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 p-8 text-white shadow-2xl sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.14),transparent_28%)]" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <Languages size={18} />
              </span>
              Turjman
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>

      <div className="mt-20 mx-auto max-w-4xl space-y-5 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-100 backdrop-blur-sm">
              <LockKeyhole size={14} />
              Your Privacy Matters
            </div>
            <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
              We believe privacy is a fundamental right. This policy explains transparently how Turjman handles your data.
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Last updated: July 9, 2025</p>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(240px,280px)_1fr]">
          <aside className="space-y-8 rounded-[32px] border border-slate-200/70 bg-white p-6 shadow-xl shadow-slate-900/5 lg:sticky lg:top-10">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Contents</span>
              <nav className="grid gap-3 text-sm text-slate-700">
                {sections.map(([title], index) => (
                  <a
                    key={title}
                    href={`#policy-${index + 1}`}
                    className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-sky-300 hover:bg-sky-50"
                  >
                    <span className="font-semibold text-slate-900">{index + 1}.</span> {title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-3">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-sky-600">
                    <Icon size={16} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </aside>

          <article className="space-y-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
            <div className="flex gap-4 rounded-[24px] border border-sky-100 bg-sky-50/80 p-6 text-slate-700">
              <span className="flex h-10 w-10 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
                <ShieldCheck size={18} />
              </span>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">At Turjman, your privacy is a core principle — not an afterthought.</p>
                <p className="text-sm leading-6 text-slate-600">
                  This policy explains what information we collect, how we use it, and how we protect it. Please read it carefully before using the app.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {sections.map(([title, body], index) => (
                <section key={title} id={`policy-${index + 1}`} className="grid gap-4 sm:grid-cols-[40px_1fr]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-sky-600 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
                  </div>
                </section>
              ))}
            </div>

            <div className="rounded-[28px] bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700 px-6 py-8 text-white shadow-2xl shadow-slate-950/10 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em]">Still have questions?</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                    Our privacy team is happy to help. Reach us at any time.
                  </p>
                </div>
                <a
                  href="mailto:privacy@turjman.app"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/10 transition hover:bg-slate-100"
                >
                  <LockKeyhole size={16} />
                  privacy@turjman.app
                </a>
              </div>
            </div>
          </article>
        </div>
      </motion.div>
    </PageShell>
  );
}
