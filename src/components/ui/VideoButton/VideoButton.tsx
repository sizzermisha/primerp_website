import { ReactNode } from 'react';
import styles from './VideoButton.module.scss';

interface IButton {
    children: ReactNode;
}

const VideoButton: React.FC<IButton> = ({ children }) => {
    return <button className={styles.VideoButton}>{children}</button>;
};

export default VideoButton;
