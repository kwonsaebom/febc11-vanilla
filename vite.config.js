import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'), // 기본 index.html // __dirname은 현재 경로 --> 현재 경로에 index.html 추가하는 것이다.
        login: resolve(__dirname, 'src/pages/auth/login.html'), // 추가 HTML 파일
        list: resolve(__dirname, 'src/pages/board/list.html'), // 추가 HTML 파일
        // 필요한 다른 HTML 파일을 여기에 추가
      },
    },
  },
});
