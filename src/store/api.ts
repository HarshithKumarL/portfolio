import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

export async function getPageContent() {
  const res = await client.getEntries({
    content_type: "home",
    include: 3,
  });

  return res.items[0] || null;
}

export async function getHeroSection() {
  const res = await client.getEntries({
    content_type: "heroSection",
  });

  return res.items[0]?.fields || null;
}
