module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8081/api/:path*'
            },
            {
                source: '/oauth2/:path*',
                destination: 'http://localhost:8081/oauth2/:path*'
            }
        ]
    },
}