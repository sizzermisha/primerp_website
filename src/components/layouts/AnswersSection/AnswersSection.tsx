import { dataAnswer } from '../../../models/dataAnswer';
import Answer from '../../ui/Answer/Answer';
import Button from '../../ui/Button/Button';
import Styles from './AnswersSection.module.scss';

const AnswersSection: React.FC = () => {
    return (
        <section className={Styles.AnswersSection}>
            <div className={Styles.AnswersSection__inner + ' container'}>
                <header className={Styles.AnswersSection__header}>
									<div className={Styles.AnswersSection__info}>
										<div className={Styles.AnswersSection__circle} />
											<h3 className={Styles.AnswersSection__title}>
													Ответы на частые вопросы
											</h3>
									</div>

                    <Button>Другие вопросы</Button>
                </header>

								<ul className={Styles.AnswersSection__list}>
									{dataAnswer.map((value, index) => (
										<li key={`answer-item-${index}`} className={Styles.AnswersSection__item}>
											<Answer 
												question={value.question} 
												answer={value.answer} 
											/>
										</li>
									))}
								</ul>
            </div>
        </section>
    );
};

export default AnswersSection;
