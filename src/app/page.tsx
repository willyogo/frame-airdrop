import { Metadata } from "next";

const POST_URL = "https://frame-airdrop.vercel.app/api/frame";
const IMG_URL = "https://ibb.co/jrC8b7x";

console.log("posturl", POST_URL);
const frameMetadata = {
  "fc:frame": "vNext",
  "fc:frame:image": IMG_URL,
  "fc:frame:button:1": "Yes",
  "fc:frame:button:2": "No",
  "fc:frame:post_url": POST_URL,
};

export const metadata: Metadata = {
  title: "Frame Quiz",
  description: "Take a quiz and mint an NFT based on the result",
  openGraph: {
    title: "Frame Quiz",
    images: [IMG_URL],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Home() {
  return (
    <>
      <main>Frame Quiz!</main>
    </>
  );
}
