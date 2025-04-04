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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updated = { ...answers, ...form };
    try {
      setIsLoading(true);
      await fetch("https://formspree.io/f/xnnpgoww", {
        method: "POST",
        body: JSON.stringify(updated),
      })
        .then((response) => response.json())
        .then((data) => {

          setIsSuccess(true);
          setAnswers({
            name: "",
            email: "",
            number: "",
            website: "",
            hiring: false,
            seo: false,
            cost: false,
          })
          console.log("Success:", data);
        })
        .catch((error) => {

          console.error("Error:", error);
          // Optionally, handle error
        });

    } catch (error) {
      setIsSuccess(false);
      console.error("Error:", error);
    }
    finally {
      setIsLoading(false); // Hide the loading spinner once the request is complete
    }

  };

  return (
    <div className="flex justify-center">
      <div className={`scrollbar-hidden ${styles.formContainer}`}>
        <h3 className={`${styles.heading}`}>You are almost done!</h3>
        {<p className={`${styles.paragraph}`}>you are doing it right </p>}
        {isSuccess ? <div className="text-green-500">
          <h4 className="text-xl">Thank you for submitting the form!</h4>
          <p>We will get back to you shortly.</p>
        </div> : <form
          className={`flex flex-col space-y-10 ${styles.form}`}
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
              required
              type="text"
              className={`${styles.input}`}
              name="website"
              id="website"
              value={answers.website}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center flex-col sm:flex-row sm:justify-between gap-1">
            <div className={`${styles.selectInputContainer}`}>
              <input
                required
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
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className={styles.loader}></div>
            </div>
          ) : (
            <button className={`${styles.submitButton}`} type="submit">
              Submit
            </button>
          )}
        </form>}
      </div>
    </div>
  );
};

export default TextInputForm;
