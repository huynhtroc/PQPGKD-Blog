import type { AdConfig } from "../types/config";

// 霑咎㈹蜿ｪ譏ｯ驟咲ｽｮ蟷ｿ蜻雁・螳ｹ・悟ｦよ棡隕∝ｼ蜈ｳ隸ｷ蝨ｨsidebarConfig.ts荳ｭ謗ｧ蛻ｶ萓ｧ霎ｹ譬冗ｻ・ｻｶ逧・噪蜷ｯ逕ｨ扈・ｻｶ蜊ｳ蜿ｯ

// 蟷ｿ蜻企・鄂ｮ1 - 郤ｯ蝗ｾ迚・ｹｿ蜻奇ｼ域裏霎ｹ霍晢ｼ・
export const adConfig1: AdConfig = {
	image: {
		src: "/assets/images/d1.webp",
		alt: "Banner qu蘯｣ng cﾃ｡o",
		link: "/posts/chao-mung-den-voi-thien-duong-meo/",
		external: true,
	},

	// 譏ｯ蜷ｦ蜈∬ｮｸ蜈ｳ髣ｭ蟷ｿ蜻・
	closable: true,

	// 譏ｾ遉ｺ谺｡謨ｰ髯仙宛・・1荳ｺ譌髯仙宛
	displayCount: -1,

	// 扈・ｻｶ蜀・ｾｹ霍晞・鄂ｮ・悟庄騾夊ｿ・叙豸域ｳｨ驥顔函謨・
	padding: {
		// 髮ｶ霎ｹ霍晢ｼ悟崟迚・頃貊｡謨ｴ荳ｪ扈・ｻｶ
		all: "0",

		// 蝗幄ｾｹ1rem霎ｹ霍・
		// all: "1rem",

		// 鬘ｶ驛ｨ譌霎ｹ霍・
		// top: "0",

		// 蜿ｳ萓ｧ譌霎ｹ霍・
		// right: "1rem",

		// 蠎暮Κ譌霎ｹ霍・
		// bottom: "1rem",

		// 蟾ｦ萓ｧ譌霎ｹ霍・
		// left: "1rem",
	},
};

// 蟷ｿ蜻企・鄂ｮ2 - 螳梧紛蜀・ｮｹ蟷ｿ蜻・
export const adConfig2: AdConfig = {
	title: "Game d盻議h m盻嬖 nh蘯･t",
	content:
		"ﾄ静｢y lﾃ qu蘯｣ng cﾃ｡o cho game d盻議h xong m盻嬖 nh蘯･t, tﾃｬm hi盻ブ thﾃｪm nhﾃｩ!",
	image: {
		src: "/assets/images/d2.webp",
		alt: "Banner qu蘯｣ng cﾃ｡o",
		link: "/posts/bai-ca-hy-vong/",
		external: false,
	},
	link: {
		text: "Game Bﾃi Ca Hy V盻肱g",
		url: "/posts/bai-ca-hy-vong/",
		external: false,
	},
	closable: true,
	displayCount: -1,
	padding: {
		// all: "1rem",
	},
};
