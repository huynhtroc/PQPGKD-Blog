import type { AdConfig } from "../types/config";

// 这里只是配置广告�E容�E�如果要开关请在sidebarConfig.ts中控制侧边栏绁E��皁E��启用绁E��即可

// 广告�E置1 - 纯图牁E��告（无边距！E
export const adConfig1: AdConfig = {
	image: {
		src: "/assets/images/d1.webp",
		alt: "Banner quảng cáo",
		link: "/posts/chao-mung-den-voi-thien-duong-meo/",
		external: true,
	},

	// 是否允许关闭广呁E
	closable: true,

	// 显示次数限制�E�E1为无限制
	displayCount: -1,

	// 绁E��冁E��距�E置�E�可通迁E��消注释生敁E
	padding: {
		// 零边距，图牁E��满整个绁E��
		all: "0",

		// 四边1rem边跁E
		// all: "1rem",

		// 顶部无边跁E
		// top: "0",

		// 右侧无边跁E
		// right: "1rem",

		// 底部无边跁E
		// bottom: "1rem",

		// 左侧无边跁E
		// left: "1rem",
	},
};

// 广告�E置2 - 完整冁E��广呁E
export const adConfig2: AdConfig = {
	title: "Game dịch mới nhất",
	content:
		"Đây là quảng cáo cho game dịch xong mới nhất, tìm hiểu thêm nhé!",
	image: {
		src: "/assets/images/d2.webp",
		alt: "Banner quảng cáo",
		link: "/posts/bai-ca-hy-vong/",
		external: false,
	},
	link: {
		text: "Game Biển Hoa Huyền Ảo",
		url: "/posts/bien-hoa-huyen-ao/",
		external: false,
	},
	closable: true,
	displayCount: -1,
	padding: {
		// all: "1rem",
	},
};
