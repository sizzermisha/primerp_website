import { ReactNode, createContext, useContext, useState } from "react";
import { WindowSizeContext } from "../../models/declare/windowSize";

export interface IConstantContext {
	constantValue: WindowSizeContext;
	setConstantValue: (value: WindowSizeContext) => void;
}

export const ConstantContext = createContext<IConstantContext | undefined>(undefined);

const ConstantProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [constantValue, setConstantValue] = useState<WindowSizeContext>({
		mobile: 767.98,
		tablet: 1024.98,
		laptop: 1440.98,
		desktop: 1920.98
	});

	return (
		<ConstantContext.Provider value={{ constantValue, setConstantValue }}>
			{children}
		</ConstantContext.Provider>
	)
}

export const useConstantContext = (): WindowSizeContext => {
	const context = useContext(ConstantContext);
	if(context === undefined)
		throw new Error('Контекст "ConstantContext" недействительный');

	return { ...context['constantValue'] };
}

export default ConstantProvider;