"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";
import Layout from "../Components/Layout/Layout";
import classes from "./women.module.css";
import imageProduct1 from "../../public/Images/image-product-1.jpg";
import imageProduct2 from "../../public/Images/image-product-2.jpg";
import imageProduct3 from "../../public/Images/image-product-3.jpg";
import imageProduct4 from "../../public/Images/image-product-4.jpg";
import imageProduct1Thumbnail from "../../public/Images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../../public/Images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../../public/Images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../../public/Images/image-product-4-thumbnail.jpg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type WomenStateType = {};

const Women = () => {
  // Utilities
  const [women, setWomen] = useState<
    | {
        companyName: string;
        productName: string;
        description: string;
        initialPrice: string;
        discountedPrice: string;
        images: {
          imageUrl: StaticImageData;
          thumbnail: StaticImageData;
          isActive: boolean;
        }[];
        amountOrdered: number;
      }[]
  >([
    {
      companyName: "Sneaker Company",
      productName: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      initialPrice: "125.00",
      discountedPrice: "250.00",
      images: [
        {
          imageUrl: imageProduct1,
          thumbnail: imageProduct1Thumbnail,
          isActive: true,
        },
        {
          imageUrl: imageProduct2,
          thumbnail: imageProduct2Thumbnail,
          isActive: false,
        },
        {
          imageUrl: imageProduct3,
          thumbnail: imageProduct3Thumbnail,
          isActive: false,
        },
        {
          imageUrl: imageProduct4,
          thumbnail: imageProduct4Thumbnail,
          isActive: false,
        },
      ],
      amountOrdered: 0,
    },
  ]);

  const activeImage = women.map((product) => {
    return product.images.find((data) => {
      return data.isActive;
    })?.imageUrl;
  })[0];

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.imageSection}>
          <div className={classes.activeImage}>
            <Image src={activeImage} alt="Active Image" />
          </div>
          <div className={classes.imageThumbnailSection}>
            {women.map((image) => {
              return image.images.map((data, j) => {
                return (
                  <div className={classes.thumbNail} key={j}>
                    <Image src={data.thumbnail} alt={image.productName} />
                  </div>
                );
              });
            })}
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default Women;
