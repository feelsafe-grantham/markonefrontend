// import Form from "@/components/common/Form"
// import Form from "../../components/common/Form";
import styles from "./FormView.module.css"
const FormView = () => {
    // const questions = [
    //     {
    //         name: "How much buddget you want to sepend on this project?",
    //         options: [
    //             { value: "20k to 50k", label: "20k to 50k" },
    //             { value: "50k to 100k", label: "50k to 100k" },
    //             { value: "100k to 200k", label: "100k to 200k" },
    //         ],
    //     },
    //     {
    //         name: "How much time you want to sepend on this project?",
    //         options: [
    //             { value: "1", label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro harum nemo2." },
    //             { value: "2", label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro harum nemo3." },
    //             { value: "3", label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro harum nemo1." },
    //         ],
    //     },
    //     {
    //         name: "How much resource you want to sepend on this project?",
    //         options: [
    //             { value: "1", label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro harum nemo1." },
    //             { value: "2", label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro harum nemo2." },
    //             { value: "3", label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro harum nemo3." },
    //         ],
    //     },
    // ];

    // const formLink = "/thank-you";
    return (
        <div className="flex justify-center">
            {/* <Form formLink={formLink} questions={questions} /> */}
            <div className={`relative ${styles.imageContainer}`}>
                <img className="" src="/images/blueCapsule.png" alt="aman is here" />
                <span className="absolute top-10 right-24 text-2xl font-bold">70%</span>
            </div>
        </div>
    )
}

export default FormView;