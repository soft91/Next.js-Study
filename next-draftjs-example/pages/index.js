import styles from '../styles/Home.module.css'
import TestEditorForm from "../components/TestEditorForm"

export default function Home() {
  return (
    <div className={styles.container}>
      <TestEditorForm />
    </div>
  )
}
