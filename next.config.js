/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
}
const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
