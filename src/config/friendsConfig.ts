import type { FriendLink } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "PQPGKD",
		imgurl: "/assets/images/avatar.webp",
		desc: "Tôi dễ thương。",
		siteurl: "https://www.facebook.com/PqpgkD",
		tags: ["Facebook"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "huynhtroc",
		imgurl: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-1/117257648_980610082380417_6715420321357771396_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=1lKx3KAEFgwQ7kNvwHFNMKg&_nc_oc=Adk5_ZRMy4xkoXgGaKDpJIk5C1Ezzj3WV-ZzdB3PKJjxPMHwH6o-c4YR1Eg5LbAbEbohIzCVNm5GXWFvRXwMvyHx&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=CeuxZBhE1rTExlPXAI3HGw&oh=00_AfnpbqUxc9Zic8b91EvjqqjYgxzJ8HypzPsI01TaUg5ILA&oe=69751A85",
		desc: "Quản lý và vận hành Blog",
		siteurl: "https://www.facebook.com/hoang.huynh.228677",
		tags: ["Facebook"],
		weight: 9, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight); // 按权重降序排序
};
