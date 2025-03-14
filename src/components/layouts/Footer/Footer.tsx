import { dataFooter } from '../../../models/dataFooter';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__inner + ' container'}>
                <div className={styles.Footer__info}>
                    <img
                        src='/logo_prime.svg'
                        alt='PrimeRP'
                        className={styles.Footer__logo}
                        width={253}
                        height={43}
                        loading='lazy'
                    />

                    <p className={styles.Footer__disclaimer}>
                        Prime RP is not affiliated with or endorsed by Take-Two,
                        Rockstar North Interactive, or any other rights holder.
                        All the used trademarks belong to their respective
                        owners.
                    </p>
                </div>

							<nav>
								<ul className={styles.Footer__list}>
											{dataFooter.map((item, index) => (
													<li
															key={`footer_${item.key}_${index}`}
															className={styles.Footer__item}
													>
															<p className={styles.Footer__title}>{item.title}</p>
															<nav className='footer__navigation'>
																	<ul className='footer__navlist'>
																			{item.list.map((item, index) => {
																					return (
																							<li
																									key={`footer_${item.id}_${index}`}
																									className='footer__navItem'
																							>
																									<a
																											href={item.href}
																											className={
																													styles.Footer__link
																											}
																									>
																											{item.text}
																									</a>
																							</li>
																					);
																			})}
																	</ul>
															</nav>
													</li>
											))}
									</ul>
							</nav>

                <div className={styles.Footer__payments}>
                    <img
                        src='./icons/Footer/card-1.svg'
                        alt='visa'
                        className={styles.Footer__paymentCard}
                        width={69.68}
                        height={30.9}
                        loading='lazy'
                    />

                    <img
                        src='./icons/Footer/card-2.svg'
                        alt='masterCard'
                        className={styles.Footer__paymentCard}
                        width={69.68}
                        height={30.9}
                        loading='lazy'
                    />

                    <img
                        src='./icons/Footer/card-3.svg'
                        alt='mir'
                        className={styles.Footer__paymentCard}
                        width={69.68}
                        height={30.9}
                        loading='lazy'
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
