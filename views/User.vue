<template>
	<div class="user">
		<ProfilePanel :loginname='loginname' />
		<OtherTopic :simple='false' />
		<RecentReply :simple='false' />
	</div>
</template>

<script>
	/**
	 * 用户个人中心页
	 */
	import OtherTopic from "@/components/OtherTopic";
	import ProfilePanel from "@/components/ProfilePanel";
	import RecentReply from "@/components/RecentReply";

	export default
	{
		/**
		 * 给此组件起的名字，会显示在Vue的DevTool里面
		 */
		name: "User",
		/**
		 * 当前组件的‘数据中心'
		 */
		data()
		{
			return {
				loginname: ""
			};
		},

		beforeCreate()
		{
			console.log("初始化一个空的vue对象，仅仅存在一些生命周期函数")
		},
		/**
		 * 一般此钩子下面调用接口获取数据
		 */
		created()
		{
			console.log("有data和methods")
			this.loginname = this.$route.params.id;
		},
		beforeMount()
		{
			console.log('DOM已经在内存中渲染好，但是页面还是旧页面')
		},
		mounted()
		{

			console.log('新页面已经更新完毕，页面的创建工作结束')
		},
		beforeUpdate()
		{

			console.log('现在处在响应式的循环中，data数据是旧的，页面还没跟新')
		},
		updated()
		{
			console.log('data数据已经和页面保持更新')
		},
		/**
		 * 
		 * 在当前路由改变，但是该组件被复用时调用
		 * 举例来说，对于一个带有动态参数的路径 /user/:id，在 /user/shuiRong 和 /user/martin 之间跳转的时候，
		 * 由于会渲染同样的 User 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		 * 可以访问组件实例 `this`
		 */
		beforeRouteUpdate(to, from, next)
		{
			this.loginname = to.params.id;
			// alert(this.loginname)
			next();
		},
		/**
		 * 注册引用进来的其他组件
		 */
		components:
		{
			RecentReply,
			OtherTopic,
			ProfilePanel
		}
	};
</script>

<style lang="scss" scoped>
	.user {
		width: 75%;
		margin: auto;
	}
</style>
