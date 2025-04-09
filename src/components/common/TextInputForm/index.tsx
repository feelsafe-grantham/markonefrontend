import { useState } from "react";
import styles from "./TextInputForm.module.css";


const TextInputForm = ({ form }: any) => {
  const [answers, setAnswers] = useState({
    name: "",
    email: "",
    number: "",
    website: "",
    hiring: false,
    seo: false,
    cost: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const updated = { ...answers, ...form };
    console.log("sbuttimg with: ", updated)
    try {
      setIsLoading(true);
      const res = await fetch("https://formspree.io/f/xnnpgoww", {
        method: "POST",
        body: JSON.stringify(updated),
      })
    } catch (error) {
      setIsSuccess(false);
      console.error("Error:", error);
    }
    finally {
      setIsSuccess(true)
      setIsLoading(false);
    }

  };

  return (
    <div className={`${styles.parentContainer} `}>
      {isSuccess && (
        <div className={`${styles.successMsgContainer}`}>
          Success! Your operation was completed successfully.
        </div>
      )}
      <div className={`scrollbar-hidden ${styles.formContainerBase} ${styles.formContainer}`}>
        <h3 className={`${styles.heading}`}>You are almost done!</h3>
        <p className={`${styles.paragraph}`}>you are doing it right </p>
        <form
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

          <div className="flex justify-center items-start flex-col">
            <div className={`${styles.selectInputContainer}`}>
              <input

                className={`${styles.selectInput}`}
                type="checkbox"
                name="hiring"
                id="hiring"
                checked={answers.hiring}
                onChange={handleChange}
              />
              <label htmlFor="hiring" className={`${styles.selectLabel}`}>
                What I get after hiring you ?
              </label>
            </div>
            <div className={`${styles.selectInputContainer}`}>
              <input
                className={`${styles.selectInput}`}
                type="checkbox"
                name="seo"
                id="seo"
                checked={answers.seo}
                onChange={handleChange}
              />
              <label htmlFor="seo" className={`${styles.selectLabel}`}>
                SEO strategy that 200% works.
              </label>

            </div>
            <div className={`${styles.selectInputContainer}`}>
              <input
                className={`${styles.selectInput}`}
                type="checkbox"
                name="cost"
                id="cost"
                checked={answers.cost}
                onChange={handleChange}
              />
              <label htmlFor="cost" className={`${styles.selectLabel}`}>
                Get cost cutting updates everyday .
              </label>

            </div>
          </div>

        </form>
        <div className={`${styles.submitBtnContainer}`}>
          <button disabled={isLoading} className={`${styles.submitButton}`} onClick={(e) => handleSubmit(e)}>
            {isLoading ? <div className="flex items-center justify-center">Submitting you query... <div className={`${styles.loader}`}></div></div> : <div>Submit</div>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextInputForm;
