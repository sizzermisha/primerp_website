import { dataSocial } from '../../../models/dataSocial';
import Styles from './SocialSection.module.scss';

const SocialSection: React.FC = () => {
    return (
        <section className={Styles.SocialSection}>
            <div className={Styles.SocialSection__inner + ' container'}>
                <ul className={Styles.SocialSection__list}>
                    {dataSocial.map((value, index) => (
                        <li
                            key={`social-${value.name}-${index}`}
                            className={
                                Styles.SocialItem +
                                ` ${value.additionalClassName}`
                            }
                        >
                            <a
                                href={value.href}
                                className={Styles.SocialSection__link}
																target='_blank'
                            >
                                <div className={Styles.SocialSection__image}>
                                    <img
                                        src={value.image}
                                        alt=''
                                        loading='lazy'
                                    />
                                </div>

                                <p className={Styles.SocialSection__name}>
                                    {value.name}
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SocialSection;
