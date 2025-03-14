import { dataSocial } from '../../../models/dataSocial';
import HeroButton from '../../ui/HeroButton/HeroButton';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
	const dataHero = {
		title: 'ДОБРО ПОЖАЛОВАТЬ В ЛЕОНИДУ',
		description: 'В Grand Theft Auto VI вы отправитесь в штат Леонида, навстречу неоновым огням Вайс-Сити. Вас ждет самый большой, самый правдоподобный мир за всю историю Grand Theft Auto. Игра выйдет в 2025 году на PlayStation 5 и Xbox Series X|S.'
	}

	return (
		<section className={styles.Hero}>
			<div className={styles.Hero__inner + ' container'}>
				<header className={styles.Hero__header}>
					<h1 className={styles.Hero__title + " h1"}>{dataHero.title}</h1>
					
					<p className={styles.Hero__description}>
						{dataHero.description}
					</p>
				</header>

				<a href={dataSocial[0].href} target='_blank'>
					<HeroButton name='Следить за новостями' />
				</a>
			</div>
		</section>
	)
}

export default HeroSection;
