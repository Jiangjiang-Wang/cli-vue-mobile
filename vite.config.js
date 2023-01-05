import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteVConsole } from 'vite-plugin-vconsole';
import path from 'path';
// https://vitejs.dev/config/
export default ({ mode }) => {
    return defineConfig({
        plugins: [
            vue(),
            viteVConsole({
                entry: path.resolve('src/main.js'), // 入口文件，或者可以使用这个配置: [path.resolve('src/main.ts')]
                localEnabled: true, // 本地是否启用
                enabled: mode === 'test', // 是否启用
                config: {
                    maxLogNumber: 1000, //
                    theme: 'dark' // 主题颜色
                }
            })
        ]
    });
};
