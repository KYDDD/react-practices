import ClientComponent from "./client-component";
import styles from "./page.module.css";
import ServerComponent from "./server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        {/* 이런식으로 children으로 전달을 해주면 서버 컴포넌트가 클라이언트 컴포넌트가 되는것을 막아줄수있다. */}
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
