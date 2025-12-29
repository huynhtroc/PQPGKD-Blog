import type { FriendLink } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

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
		imgurl: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-1/117257648_980610082380417_6715420321357771396_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=1lKx3KAEFgwQ7kNvwHFNMKg&_nc_oc=Adk5_ZRMy4xkoXgGaKDpJIk5C1Ezzj3WV-ZzdB3PKJjxPMHwH6o-c4YR1Eg5LbAbEbohIzCVNm5GXWFvRXwMvyHx&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=CeuxZBhE1rTExlPXAI3HGw&oh=00_AfnpbqUxc9Zic8b91EvjqqjYgxzJ8HypzPsI01TaUg5ILA&oe=69751A85",
		desc: "Quản lý và vận hành Blog",
		siteurl: "https://www.facebook.com/hoang.huynh.228677",
		tags: ["Facebook"],
		weight: 9, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Truong Ducsang",
		imgurl: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/571995045_122094600693095075_3490430590089236045_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=7uZlIJ4SKwkQ7kNvwEwmngW&_nc_oc=AdnfN7sq1uFPKzQK7klgbdY_2ioFSMtGph27Dt__6Ae0TKLuRYbWOkeCT3DcjYu7lIH0J8Hu43WpNvbvB5pphIa0&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=kJuP4GfX6dwlvPuh_JjSNg&oh=00_AfkrYILpVB3VmhX1-tPC0azvSZ754y90qiBEFFCtbfZSeg&oe=695852FC",
		desc: "Bạn thân của PQPGKD",
		siteurl: "https://www.facebook.com/profile.php?id=61582852254494",
		tags: ["Facebook"],
		weight: 8, 
		enabled: true, 
	},
	{
		title: "Phạm Vinh Quang ",
		imgurl: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/459572785_3721831691413095_5906961631862455087_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=aUGKuIH-ICQQ7kNvwFBmQKo&_nc_oc=AdlA-n_QPE8OZEswRflPMnkmXpEkzGxp8NhvOwVm1ALfr6c5fTc7oIGsyWJa9pwTOffyhdpW8elLWxEZqB9rQTZh&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AVjxOpBbXi__jlGM8vJ5Uw&oh=00_AfnM9yyFw1nVlU-sC9PAELPcx_Uwp_HiZoenWtG0WTk-HA&oe=69587B65",
		desc: "Bạn thân của PQPGKD",
		siteurl: "https://www.facebook.com/pham.vinh.quang.767999",
		tags: ["Facebook"],
		weight: 7, 
		enabled: true, 
	},
	{
		title: "Huỳnh Quang Quân ",
		imgurl: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/186183433_957577988389490_1517784074691686965_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jS6ph1DR-k8Q7kNvwEJPGPs&_nc_oc=AdnMTTDp4u9AlApe9LhtDHSwf-v14r9G9db7QCWsknz9HU8rbqKqh6Yj95Togilk8E--VWC_i82D7zUtwjI8YlMb&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=_FLsglC9TNuJciHaipeCuw&oh=00_AfkCHvuDLOneXvV52yQ3RCd7GjoUlHBsHTu-ez5Mghb-2g&oe=697A20B7",
		desc: "Bạn thân của PQPGKD",
		siteurl: "https://www.facebook.com/huynh.quang.quan.2024",
		tags: ["Facebook"],
		weight: 6, 
		enabled: true, 
	},
	{
		title: "Duc Anh ",
		imgurl: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/471181842_1302217660817042_5230068942630210386_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z7rN8Pl2GQ4Q7kNvwGvpMPd&_nc_oc=Adlhq1Wqm4ou66DzxKqMel0sIbFKY4XcyDF9-aRVF1vujNIUIoEIfkbmcsUIBMJq6E-3HK7vQdSVa_5Ti2sC2W5e&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=bvFcTgk6tiH_fLUaHWveag&oh=00_Afk50VvqWyxueQXM_0Rpte6bx5dJicrA81Z15lt9nQOn0w&oe=69587AAE",
		desc: "Bạn thân của PQPGKD",
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
		.sort((a, b) => b.weight - a.weight); // 按权重降序排序
};
