// import { Link } from "react-router-dom";
import { Button } from '../../../models/declare/button';
import styles from './NavigationButton.module.scss';

const NavigationButton: React.FC<Button> = ({ icon, name, onClick }) => {
    return (
        <button onClick={onClick} className={styles.NavigationButton}>
            {icon && (
                <span className={styles.NavigationButton__icon}>
                    <img
                        className={styles.NavigationButton__image}
                        src={'./icons/NavigationButton/' + icon}
                        alt={''}
                    />
                </span>
            )}
            {name}
        </button>
    );
};

export default NavigationButton;
