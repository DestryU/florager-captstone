/** @type {import('next').NextConfig} */
const nextConfig = {

        typescript: {
            // !! WARN !!
            // Dangerously allow production builds to successfully complete even if
            // your project has type errors.
            // !! WARN !!
            ignoreBuildErrors: true,
        },
    async rewrites() {

        return [
            {
                source: '/apis/:path*',
                destination: `${process.env.REST_API_URL}/apis/:path*`
            },
            {
                source: '/v2/:path*',
                destination: 'https://my-api.plantnet.org/v2/:path*'

            }

        ]

    }
}


export default nextConfig;

