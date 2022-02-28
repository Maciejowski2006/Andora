<template>
	<main>
		<article>
			<div id="reload">
				<button class="button graph-btn" v-bind:class="{'btn-enabled': showGraph}" tabindex="9" @click="showGraph=!showGraph">Graf</button>
				<button class="button table-btn" v-bind:class="{'btn-enabled': !showGraph}" tabindex="10" @click="showGraph=!showGraph">Tabela</button>

				<button tabindex="11" @click="reload">Przeładuj graf</button>
				<i @click="showInfo=!showInfo" class="demo-icon icon-info-circled-alt"></i>
				<span v-if="showInfo">Przeładuj graf, gdy ten nie będzie wyświetlany poprawnie</span>
			</div>
			<iframe v-if="showGraph" src="https://www.google.pl/publicdata/embed?ds=d5bncppjof8f9_&amp;ctype=l&amp;strail=false&amp;bcs=a&amp;nselm=h&amp;met_y=it_cel_sets&amp;scale_y=lin&amp;ind_y=false&amp;rdim=world&amp;idim=world:Earth&amp;ifdim=world&amp;tstart=-311216400000&amp;tend=1519167600000&amp;hl=pl&amp;dl=pl&amp;ind=false&amp;icfg"></iframe>
			<div id="table">
				<table v-if="!showGraph">
					<tr>
						<th colspan="9">Wskaźnik abonentów telefonii komórkowej względem lat</th>
					</tr>
					<tr>
						<td>Rok</td>
						<td>1985</td>
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
						<td>750 629</td>
						<td>11,2101 mln.</td>
						<td>90,7436 mln.</td>
						<td>738,1579 mln.</td>
						<td>2,2058 mld.</td>
						<td>5,2956 mld.</td>
						<td>7,1819 mld.</td>
						<td>7,8583 mld.</td>
					</tr>
				</table>
			</div>

		</article>
	</main>
</template>

<script>
export default {
	name: "Abonenci",
	data() {
		return {
			showInfo: false,
			showGraph: true
		}
	},
	methods: {
		reload: function () {
			window.location.reload(false);
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
