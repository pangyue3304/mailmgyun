<template>
	<div class="goods-list">
		<goods-list-item v-for="item in goods" :goodsItem="item" />
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem'
	export default {
		name: 'GoodsList',
		props: {
			goods: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			GoodsListItem
		}
	}
</script>

<style  scoped>
	.goods-list {
		/*display: flex;*/
		/*flex-wrap: wrap;*/
		/*align-items: center;*/
		/*justify-content: space-between;*/
		/*padding: 0 6px;*/
    -moz-column-count:2; /* Firefox */
    -webkit-column-count:2; /* Safari 和 Chrome */
    column-count:2;
    -moz-column-gap: 0em;
    -webkit-column-gap: 0em;
    column-gap: 0em;
    text-align: center;
	}
</style>
