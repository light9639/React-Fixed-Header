# ๐ React-Fixed-Header ์ฐ์ต ํ์ด์ง์๋๋ค.
:octocat: https://light9639.github.io/React-Fixed-Header/

<left><img src="https://user-images.githubusercontent.com/95972251/216318923-3405dc47-2bed-4c3a-8929-4fe10a1adf8b.png" alt="Img" width="400px" /></left>

:sparkles: React์ `useRef`, `useState`, `useEffect` hooks๋ฅผ ์ด์ฉํ์ฌ ์คํฌ๋กค์ ๋ด๋ฆด ์ Header๊ฐ ๊ณ ์ ๋๋๋ก ๋ง๋  ํ์ด์ง์๋๋ค. :sparkles:
## :tada: React ์์ฑ
- React ์์ฑ
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite๋ฅผ ์ด์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์์ฑํ๋ ค๋ฉด
```bash
npm create vite@latest
# or
yarn create vite
```
- ํฐ๋ฏธ๋์์ ์คํ ํ ํ๋ก์ ํธ ์ด๋ฆ ๋ง๋  ํ `React` ์ ํ, `Typescirpt` or `Typescirpt - SWC` ์ ํํ๋ฉด ์์ฑ ์๋ฃ.
## :memo: vite.config.ts ์์ .
- `build`์ ์ด๋ฏธ์ง, CSS. js ํ์ผ์ ๊ฐ๊ฐ ๋ค๋ฅธ ํ์ผ์ ์ ์ฅํ๊ณ  ๊ฒฝ๋ก๋ฅผ `./`๋ก ํ๊ธฐ ์ํด ๋ค์๊ณผ ๊ฐ์ด ์ค์ ํ๋ค.
```js
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

- ์์ฑ ์ดํ ์ค๋ฅ๊ฐ ๋๋ ๋ถ๋ถ๋ค์ ์ํด ํฐ๋ฏธ๋์ yarn ๋ช๋ น์ด๋ก `vite-tsconfig-paths`, `@types/node`ํ์ผ๋ค์ ์ค์นํ๋ค.
```bash
yarn add vite-tsconfig-paths @types/node
```

## โ๏ธ App.tsx, App.css ์์  ๋ฐ ์์ฑ
### :zap: App.tsx
- App.tsx๋ฅผ ๋ค์๊ณผ ๊ฐ์ด ์์ ํ๋ค.
- **useRef** ์ฌ์ฉ ์ `React.MutableRefObject<HTMLDivElement>`๋ฅผ ํ์์ผ๋ก ์ง์ ํ๋ค.
- `setScrollActive`๋ `scrollTop`์ ๊ฐ์ด 30์ด์์ด๋ฉด ์คํฌ๋กค์ด ์๋ํ๊ณ  30 ์ดํ๋ฉด ์๋ํ์ง ์๋๋ก ํ๋ค.
- **useEffect**๋ฅผ ํตํด `watchScroll`์ด ์๋๋๋๋ก ํ๋ค.
```js
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
          {ScrollActive ? "๐ Header๊ฐ ๊ณ ์ ๋์์ต๋๋ค." : "์คํฌ๋กค์ ์์ง์ด๋ฉด ๊ณ ์ ๋ฉ๋๋ค. ๐"}
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

### :zap: App.css
- `App.css`์ box ํด๋์ค์ ์คํ์ผ ์ถ๊ฐ.
```css
.box {
  position: relative;
  top: 30px;
  right: 30px;
  width: 400px;
  height: 400px;
  background: #fff;
  overflow: hidden;
  margin-left: 100px;

}

.box .boxInner {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px;
}

.smallBox {
  position: absolute;
  top: 50px;
  right: 40px;
  z-index: 1;
  padding: 10px;
  background: #111;
  border-radius: 6px;
  color: #fff;
  border: 1px solid #222;
  text-align: left;
  font-size: 12px;
}

.smallBox.fixed {
  width: 100%;
  top: 0;
  right: 0;
  border-radius: 0;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}
```

## :test_tube: ์คํฌ๋กค ๋ด๋ฆด ์ Header ๊ณ ์ 
- ์คํฌ๋กค์ ๋ด๋ฆฌ๊ฒ ๋๋ฉด ํค๋๊ฐ ๊ณ ์ ๋ฉ๋๋ค.

<left><img src="https://user-images.githubusercontent.com/95972251/216320180-a91833ab-86fe-4aed-afc0-818454711966.png" alt="Img" width="400px" /></left>

## :tada: ํ๋ก์ ํธ ๋ฐฐํฌ.
- ํ๋ก์ ํธ๋ฅผ ์ ๋ถ ์์ฑํ์์ผ๋ฉด `gh-pages` ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํตํด ๋ฐฐํฌ๋ฅผ ์ฝ๊ฒ ํ  ์ ์๋ค. ๋จผ์  `gh-pages`๋ฅผ ์ค์นํ๋ค.
```bash
yarn add gh-pages
```

- ์ค์น ์ดํ **package.json**์ **scripts** ๋ถ๋ถ์ ์์ ํ๊ณ  **homepage** ๋ถ๋ถ์ ๋ฐฐํฌ ๊ฒฝ๋ก๋ฅผ ์ ์ผ๋ฉด ๋๋ค.
```js
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d dist"
},
"homepage": "http://light9639.github.io/React-Fixed-Header",
```

- **package.json** ์์ ์ด ์๋ฃ๋๋ฉด **yarn deploy**๋ฅผ ์คํํ๋ฉด **gh-pages** ๋ธ๋์น๋ก ๋น๋๋ ํ์ผ์ด ์๋ก๋ ๋์ด ๋ฐฐํฌ๊ฐ ์๋ฃ๋๋ค.
