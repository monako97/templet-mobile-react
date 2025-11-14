import type { LocaleConfig } from 'app:locales';

const en: LocaleConfig = {
  language: 'en_US',
  title: '英文',
  translation: {
    home: 'Home',
    'dynamic/:id': 'Dynamic ID',
    'dynamic/:id/:name': 'Dynamic ID Name',
    'home/dynamic/:id': 'Home Dynamic ID',
    'home/dynamic/:id/:name': 'Home Dynamic ID Name',
    'sub-page-view': 'Sub page view',
    jump: 'Jump',
  },
};

export default en;
