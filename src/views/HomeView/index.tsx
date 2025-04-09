import styles from "./HomeView.module.css";
import CapsFull from "../../components/widgets/CapsFull";
import CapsFullPhone from "../../components/widgets/CapsFullPhone";
import { useNavigate } from 'react-router-dom';
import PageSeo from "../../components/common/PageSeo";
const HomeView = () => {
  const navigate = useNavigate();
  const handleClick = (tabName: string) => {
    navigate(tabName);
  };
  return (
    <>
      <PageSeo
        title="Best Website Development & SEO Services | Rank #1 on Google "
        description="Boost your business with Markone’s website development & SEO services. Get a high-ranking, lead-generating site today with expert strategies!"
        canonicalUrl="https://feelsafemarkone.com/"
        url="https://feelsafemarkone.com/"
      />
      <div className={`${styles.homeView}`}>
        <div
          className={`${styles.bgImage} ${styles.bgPosition} ${styles.bgContainer}`}
        >
          <p className={`text-white-shadow ${styles.textCta}`}>
            Feeling Tired <br />
            Just Hire
          </p>
          <p className={`caveat ${styles.textPara}`}>
            Someone classy that match your imagination <br /> with your brand
          </p>
        </div>
        {/* <div onClick={() => handleClick("/development")}>Go to other page</div> */}
      </div>
      <div className={`${styles.capCtaContainer}`}>
        <div className={`${styles.leftCapsule}`}>
          <CapsFull
            onClick={() => handleClick("/development")}
            size="small"
            text="Development"
            type="green"
          />
        </div>
        <div className={`${styles.rightCapsule}`}>
          <CapsFull
            onClick={() => handleClick("/seo")}
            size="small"
            text="SEO"
            type="red"
          />
        </div>
        <div className={`${styles.leftCapsulePhone}`}>
          <CapsFullPhone
            onClick={() => handleClick("/development")}
            size="small"
            text="Development"
            type="green"
          />
        </div>
        <div className={`${styles.rightCapsulePhone}`}>
          <CapsFullPhone
            onClick={() => handleClick("/seo")}
            size="small"
            text="SEO"
            type="red"
          />
        </div>
      </div>
    </>
  );
};

export default HomeView;
