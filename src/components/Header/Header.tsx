import Moon from '../icons/moon'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Where in the world?</h1>
      <div className={styles.darkMode}>
        <div className={styles.moonContainer}>
          <Moon theme="dark" />
        </div>
        <p className={styles.darkModeText}>Dark Mode</p>
      </div>
    </header>
  )
}
