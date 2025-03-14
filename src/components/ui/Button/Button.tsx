import { ReactNode } from 'react';
import styles from './Button.module.scss'

interface IButton {
	children: ReactNode;
}

const Button: React.FC<IButton> = ({ children }) => {
	return (
		<button className={styles.Button}>
			{children}
		</button>
	)
}

export default Button;