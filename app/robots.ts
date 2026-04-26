import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://copilotai.io";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/checkout/"], // Prevent indexing of internal APIs and checkout flows
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
