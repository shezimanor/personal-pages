import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  base: '/',

  lang: 'en-US',
  title: 'Ryan Dev',
  description: '我的部落格',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+TC:wght@300;400;700&display=swap',
        rel: 'stylesheet'
      }
    ]
  ],

  theme

  // Enable it with pwa
  // shouldPrefetch: false,
});
