"use client";

import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import imageProduct1 from "../../public/Images/image-product-1.jpg";
import imageProduct2 from "../../public/Images/image-product-2.jpg";
import imageProduct3 from "../../public/Images/image-product-3.jpg";
import imageProduct4 from "../../public/Images/image-product-4.jpg";
import imageProduct1Thumbnail from "../../public/Images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../../public/Images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../../public/Images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../../public/Images/image-product-4-thumbnail.jpg";
import Women from "./women";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Modal from "../Components/Modal/Modal";

type WomenStateType = {};

const WomenContainer = () => {
  // Utilities
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [orderCount, setOrderCount] = useState<number>(0);
  const [showImagesModal, setShowImagesModal] = useState<boolean>(false);

  const [women, setWomen] = useState<
    {
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
    },
  ]);

  const activeImage = women[0].images.find((image) => image.isActive);

  const activeImageUrl = activeImage?.imageUrl;

  useEffect(() => {
    if (activeIndex === -1) {
      setActiveIndex(women[0].images.length);
    } else if (activeIndex === women[0].images.length) {
      setActiveIndex(0);
    }

    console.log(activeIndex, women[0].images.length - 1);
  }, [activeIndex, women]);

  useEffect(() => {
    if (orderCount === -1) {
      setOrderCount(0);
    }
  }, [orderCount]);

  return (
    <div>
      <Women
        women={women}
        setWomen={setWomen}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        orderCount={orderCount}
        setOrderCount={setOrderCount}
        showImagesModal={showImagesModal}
        setShowImagesModal={setShowImagesModal}
      />
    </div>
  );
};

export default WomenContainer;
