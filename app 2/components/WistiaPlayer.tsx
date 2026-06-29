"use client";

import Script from "next/script";

type WistiaPlayerProps = {
  mediaId: string;
};

export default function WistiaPlayer({ mediaId }: WistiaPlayerProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const WistiaPlayerComponent = "wistia-player" as any;
  return (
    <>
      <style>
        {`
          wistia-player[media-id='${mediaId}']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
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
            media-id={mediaId}
            seo="false"
            aspect="1.7777777777777777"
          ></WistiaPlayerComponent>
        </div>
      </div>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="lazyOnload"
        type="module"
      />
    </>
  );
}
