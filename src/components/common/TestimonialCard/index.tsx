import styles from "./TestimonialCard.module.css"
const TestimonialCard = () => {

    return (
        <div className={`${styles.testimonialCardContainer}`}>
            <div className={styles.testimonialCard}>
                <div className={`${styles.clientInfo}`}>
                    <img className={`${styles.image}`} src="/images/user.jpg" alt="" />
                    <span className={`${styles.clientName}`}>Client Name</span>
                </div>
                <p className={`${styles.testimonialText}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit dolor obcaecati nesciunt magni harum ipsam maiores ad dolore velit.</p>
            </div>

        </div>
    )
}

export default TestimonialCard;