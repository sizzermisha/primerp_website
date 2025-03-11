import { useEffect, useState } from "react";
import { WindowSize } from "../models/declare/windowSize";

const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: window.innerWidth,
		height: window.innerHeight
	});

	useEffect(() => {
		const handleResize = () => setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight
		});

		window.addEventListener('resize', handleResize);
		
		return () => window.removeEventListener('resize', handleResize);
	}, [window, windowSize]);

	return windowSize;
}

export default useWindowSize;