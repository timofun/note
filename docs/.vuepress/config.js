module.exports = {
  title: '精臣固定资产',
  description: '让物的管理更简单',
  base: '/handbook/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5a8dff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: './favicon.ico' }],
    ['link', { rel: 'mask-icon', href: './favicon.ico', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: './favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      {
        title: '概述',
        collapsable: true,
        path: '/pc/summary.md'
      },
      {
        title: '资产管理流程',
        collapsable: true,
        path: '/pc/guide.md'
      },
      {
        title: '耗材管理流程',
        collapsable: true,
        path: '/pc/consumable.md'
      },
      {
        title: '财务管理流程',
        collapsable: true,
        path: '/pc/finance.md'
      },
      {
        title: '系统其它功能',
        collapsable: true,
        path: '/pc/order.md'
      },
      {
        title: '常见问题',
        collapsable: true,
        path: '/pc/q&a.md'
      }
    ],
    sidebarDepth: 1
  },
  host: '0.0.0.0',
  port: 1111,
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        serviceWorker: false,
        updatePopup: {
          message: '新手指引有新内容更新',
          buttonText: '刷新'
        }
      }
    ]
  ]
}
