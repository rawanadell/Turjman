﻿import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShieldCheck, ClipboardCheck, ShieldAlert } from 'lucide-react';
import PageShell from '../components/PageShell';
import { AlertTriangle, HelpCircle } from "lucide-react";

const sections = [
  [
    'Acceptance of Terms',
    'By downloading, installing, or using the Turjman application, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the app. These terms apply to all users of the app, including visitors, registered users, and premium subscribers.',
  ],
  [               
    'Description of Service',
    'Turjman provides AI-powered translation services including text, voice, camera, image, and live conversation translation across 100+ languages. Features may vary by device, operating system, and subscription plan. We reserve the right to modify, suspend, or discontinue any feature of the service at any time with reasonable notice.',
  ],
  [
    'User Accounts',
    'Some features may require you to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must notify us immediately at support@turjman.app if you suspect any unauthorized use of your account.',
  ],
  [
    'Acceptable Use',
    'You agree to use Turjman only for lawful purposes. You may not use the app to translate, distribute, or store content that is illegal, harmful, defamatory, or violates the rights of others. You may not attempt to reverse-engineer, copy, or exploit any part of the service without written permission.',
  ],
  [
    'Intellectual Property',
    'All content, trademarks, logos, and software within Turjman are the exclusive property of Turjman and its licensors. You are granted a limited, non-exclusive, non-transferable license to use the app for personal, non-commercial purposes. No rights are transferred to you beyond what is expressly stated here.',
  ],
  [
    'Subscriptions & Payments',
    'Turjman offers free and premium subscription tiers. Premium subscriptions are billed on a monthly or annual basis. All payments are processed securely via third-party payment providers. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current billing period. Refunds are subject to our refund policy.',
  ],
  [
    'Disclaimer of Warranties',
    'Turjman is provided "as is" without warranties of any kind, either express or implied. While we strive for high accuracy, AI translation may contain errors. We do not guarantee that the service will be uninterrupted, error-free, or suitable for any specific use such as medical, legal, or official document translation.',
  ],
  [
    'Limitation of Liability',
    'To the maximum extent permitted by applicable law, Turjman and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability to you for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.',
  ],
  [
    'Governing Law',
    'These Terms shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Cairo, Egypt.',
  ],
  [
    'Changes to These Terms',
    'We reserve the right to update these Terms of Use at any time. When we make material changes, we will notify users via in-app notification and update the "Last Updated" date at the top of this page. Your continued use of Turjman after any changes constitutes your acceptance of the new terms.',
  ],
];

const highlights = [
  { icon: CheckCircle2, label: 'Free to Use' },
  { icon: ShieldCheck, label: 'Your Data Protected' },
  { icon: ClipboardCheck, label: 'Clear & Fair Rules' },
  { icon: ShieldAlert, label: 'Auto-renewal Disclosed' },
];

function Terms() {
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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="space-y-10"
    >
     
      <header className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.14),transparent_24%)]" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <ShieldCheck size={16} />
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
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-sky-300">
                <ShieldCheck size={16} />
              </span>
              Legal Agreement
            </div>
            <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Terms of Use
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
              These terms govern your use of Turjman. By using our app, you agree to abide by these rules designed to keep the platform safe and fair for everyone.
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Last updated: July 9, 2025 · Effective immediately</p>
          </div>
        </header>

        <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-4 sm:p-6">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-3xl bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-900">
              <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-100 text-blue-600 shadow-sm">
                <Icon size={18} />
              </span>
              {label}
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 lg:sticky lg:top-10">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Contents</span>
            <nav className="grid gap-3 text-sm text-slate-700">
              {sections.map(([title], index) => (
                <a
                  key={title}
                  href={`#policy-${index + 1}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  <span className="font-semibold text-slate-900">{index + 1}.</span> {title}
                </a>
              ))}
              <div className="space-y-4">

  {/* Important */}

  <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
    <div className="mb-2 flex items-center gap-2">
      <AlertTriangle
        size={16}
        className="text-orange-500"
      />

      <h3 className="text-sm font-bold text-orange-700">
        Important
      </h3>
    </div>

    <p className="text-sm leading-6 text-orange-700/80">
      Turjman is not a substitute for professional translation in
      legal, medical, or official contexts.
    </p>
  </div>

  {/* Questions */}

  <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
    <div className="mb-2 flex items-center gap-2">
      <HelpCircle
        size={16}
        className="text-green-600"
      />

      <h3 className="text-sm font-bold text-green-700">
        Questions?
      </h3>
    </div>

    <p className="text-sm text-green-700">
      Email us at{" "}
      <a
        href="mailto:legal@turjman.app"
        className="font-semibold underline underline-offset-2 hover:text-green-800"
      >
        legal@turjman.app
      </a>
    </p>
  </div>

</div>
            </nav>
          </aside>

          <article className="space-y-8 rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
            <div className="rounded-[24px] border border-sky-100 bg-sky-50/80 p-6 text-slate-700">
              <p className="text-sm leading-7">
                Please read these Terms of Use carefully. By accessing or using Turjman, you confirm that you have read, understood, and agree to be bound by these terms and our Privacy Policy.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map(([title, body], index) => (
                <section key={title} id={`policy-${index + 1}`} className="grid gap-4 sm:grid-cols-[48px_minmax(0,1fr)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-sky-600 font-semibold">
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
                  <h2 className="text-2xl font-semibold tracking-[-0.03em]">Have a legal question?</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                    Our legal team is available to help clarify any part of these terms.
                  </p>
                </div>
                <a
                  href="mailto:legal@turjman.app"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/10 transition hover:bg-slate-100"
                >
                  <ClipboardCheck size={16} />
                  legal@turjman.app
                </a>
              </div>
            </div>
          </article>
        </div>
      </motion.div>
    </PageShell>
  );
}

export default Terms;
