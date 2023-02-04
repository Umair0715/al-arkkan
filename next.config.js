/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images : {
        unoptimized : true
    } ,
    eslint: {
        dirs: [] //['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    } , 
    i18n,
}

module.exports = nextConfig
