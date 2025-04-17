import { useState, } from 'react';
import styles from './ChatBot.module.css';

const MessageBot = () => {
    const [isVisible, setIsVisible] = useState(true);//make it false by default
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    // useEffect(() => {
    //     // Check if chat was previously shown
    //     const chatShown = localStorage.getItem('chatShown');
    //     if (!chatShown) {
    //         // Add a small delay to ensure the component is mounted
    //         const timer = setTimeout(() => {
    //             setIsVisible(true);
    //             localStorage.setItem('chatShown', 'true');
    //         }, 2000); // Increased delay to 2 seconds
    //         return () => clearTimeout(timer);
    //     }
    // }, []);

    const questions = [
        {
            text: "What are your business hours?",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=What%20are%20your%20business%20hours%3F`
        },
        {
            text: "Do you offer free consultation?",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=Do%20you%20offer%20free%20consultation%3F`
        },
        {
            text: "What is your delivery time?",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=What%20is%20your%20delivery%20time%3F`
        },
        {
            text: "Do you provide installation service?",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=Do%20you%20provide%20installation%20service%3F`
        }
    ];

    const handleQuestionClick = (index: number) => {
        setSelectedQuestion(index);
        window.open(questions[index].whatsappLink, '_blank');
    };

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatHeader}>


                <h3>How can we help you ?</h3>
                <button onClick={handleDismiss} className={styles.closeButton}>×</button>
            </div>
            <div className={styles.questionsContainer}>
                {questions.map((question, index) => (
                    <button
                        key={index}
                        className={`${styles.questionButton} ${selectedQuestion === index ? styles.selected : ''}`}
                        onClick={() => handleQuestionClick(index)}
                    >
                        {question.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MessageBot; 