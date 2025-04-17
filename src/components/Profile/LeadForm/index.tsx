import { useState } from "react";
import styles from "./LeadForm.module.css";
const formspreeUrl = "https://formspree.io/f/xnnpgoww"

const LeadForm = () => {
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
        console.log(answers);
        console.log("i am here4")
        setIsSuccess(true)
    };

    return (
        <div className={`scrollbar-hidden ${styles.parentContainer} `}>
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
                            <option value="25000-50000" className={`${styles.option}`}>25000-50000</option>
                            <option value="50000-100000" className={`${styles.option}`}>50000-100000</option>
                            <option value=">100000" className={`${styles.option}`}> &gt;100000</option>

                        </select>
                    </div>

                </form>
                <div className={`${styles.submitBtnContainer}`}>
                    <button disabled={isLoading} className={`${styles.submitButton}`} onClick={() => handleSubmit()}>
                        {isLoading ? <div className="flex items-center justify-center">Submitting you query... <div className={`${styles.loader}`}></div></div> : <div>Submit</div>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeadForm;
