// 1. استدعاء مكتبة الترجمة
import { useTranslation } from 'react-i18next'

function Privacy() {
  // 2. تهيئة أداة الترجمة
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-surface font-body-lg antialiased flex flex-col pt-24">
      {/* Header */}
      <header className="mb-16 text-center px-5 md:px-12 max-w-[1000px] mx-auto">
        <h1 className="font-headline-xl text-headline-xl text-primary-container mb-4">
          {t('privacy_title')}
        </h1>
        <p className="font-headline-md text-headline-md text-secondary mb-4">
          {t('privacy_brand')}
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {t('privacy_last_updated')}
        </p>
      </header>

      {/* Policy Content */}
      <div className="flex-grow px-5 md:px-12 max-w-[1000px] mx-auto mb-12">
        <div className="grid grid-cols-1 gap-6">
          {/* Section 1 */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(7,26,59,0.05)] border border-outline-variant/20 relative overflow-hidden group">
            {/* تعديل الخط الجانبي للاتجاهين */}
            <div className="absolute top-0 rtl:right-0 ltr:left-0 w-2 h-full bg-secondary"></div>
            <h2 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">info</span>
              {t('privacy_sec1_title')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {t('privacy_sec1_desc')}
            </p>
          </section>

          {/* Section 2 & 3: Data Collection & Storage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(7,26,59,0.05)] border border-outline-variant/20 relative">
              {/* تعديل تدرج الألوان (Gradient) للاتجاهين */}
              <div className="absolute top-0 rtl:right-0 ltr:left-0 w-full h-1 rtl:bg-gradient-to-l ltr:bg-gradient-to-r from-secondary to-transparent"></div>
              <h2 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">database</span>
                {t('privacy_sec2_title')}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {t('privacy_sec2_desc_1')} <strong>{t('privacy_sec2_desc_strong')}</strong> {t('privacy_sec2_desc_2')}
              </p>
            </section>

            <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(7,26,59,0.05)] border border-outline-variant/20 relative">
              <div className="absolute top-0 rtl:right-0 ltr:left-0 w-full h-1 rtl:bg-gradient-to-l ltr:bg-gradient-to-r from-secondary to-transparent"></div>
              <h2 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">save</span>
                {t('privacy_sec3_title')}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {t('privacy_sec3_desc_1')} <strong>{t('privacy_sec3_desc_strong')}</strong> {t('privacy_sec3_desc_2')}
              </p>
            </section>
          </div>

          {/* Section 4 & 5: Usage & Sharing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(7,26,59,0.05)] border border-outline-variant/20">
              <h2 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">analytics</span>
                {t('privacy_sec4_title')}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {t('privacy_sec4_desc')}
              </p>
            </section>

            <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(7,26,59,0.05)] border border-outline-variant/20">
              <h2 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">share_off</span>
                {t('privacy_sec5_title')}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {t('privacy_sec5_desc_1')} <strong>{t('privacy_sec5_desc_strong')}</strong> {t('privacy_sec5_desc_2')}
              </p>
            </section>
          </div>

          {/* Section 6: Security */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(7,26,59,0.05)] border border-outline-variant/20 relative">
            {/* تعديل الخط الجانبي الأيسر/الأيمن */}
            <div className="absolute rtl:left-0 ltr:right-0 top-0 bottom-0 w-1 bg-secondary"></div>
            <h2 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">security</span>
              {t('privacy_sec6_title')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {t('privacy_sec6_desc')}
            </p>
          </section>

          {/* Section 7, 8, 9 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_24px_rgba(7,26,59,0.05)] border border-outline-variant/20">
              <h2 className="font-headline-md text-headline-md text-primary-container mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">delete</span>
                {t('privacy_sec7_title')}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t('privacy_sec7_desc')}
              </p>
            </section>

            <section className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_24px_rgba(7,26,59,0.05)] border border-outline-variant/20">
              <h2 className="font-headline-md text-headline-md text-primary-container mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">child_care</span>
                {t('privacy_sec8_title')}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t('privacy_sec8_desc')}
              </p>
            </section>

            <section className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_24px_rgba(7,26,59,0.05)] border border-outline-variant/20">
              <h2 className="font-headline-md text-headline-md text-primary-container mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">update</span>
                {t('privacy_sec9_title')}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t('privacy_sec9_desc')}
              </p>
            </section>
          </div>

          {/* Section 10: Contact */}
          <section className="bg-surface-container-high p-8 rounded-xl text-center mt-6 border border-outline-variant/20">
            <h2 className="font-headline-md text-headline-md text-primary-container mb-4">
              {t('privacy_sec10_title')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              {t('privacy_sec10_desc')}
            </p>
            <a className="inline-flex items-center gap-2 font-headline-md text-headline-md text-secondary hover:text-secondary-fixed transition-colors font-bold" href="mailto:support@example.com">
              <span className="material-symbols-outlined">mail</span>
              support@example.com
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy