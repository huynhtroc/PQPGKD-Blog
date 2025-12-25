import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
	title: "", // 页面标题，如果留空则使用 i18n 中的翻译
	description: "", // 页面描述文本，如果留空则使用 i18n 中的翻译
	usage:
		"Văn mẫu: Sự ủng hộ của bạn sẽ được dùng cho việc duy trì máy chủ, sáng tạo nội dung và phát triển tính năng, giúp tôi có thể tiếp tục cung cấp những nội dung chất lượng.", // 赞助用途说明
	// 是否显示赞助者列表
	showSponsorsList: true,
	// 是否在文章详情页底部显示赞助按钮
	showButtonInPost: true,

	// 赞助方式列表
	methods: [
		{
			name: "Momo",
			icon: "fa6-brands:cc-visa",
			qrCode: "/assets/images/sponsor/alipay.png", // 收款码图片路径（需要放在 public 目录下）
			link: "",
			description: "Chuyển đây qua Momo",
			enabled: true,
		},
		{
			name: "BIDV",
			icon: "fa6-brands:cc-visa",
			qrCode: "/assets/images/sponsor/wechat.png", // 收款码图片路径
			link: "",
			description: "Chuyển đây qua BIDV",
			enabled: true,
		},
		{
			name: "ZaloPay",
			icon: "fa6-brands:cc-visa",
			qrCode: "",
			link: "https://afdian.com/a/cuteleaf",
			description: "Chuyển đây qua ZaloPay",
			enabled: true,
		},
		{
			name: "Github",
			icon: "fa6-brands:github",
			qrCode: "",
			link: "https://github.com/CuteLeaf/Firefly",
			description: "Ủng hộ mình trên GitHub",
			enabled: true,
		},
	],

	// 赞助者列表（可选）
	sponsors: [
		// 示例：已实名赞助者
		{
			name: "Bạn gì ơi",
			amount: "50000₫",
			date: "2025-10-01",
			message: "Mừng tuổi nè！",
		},
		// 示例：匿名赞助者
		{
			name: "Bạn gì ơi 2",
			amount: "20000₫",
			date: "2025-10-01",
		},
	],
};
