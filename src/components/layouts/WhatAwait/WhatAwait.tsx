import Button from '../../ui/Button/Button';
import VideoButton from '../../ui/VideoButton/VideoButton';
import styles from './WhatAwait.module.scss';

const WhatAwait: React.FC = () => {
    return (
        <section className={styles.WhatAwait}>
            <div className={styles.WhatAwait__inner}>
                <div className={styles.WhatAwait__circle}>
                    <div className={styles.WhatAwait__circle_children}></div>
                </div>

                <header className={styles.WhatAwait__header}>
                    <h3 className={styles.WhatAwait__title + ' h3'}>
                        Что вас ждёт
                    </h3>

                    <Button>Больше фото</Button>
                </header>

                <div className={styles.WhatAwait__body}>
                    <a
                        href={'https://www.youtube.com/watch?v=QdBZY2fkU-0'}
                        style={{ display: 'contents' }}
                        target='_blank'
                    >
                        <div className={styles.WhatAwait__poster}>
                            <VideoButton>
                                <span
                                    id='whatAwait__icon'
                                    className={styles.WhatAwait__svgIcon}
                                >
                                    <img
                                        src='./images/playVideo.svg'
                                        width={69}
                                        height={69}
                                    />
                                </span>
                                Смотреть <br />
                                видеоролик
                            </VideoButton>
                        </div>
                    </a>

                    <ul className={styles.WhatAwait__cardList}>
                        <li
                            key={'screenshot_whatawait_1'}
                            className={styles.WhatAwait__cardItem}
                        >
                            <img
                                src='./images/Screenshots/screen_1.jpg'
                                className={styles.WhatAwait__cardImage}
                                width={158}
                                height={91}
                                loading='lazy'
                            />
                        </li>
                        <li
                            key={'screenshot_whatawait_2'}
                            className={styles.WhatAwait__cardItem}
                        >
                            <img
                                src='./images/Screenshots/screen_2.jpg'
                                className={styles.WhatAwait__cardImage}
                                width={158}
                                height={91}
                                loading='lazy'
                            />
                        </li>
                        <li
                            key={'screenshot_whatawait_3'}
                            className={styles.WhatAwait__cardItem}
                        >
                            <img
                                src='./images/Screenshots/screen_3.jpg'
                                className={styles.WhatAwait__cardImage}
                                width={158}
                                height={91}
                                loading='lazy'
                            />
                        </li>
                        <li
                            key={'screenshot_whatawait_4'}
                            className={styles.WhatAwait__cardItem}
                        >
                            <img
                                src='./images/Screenshots/screen_4.jpg'
                                className={styles.WhatAwait__cardImage}
                                width={158}
                                height={91}
                                loading='lazy'
                            />
                        </li>
                        <li
                            key={'screenshot_whatawait_5'}
                            className={styles.WhatAwait__cardItem}
                        >
                            <img
                                src='./images/Screenshots/screen_1.jpg'
                                className={styles.WhatAwait__cardImage}
                                width={158}
                                height={91}
                                loading='lazy'
                            />
                        </li>
                        <li
                            key={'screenshot_whatawait_6'}
                            className={styles.WhatAwait__cardItem}
                        >
                            <img
                                src='./images/Screenshots/screen_2.jpg'
                                className={styles.WhatAwait__cardImage}
                                width={158}
                                height={91}
                                loading='lazy'
                            />
                        </li>
                        <li
                            key={'screenshot_whatawait_7'}
                            className={styles.WhatAwait__cardItem}
                        >
                            <img
                                src='./images/Screenshots/screen_4.jpg'
                                className={styles.WhatAwait__cardImage}
                                width={158}
                                height={91}
                                loading='lazy'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhatAwait;
