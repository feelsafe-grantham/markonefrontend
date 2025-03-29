import styles from "./VerCaps.module.css";
// import { VerCapsType } from ".types/componentTypes";
import { VerCapsType } from "../../../types/componentTypes";
const VerCaps = ({ heading, caps, onClick }: { heading: string, caps: VerCapsType[], onClick?: () => void }) => {

    return (

        <div className={`${styles.mainContainer}`}>
            <h3 className="text-center text-4xl font-semibold">{heading}</h3>
            <div className={`${styles.capsuleContainer}`}>
                {caps.map((obj) =>
                    <div onClick={onClick} key={obj.text} className={`${styles.capsule} ${obj.caps === "blue" ? styles.blueCaps : styles.redCaps}`}>
                        <p className={` text-white-shadow ${styles.capsuleText}`}>
                            {obj.text}
                        </p>
                    </div>
                )}
            </div >
        </div>

    )
}
export default VerCaps;