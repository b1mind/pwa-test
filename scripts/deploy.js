const ghpages = require('gh-pages')

ghpages.publish(
  '__sapper__/export/pwa-test',
  {
    branch: 'master',
    repo: 'https://github.com/b1m1nd/pwa-test.git',
    user: {
      name: 'b1m1nd',
      email: 'brent@1mindsolutions.com',
    },
  },
  () => {
    console.log('Deploy Complete!')
  },
)
