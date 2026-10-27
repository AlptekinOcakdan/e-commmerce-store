/** @type {import('next').NextConfig} */
const nextConfig = {
    agentRules: false,
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "tailwindui.com" },
            { protocol: "https", hostname: "res.cloudinary.com" },
            { protocol: "https", hostname: "images.unsplash.com" } // mock data (lib/mock-data.ts)
        ]
    }
}

module.exports = nextConfig
