'use client';

import { useI18n } from '../lib/i18n';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="section-padding py-8 border-t border-border">
      <div className="section-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-textMuted">{t.footer.copyright}</p>
        <p className="text-sm text-textGhost">khorkovsergey.com</p>
      </div>
    </footer>
  );
}
