import { ReactNode, createContext, useContext, useState } from 'react';
import { SliderProps } from '../../models/declare/slider';
import { dataSlider } from '../../models/dataSlider';

export const SliderContext = createContext<SliderProps | undefined>(undefined);

type SliderProviderProps = {
    children: ReactNode;
};

export const useSliderContext = (): SliderProps => {
	const context = useContext(SliderContext);

	if(!context)
		throw new Error("Контекст 'SliderContext' недействительный");

	return { ...context };
};

const SliderProvider: React.FC<SliderProviderProps> = (props) => {
    const [page, setPage] = useState<number>(0);
    const [dataPage, setDataPage] = useState<SliderProps['dataPage']>({
        ...dataSlider[0],
    });
    const countPage: SliderProps['countPage'] = dataSlider.length;

    const handleNextPage = () => {
        if (page === dataSlider.length - 1) return;

        setPage((prevPage) => prevPage + 1);

				if(!dataSlider[page + 1])
						return;

        setDataPage(() => { return { ...dataSlider[page + 1] }});
				return;
    };

		const handlePrevPage = () => {
			if(!page) return;
			
			setPage((prevPage) => prevPage - 1);
			
			if(!dataSlider[page - 1])
					return;

			setDataPage(() => { return { ...dataSlider[page - 1] } });
			return;
		}

    const { children } = props;

    if (!dataPage) return null;

    return <SliderContext.Provider value={{page, countPage, dataPage, handleNextPage, handlePrevPage}}>
				{children}
			</SliderContext.Provider>;
};

export default SliderProvider;