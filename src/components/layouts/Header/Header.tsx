import { dataNavigation } from '../../../models/dataNavigation';
import NavigationButton from '../../ui/NavigationButton/NavigationButton';
import styles from './Header.module.scss';

export default function Header() {
    const handleChangeLanguage = () => {
        console.log('Clicked');
    };

    const handleMenuMobile = () => {
        console.log('Clicked');
    };

    return (
        <header className={styles.Header}>
            <div className={styles.Header__inner + ' container'}>
                <img
                    src='/logo_prime.svg'
                    className={styles.Header__logo}
                    alt='Prime RP'
                    width={169}
                    loading='lazy'
                />

                <nav className={styles.Header__navigation}>
									
                    <ul className={styles.Header__list}>
                        {dataNavigation.map((value) => (
                            <li key={value.key}>
                                <a
                                    href={value.href}
                                    className={
                                        styles.Header__item +
                                        (value.isActive
                                            ? ` ${styles.Header__item_isActive}`
                                            : '')
                                    }
                                >
                                    {value.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.Header__listButton}>
                        <NavigationButton
                            icon={'language.svg'}
                            name='Сменить язык'
                            onClick={handleChangeLanguage}
                        />
                        <NavigationButton
                            icon={'donate.svg'}
                            name='Пополнение счёта'
                            linkButton='/donate'
                        />
                    </div>
                </nav>

                <div className='visible-mobile'>
                    <NavigationButton
                        icon={'menu.svg'}
                        name='Меню'
                        onClick={handleMenuMobile}
                    />
                </div>
            </div>
        </header>
    );
}
