import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>ProstoTV</h1>
        <p className={styles.subtitle}>Сервіс пошуку фільмів та серіалів</p>
      </header>
      <main className={styles.main}>
        <p>Проєкт ініціалізовано. Очікується налаштування стилів та розробка MVP.</p>
      </main>
    </div>
  );
}

export default App
