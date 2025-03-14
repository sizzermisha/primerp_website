import useWindowSize from '../../../hooks/useWindowSize';
import { useConstantContext } from '../../contexts/ConstantContext';
import { useSliderContext } from '../../contexts/SliderContext';
import ArrowCircle from '../../ui/ArrowCircle/ArrowCircle';
import Slider from '../../ui/Slider/Slider';
import Styles from './AboutInfo.module.scss';

const AboutInfo: React.FC = () => {
    const {
        handleNextPage,
        handlePrevPage,
        page,
        dataPage: { title, description, image },
    } = useSliderContext();

    const { width } = useWindowSize();
    const { mobile_s } = useConstantContext();

    return (
        <section className={Styles.AboutInfo}>
            {width <= mobile_s && (
								<div className={Styles.AboutInfo__arrowCircle + ` ${Styles.AboutInfo__arrowCircle_left}`}>
									<ArrowCircle
											positionInline='left'
											onClick={handlePrevPage}
											disabled={!page ? true : false}
									/>
								</div>
            )}

            <div className={Styles.AboutInfo__imageContainer}>
                <img
                    src={`/images/Slider/${image}`}
                    alt=''
                    className={Styles.AboutInfo__image}
                    width={685}
                    height={427}
                />
            </div>

            <header className={Styles.AboutInfo__header}>
                {width > mobile_s ? <Slider /> : ''}
                <h3 className={Styles.AboutInfo__title + ' h3'}>{title}</h3>
                <p className={Styles.AboutInfo__description}>{description}</p>
            </header>

            {width <= mobile_s && (
								<div className={Styles.AboutInfo__arrowCircle + ` ${Styles.AboutInfo__arrowCircle_right}`}>
									<ArrowCircle
											positionInline='right'
											onClick={handleNextPage}
											disabled={page === 2 ? true : false}
									/>
								</div>
            )}
        </section>
    );
};

export default AboutInfo;
