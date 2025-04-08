import styles from "./HomeView.module.css";
import CapsFull from "../../components/widgets/CapsFull";
import CapsFullPhone from "../../components/widgets/CapsFullPhone";

const HomeView = ({
  setActiveTab,
}: Readonly<{ setActiveTab?: (tab: string) => void }>) => {
  const handleClick = (tabName: string) => {
    if (setActiveTab) setActiveTab(tabName);
  };
  return (
    <>
      <div className={`relative p-4 ${styles.homeView}`}>
        {/* <div
          className={`${styles.bgImage} ${styles.bgPosition} ${styles.bgContainer}`}
        > */}
        {/* <p className={`text-white-shadow ${styles.textCta}`}>
            Feeling Tired <br />
            Just Hire
          </p> */}
        {/* <p className={`caveat ${styles.textPara}`}>
            Someone classy that match your imagination <br /> with your brand
          </p> */}
      </div>
      {/* </div> */}
      {/* <div className={`${styles.capCtaContainer}`}>
        <div className={`${styles.leftCapsule}`}>
          <CapsFull
            onClick={() => handleClick("project")}
            link="#"
            size="small"
            text="Development"
            type="green"
          />
        </div>
        <div className={`${styles.rightCapsule}`}>
          <CapsFull
            onClick={() => handleClick("seoproject")}
            link="#"
            size="small"
            text="SEO"
            type="red"
          />
        </div>
        <div className={`${styles.leftCapsulePhone}`}>
          <CapsFullPhone
            onClick={() => handleClick("project")}
            link="#"
            size="small"
            text="Development"
            type="green"
          />
        </div>
        <div className={`${styles.rightCapsulePhone}`}>
          <CapsFullPhone
            onClick={() => handleClick("seoproject")}
            link="#"
            size="small"
            text="SEO"
            type="red"
          />
        </div>
      </div> */}
    </>
  );
};

export default HomeView;
