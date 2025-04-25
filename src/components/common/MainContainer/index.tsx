
import { Link } from "react-router-dom";
import BottomBarNew from "../BottomBarNew";
import styles from "./MainContainer.module.css";
import React, { useEffect, useState } from "react";
import { ContactData } from "../../../utilities/contactData";
const MainContainer = ({
  children,
  chiledContainerClass,

}: Readonly<{
  children: React.ReactNode;
  chiledContainerClass?: string;

}>) => {
  const [height, setHeight] = useState<number | undefined>(undefined);


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
  const message = encodeURIComponent(
    `Hi there! 👋\n\nI'm interested in learning more about your products and current offers. Could you please share more details with me?\n\nHere are my details:\nName:\nPhone:\nBusiness Name:\nWebsite (if any):\n\nLooking forward to your response. Thank you! 🙏`
  );

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
          <Link target="_blank" to={`https://api.whatsapp.com/send?phone=+91${ContactData.phone1}&text=${message}`}>
            <img
              src="/images/offer3.gif"
              alt="feelsafe markone"
              title="Offer by feelsafe markone"
              className={`${styles.offerStrip}`}
            />
          </Link>
        </div>
      </div>
      <div className={`scrollbar-hidden ${styles.container} ${chiledContainerClass} `}>
        {children}
      </div>
      <div className={`${styles.bottomBarContainer}`}>
        <BottomBarNew />
      </div>
    </div >
  );
};

export default MainContainer;
