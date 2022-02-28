<template>
	<Navbar></Navbar>
	<router-view></router-view>
	<Footer></Footer>
</template>
<script>
// Import komponentów
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'Home',
	components: {
		Navbar,
		Footer
	}
}
</script>
<style lang="scss">
// Import czcionki
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
// Import palety kolorów
@import 'styles/variables';

* {
	box-sizing: border-box;
}
body {
	margin: 0;
	background-color: $dark1;
	font-family: 'Lato', sans-serif;
	font-weight: 400;
	font-size: 16px;
	color: $light1;
}
main {
	margin-top: 25px;
	margin-bottom: 50px;

	display: flex;
	flex-direction: column;
	align-items: center;
}
article {
	width: 75%;
	font-size: 2rem;

	h1 {
		text-align: center;
		font-weight: 900;
		letter-spacing: 2px;
		font-size: 3rem;
	}
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
// Scrollbar
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
	background-color: $dark2;
}
::-webkit-scrollbar-thumb {
	background-color: $light1;
	border-radius: 50px;

	&:active {
		background-color: $accent;
	}
}
</style>
