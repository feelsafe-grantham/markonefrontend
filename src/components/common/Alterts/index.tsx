import styles from './Alerts.module.css';
interface AlertProps {
    type: "rating" | "like" | "testimonial" | "subscribed" | "comment";
    emoji?: string;
    name: string;
    segment: string;
    message: string;
}
const Alerts = ({ alert }: { alert: AlertProps }) => {
    return (
        <div className={styles.alertContainer}>
            {alert.emoji && <div className={styles.alertEmoji}>
                {alert.emoji}
            </div>}
            <div>
                <div className={styles.alertHeader}>
                    <div className={styles.alertItem}>{alert.name}</div>
                    |
                    <div className={styles.alertItem}>{alert.segment}</div>
                </div>
                <div className={styles.alertMessage}>
                    {alert.message}
                </div>
            </div>
        </div>
    );
}

export default Alerts;
