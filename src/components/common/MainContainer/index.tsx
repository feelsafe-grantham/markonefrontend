
import { Link, useNavigate } from "react-router-dom";
import styles from "./MainContainer.module.css";
import React, { useEffect, useState } from "react";
import BottomBarNew from "../BottomBarNew";
const MainContainer = ({
  children,
  chiledContainerClass,

}: Readonly<{
  children: React.ReactNode;
  chiledContainerClass?: string;

}>) => {
  const [height, setHeight] = useState<number | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {

    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    setHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (height === undefined) {
    return <div>Loading...</div>; // or null if you prefer
  }

  return (
    <div className={`${styles.mainContainer}`} style={{ height }}>
      <div className={` ${styles.topBarContainer}`}>
        <Link to="/" className={` ${styles.logoContainer}`}>
          <img
            className={`${styles.logo}`}
            src="/images/logotranswhite.png"
            alt="markone the right choice for marketing"
          />
        </Link>
        <div className={`${styles.offerStripContainer}`}>
          <Link target="_blank" to="https://api.whatsapp.com/send?phone=+919990587916&text=Hi, I am interested in your products. Can you please share some details ?">
            <img
              src="/images/offer2.gif"
              alt="feelsafe markone"
              title="Offer by feelsafe markone"
              className={`${styles.offerStrip}`}
            />
          </Link>
        </div>
      </div>
      <div
        className={`${styles.container} ${chiledContainerClass} scrollbar-hidden`}
      >
        {children}
      </div>
      <div className={`${styles.bottomBarContainer}`}>
        <BottomBarNew />
      </div>
    </div>
  );
};

export default MainContainer;
