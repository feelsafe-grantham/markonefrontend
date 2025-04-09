
import { useNavigate } from "react-router-dom";
import styles from "./MainContainer.module.css";
import React, { useEffect, useState } from "react";
import BottomBarNew from "../BottomBarNew";
const MainContainer = ({
  children,
  chiledContainerClass,
  setActiveTab,
}: Readonly<{
  children: React.ReactNode;
  chiledContainerClass?: string;
  setActiveTab?: (tab: string) => void;
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
  const handleClick = () => {
    if (setActiveTab) {
      navigate("/");
      setActiveTab("home");
    }
    else {
      navigate("/");
    }
  };
  return (
    <div className={`${styles.mainContainer}`} style={{ height }}>
      <div className={` ${styles.logoContainer}`}>
        <img
          onClick={handleClick}
          className={`${styles.logo}`}
          src="/images/logotranswhite.png"
          alt="markone the right choice for marketing"
        />
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
