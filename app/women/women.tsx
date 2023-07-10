import classes from "./women.module.css";
import { StaticImageData } from "next/image";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Layout from "../Components/Layout/Layout";
import Modal from "../Components/Modal/Modal";
import { AppContext } from "../context/AppContext";
import { WomenState } from "./page";

export type WomenProps = {
  women: {
    companyName: string;
    productName: string;
    description: string;
    initialPrice: string;
    discountedPrice: string;
    images: {
      imageUrl: StaticImageData | undefined;
      thumbnail: StaticImageData;
      isActive: boolean;
    }[];
  }[];
  setWomen: Dispatch<
    SetStateAction<
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
    >
  >;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  orderCount: number;
  setOrderCount: Dispatch<SetStateAction<number>>;
  activeImageUrl?: StaticImageData | undefined;
  showImagesModal?: boolean;
  setShowImagesModal: Dispatch<SetStateAction<boolean>>;
};

const Women = ({
  women,
  setWomen,
  activeIndex,
  setActiveIndex,
  orderCount,
  setOrderCount,
  showImagesModal,
  setShowImagesModal,
}: WomenProps) => {
  // Context
  const { cart, setCart } = useContext(AppContext);

  const activeImage = women[0].images.find((image) => image.isActive);

  const activeImageUrl: undefined | StaticImageData = activeImage?.imageUrl;

  function setActiveImageHandler(index: number) {
    setWomen((prevWomen) => {
      const updatedImages = prevWomen[0].images.map((image, i) => {
        if (i === index) {
          return { ...image, isActive: true };
        }
        return { ...image, isActive: false };
      });

      const updatedWomen = [...prevWomen];
      updatedWomen[0] = { ...prevWomen[0], images: updatedImages };

      return updatedWomen;
    });
  }

  useEffect(() => {
    if (activeIndex === -1) {
      setActiveIndex(women[0].images.length);
    } else if (activeIndex === women[0].images.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, women]);

  const increaseOrderedAmount = () => {
    setOrderCount((prevState) => prevState + 1);
  };

  const decreaseOrderedAmount = () => {
    setOrderCount((prevState) => prevState - 1);
  };

  useEffect(() => {
    if (orderCount === -1) {
      setOrderCount(0);
    }
  }, [orderCount]);

  const addToCart = (): void => {
    setCart(women as WomenState[]);
  };

  return (
    <Layout>
      <div className={classes.container}>
        {showImagesModal && (
          <div className={classes.modalContainer}>
            <Modal
              women={women}
              setWomen={setWomen}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              orderCount={orderCount}
              setOrderCount={setOrderCount}
              activeImageUrl={activeImageUrl}
              setShowImagesModal={setShowImagesModal}
            />
          </div>
        )}
        <div className={classes.imageSection}>
          <div className={classes.activeImage}>
            <div className={classes.mobilePictureNav}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  onClick={() => {
                    setActiveIndex((prevState) => prevState - 1);
                    setActiveImageHandler(activeIndex);
                  }}
                >
                  <g clipPath="url(#clip0_10_110)">
                    <path
                      d="M8.25 0.75L2.25 6.75L8.25 12.75"
                      stroke="#1D2026"
                      strokeWidth="3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_110">
                      <rect width="9" height="13.5" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  onClick={() => {
                    setActiveIndex((prevState) => prevState + 1);
                    setActiveImageHandler(activeIndex);
                  }}
                >
                  <g clipPath="url(#clip0_10_115)">
                    <path
                      d="M0.75 13.25L6.75 7.25L0.75 1.25"
                      stroke="#1D2026"
                      strokeWidth="3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_115">
                      <rect
                        width="9"
                        height="13.5"
                        fill="white"
                        transform="matrix(-1 0 0 -1 9 14)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {activeImageUrl && (
              <Image src={activeImageUrl} alt="Active Image" />
            )}
          </div>
          <div className={classes.imageThumbnailSection}>
            {women.map((image) => {
              return image.images.map((data, j) => {
                return (
                  <div
                    className={
                      data.isActive
                        ? `${classes.thumbNail}  ${classes.active}`
                        : classes.thumbNail
                    }
                    key={j}
                    onClick={() => {
                      setActiveImageHandler(j);
                      setShowImagesModal(true);
                    }}
                  >
                    <div></div>
                    <Image
                      src={data.thumbnail}
                      alt={image.productName}
                      className={
                        data.isActive ? classes.active : classes.inActive
                      }
                    />
                  </div>
                );
              });
            })}
          </div>
        </div>
        <div className={classes.textSection}>
          <p>{women[0].companyName}</p>
          <h2>{women[0].productName}</h2>
          <p>{women[0].description}</p>
          <div>
            <h4>${women[0].discountedPrice}</h4>
            <div>50%</div>
            <div>${women[0].initialPrice}</div>
          </div>
          <div>${women[0].initialPrice}</div>

          <div className={classes.counterAndSubmit}>
            <div>
              <button
                onClick={() => {
                  decreaseOrderedAmount();
                }}
              >
                -
              </button>
              <div>{orderCount}</div>
              <button
                onClick={() => {
                  increaseOrderedAmount();
                }}
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addToCart();
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_203_359)">
                    <path
                      d="M16.1695 3.08621H2.98525L2.78975 0.903251C2.7743 0.73094 2.69491 0.570655 2.56719 0.453954C2.43948 0.337253 2.27271 0.272594 2.0997 0.272705H0.69334C0.509714 0.272705 0.333609 0.34565 0.203765 0.475494C0.0739218 0.605337 0.000976563 0.781443 0.000976562 0.965069C0.000976563 1.1487 0.0739218 1.3248 0.203765 1.45464C0.333609 1.58449 0.509714 1.65743 0.69334 1.65743H1.46607L2.26275 10.5307C2.31916 11.1705 2.66457 11.8644 3.26034 12.3358C2.18702 13.7066 3.16761 15.7273 4.91398 15.7273C6.36284 15.7273 7.38438 14.2823 6.88752 12.913H10.6777C10.1817 14.2807 11.2009 15.7273 12.6521 15.7273C13.2087 15.7266 13.7424 15.5052 14.136 15.1116C14.5296 14.718 14.751 14.1844 14.7516 13.6278C14.751 13.0711 14.5296 12.5375 14.136 12.1439C13.7424 11.7503 13.2087 11.5289 12.6521 11.5283H4.91861C4.39239 11.5283 3.93416 11.2114 3.73634 10.7486L14.8026 10.0979C14.9498 10.0893 15.0904 10.034 15.204 9.93986C15.3175 9.84577 15.3981 9.71786 15.4339 9.5748L16.841 3.94702C16.8665 3.84488 16.8684 3.73827 16.8465 3.6353C16.8246 3.53232 16.7796 3.43568 16.7148 3.35271C16.65 3.26974 16.5671 3.20262 16.4725 3.15645C16.3779 3.11027 16.274 3.08625 16.1687 3.08621H16.1695ZM4.9132 14.3425C4.72938 14.334 4.55592 14.2549 4.42886 14.1218C4.3018 13.9887 4.2309 13.8118 4.2309 13.6278C4.2309 13.4437 4.3018 13.2668 4.42886 13.1337C4.55592 13.0006 4.72938 12.9215 4.9132 12.913C5.09702 12.9215 5.27048 13.0006 5.39755 13.1337C5.52461 13.2668 5.5955 13.4437 5.5955 13.6278C5.5955 13.8118 5.52461 13.9887 5.39755 14.1218C5.27048 14.2549 5.09702 14.334 4.9132 14.3425ZM12.6521 14.3425C12.4682 14.334 12.2948 14.2549 12.1677 14.1218C12.0407 13.9887 11.9698 13.8118 11.9698 13.6278C11.9698 13.4437 12.0407 13.2668 12.1677 13.1337C12.2948 13.0006 12.4682 12.9215 12.6521 12.913C12.8359 12.9215 13.0093 13.0006 13.1364 13.1337C13.2635 13.2668 13.3344 13.4437 13.3344 13.6278C13.3344 13.8118 13.2635 13.9887 13.1364 14.1218C13.0093 14.2549 12.8359 14.334 12.6521 14.3425ZM14.2137 8.74566L3.55011 9.37157L3.10966 4.47171H15.2824L14.2137 8.74489V8.74566Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_203_359">
                      <rect
                        width="17"
                        height="15.4545"
                        fill="white"
                        transform="translate(0 0.272705)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Women;
