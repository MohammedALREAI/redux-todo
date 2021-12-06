import React from 'react'
import './Styles.css'
interface Props {
    text: string;
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export const Button = ({ text, onClick }: Props) => {
    return (
        <button className={`${text === 'Add' ? 'btn' : 'btn backgrounded-button'}`} onClick={onClick}>
            {text}
        </button>
    )
}
