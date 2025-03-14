export type SliderInfo = {
	id: number;
	title: string;
	description: string;
	image: string;
};

export type SliderProps = {
	page: number;
	readonly countPage: number;
	dataPage: SliderInfo;
	handleNextPage: () => void;
	handlePrevPage: () => void;
};