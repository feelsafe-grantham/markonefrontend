import { useState, } from 'react';
import styles from './ChatBot.module.css';
import { ContactData } from '../../../utilities/contactData';

const MessageBot = () => {
    const [isVisible, setIsVisible] = useState(true);//make it false by default
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const whatsappIcon = "/images/whatsappIcon.png";
    const questions = [
        {
            icon: whatsappIcon,
            text: "Lets fix your Google Rankings",
            whatsappLink: `https://wa.me/+91${ContactData.phone1}?text=Hi%2C%20I'm%20interested%20in%20boosting%20my%20Google%20rankings.%20Can%20you%20guide%20me%20on%20the%20best%20way%20to%20get%20started%3F`
        },
        {
            icon: whatsappIcon,
            text: "Get More Business Leads",
            whatsappLink: `https://wa.me/+91${ContactData.phone1}?text=Hey%2C%20I'm%20looking%20to%20get%20more%20quality%20leads%20for%20my%20business.%20Can%20you%20help%20me%20generate%20them%3F`
        },
        {
            icon: whatsappIcon,
            text: "Fix Technical SEO Issues",
            whatsappLink: `https://wa.me/+91${ContactData.phone1}?text=Hi%2C%20I'm%20facing%20some%20technical%20SEO%20issues%20on%20my%20website.%20Could%20you%20take%20a%20look%20and%20suggest%20a%20solution%3F`
        },
        {
            icon: whatsappIcon,
            text: "Create Branded Website",
            whatsappLink: `https://wa.me/+91${ContactData.phone1}?text=Hello%2C%20I'm%20interested%20in%20creating%20a%20branded%20website%20for%20my%20business.%20Can%20you%20help%20me%20with%20the%20design%20and%20development%3F`
        },
        {
            icon: whatsappIcon,
            text: "Build Sales-Driven Website",
            whatsappLink: `https://wa.me/+91${ContactData.phone1}?text=Hi%2C%20I%20want%20a%20website%20that%20can%20help%20increase%20sales%20and%20conversions.%20Could%20you%20tell%20me%20what%20you%20can%20offer%3F`
        },
        {
            icon: whatsappIcon,
            text: "Track Website Performance",
            whatsappLink: `https://wa.me/+91${ContactData.phone1}?text=Hey%2C%20I'd%20like%20to%20start%20tracking%20my%20website's%20performance%20and%20analytics.%20Can%20you%20set%20that%20up%20for%20me%3F`
        },
        {
            icon: whatsappIcon,
            text: "Develop Android | iOS App",
            whatsappLink: `https://wa.me/+91${ContactData.phone1}?text=Hi%2C%20I%20need%20a%20mobile%20app%20(Android%20or%20iOS)%20for%20my%20business.%20Can%20we%20discuss%20how%20you%20can%20help%20build%20it%3F`
        },
        {
            icon: whatsappIcon,
            text: "Get CRM / ERP Solution",
            whatsappLink: `https://wa.me/+91${ContactData.phone1}?text=Hello%2C%20I'm%20exploring%20CRM%20or%20ERP%20solutions%20for%20my%20company.%20Could%20you%20share%20what%20solutions%20you%20provide%3F`
        }

    ];

    const handleQuestionClick = (index: number) => {
        setSelectedQuestion(index);
        window.open(questions[index].whatsappLink, '_blank');
    };

    const handleEmailClick = () => {
        const subject = encodeURIComponent("Inquiry About Your Services");

        const body = encodeURIComponent(
            `Hi there,\n\nI'm interested in your digital services. Please find my details below:\n\n` +
            `Name: \n` +
            `Contact Number: \n` +
            `Business Name: \n` +
            `Website (if any): \n` +
            `Services I'm interested in: \n\n` +
            `Looking forward to your response.\n\nThanks!`
        );

        window.open(`mailto:${ContactData.email}?subject=${subject}&body=${body}`, '_blank');
    };

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatHeader}>
                <img onClick={handleEmailClick} className='h-7' src="/images/email2.png" alt="" />
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