# :zap: React-Fixed-Header 연습 페이지입니다.
:octocat: https://light9639.github.io/React-Fixed-Header/



:sparkles: React-Fixed-Header 연습 페이지입니다. :sparkles:
## :tada: React 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 `React` 선택, `Typescirpt` or `Typescirpt - SWC` 선택하면 생성 완료.
## :memo: vite.config.ts 수정.
- `build`시 이미지, CSS. js 파일을 각각 다른 파일에 저장하고 경로를 `./`로 하기 위해 다음과 같이 설정한다.
```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: process.env.NODE_ENV === 'development' ? '/' : './',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
})
```

- 작성 이후 오류가 나는 부분들을 위해 터미널에 yarn 명령어로 `vite-tsconfig-paths`, `@types/node`파일들을 설치한다.
```bash
yarn add vite-tsconfig-paths @types/node
```

## ✒️ App.tsx 수정 및 작성
### :zap: App.tsx
```bash
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
      <div className="box">
        <div className={ScrollActive ? "smallBox fixed" : "smallBox"}>
          {ScrollActive ? "📌 Header가 고정되었습니다." : "스크롤을 움직이면 고정됩니다. 😁"}
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
```

## :test_tube: 스크롤 내릴 시 Header 고정
<img src="" alt="Img" width="450px" />

## :tada: 프로젝트 배포.
- 프로젝트를 전부 작성하였으면 `gh-pages` 라이브러리를 통해 배포를 쉽게 할 수 있다. 먼저 `gh-pages`를 설치한다.
```bash
yarn add gh-pages
```

- 설치 이후 `package.json`을 `scripts` 부분을 수정하고 `homepage` 부분에 배포 경로를 적으면 된다.
```bash
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d dist"
},
"homepage": "http://light9639.github.io/React-Fixed-Header",
```

- `package.json` 수정이 완료되면 'yarn deploy'를 실행하면 `gh-pages` 브랜치로 빌드된 파일이 업로드 되어 배포가 완료된다.
