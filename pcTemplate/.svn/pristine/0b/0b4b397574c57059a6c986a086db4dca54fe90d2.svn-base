import { resolve } from 'path';

export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loading',
      },
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  alias: {
    pages: resolve(__dirname, './src/pages'),
    components: resolve(__dirname, './src/components'),
    services: resolve(__dirname, './src/services'),
    utils: resolve(__dirname, './src/utils'),
  },
  targets: { ie: 11 },
  devtool: 'source-map',
};
