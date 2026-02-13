import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 显示列数：2列或3列
	columns: 2,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "PQPGKD",
		imgurl: "/assets/images/avatar.webp",
		desc: "Tôi dễ thương",
		siteurl: "https://www.facebook.com/PqpgkD",
		tags: ["Facebook"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Huỳnh Hoàng",
		imgurl: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/117257648_980610082380417_6715420321357771396_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z8OSCbe6ObQQ7kNvwF50qfQ&_nc_oc=AdlNRBiioFLKaoaWjS-YdO8_-k5fzvAhJGxL_QPBOm9pRGJWilUmPlW6bfkOQ6iseUs&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Fr02yhvNGT5PIW9iSZZViQ&oh=00_AfsGdUmpy_9cnCTCvZok0-Uq0OmMsqxQEr2zWHrztIQciw&oe=69B671CF",
		desc: "Quản lý và vận hành Blog",
		siteurl: "https://www.facebook.com/hoang.huynh.228677",
		tags: ["Facebook"],
		weight: 9, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Schnavia Glücklichkeit",
		imgurl: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/550525433_2940239809494271_9184121305605365879_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Jjm0eV6kcE4Q7kNvwFkxCMf&_nc_oc=Adn3opGvRl0AY3fycJUhZ0pufpfmTiqqLIZkBzlXoXlQ7s0k0AuvQNRIACPkc2ONXpY&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=bghSo9Qj7_4bkTcTvKiiHQ&oh=00_AftlsXDwzPT9lzSsJFbY02WvOcJ8AAtq7ZD6MdIyxvv2wA&oe=6994D479",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/Schnavia?locale=vi_VN",
		tags: ["Facebook"],
		weight: 8, 
		enabled: true, 
	},
	{
		title: "Truong Ducsang",
		imgurl: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/571995045_122094600693095075_3490430590089236045_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=N2d1-KzRVsUQ7kNvwHos8MO&_nc_oc=AdmXwpOxx0Byo7YODNe8IoopxCb4IfFCSgifJi9_e6T24d3qk8PpNPPs91br4q7n4_A&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=li6XJGYVbunBXroq2TBoaQ&oh=00_AfsRK9FiRAT0SIEntOkhYvxg1hFxrmXR_4mpLy2R7lTuOQ&oe=6994DB9F",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/profile.php?id=61582852254494",
		tags: ["Facebook"],
		weight: 4, 
		enabled: true, 
	},
	{
		title: "Phạm Vinh Quang ",
		imgurl: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/459572785_3721831691413095_5906961631862455087_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=QwP83dlKBcQQ7kNvwECaohg&_nc_oc=AdlKDGr6x8m5uI9PTFnFIVt8U48xYk3_BHjQzvsEpZ_eQPcKHsW4Gc5n0IckgyQcZZM&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=Y7Heh4AmQrWAVtHwdJZZXQ&oh=00_AfvNvP_d4rRvJmMqTG3N0YU9VnBhbIUyTjqXYTxM9ZFLZQ&oe=6994E825",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/pham.vinh.quang.767999",
		tags: ["Facebook"],
		weight: 7, 
		enabled: true, 
	},
	{
		title: "Huỳnh Quang Quân ",
		imgurl: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/186183433_957577988389490_1517784074691686965_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ug6a7FzdPPUQ7kNvwF_z95Q&_nc_oc=AdlZ4zEyaHYIPE_sHnDY-BQS7ACETw_1SbJ0teM4RIqHfQLKUgCMHABqJOCSQACzY24&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=KCVVheWAcmsxYSmflOhCyw&oh=00_AfsylUHURTIwr9aF9MhL9syfKxlo5mbbFybHR4OFvISMsw&oe=69B68D77",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/huynh.quang.quan.2024",
		tags: ["Facebook"],
		weight: 6, 
		enabled: true, 
	},
	{
		title: "Duc Anh ",
		imgurl: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/471181842_1302217660817042_5230068942630210386_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=el__RaCSRZ0Q7kNvwFvbNs0&_nc_oc=Adnz2QVlKt0SP9vQ_musNKQQ-ipjSFbCp5VD51hZQbboGBD8RcI8lwQovum28TduFRk&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=KDZ0Lp1J4BaMYYy9d3HMsA&oh=00_AftiZX212dDBZcwyaY-9yRSVJA12_sgph9Qho1p7ZfZYnA&oe=6994E76E",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/duc.anh.265568",
		tags: ["Facebook"],
		weight: 5, 
		enabled: true, 
	},
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight);
};
