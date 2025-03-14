import { ReactNode } from 'react';
import styles from './AboutSection.module.scss'

type Props = {
	children: ReactNode;
}

const AboutSection: React.FC<Props> = ({ children }) => {
	return (
		<article className={styles.AboutSection}>
			<div className={styles.AboutSection__inner + ' container'}>
				{children}
			</div>
		</article>
	)
}

export default AboutSection;