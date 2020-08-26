module.exports = {
  title: 'Note文档',
  description: '平时随手记录文档',
  base: '/note/',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5a8dff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Js',
        collapsable: true,
        path: '/js.md'
      },
      {
        title: 'Css',
        collapsable: true,
        path: '/css.md'
      },
      {
        title: 'Vue',
        collapsable: true,
        path: '/vue.md'
      },
      {
        title: 'React',
        collapsable: true,
        path: '/react.md'
      },
      {
        title: 'Flutter',
        collapsable: true,
        path: 'flutter.md'
      },
      {
        title: '小程序',
        collapsable: true,
        path: '/mini.md'
      },
      {
        title: '工程化',
        collapsable: true,
        path: '/engineered.md'
      },
      {
        title: '性能优化',
        collapsable: true,
        path: '/optimize.md'
      },
      {
        title: 'Git',
        collapsable: true,
        path: '/git.md'
      },
      {
        title: 'Webstorm',
        collapsable: true,
        path: '/webstorm.md'
      },
      {
        title: 'Mac',
        collapsable: true,
        path: '/mac.md'
      },
      {
        title: 'Order',
        collapsable: true,
        path: '/order.md'
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
          message: '有新内容更新',
          buttonText: '刷新'
        }
      }
    ]
  ]
}
