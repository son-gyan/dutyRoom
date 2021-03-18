import Vue from "vue";
import Router from "vue-router";
import config from "@/api/config";
//管理员路径
const Login = () => import("@/views/admin/login");
const Home = () => import("@/views/admin/Home");
const Index = () => import("@/views/admin/index");
const Setting = () => import("@/views/admin/setting");

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

const router = new Router({
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
	mode: "history",
	routes: [
		{ path: "/", redirect: "/login" },
		{
			path: "/login",
			name: "login",
			component: Login,
			meta: { keepAlive: false }
		},
		{
			path: "/home",
			name: "home",
			component: Home,
			meta: { keepAlive: false },
			children:[
				{
					path: "/index",
					name: "index",
					component: Index,
					meta: { keepAlive: false },
				},
				{
					path: "/setting",
					name: "setting",
					component: Setting,
					meta: { keepAlive: false }
				},
			]
		},
		
	]
});

export default router;

router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		sessionStorage.clear()
		next();
	}
	next();
});
