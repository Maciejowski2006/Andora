<template>
<footer>
	Zrobione przez: <a href="https://github.com/Maciejowski2006" target="_blank">Maciej Chmiel</a>
</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
footer {
	position: fixed;
	width: 100%;
	bottom: 0;

	text-align: center;
	padding: 10px;
	background-color: $dark2;
}
a {
	text-decoration: none;
	color: $light2;
	transition-duration: .2s;

	&:hover {
		text-decoration: underline;
		color: $accent;
	}
}
</style>