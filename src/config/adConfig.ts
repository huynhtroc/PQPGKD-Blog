import type { AdConfig } from "../types/config";

// 这里只是配置广告内容，如果要开关请在sidebarConfig.ts中控制侧边栏组件的的启用组件即可

// 广告配置1 - 纯图片广告（无边距）
export const adConfig1: AdConfig = {
	image: {
		src: "/assets/images/d1.webp",
		alt: "Banner quảng cáo",
		link: "#",
		external: true,
	},
	closable: true, // 是否可关闭
	displayCount: -1,
	padding: {
		all: "0", // 零边距，图片占满整个组件
		// all: "1rem", // 默认边距
		// top: "0", // 仅顶部无边距
		// right: "1rem", // 仅右侧无边距
		// bottom: "1rem", // 仅底部无边距
		// left: "1rem", // 仅左侧无边距
	},
};

// 广告配置2 - 完整内容广告
export const adConfig2: AdConfig = {
	title: "Banner quảng cáo",
	content:
		"Đây là banner quảng cáo cho game sắp ra mắt của mình. Hãy ủng hộ mình nhé!",
	image: {
		src: "/assets/images/d2.webp",
		alt: "Banner quảng cáo",
		link: "about/",
		external: false,
	},
	link: {
		text: "Ủng hộ mình",
		url: "/about/",
		external: false,
	},
	closable: true,
	displayCount: -1,
	padding: {
		// all: "1rem",
	},
};
