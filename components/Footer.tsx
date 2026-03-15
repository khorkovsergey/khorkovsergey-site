'use client';

import { useI18n } from '../lib/i18n';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="section-padding py-8 border-t border-sand/60">
      <div className="section-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-stone">{t.footer.copyright}</p>
        <p className="text-sm text-mist">khorkovsergey.com</p>
      </div>
    </footer>
  );
}
