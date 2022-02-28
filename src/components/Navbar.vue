<template>
	<nav>
		<router-link tabindex="1" to="/">Strona Główna</router-link>
		<router-link tabindex="2" to="/wskaznik-uczniow-do-nauczycieli">Wskaźnik uczniów do nauczycieli</router-link>
		<router-link tabindex="3" to="/liczba-abonentow-telefonii">Liczba abonentów telefonii</router-link>
		<router-link tabindex="4" to="/galeria">Galeria</router-link>
		<router-link tabindex="5" to="/historia">Historia</router-link>
		<router-link tabindex="6" to="/bibliografia">Bibliografia</router-link>
	</nav>
</template>

<script>
export default {
	name: "Navbar"
}
</script>

<style lang="scss" scoped>
// Import palety kolorów
@import '../styles/variables';

nav {
	background-color: $dark2;
	padding: 20px 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	font-size: 1.25rem;
	font-weight: 400;
	box-shadow: 0 0 1em 0 $dark2;
}
a {

	text-decoration: none;
	color: $light1;
	text-align: center;
	transition-duration: .2s;

	&:hover {
		text-decoration: underline;
		color: $accent;
	}
}

@media screen and (max-width: $mobile) {
	nav {
		flex-direction: column;
	}
	a {
		margin: 10px 0;
	}
}
</style>