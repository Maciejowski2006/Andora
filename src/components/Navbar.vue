<template>
	<nav id="navbar">
		<router-link tabindex="1" to="/"><i class="em em-house" aria-role="presentation" aria-label="HOUSE BUILDING"></i>Strona Główna</router-link>
		<router-link tabindex="2" to="/wskaznik-uczniow-do-nauczycieli"><i class="em em-chart_with_downwards_trend" aria-role="presentation" aria-label="CHART WITH DOWNWARDS TREND"></i>Wskaźnik uczniów do nauczycieli</router-link>
		<router-link tabindex="3" to="/liczba-abonentow-telefonii"><i class="em em-chart_with_upwards_trend" aria-role="presentation" aria-label="CHART WITH UPWARDS TREND"></i>Liczba abonentów telefonii</router-link>
		<router-link tabindex="4" to="/galeria"><i class="em em-frame_with_picture" aria-role="presentation" aria-label=""></i>Galeria</router-link>
		<router-link tabindex="5" to="/historia"><i class="em em-bookmark" aria-role="presentation" aria-label="BOOKMARK"></i>Historia</router-link>
		<router-link tabindex="6" to="/bibliografia"><i class="em em-page_with_curl" aria-role="presentation" aria-label="PAGE WITH CURL"></i>Bibliografia</router-link>
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