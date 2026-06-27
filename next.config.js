/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/index.html",
				destination: "/",
				permanent: true,
			},
			{
				source: "/live.html",
				destination: "/live",
				permanent: true,
			},
      {
        source: "/discography.html",
        destination: "/discography",
        permanent: true,
      },
      {
        source: "/media.html",
        destination: "/media",
        permanent: true,
      },
      {
        source: "/contact/postmail.html",
        destination: "/contact",
        permanent: true,
      },
		];
	},
};

module.exports = nextConfig;
