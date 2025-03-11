import { Link } from 'react-router-dom';
import { dataPerson } from '../../../models/dataPerson';
import Person from '../../ui/Person/Person';
import styles from './PersonSection.module.scss'

const PersonSection: React.FC = () => {

	return (
		<section className={styles.PersonSection}>
			<div className={styles.PersonSection__inner}>
				<header className={styles.PersonSection__header}>
					<h2 className={styles.PersonSection__title + ' h2'}>Выбери свою роль</h2>
					<p className={styles.PersonSection__description}>Нажми на любую роль чтобы получить к её описанию!</p>
				</header>

				<ul className={styles.PersonSection__listCharacter + ' container'}>
					{dataPerson.map((item, value) => (
						<li key={`personSection_person_${value}`}>
								<Link to='#'>
									<Person
										id={item.id}
										name={item.name} 
										img={item.img}
										height={item.height}
										width={item.width} 
										countPerson={value}
										description={item.description}
									/>
								</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default PersonSection;