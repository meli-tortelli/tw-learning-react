import { TextInput } from "./components/TextInput"
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.appContainer}>
      <TextInput placeholder={'O que está acontecendo?'} maxLength={140} />
    </main>
  )
}

export default App
