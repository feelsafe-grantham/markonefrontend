
import { useState } from "react";
import styles from "./TextInputForm.module.css";

const TextInputForm = ({ form }: any) => {

  const [answers, setAnswers] = useState({
    name: "",
    email: "",
    number: "",
    website: "",
    aman3: false,
    aman4: false,
    aman5: false,
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updated = { ...answers, ...form };
    console.log("Form submitted with answers:", updated);
  };



  return (
    <div className="flex justify-center">
      <div className={`scrollbar-hidden ${styles.formContainer}`}>
        <h3 className={`${styles.heading}`}>You are almost done!</h3>
        {<p className={`${styles.paragraph}`}>you are doing it right </p>}
        <form
          className={`flex flex-col space-y-10 ${styles.form}`}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className={`${styles.label}`}>
              Name
            </label>
            <input
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
          <div className="flex justify-center flex-col sm:flex-row sm:justify-between gap-1">
            <div className="flex gap-1 md:gap-3">
              <label htmlFor="q3" className="text-[14px] md:text-[18px]">
                Question 1
              </label>
              <input
                type="checkbox"
                name="aman3"
                id="q3"
                checked={answers.aman3}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-1 md:gap-3">
              <label htmlFor="q4" className="text-[14px] md:text-[18px]">
                Question 2
              </label>
              <input
                type="checkbox"
                name="aman4"
                id="q4"
                checked={answers.aman4}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-1 md:gap-3">
              <label htmlFor="q5" className="text-[14px] md:text-[18px]">
                Question 3
              </label>
              <input
                type="checkbox"
                name="aman5"
                id="q5"
                checked={answers.aman5}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className={`${styles.submitButton}`} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TextInputForm;
