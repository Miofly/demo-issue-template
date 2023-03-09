<template>
	<div class="text-center">
		<span>普通分割线</span>
		<vft-divider borderColor="red" />
		<vft-divider marginY="5px" border-style="dashed" />
		<vft-divider border-style="dotted" />
		<vft-divider border-style="double" />
		<span>普通分割线</span>

		<vft-divider content-position="left">Rabindranath Tagore</vft-divider>
		<vft-divider>*</vft-divider>
		<vft-divider content-position="right">$</vft-divider>

		<span>垂直</span>
		<vft-divider direction="vertical" />
		<span>分割</span>
		<vft-divider direction="vertical" border-style="dashed" />
		<span>线</span>

		<div>
			<span>垂直</span>
			<vft-divider marginX="0" direction="vertical" />
			<span>分割</span>
			<vft-divider marginX="0" direction="vertical" border-style="dashed" />
			<span>线</span>
		</div>

		<vft-icon>11</vft-icon>
		<vft-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
	</div>
</template>
