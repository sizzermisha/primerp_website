// import { Link } from "react-router-dom";
import styles from './NavigationButton.module.scss';
import { MouseEventHandler } from "react";

export type INavigationButton = {
	icon: string | null;
	name: string;
	linkButton?: string | null;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	
}

const NavigationButton: React.FC<INavigationButton> = ({ icon, name, linkButton, onClick }) => { 

	return (
		<button onClick={onClick} className={styles.NavigationButton}>
			{icon && (<span className={styles.NavigationButton__icon}>
				<img
					className={styles.NavigationButton__image}
					src={'/src/assets/icons/NavigationButton/' + icon}
					alt={''}
				/>
			</span>)} 
			{name}
		</button>
	)
}

export default NavigationButton