import styles from './Person.module.scss';
import { IPerson } from '../../../models/declare/person';
import './Person.scss';
import useWindowSize from '../../../hooks/useWindowSize';
import { useConstantContext } from '../../providers/ConstantProvider';

const Person: React.FC<IPerson> = ({
    name,
    width,
    height,
    img,
    countPerson,
    id,
		description
}) => {
		const { tablet } = useConstantContext();
		const windowSize = useWindowSize();

    return (
        <div
            key={`person_${countPerson}`}
            className={styles.Person}
            style={{ '--count-index': countPerson } as React.CSSProperties}
        >
            <div className={styles.Person__inner}>
                <div className={styles.Person__container}>
                  <img
                    src={`/src/assets/images/Persons/${img}`}
                    className={styles.Person__image}
                    id={`person_${id}`}
                    alt=''
                    loading='lazy'
                    width={width}
                    height={height}
                  />
                </div>

                <div className={styles.Person__info}>
                  <p className={styles.Person__description}>
										{(Number(windowSize.width) <= Number(tablet))
											? description
											: 'Роль'
										}
									</p>
                  <p className={styles.Person__textName}>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default Person;
