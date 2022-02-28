<template>
	<main>
		<article>
			<h1>Lista źródeł z których korzystałem:</h1>
			<div id="links">
				<a href="https://vuejs.org/guide/introduction.html" target="_blank">Dokumentacja Vue.js</a>
				<a href="https://router.vuejs.org/guide/" target="_blank">Dokumentacja Vue Router</a>
				<a href="https://www.planetware.com/pictures/andorra-and.htm" target="_blank">Zdjęcia do galerii</a>
				<a href="https://www.google.pl/publicdata/explore?ds=d5bncppjof8f9_" target="_blank">Baza statystki międzynarodowej</a>
				<a href="https://pl.wikipedia.org/wiki/Andora" target="_blank">Informacje o Andorze</a>
				<a href="https://pl.wikipedia.org/wiki/Historia_Andory" target="_blank">Historia Andory</a>
			</div>
		</article>
	</main>
</template>

<script>
// @ to alias do /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
	Navbar
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/variables";

#links {
	display: flex;
	flex-direction: column;
}
a {
	margin: 15px auto;
	text-align: center;
}
</style>