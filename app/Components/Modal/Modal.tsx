import classes from "./Modal.module.css";
import Image from "next/image";
import { WomenProps } from "@/app/women/women";

const Modal = ({
  women,
  setWomen,
  activeIndex,
  setActiveIndex,
  activeImageUrl,
  setShowImagesModal,
}: WomenProps) => {
  // Utils
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
      console.log(updatedImages, women);

      return updatedWomen;
    });
  }

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div
          className={classes.cancel}
          onClick={() => {
            setShowImagesModal(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.2225 0L21.5571 3.33457L14.3316 10.5553L21.5555 17.7791L18.2209 21.1137L11.0002 13.8883L3.7795 21.1121L0.444931 17.7776L7.66565 10.5569L0.443359 3.33457L3.77793 0L10.9986 7.22229L18.2225 0Z"
              fill="#FF7D1A"
            />
          </svg>
        </div>
        <div className={classes.activeImage}>
          <div className={classes.imageSection}>
            <div className={classes.activeImage}>
              <div className={classes.mobilePictureNav}>
                <div
                  onClick={() => {
                    setActiveIndex((prevState) => prevState - 1);
                    setActiveImageHandler(activeIndex);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_10_110)">
                      <path
                        d="M8.25 0.75L2.25 6.75L8.25 12.75"
                        stroke="#1D2026"
                        stroke-width="3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_110">
                        <rect width="9" height="13.5" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  onClick={() => {
                    setActiveIndex((prevState) => prevState + 1);
                    setActiveImageHandler(activeIndex);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_10_115)">
                      <path
                        d="M0.75 13.25L6.75 7.25L0.75 1.25"
                        stroke="#1D2026"
                        stroke-width="3"
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
        </div>
        <div className={classes.imageList}></div>
      </div>
    </div>
  );
};

export default Modal;
