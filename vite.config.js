import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { createHtmlPlugin } from 'vite-plugin-html'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
	root: 'src',
	build: {
		outDir: '../dist',
	},
	plugins: [
		handlebars({
			partialDirectory: 'src/partials'
		}),
		ViteSvgSpriteWrapper({
			icons: 'src/img/svg/*.svg',
			outputDir: 'src/img'
		}),
		ViteImageOptimizer({
			exclude: 'sprite.svg',
			svg: {
				js2svg: {
					pretty: true
				}
			},
			jpg: {
				quality: 75
			},
			jpeg: {
				quality: 75
			},
			png: {
				quality: 75
			}
		}),
		createHtmlPlugin({
			minify: true
		}),
	]
})
