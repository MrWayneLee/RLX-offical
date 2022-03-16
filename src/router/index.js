import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/pages/Main'
import Player from '@/components/pages/Player'
import Gallery from '@/components/pages/Gallery'
import About from '@/components/pages/About'
import Sky from '@/components/pages/Sky'
import Plugin from '@/components/pages/Plugin'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Main',
		title: '主页',
		component: Main
	}, {
		path: '/Player',
		name: 'Player',
		title: '玩家',
		component: Player
	}, {
		path: '/Gallery',
		name: 'Gallery',
		title: '图册',
		component: Gallery
	}, {
		path: '/About',
		name: 'About',
		title: '关于我们',
		component: About
	}
	// 暂定
	// , {
	// 	path: '/Plugin',
	// 	name: 'Plugin',
	// 	title: '功能性组件',
	// 	component: Plugin
	// }
	, {
		path: '/Sky',
		name: 'Sky',
		title: '光 · 遇',
		component: Sky
	}
	],
	mode: 'history'
})
