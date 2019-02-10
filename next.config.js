const config = {
    distDir: '../../dist'
}

const withLess = require('@zeit/next-less')

module.exports = withLess(config)