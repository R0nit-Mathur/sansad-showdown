"use client";

import Script from "next/script";
import { GAME_MARKUP } from "./game-markup";

export default function Home() {
  return (
    <>
      <div
        id="game-mount"
        style={{ display: "contents" }}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: GAME_MARKUP }}
      />
      <Script
        id="main-game-script"
        type="module"
        src="/assets/main-CfQ2THv5.js"
        strategy="afterInteractive"
      />
    </>
  );
}
