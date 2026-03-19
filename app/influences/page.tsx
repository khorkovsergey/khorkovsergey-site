'use client';

import { I18nProvider } from '../../lib/i18n';
import { InfluencesPage } from '../../components/InfluencesPage';

export default function Influences() {
  return (
    <I18nProvider>
      <InfluencesPage />
    </I18nProvider>
  );
}
