import { ImageResponse } from "next/og";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Donations";
export const size = {
  width: 1200,
  height: 800,
};

// Image generation
export default async function OgImage() {
  // const fontData = fetch(
  //   new URL("../../public/Roboto.ttf", import.meta.url)
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#17223e",
          width: "100%",
          fontSize: 90,
          color: "#fff",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          padding: 70,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ margin: 0, padding: 0 }}>Login</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <img
            height={150}
            width={650}
            style={{
              display: "flex",
              objectFit: "contain",
              marginLeft: "auto",
            }}
            alt=""
            src={"https://edoubleone-revamping.vercel.app/images/logo.png"}
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: "Roboto",
      //     // data: await fontData,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    }
  );
}
