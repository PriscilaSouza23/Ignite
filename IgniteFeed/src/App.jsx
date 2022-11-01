import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Priscila Souza"
            content="nshahisufaiusfhasuldhfuashdfo"
          />
          <Post
            author="Priscila Souza"
            content="nshahisufaiusfhasuldhfuashdfo"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
