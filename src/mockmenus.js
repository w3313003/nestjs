export default  [
	{
		icon: "home",
		sort: 0,
		type: "dropdown",
		title: "首页",
		path: "/main",
		parent_id: 0,
		id: 19,
		child: [
			{
				icon: "information-circled",
				sort: -1,
				type: "menu",
				title: "平台信息",
				path: "/main",
				parent_id: 19,
				id: 20,
				child: []
			},
			{
				icon: "lock-combination",
				sort: 2,
				type: "dropdown",
				title: "用户信息",
				path: "/main/userInfo",
				parent_id: 19,
				id: 21,
				child: [
					{
						icon: "",
						sort: 3,
						type: "menu",
						title: "注册",
						path: "/main/userInfo/register",
						parent_id: 21,
						id: 22,
						child: []
					}
				]
			}
		]
	},
	{
		icon: "android-playstore",
		type: "dropdown",
		title: "店铺设置",
		path: "/store",
		parent_id: 0,
		id: 24112,
		sort: 1,
		child: [ {
			icon: "information-circled",
			type: "menu",
			title: "店铺信息",
			path: "/store/info",
			parent_id: 24112,
			id: 241121,
			sort: 1,
			child: []
		}, {
			icon: "settings",
			type: "menu",
			title: "店铺管理",
			path: "/store/settings",
			parent_id: 24112,
			id: 241122,
			sort: 1,
			child: []
		}]
	},
	{
		icon: "icon-choiceness",
		sort: 1,
		type: "dropdown",
		title: "渠道管理",
		path: "/channel/admin",
		parent_id: 0,
		id: 24,
		child: [
			{
				icon: "icon-pers",
				sort: 0,
				type: "menu",
				title: "分管理员",
				path: "/channel/admin",
				parent_id: 24,
				id: 25,
				child: []
			},
			{
				icon: "icon-pengyoufill",
				sort: 1,
				type: "menu",
				title: "ODM服务商",
				path: "/channel/ODM",
				parent_id: 24,
				id: 102,
				child: []
			},
			{
				icon: "icon-role",
				sort: 2,
				type: "menu",
				title: "城市服务商",
				path: "/channel/city",
				parent_id: 24,
				id: 26,
				child: []
			},
			{
				icon: "icon-member",
				sort: 4,
				type: "menu",
				title: "普通商户",
				path: "/channel/merchant",
				parent_id: 24,
				id: 28,
				child: []
			}
		]
	},
	{
		icon: "icon-setting",
		sort: 1,
		type: "",
		title: "地区选择",
		path: "/area",
		parent_id: 0,
		id: 133,
		child: [
			{
				icon: "icon-dashboard",
				sort: -1,
				type: "menu",
				title: "平台信息",
				path: "/area",
				parent_id: 133,
				id: 1333,
				child: []
			}
		]
	},
	{
		icon: "icon-setting",
		sort: 1,
		type: "dropdown",
		title: "系统配置",
		path: "/setting",
		parent_id: 0,
		id: 1,
		child: [
			{
				icon: "icon-action",
				sort: 0,
				type: "dropdown",
				title: "操作管理",
				path: "/setting/action",
				parent_id: 1,
				id: 11,
				child: [
					{
						icon: null,
						sort: 0,
						type: "dropdown",
						title: "操作列表",
						path: "/setting/action",
						parent_id: 11,
						id: 12,
						child: [
							{
								icon: null,
								sort: 0,
								type: "menu",
								title: "测试",
								path: "/setting/action/test",
								parent_id: 12,
								id: 122,
								child: []
							}
						]
					},
					{
						icon: null,
						sort: 0,
						type: "menu",
						title: "新增操作",
						path: "/setting/action/add",
						parent_id: 11,
						id: 13,
						child: []
					}
				]
			},
			{
				icon: "icon-card",
				sort: 0,
				type: "menu",
				title: "银行管理",
				path: "/setting/bank",
				parent_id: 1,
				id: 49,
				child: []
			},
			{
				icon: "icon-menu",
				sort: 0,
				type: "dropdown",
				title: "菜单管理",
				path: "/setting/menu",
				parent_id: 1,
				id: 2,
				child: [
					{
						icon: null,
						sort: 0,
						type: "menu",
						title: "新增菜单",
						path: "/setting/menu/add",
						parent_id: 2,
						id: 4,
						child: []
					},
					{
						icon: null,
						sort: 0,
						type: "menu",
						title: "菜单列表",
						path: "/setting/menu",
						parent_id: 2,
						id: 3,
						child: []
					}
				]
			},
			{
				icon: "icon-pers",
				sort: 0,
				type: "dropdown",
				title: "权限管理",
				path: "/setting/pers",
				parent_id: 1,
				id: 8,
				child: [
					{
						icon: null,
						sort: 0,
						type: "menu",
						title: "新增权限",
						path: "/setting/pers/add",
						parent_id: 8,
						id: 10,
						child: []
					},
					{
						icon: null,
						sort: 0,
						type: "menu",
						title: "权限列表",
						path: "/setting/pers",
						parent_id: 8,
						id: 9,
						child: []
					}
				]
			},
			{
				icon: "icon-role",
				sort: 0,
				type: "dropdown",
				title: "角色管理",
				path: "/setting/role",
				parent_id: 1,
				id: 5,
				child: [
					{
						icon: null,
						sort: 0,
						type: "menu",
						title: "新增角色",
						path: "/setting/role/add",
						parent_id: 5,
						id: 7,
						child: []
					},
					{
						icon: null,
						sort: 0,
						type: "menu",
						title: "角色列表",
						path: "/setting/role",
						parent_id: 5,
						id: 6,
						child: []
					}
				]
			},
			{
				icon: "icon-role",
				sort: 10,
				type: "menu",
				title: "应用类型",
				path: "/setting/application/class",
				parent_id: 1,
				id: 144,
				child: []
			}
		]
	}
];
