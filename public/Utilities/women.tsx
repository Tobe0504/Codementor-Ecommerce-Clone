import imageProduct1 from "../../public/Images/image-product-1.jpg";
import imageProduct2 from "../../public/Images/image-product-2.jpg";
import imageProduct3 from "../../public/Images/image-product-3.jpg";
import imageProduct4 from "../../public/Images/image-product-4.jpg";
import imageProduct1Thumbnail from "../../public/Images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../../public/Images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../../public/Images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../../public/Images/image-product-4-thumbnail.jpg";

export const womenArray = [
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
];
