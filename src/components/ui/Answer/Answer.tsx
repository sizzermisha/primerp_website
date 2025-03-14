import { AnswerType } from '../../../models/declare/answer';
import Styles from './Answer.module.scss';

const Answer: React.FC<AnswerType> = (props) => {
    const { question, answer } = props;

    return (
        <div className={Styles.Answer}>
            <p className={Styles.Answer__question}>{question}</p>
            <p className={Styles.Answer__description}>{answer}</p>
        </div>
    );
};

export default Answer;
