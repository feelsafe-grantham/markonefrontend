
import { useState } from "react";
import styles from "./TextInputForm.module.css";

const TextInputForm = () => {

  const [answers, setAnswers] = useState({
    aman1: "",
    aman2: "",
    aman3: false,
    aman4: false,
    aman5: false,
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // Update the state based on the type of the input (checkbox or text)
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with answers:", answers);
  };



  return (
    <div className="flex justify-center">
      <div className={`${styles.formContainer}`}>
        {/* <img
          className={`${styles.capsulePhone}`}
          src="/images/blueCapsule.png"
          alt="aman is here"
        /> */}
        <h3 className={`${styles.heading}`}>You are almost done!</h3>
        {<p className={`${styles.paragraph}`}>you are doing it right </p>}
        <form
          className={`flex flex-col space-y-10 ${styles.form}`}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="q1" className={`${styles.label}`}>
              How to get it done here right now?
            </label>
            <input
              type="text"
              className={`${styles.input}`}
              name="aman1"
              id="q1"
              value={answers.aman1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="q2" className={`${styles.label}`}>
              How will it be done after this?
            </label>
            <input
              type="text"
              className={`${styles.input}`}
              name="aman2"
              id="q2"
              value={answers.aman2}
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
