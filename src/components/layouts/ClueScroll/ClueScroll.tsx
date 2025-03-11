import styles from './ClueScroll.module.scss';

const ClueScroll: React.FC = () => {
	return (
		<aside className={styles.ClueScroll}>
			<div className={styles.ClueScroll__imageContainer}>
				<img 
					src="/src/assets/images/gamepad.png"
					className={styles.ClueScroll__gamepad}
					alt=""
					width={37}
					height={37}
					loading='lazy' 
				/>
			</div>

			<p className={styles.ClueScroll__text}>
				Листай вниз чтобы продолжить
			</p>
		</aside>
	)
}

export default ClueScroll;