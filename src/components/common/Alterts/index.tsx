import styles from './Alerts.module.css';
import { AlertProps } from '../../../types/componentTypes';
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
