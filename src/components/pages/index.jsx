import { useState } from "react";
import { TextInput } from "../TextInput";

export function Index() {
  const [lettersCount, setLettersCount] = useState('');
  const [thought, setThought] = useState([]);
  const maxLength = 140;

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
    <>
      <h1>Tw-Thoughts</h1>
      <div>
        <img src={'https://github.com/meli-tortelli.png'} alt="Profile picture" />
        <TextInput
          placeholder={"What's happening?"}
          maxLength={maxLength}
          value={lettersCount}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <span>
          {lettersCount.length} / {maxLength}
        </span>
        <button onClick={handleClick}>Enviar</button>
      </div>

      <ul>
        {thought.map((thought, index) => (
          <li key={index}>{thought}</li>
        ))}
      </ul>
    </>
  )
}
