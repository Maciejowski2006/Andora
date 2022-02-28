<template>
<main>
	<article>
		<h6>Zdjęcia są z <a href="https://www.planetware.com/pictures/andorra-and.htm">tej strony</a>.</h6>
		<div id="grid-container">
			<div class="grid-item" v-for="item in elements">
				<img :src='item.url' @click="LinkTo(item.url)"/>
				<span>{{ item.name }}</span>
			</div>
		</div>
	</article>
</main>
</template>

<script>
export default {
	name: "Galeria",
	methods: {
		LinkTo(url) {
			window.open(url, "_blank");
		}
	},
	data() {
		return {
			elements: [
				{
					name: "Andorra La Vella",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-andorra-la-vella.jpg"
				},
				{
					name: "Sant Esteve",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-santa-esteve-andorra-la-vella.jpg"
				},
				{
					name: "Mirador Roc Del Quer",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-mirador-roc-del-quer.jpg"
				},
				{
					name: "Ordino",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-ordino.jpg"
				},
				{
					name: "Incles Valley",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-incles-valley.jpg"
				},
				{
					name: "Estanys de Tristaina",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-estanys-de-tristaina.jpg"
				},
				{
					name: "The Bridge of Margineda",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-bridge-of-margineda.jpg"
				},
				{
					name: "Via Ferrata Canal del Grau",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-via-ferrata-canal-del-grau.jpg"
				},
				{
					name: "Vallnord",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-vallnord.jpg"
				},
				{
					name: "Caldea Thermal Complex",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-caldea-thermal-complex.jpg"
				},
				{
					name: "Sant Marti de la Cortinada Church",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-sant-marti-cortinada-church.jpg"
				},
				{
					name: "Les Escaldes",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-les-escaldes.jpg"
				},
				{
					name: "Valira d'Orient",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-valira-d-orient.jpg"
				},
				{
					name: "Church of Santa Coloma d'Andorra",
					url: "https://www.planetware.com/wpimages/2020/01/andorra-in-pictures-beautiful-places-to-photograph-church-santa-coloma-d-andorra.jpg"
				},
				{
					name: "Lake Engolasters",
					url: "https://www.planetware.com/wpimages/2021/10/andorra-in-pictures-beautiful-places-to-photograph-lake-engolasters.jpg"
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

article {
	width: 75%;
	margin: 25px 0;
}
h6 {
	margin: 0 0 40px 20px;
}
#grid-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	column-gap: 25px;
	row-gap: 25px;
}
.grid-item {
	width: 100%;
	border-radius: 25px;
	background-color: $dark2;
	display: flex;
	flex-direction: column;

	img {
		width: inherit;
		height: auto;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		cursor: pointer;
	}
	span {
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: 1.5rem;
		margin: 5px 0;

	}

}
@media screen and (max-width: 1150px) {
	#grid-container {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media screen and (max-width: 766px) {
	#grid-container {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>