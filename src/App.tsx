import { useRef, useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import './App.css'

export default function App(): JSX.Element {
  const boxRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [ScrollY, setScrollY] = useState<number>(0);
  const [ScrollActive, setScrollActive] = useState<boolean>(false);

  const Scroll = () => {
    setScrollY(boxRef.current.scrollTop);
    if (boxRef.current.scrollTop > 30) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function watchScroll() {
      boxRef.current.addEventListener("scroll", Scroll);
    }
    watchScroll();
    return () => {
      boxRef.current.removeEventListener("scroll", Scroll);
    };
  });

  return (
    <div className="App">
      <h1>π Fixed React</h1>
      <div className="box">
        <div className={ScrollActive ? "smallBox fixed" : "smallBox"}>
          {ScrollActive ? "π Headerκ° κ³ μ λμμ΅λλ€." : "μ€ν¬λ‘€μ μμ§μ΄λ©΄ κ³ μ λ©λλ€. π"}
        </div>
        <div className="boxInner" ref={boxRef}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          impedit ducimus perferendis, fuga nobis nihil eius similique.
          Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis,
          explicabo possimus molestias nam tempore! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Molestiae impedit ducimus perferendis,
          fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam
          cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          impedit ducimus perferendis, fuga nobis nihil eius similique.
          Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis,
          explicabo possimus molestias nam tempore! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Molestiae impedit ducimus perferendis,
          fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam
          cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          impedit ducimus perferendis, fuga nobis nihil eius similique.
          Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis,
          explicabo possimus molestias nam tempore! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Molestiae impedit ducimus perferendis,
          fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam
          cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          impedit ducimus perferendis, fuga nobis nihil eius similique.
          Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis,
          explicabo possimus molestias nam tempore! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Molestiae impedit ducimus perferendis,
          fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam
          cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          impedit ducimus perferendis, fuga nobis nihil eius similique.
          Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis,
          explicabo possimus molestias nam tempore! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Molestiae impedit ducimus perferendis,
          fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam
          cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          impedit ducimus perferendis, fuga nobis nihil eius similique.
          Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis,
          explicabo possimus molestias nam tempore! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Molestiae impedit ducimus perferendis,
          fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam
          cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        </div>
      </div>
    </div>
  );
}

