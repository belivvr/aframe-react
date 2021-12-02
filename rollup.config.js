import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import size from 'rollup-plugin-size'
import externalDeps from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import commonJS from 'rollup-plugin-commonjs'
import visualizer from 'rollup-plugin-visualizer'
import replace from '@rollup/plugin-replace'

const external = ['react', 'react-dom', '@belivvr/aframe-react']

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  '@belivvr/aframe-react': 'AframeReact',
}

const inputSrcs = [
  ['src/index.ts', 'AframeReact', '@belivvr/aframe-react'],
  ['src/core/index.ts', 'AframeReactCore', '@belivvr/aframe-react/core'],
  ['src/components/index.ts', 'AframeReactComponents', '@belivvr/aframe-react/components'],
  ['src/components/scene/index.ts', 'AframeReactComponentsScene', '@belivvr/aframe-react/components/scene'],
  ['src/extras/primitives/index.ts', 'AframeReactPrimitives', '@belivvr/aframe-react/primitives'],
]

const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']
const babelConfig = { extensions, runtimeHelpers: true }
const resolveConfig = { extensions }

export default inputSrcs
  .map(([input, name, file]) => {
    return [
      {
        input: input,
        output: {
          name,
          file: `dist/${file}.development.js`,
          format: 'umd',
          sourcemap: true,
          globals,
        },
        external,
        plugins: [
          resolve(resolveConfig),
          babel(babelConfig),
          commonJS(),
          externalDeps(),
        ],
      },
      {
        input: input,
        output: {
          name,
          file: `dist/${file}.production.min.js`,
          format: 'umd',
          sourcemap: true,
          globals,
        },
        external,
        plugins: [
          replace({
            'process.env.NODE_ENV': `"production"`,
            delimiters: ['', ''],
          }),
          resolve(resolveConfig),
          babel(babelConfig),
          commonJS(),
          externalDeps(),
          terser(),
          size(),
          visualizer({
            filename: 'stats.json',
            json: true,
          }),
        ],
      },
    ]
  })
  .flat()
  