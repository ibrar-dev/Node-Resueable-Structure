const PRODUCTION = 'production' === process.env.NODE_ENV

if(PRODUCTION) {
    module.exports = {
        PORT: process.env.PORT,
        NODE_ENV: process.env.NODE_ENV
    }
}