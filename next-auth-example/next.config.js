/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// * NextAuth를 활용한 CORS 해결
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: "/:path*",
	// 			destination: "https://example.com/:path*",
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
