import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: __dirname,
    },
    async rewrites() {
        return [
            { source: "/api/:path*", destination: "http://localhost:5000/api/:path*" },
            { source: "/auth/:path*", destination: "http://localhost:5000/auth/:path*" },
        ];
    },
};
export default nextConfig;