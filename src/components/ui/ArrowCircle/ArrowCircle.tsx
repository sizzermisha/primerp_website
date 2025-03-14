import React from 'react';
import Styles from './ArrowCircle.module.scss';

type ArrowCircleProps = {
    positionInline: 'left' | 'right';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean | false;
};

const ArrowCircle: React.FC<ArrowCircleProps> = (props) => {
    const { positionInline, onClick, disabled } = props;

    // disabled={!page ? true : false}

    return (
        <button
            onClick={onClick}
            className={Styles.ArrowCircle}
            disabled={disabled}
        >
            {positionInline === 'left' ? (
                <svg
                    width='23'
                    height='22'
                    viewBox='0 0 23 22'
                    fill='none'
                    className={Styles.ArrowCircle__svg}
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g clipPath='url(#clip0_77_381)'>
                        <path
                            className={Styles.ArrowCircle__path}
                            d='M6.01681 10.188L15.655 0.851232C16.0314 0.486591 16.6416 0.486591 17.018 0.851294C17.3944 1.21594 17.3944 1.80709 17.018 2.17173L8.06133 10.8483L17.018 19.5253C17.3944 19.8899 17.3944 20.4811 17.018 20.8457C16.8298 21.0281 16.5832 21.1192 16.3365 21.1192C16.0898 21.1192 15.8431 21.0281 15.6549 20.8457L6.01681 11.5084C5.836 11.3333 5.73447 11.0959 5.73447 10.8482C5.73447 10.6006 5.836 10.3631 6.01681 10.188Z'
                            fill='white'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_77_381'>
                            <rect
                                width='21.204'
                                height='20.5414'
                                fill='white'
                                transform='matrix(-1 0 0 1 22.1194 0.577759)'
                            />
                        </clipPath>
                    </defs>
                </svg>
            ) : (
                <svg
                    width='23'
                    height='22'
                    viewBox='0 0 23 22'
                    fill='none'
                    className={Styles.ArrowCircle__svg}
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g clipPath='url(#clip0_77_388)'>
                        <path
                            className={Styles.ArrowCircle__path}
                            d='M16.9832 10.188L7.34499 0.851232C6.96865 0.486591 6.35836 0.486591 5.98195 0.851294C5.60561 1.21594 5.60561 1.80709 5.98202 2.17173L14.9387 10.8483L5.98195 19.5253C5.60561 19.8899 5.60561 20.4811 5.98202 20.8457C6.17016 21.0281 6.41683 21.1192 6.6635 21.1192C6.91018 21.1192 7.15685 21.0281 7.34505 20.8457L16.9832 11.5084C17.164 11.3333 17.2655 11.0959 17.2655 10.8482C17.2655 10.6006 17.164 10.3631 16.9832 10.188Z'
                            fill='white'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_77_388'>
                            <rect
                                width='21'
                                height='21'
                                fill='white'
                                transform='translate(0.880615 0.577759)'
                            />
                        </clipPath>
                    </defs>
                </svg>
            )}
        </button>
    );
};
export default ArrowCircle;
