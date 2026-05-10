import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "Thông báo",

	// 公告内容
	content: "Hãy lên web trên pc để có trài nghiệm tốt hơn nhé!",

	// 是否允许用户关闭公告
	closable: false,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "Đọc lưu lý về Blog",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
