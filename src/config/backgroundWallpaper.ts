import type { BackgroundWallpaperConfig } from "@/types/config";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式！Ebanner" 横幁E��纸�E�Eoverlay" 全屏透�E�E�Enone" 纯色背景无壁纸
	mode: "banner",
	// 是否允许用户通迁E��航栏�E换壁纸模式，设为false可提升性能�E�只渲染当前模式！E
	switchable: true,
	// 背景图牁E�E置
	// 图牁E��征E��持三种格式！E
	// 1. public 目录（以 "/" 开头�E�不优化�E�！E/assets/images/banner.webp"
	// 2. src 目录（不以 "/" 开头�E��E动优化佁E��增加极E��时间�E�推荐）！Eassets/images/banner.webp"
	// 3. 远稁EURL�E�Ehttps://example.com/banner.jpg"
	src: {
		// 桌面背景图牁E
		desktop: "/assets/images/d1.webp",
		// 移动背景图牁E
		mobile: "/assets/images/m1.webp",
	},
	// Banner模式特有�E置
	banner: {
		// 图牁E��置
		// 支持所有CSS object-position值�E�妁E 'top', 'center', 'bottom', 'left top', 'right bottom', '25% 75%', '10px 20px'..
		// 如果不知道怎么�E置百刁E��之类皁E�E置�E�推荐直接使用�E�Ecenter'屁E���E�Etop'顶部屁E���E�Ebottom' 底部屁E���E�Eleft'左侧屁E���E�Eright'右侧屁E��
		position: "0% 40%",

		// 主页横幁E��孁E
		homeText: {
			// 是否启用主页横幁E��孁E
			enable: true,
			// 主页横幁E��栁E��E
			title: "Hello my friend!",
			// 主页横幁E��栁E��字体大封E
			titleSize: "3.8rem",
			// 主页横幁E��栁E��E
			subtitle: [
				"Game Vui Dành Cho Các Bạn ^ ^ ",
				"Chào Mừng Đến Với PQPGKD",
				"Cảm Ơn Các Bạn Đã Ghé Thăm 💖",
				"Chúc mọi người một ngày vui vẻ hạnh phúc ấm áp bên gia đình bạn bè người thân ^ ^",
			],
			// 主页横幁E��栁E��字体大封E
			subtitleSize: "1.5rem",
			typewriter: {
				// 是否启用打字机效果
				// 打字机开启 ↁE循环显示所有副栁E��E
				// 打字机关闭 ↁE每次刷新随机显示一条副栁E��E
				enable: true,
				// 打字速度�E�毫秒！E
				speed: 100,
				// 删除速度�E�毫秒！E
				deleteSpeed: 50,
				// 完�E显示后的暂停时间�E�毫秒！E
				pauseTime: 2000,
			},
		},
		// 图牁E��溁E
		credit: {
			enable: {
				// 桌面端显示横幁E��牁E��源文本
				desktop: true,
				// 移动端显示横幁E��牁E��源文本
				mobile: true,
			},
			text: {
				// 桌面端要显示皁E��源文本
				desktop: "Facebook - P q p g k D",
				// 移动端要显示皁E��源文本
				mobile: "Facebook - P q p g k D",
			},
			url: {
				// 桌面端原始艺术品�E艺术家页面皁EURL 链接
				desktop: "https://www.facebook.com/PqpgkD",
				// 移动端原始艺术品�E艺术家页面皁EURL 链接
				mobile: "https://www.facebook.com/PqpgkD",
			},
		},
		// 横幁E��航栏�E置
		navbar: {
			// 横幁E��航栏透�E模式！Esemi" 半透�E�E�Efull" 完�E透�E�E�Esemifull" 动态E���E
			transparentMode: "semifull",
			// 是否开启毛玻璁E��糊效果，开启可能会影响页面性能�E�如果不开启则是半透�E�E�请根据自己皁E��好开启
			enableBlur: true,
			// 毛玻璁E��糊度
			blur: 3,
		},
		// 波浪动画效果配置�E�开启可能会影响页面性能�E�请根据自己皁E��好开启
		waves: {
			enable: {
				// 桌面端是否启用波浪动画效果
				desktop: true,
				// 移动端是否启用波浪动画效果
				mobile: true,
			},
		},
	},
	// 全屏透�E要E��模式特有�E置
	overlay: {
		// 层级�E�确保壁纸在背景屁E
		zIndex: -1,
		// 壁纸透�E度
		opacity: 0.8,
		// 背景模糊程度
		blur: 1,
	},
};
