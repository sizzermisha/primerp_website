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
		tablet: 1023.98,
		laptop: 1439.98,
		desktop: 1919.98,
		mobile_s: 479.98
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