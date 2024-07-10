/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'utfs.io'],
    },
    // async redirects() {
    //     return [
    //     {
    //         source: '/about',
    //         destination: '/',
    //         permanent: true,
    //     },
    //     ];
    // },
};

export default nextConfig;
