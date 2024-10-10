import { useState } from 'react'
import styles from './TextInput.module.css'

export function TextInput({ placeholder, maxLength, ...props }) {
    const [lettersCount, setLettersCount] = useState('');
    const [thought, setThought] = useState([]);

    function handleTextChange(event) {
        const lettersCount = event.target.value;

        if (lettersCount.length <= maxLength) {
            setLettersCount(lettersCount);
        }
    }

    function handleClick(event) {
        event.preventDefault();

        setThought([...thought, lettersCount]);
        setLettersCount('');
    }

    return (
        <div>
            <textarea className={styles.input} placeholder={placeholder} maxLength={maxLength} value={lettersCount} onChange={handleTextChange} {...props} />
            <p>{lettersCount.length} / {maxLength}</p>
            <button onClick={handleClick}>Enviar</button>
            {thought.map((thought, index) => (
                <p key={index}>{thought}</p>
            ))}
        </div>
    )
}