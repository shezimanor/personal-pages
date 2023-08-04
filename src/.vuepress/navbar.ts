import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  // 這裡可以放置router與連結
  // '/demo/'
  {
    text: '投資(機)文',
    link: '/posts/investment'
  },
  {
    text: '前端文',
    link: '/posts/frontend'
  }
]);
