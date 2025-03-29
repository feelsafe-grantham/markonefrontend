import styles from "./Timeline.module.css";


const Timeline = ({ timelineData = [
    "Start",

] }: { timelineData: string[] }) => {


    return (
        <div className={`${styles.timelineContainer} trans-black-bg`}>
            <h1 className={`${styles.timelineTitle}`}>Timeline</h1>
            <div className={styles.timeline}>
                {timelineData.map((step, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.dot}></div>
                        <div className={styles.step}>{step}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;