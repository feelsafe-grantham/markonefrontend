import { useState } from "react";
import styles from "./TextInputForm.module.css";

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidNumber = (number: string) => {
  // make it at least 10 digits
  return /^[0-9]{10,}$/.test(number);
};

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
  const [isError, setIsError] = useState<boolean | string>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setIsError(false);
    setIsSuccess(false);
    // do not allow typing character in number field
    if (name === "number") {
      //if user is typing character then do not allow it
      if (/[^0-9]/.test(value)) {
        return;
      }
    }
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setAnswers({
      name: "",
      email: "",
      number: "",
      website: "",
      hiring: false,
      seo: false,
      cost: false,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const updated = { ...answers, ...form };
    if (!updated.name) {
      setIsError("Please enter your name");
      return;
    }
    //make sure  no email and name is not empty
    if (!updated.email && !updated.number) {
      setIsError("Please provide either an email address or phone number");
      return;
    }
    //if email is not empty then check if it is valid
    if (updated.email && !isValidEmail(updated.email)) {
      setIsError("Please enter a valid email address");
      return;
    }

    //if number is not empty then check if it is valid
    if (updated.number && !isValidNumber(updated.number)) {
      setIsError("Please enter a valid phone number");
      return;
    }
    try {
      setIsLoading(true);
      await fetch("https://formspree.io/f/xnnpgoww", {
        method: "POST",
        body: JSON.stringify(updated),
      })
      resetForm();
    } catch (error) {
      setIsSuccess(false);
      console.error("Error:", error);
    }
    finally {
      setIsSuccess(true)
      resetForm();
      setIsLoading(false);
    }

  };

  return (
    <div className={`${styles.parentContainer} `}>
      {isSuccess && (
        <div className={`${styles.successMsgContainer} font-bold text-xl`}>
          Your query has been submitted successfully.
        </div>
      )}
      {isError && (
        <div className={`${styles.errorMsgContainer} font-bold text-xl`}>
          {isError}
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
