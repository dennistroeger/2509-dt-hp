"use client";

import Script from "next/script";

export default function WistiaPlayer() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const WistiaPlayerComponent = "wistia-player" as any;
  return (
    <>
      <style>
        {`
          wistia-player[media-id='39u4itcqa2']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/39u4itcqa2/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 56.25%;
          }
        `}
      </style>
      <div
        className="wistia_responsive_padding"
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <WistiaPlayerComponent
            media-id="39u4itcqa2"
            seo="false"
            aspect="1.7777777777777777"
          ></WistiaPlayerComponent>
        </div>
      </div>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src="https://fast.wistia.com/embed/39u4itcqa2.js"
        strategy="lazyOnload"
        type="module"
      />
    </>
  );
}
