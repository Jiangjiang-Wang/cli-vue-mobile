/*
 * @FileDescription:
 * @Author: wzj
 * @Date: 2023-01-05 18:38:39
 * @LastEditors: wzj
 * @LastEditTime: 2023-01-06 10:46:26
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { viteVConsole } from 'vite-plugin-vconsole'
import path from 'path'
// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // 获取.env文件里定义的环境变量
  return defineConfig({
    base: env.VITE_APP_PUBLISH_PATH,
    server: {
      host: '0.0.0.0',
    },
    resolve: {
      /** 添加alias规则 */
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      viteVConsole({
        entry: path.resolve('src/main.js'), // 入口文件，或者可以使用这个配置: [path.resolve('src/main.ts')]
        localEnabled: true, // 本地是否启用
        enabled: env.VITE_APP_IS_VCONSOLE === 'yes', // 是否启用
        config: {
          maxLogNumber: 1000, //
          theme: 'dark', // 主题颜色
        },
      }),
    ],
  })
}
