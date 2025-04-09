
import styles from "./Bottombar.module.css";
import CtaCard from "../../widgets/CtaCard";
import CapsFull from "../../widgets/CapsFull";
import CapsHalf from "../../widgets/CapsHalf";
import { useNavigate } from "react-router-dom";
const Bottombar = ({ setActiveTab }: Readonly<{ setActiveTab?: (tab: string) => void }>) => {
  const navigate = useNavigate();
  const handleTabClick = (tabName: string) => {
    console.log("Tab clicked:", tabName);
    if (setActiveTab) {
      navigate("/");
      setActiveTab(tabName);
    }
    else {
      navigate("/");
    }
  }
  return (
    <>
      <div className={`${styles.bottombar} ${styles.bottombarDesktop}`}>
        <CapsFull onClick={() => handleTabClick("connect")} size="medium" text="Connect" type="green" />
        <div
          className={`flex justify-center items-center gap-5 w-full ${styles.ctaContainer}`}
        >
          <CtaCard link="/" type="testimonial" />
          <CtaCard link="/" type="blog" />
          <CtaCard link="/" type="result" />
        </div>
        <CapsFull onClick={() => handleTabClick("profile")} size="medium" text="Profile" type="red" />
      </div>
      <div className={`${styles.bottombar} ${styles.bottombarMobile}`}>
        <div className={`flex justify-center items-end gap-5 w-full`}>
          <CtaCard link="/" type="testimonial" />
          <CtaCard link="/" type="blog" />
          <CtaCard link="/" type="result" />
        </div>
        <div className="flex justify-center w-full">
          <CapsHalf onClick={() => handleTabClick("connect")} size="small" text="Connect" type="green" />
          <CapsHalf onClick={() => handleTabClick("profile")} size="small" text="Profile" type="red" />
        </div>
      </div>
    </>
  );
};

export default Bottombar;
