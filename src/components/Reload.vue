<template>
    <button tabindex="11" @click="reload">Przeładuj wykres</button>
	<i @click="showInfo=!showInfo" class="demo-icon icon-info-circled-alt"></i>
	<span v-if="showInfo">Przeładuj wykres, gdy ten nie będzie wyświetlany poprawnie</span>
</template>
<script>
export default {
	name: "Navbar",
    data() {
		return {
			showInfo: false,
			showGraph: false
		}
	},
	methods: {
		reload: function () {
			window.location.reload(false);
		}
	}
}
</script>
<style lang="scss">
@import '../styles/graphs';

span {
	font-size: 1.5rem;
	background-color: $dark2;
	padding: 10px 15px;
	border-radius: 15px;
	box-shadow: 0 0 1em 0 $dark2;
}
i {
	margin: 3px 7px 0 7px;
	cursor: pointer;
	transition-duration: .2s;
	
	&:hover {
		color: $accent;
	}
}
</style>