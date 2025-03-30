import { useEffect } from "react";
import Main from "./pages/Main";
import "./scss/base.scss";

function App() {
  useEffect(() => {
    // 실제 뷰포트 높이를 계산하여 --vh에 세팅하는 함수
    const setScreenSize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // 마운트 시점에 한 번 실행
    setScreenSize();

    // 화면 크기가 변동될 때(브라우저 주소창 등장/숨김 등)
    window.addEventListener("resize", setScreenSize);

    // 언마운트 시 리스너 제거
    return () => window.removeEventListener("resize", setScreenSize);
  }, []);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
