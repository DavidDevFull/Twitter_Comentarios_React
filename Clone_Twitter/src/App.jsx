import TextInput from "./components/TextInput"
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <TextInput  maxLengt={125}/>
      <p></p>
    </div>
    
  )
}

export default App
