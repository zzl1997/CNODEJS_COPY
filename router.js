import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Topic from './views/Topic.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router(
{
	base: process.env.BASE_URL,
	mode: "history",
	routes: [
	{
		// domain/
		path: '/',
		name: 'home',
		component: Home
	},
	{
		// domain/topic/dajlsdlaj
		path: '/topic/:id',
		name: 'topic',
		component: Topic
	},
	{
		// domain/user/dahjdj
		path: '/user/:id',
		name: 'user',
		component: User
	},
	{
		// domain/topic
		path: '/topic',
		redirect: '/'
	},
	{
		// domain/user
		path: '/user',
		redirect: '/'
	}]
})
