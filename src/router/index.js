import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import UczniowieVsNauczyciele from '../views/Uczniowie'
import Abonenci from '../views/Abonenci.vue'
import Galeria from '../views/Galeria.vue'
import Historia from '../views/Historia.vue'
import Bibliografia from '../views/Bibliografia'
import NotFound from '../views/NotFound.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/wskaznik-uczniow-do-nauczycieli',
		name: 'Wskaźnik uczniów do nauczycieli',
		component: UczniowieVsNauczyciele
	},
	{
		path: '/liczba-abonentow-telefonii',
		name: 'Liczba abonentów telefonii',
		component: Abonenci
	},
	{
		path: '/galeria',
		name: 'Galeria',
		component: Galeria
	},
	{
		path: '/historia',
		name: 'Historia',
		component: Historia
	},
	{
		path: '/Bibliografia',
		name: 'Bibliografia',
		component: Bibliografia
	},
	{
		path: '/:pathMatch(.*)',
		name: 'Nie znaleziono strony',
		component: NotFound
	}

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
