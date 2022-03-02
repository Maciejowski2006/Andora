<template>
	<main>
		<article>
			<div id="header">
				<Reload></Reload>
			</div>
			<!--	Wykres	-->
			<iframe src="https://www.google.pl/publicdata/embed?ds=d5bncppjof8f9_&amp;ctype=l&amp;strail=false&amp;bcs=a&amp;nselm=h&amp;met_y=pupil_teacher_ratio&amp;fdim_y=country:AND&amp;scale_y=lin&amp;ind_y=false&amp;rdim=education_level&amp;idim=education_level:6:9:11:5&amp;ifdim=education_level&amp;tstart=35938800000&amp;tend=1519167600000&amp;hl=pl&amp;dl=pl&amp;ind=false&amp;icfg"></iframe>
		</article>
  </main>
</template>
<script>
import Reload from '@/components/Reload.vue'

export default {
	name: 'Home',
	components: {
		Reload
	}
}
</script>
<style lang="scss" scoped>
// Import styli związanych z wykresami
@import "../styles/graphs";
</style>