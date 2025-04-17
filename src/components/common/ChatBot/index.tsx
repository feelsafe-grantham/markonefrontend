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
    const emailIcon = "/images/email2.png";
    const whatsappIcon = "/images/whatsappIcon.png";
    const questions = [
        {
            icon: whatsappIcon,
            text: "Get Business Hours Instantly",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=Can%20you%20share%20your%20business%20hours%3F`
        },
        {
            icon: whatsappIcon,
            text: "Book Free Consultation Now",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=Do%20you%20offer%20a%20free%20consultation%3F`
        },
        {
            icon: whatsappIcon,
            text: "Know Delivery Timeframe",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=What%20is%20your%20delivery%20timeline%3F`
        },
        {
            icon: whatsappIcon,
            text: "Get Installation Support",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=Do%20you%20provide%20installation%20support%3F`
        },
        {
            icon: whatsappIcon,
            text: "Boost Google Rankings",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=I%20want%20to%20improve%20my%20Google%20ranking.%20Can%20you%20help%3F`
        },
        {
            icon: whatsappIcon,
            text: "Get More Business Leads",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=I%20need%20more%20leads%20for%20my%20business.%20Can%20you%20assist%3F`
        },
        {
            icon: whatsappIcon,
            text: "Fix Technical SEO Issues",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=Can%20you%20help%20with%20technical%20SEO%20on%20my%20website%3F`
        },
        {
            icon: whatsappIcon,
            text: "Create Branded Website",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=I%20need%20a%20professionally%20branded%20website.%20Can%20we%20discuss%3F`
        },
        {
            icon: whatsappIcon,
            text: "Build Sales-Driven Website",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=I%20want%20a%20sales-generating%20website.%20What%20can%20you%20offer%3F`
        },
        {
            icon: whatsappIcon,
            text: "Track Website Performance",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=Can%20you%20help%20me%20track%20my%20website%20performance%20and%20analytics%3F`
        },
        {
            icon: whatsappIcon,
            text: "Develop Android | iOS App",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=I%20need%20an%20Android%20or%20iOS%20app%20for%20my%20business.%20Can%20you%20help%3F`
        },
        {
            icon: whatsappIcon,
            text: "Get CRM / ERP Solution",
            whatsappLink: `https://wa.me/+91${"ContactData.phone2"}?text=I'm%20looking%20for%20a%20CRM%20or%20ERP%20solution.%20Can%20you%20provide%20one%3F`
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
                <img className='h-7' src="/images/email2.png" alt="" />
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
                        <img className='h-5' src={question.icon} alt="" /> {question.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MessageBot; 