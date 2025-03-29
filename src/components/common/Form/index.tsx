
// import { useState } from "react";
// import styles from "./Form.module.css"
// import { Question, Answers } from "@/types/componentTypes";

export default function Form() {
    return <div></div>
}

// const Form = ({ questions, formLink, paragraph }: { questions: Question[]; formLink: string; paragraph?: string }) => {
//     // const [answers, setAnswers] = useState<Answers | null>({ one1: "", two2: "", three3: "" });

//     // // Handle change in selection
//     // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     //     const { name, value } = e.target;
//     //     // setAnswers((prevAnswers) => ({
//     //     //     ...prevAnswers,
//     //     //     [name]: value,
//     //     // }));
//     // };

//     // // Handle form submission
//     // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     //     e.preventDefault();
//     //     console.log("Form submitted with answers:", answers);
//     // };

//     return (
//         <div className="flex justify-center">
//             <div className={`${styles.formContainer}`}>
//                 <img className={`${styles.capsulePhone}`} src="/images/blueCapsule.png" alt="aman is here" />
//                 <h3 className={`${styles.heading}`}>You are almost done!</h3>
//                 {paragraph && <p className={`${styles.paragraph}`}>{paragraph}</p>}
//                 <form className={`flex flex-col space-y-4 ${styles.form}`} onSubmit={handleSubmit}>
//                     {/* Render the questions dynamically */}
//                     {questions.map((question, index) => (
//                         <select
//                             key={index}
//                             className={`${styles.select}`}
//                             name={question.name}
//                             id={question.name}
//                             // value={answers[question.name as keyof Answers]}
//                             onChange={handleChange}
//                         >
//                             <option disabled selected className={`${styles.option}`} >{question.name}</option>
//                             {question.options.map((option, optionIndex) => (
//                                 <option key={optionIndex} className={`${styles.option}`} value={option.value}>
//                                     {option.label}
//                                 </option>
//                             ))}
//                         </select>
//                     ))}
//                     <button className={`${styles.submitButton}`} type="submit">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Form;