module.exports = {
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: '/search/:path*/',
					has: [
						{ type: "query", key: "kw", value: "(?<kw>.*)" }
					],
					destination: '/search/:path*/:kw/'
				},
				{
					source: '/search/:path*',
					has: [
						{ type: "query", key: "kw", value: "(?<kw>.*)" }
					],
					destination: '/search/:path*/:kw'
				},
			]
		}
	},
}
