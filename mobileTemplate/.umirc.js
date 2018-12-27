import path, { resolve } from 'path';

export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'FMPM-UmiJS-Moblie',
        dll: true,
        hardSource: true,
        routes: {
          exclude: [
            /components/,
          ],
        },
      },
    ],
  ],
  cssModulesExcludes: [resolve(__dirname, './src/global.css')],
};
