const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.prod.conf')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const webpackConfig = merge(baseWebpackConfig, {
    plugins: [
      // prerender the important pages
      new PrerenderSpaPlugin(
        path.join(__dirname, '../dist'),
        ['/'],
        {
          /**
            * A dirty hack: setting a very specific viewport size 
            * makes it very easy to check for the prerenderer in Vue's
            * `created()' via `window.innerWidth' and `window.innerHeight',
            * giving a way to server custom content for search engines
            */ 
          phantomPageViewportSize: {
            width: 1242,
            height: 742
          },
          postProcessHtml: function (context) {
            // `context.html' will contain the HTML returned by the
            // headless browser, and `context.route' will be the path
            // use this place to replace or fix the contents.
          }
        }
      )
    ]
  })
  
  module.exports = webpackConfig