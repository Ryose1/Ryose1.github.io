"use client";
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/3DFD7FD2-F8B7-4F8F-ABC2-61DCB1B32DD2_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/1A5C2C7C-B02E-4A0A-AD5F-FC55A4702884.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/1A0571C5-2F27-48C1-81A9-DD9A5E7F0F74.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/04FB9CC8-8C6B-40E7-80FE-98A3AC7F99DD_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/1E876356-BD26-4662-895B-FC074B16B134.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/5D87FDD9-09BE-4E90-A66F-576ADCA74687_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/5F79571A-B16D-4AFD-82DD-54AFB6219205_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/6B97747C-9A98-453D-AA50-0F7D4C7C181B_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/33EB916F-3A85-4587-AA6A-BCE414850E12_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/89A1C42F-8F3D-4830-8934-28DF1F14ED9C_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/763AE65C-827A-45E9-BE02-660BDFB7342E_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/4589C527-1F56-46D2-9852-C728DA851806.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/694964BF-D21F-4CEF-BBC0-CDD29A4DFEFA.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/7128146F-CA9F-4879-9266-D82D9B168D7F_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/68710440-9F10-49B5-AA06-A60764D7B0F4_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/AC55A593-8E51-4535-AA98-80C5852F10AE.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/B41323A1-E2A3-4818-B089-37BC86D4BAC4.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/BD339419-65BE-4FA4-952F-D8FC10122329_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/C6CF50D3-2989-4378-9843-2C451413B6F8_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/C7CE10A6-07BD-419D-A3F0-4B96615E29CE_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/CAF08707-07F9-4C72-8E5E-6D0B8232D55D.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/D74609FD-4113-432D-A2E9-B364349FDD10_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/EB019619-4B98-4F9F-ACC0-A5528467646C_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/E0E660A5-751E-45BC-8E5D-875841B16D99.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/F2C24ABB-9408-4D9E-AEFB-0F4041EFF9F9.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/F5DFD589-201A-4D51-9DCC-E2F81892C45A.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/E7DE8D42-7DCD-41CB-B86D-9245D051950A_1_105_c.jpeg",
  },
  {
    alt: "Image1's alt text",
    caption: "",
    src: "/images/891557B0-960C-48A7-AA48-C6E5C8D246E7_1_105_c.jpeg",
  },
];

export default function Photos() {
  return (
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnCount={"auto"}
      columnWidth={230}
      gapSize={24}
    />
  );
}