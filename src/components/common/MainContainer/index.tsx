
import { useNavigate } from "react-router-dom";
import styles from "./MainContainer.module.css";
import React, { useEffect, useState } from "react";
const MainContainer = ({
  children,
  chiledContainerClass,
  setActiveTab,
}: Readonly<{
  children: React.ReactNode;
  chiledContainerClass?: string;
  setActiveTab?: (tab: string) => void;
}>) => {
  // const [height, setHeight] = useState(window.innerHeight);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    // const handleResize = () => {
    //     setHeight(window.innerHeight);
    // };
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
      {/* Header with Logo */}
      <div className="px-1 py-1 lg:px-0 lg:py-4 relative z-10 ">
        <img
          onClick={handleClick}
          className={`h-14 lg:h-18 ${styles.logo}`}
          src="/images/logotranswhite.png"
          alt="markone the right choice for marketing"
        />
      </div>
      <div
        className={`${styles.container} ${chiledContainerClass} relative z-0`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
