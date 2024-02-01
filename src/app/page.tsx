import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

const frameMetadata = {
  "fc:frame": "vNext",
  "fc:frame:image": "./next.svg",
  "fc:frame:button:1": "$ETH",
  "fc:frame:button:2": "$BTC",
};

export const metadata: Metadata = {
  title: "Frame Airdrop",
  description: "Generated by create next app",
  other: {
    ...frameMetadata,
  },
};

export default function Home() {
  return (
    <>
      <main>Frame Airdrop!</main>
      <img src="/next.svg" alt="next" />
    </>
  );
}
