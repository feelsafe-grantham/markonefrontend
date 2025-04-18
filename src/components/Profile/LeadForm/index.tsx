import { useState } from "react";
import styles from "./LeadForm.module.css";
import { Link } from "react-router-dom";
import { ContactData } from "../../../utilities/contactData";
import { useNavigate } from "react-router-dom";
const formspreeUrl = "https://formspree.io/f/xnnpgoww"

const LeadForm = () => {
    const navigate = useNavigate();

    const [answers, setAnswers] = useState({
        name: "",
        email: "",
        number: "",
        website: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setIsSuccess(true)
    };

    return (
        <div className={`scrollbar-hidden ${styles.parentContainer} `}>
            <div className={`${styles.mapContainer} black-trans`}>
                <iframe
                    className={`${styles.map}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.91808579808634!2d77.03415770083667!3d28.60909413957715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e6d897c561%3A0xa0a263035a72062f!2sfeelsafe%20markone%20%7C%20Best%20SEO%20%26%20Application%20Development%20Company!5e0!3m2!1sen!2sin!4v1744883262964!5m2!1sen!2sin"

                    loading="lazy"
                >
                </iframe>
            </div>
            {/* 
            <div className={`scrollbar-hidden ${styles.formContainerBase} ${styles.formContainer}`}>
                <form
                    action={formspreeUrl}
                    method="POST"
                    className={`scrollbar-hidden ${styles.form}`}
                    onSubmit={handleSubmit}
                >

                    <div>
                        <label htmlFor="name" className={`${styles.label}`}>
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            className={`${styles.input}`}
                            name="name"
                            id="name"
                            value={answers.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={`${styles.label}`}>
                            Email address
                        </label>
                        <input
                            required
                            type="email"
                            className={`${styles.input}`}
                            name="email"
                            id="email"
                            value={answers.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="number" className={`${styles.label}`}>
                            Contact number
                        </label>
                        <input
                            required
                            type="tel"
                            className={`${styles.input}`}
                            name="number"
                            id="number"
                            value={answers.number}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="website" className={`${styles.label}`}>
                            Company website
                        </label>
                        <input
                            type="text"
                            className={`${styles.input}`}
                            name="website"
                            id="website"
                            value={answers.website}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <select name="budget" id="budget" className={`${styles.select}`}>
                            <option value="25000-50000" className={`${styles.option}`}>₹25,000 - ₹50,000</option>
                            <option value="50000-100000" className={`${styles.option}`}>₹50,000 - ₹1,00,000</option>
                            <option value=">100000" className={`${styles.option}`}>Above ₹1,00,000</option>
                        </select>
                    </div>


                </form>
                <div className={`${styles.submitBtnContainer}`}>
                    <button disabled={isLoading} className={`${styles.submitButton}`} onClick={() => handleSubmit()}>
                        {isLoading ? <div className="flex items-center justify-center">Submitting you query... <div className={`${styles.loader}`}></div></div> : <div>Submit</div>}
                    </button>
                </div>
            </div> 
            */}
            <div className={`${styles.contactInfoContainer}`}>
                <div className={`trans-black-bg ${styles.contactInfo}`}>
                    <label htmlFor="phone">Phone</label>: <Link to={`tel:${ContactData.phone1}`} className={`${styles.contactInfoText}`}>+91 {ContactData.phone1}</Link>
                </div>
                <div className={`trans-black-bg ${styles.contactInfo}`}>
                    <label htmlFor="email">Email</label>: <Link to={`mailto:${ContactData.email}`} className={`${styles.contactInfoText}`}>{ContactData.email}</Link>
                </div>
                <div className={`trans-black-bg ${styles.contactInfo}`}>
                    <label htmlFor="openingHours">Opening hours</label>: <p className={`${styles.contactInfoText}`}>10:00 AM - 6:00 PM (Mon - Sat)</p>
                </div>
                <div className={`trans-black-bg ${styles.contactInfo}`}>
                    <button onClick={() => navigate("/connect")} className={`${styles.connectButton}`}>Connect with us</button>
                </div>

            </div>

        </div>

    );
};

export default LeadForm;
