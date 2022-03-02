<template>
	<main>
		<article>
			<div id="header">
				<button class="button graph-btn" v-bind:class="{'btn-enabled': showGraph}" tabindex="9" @click="showGraph=!showGraph">Wykres</button>
				<button class="button table-btn" v-bind:class="{'btn-enabled': !showGraph}" tabindex="10" @click="showGraph=!showGraph">Tabela</button>

				<Reload></Reload>
			</div>
			<iframe v-if="showGraph" src="https://www.google.pl/publicdata/embed?ds=d5bncppjof8f9_&amp;ctype=l&amp;strail=false&amp;bcs=d&amp;nselm=h&amp;met_y=it_cel_sets&amp;scale_y=lin&amp;ind_y=false&amp;rdim=world&amp;idim=country:AND&amp;ifdim=world&amp;hl=pl&amp;dl=pl&amp;ind=false"></iframe>
			<div id="table">
				<table v-if="!showGraph">
					<tr>
						<th colspan="9">Wskaźnik abonentów telefonii komórkowej względem lat</th>
					</tr>
					<tr>
						<td>Rok</td>
						<td>1990</td>
						<td>1995</td>
						<td>2000</td>
						<td>2005</td>
						<td>2010</td>
						<td>2015</td>
						<td>2018</td>
					</tr>
					<tr>
						<td>Liczba abonentów</td>
						<td>0</td>
						<td>2 825</td>
						<td>23 543</td>
						<td>64 560</td>
						<td>65 495</td>
						<td>71 336</td>
						<td>82 614</td>
					</tr>
				</table>
			</div>

		</article>
	</main>
</template>

<script>
import Reload from '@/components/Reload.vue'

export default {
	name: "Abonenci",
	components: {
		Reload
	},
	data() {
		return {
			showGraph: false
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/graphs";

.button {
	background-color: $dark1;
	color: $light1;
	width: 100px;
}
.graph-btn {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.table-btn {
	margin-right: 25px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.btn-enabled, .btn-enabled:hover {
	background-color: $accent;
	color: $dark1;
	box-shadow: none;
}
#table {
	overflow-x: auto;
}
table {
	width: 100%;
	border: 1px $light1 solid;

	td {
		text-align: center;
		border: 1px $light1 solid;
	}
}
</style>
