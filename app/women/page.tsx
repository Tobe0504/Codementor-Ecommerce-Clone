"use client";

import { useContext, useEffect, useState } from "react";
import Women from "./women";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { womenArray } from "@/public/Utilities/women";
import { AppContext } from "../context/AppContext";

export type WomenState = {
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
};

const WomenContainer = () => {
  // Context
  const { orderCount, setOrderCount } = useContext(AppContext);
  // Utilities
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showImagesModal, setShowImagesModal] = useState<boolean>(false);
  // const [orderCount, setOrderCount] = useState<number>(0);

  const [women, setWomen] = useState<WomenState[]>(womenArray);

  useEffect(() => {
    if (activeIndex === -1) {
      setActiveIndex(women[0].images.length);
    } else if (activeIndex === women[0].images.length) {
      setActiveIndex(0);
    }
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
