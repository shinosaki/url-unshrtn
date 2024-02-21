// https://github.com/tailwindlabs/tailwindcss/discussions/11851
import postcss from 'postcss'
import tailwind from 'tailwindcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import baseConfig from './tailwind.config'
import { watch, promises as fs } from 'node:fs'
import { argv } from 'node:process'

const dirname = import.meta.dirname ?? import.meta.dir ?? '.'
const args = argv.slice(2)

const source = [
  '@tailwind base',
  '@tailwind components',
  '@tailwind utilities'
].join(';')

const plugins = [
  tailwind({ presets: [baseConfig] }),
  cssnano({ preset: 'default', plugins: [autoprefixer] })
]

const build = async () => {
  const { css } = await postcss(plugins).process(source)

  await fs.mkdir(`${dirname}/dist/`, { recursive: true })
  await fs.writeFile(
    `${dirname}/dist/css.json`,
    JSON.stringify({ css }, null, '  ')
  )

  console.log('Rebuild CSS file')
}

if (args.includes('--watch')) {
  build()
  watch(`${dirname}/src`, (type, file) => {
    console.log(`${new Date().toISOString()}: ${type} file: ./src/${file}`)
    build()
  })
} else {
  build()
}