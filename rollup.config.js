import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

const extentions = ['.js', '.jsx', '.ts', '.tsx'];

const rollupConfig = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      dir: 'es',
      format: 'es',
      sourcemap: true,
      exports: 'named',
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
    typescript({
      tsconfigDefaults: { compilerOptions: { declaration: true } },
      tsconfig: 'tsconfig.json',
    }),
    postcss(),
    image(),
    url(),
    svgr(),
  ],
  preserveModules: true,
};

export default rollupConfig;
