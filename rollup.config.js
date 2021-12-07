import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';

const extentions = ['.js', '.jsx', '.ts', '.tsx'];

const rollupConfig = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ extentions }),
      babel({
        extentions,
        include: ['src/**/*'],
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      image(),
      url(),
      svgr(),
      terser(),
    ],
  },
  {
    input: 'build/es/types/index.d.ts',
    output: [{ file: 'build/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];

export default rollupConfig;
