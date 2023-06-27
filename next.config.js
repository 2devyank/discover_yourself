/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

// module.exports = nextConfig
module.exports = {
  env: {
    SUPABASE_PROJECT_URL:process.env.SUPABASE_PROJECT_URL,
    API_KEY:process.env.API_KEY

  },
  nextConfig
};
