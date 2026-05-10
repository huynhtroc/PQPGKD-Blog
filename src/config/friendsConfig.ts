import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: false,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
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
		title: "Schnavia Glücklichkeit",
		imgurl: "/assets/images/Friends/01.jpg",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/Schnavia?locale=vi_VN",
		tags: ["Facebook"],
		weight: 8, 
		enabled: true, 
	},
	{
		title: "Truong Ducsang",
		imgurl: "/assets/images/Friends/02.jpg",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/profile.php?id=61582852254494",
		tags: ["Facebook"],
		weight: 4, 
		enabled: true, 
	},
	{
		title: "Phạm Vinh Quang ",
		imgurl: "/assets/images/Friends/06.jpg",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/pham.vinh.quang.767999",
		tags: ["Facebook"],
		weight: 7, 
		enabled: true, 
	},
	{
		title: "Huỳnh Quang Quân ",
		imgurl: "/assets/images/Friends/03.jpg",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/huynh.quang.quan.2024",
		tags: ["Facebook"],
		weight: 6, 
		enabled: true, 
	},
	{
		title: "Duc Anh ",
		imgurl: "/assets/images/Friends/04.jpg",
		desc: "Bạn thân",
		siteurl: "https://www.facebook.com/duc.anh.265568",
		tags: ["Facebook"],
		weight: 5, 
		enabled: true, 
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
