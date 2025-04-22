import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
    hmr: {
      clientPort: 443, // Используем порт 443 для WebSocket через HTTPS
      host: 'preview--red-pigeon-initiative.poehali.dev', // Адрес хоста, к которому подключается клиент
      protocol: 'wss', // Используем безопасное WebSocket соединение
      overlay: false // Отключаем оверлей с ошибками
    }
  },
});
