import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: "Thông Báo", // 公告标题
	content: "Đây là thông báo mẫu。", // Nội dung thông báo
	closable: false, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "Tìm hiểu thêm nhé", // 链接文本
		url: "/about/", // 链接 URL
		external: false, // 内部链接
	},
};
