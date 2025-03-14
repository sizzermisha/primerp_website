import { useSliderContext } from '../../contexts/SliderContext';
import ArrowCircle from '../ArrowCircle/ArrowCircle';
import Styles from './Slider.module.scss';

const Slider: React.FC = () => {
    const { countPage, page, handleNextPage, handlePrevPage } =
        useSliderContext();

    return (
        <div className={Styles.Slider}>
            <ArrowCircle positionInline='left' onClick={handlePrevPage} disabled={!page ? true : false} />

            <div className={Styles.Slider__info}>
                {page + 1}/{countPage}
            </div>

            <ArrowCircle positionInline='right' onClick={handleNextPage} disabled={page === 2 ? true : false} />
        </div>
    );
};

export default Slider;
