import type { BackgroundWallpaperConfig } from "@/types/config";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 螢∫ｺｸ讓｡蠑擾ｼ・banner" 讓ｪ蟷・｣∫ｺｸ・・overlay" 蜈ｨ螻城乗・・・none" 郤ｯ濶ｲ閭梧勹譌螢∫ｺｸ
	mode: "banner",
	// 譏ｯ蜷ｦ蜈∬ｮｸ逕ｨ謌ｷ騾夊ｿ・ｯｼ闊ｪ譬丞・謐｢螢∫ｺｸ讓｡蠑擾ｼ瑚ｮｾ荳ｺfalse蜿ｯ謠仙合諤ｧ閭ｽ・亥宵貂ｲ譟灘ｽ灘燕讓｡蠑擾ｼ・
	switchable: true,
	// 閭梧勹蝗ｾ迚・・鄂ｮ
	// 蝗ｾ迚・ｷｯ蠕・髪謖∽ｸ臥ｧ肴ｼ蠑擾ｼ・
	// 1. public 逶ｮ蠖包ｼ井ｻ･ "/" 蠑螟ｴ・御ｸ堺ｼ伜喧・会ｼ・/assets/images/banner.webp"
	// 2. src 逶ｮ蠖包ｼ井ｸ堺ｻ･ "/" 蠑螟ｴ・瑚・蜉ｨ莨伜喧菴・ｼ壼｢槫刈譫・ｻｺ譌ｶ髣ｴ・梧耳闕撰ｼ会ｼ・assets/images/banner.webp"
	// 3. 霑懃ｨ・URL・・https://example.com/banner.jpg"
	src: {
		// 譯碁擇閭梧勹蝗ｾ迚・
		desktop: "/assets/images/d1.webp",
		// 遘ｻ蜉ｨ閭梧勹蝗ｾ迚・
		mobile: "/assets/images/m1.webp",
	},
	// Banner讓｡蠑冗音譛蛾・鄂ｮ
	banner: {
		// 蝗ｾ迚・ｽ咲ｽｮ
		// 謾ｯ謖∵園譛韻SS object-position蛟ｼ・悟ｦ・ 'top', 'center', 'bottom', 'left top', 'right bottom', '25% 75%', '10px 20px'..
		// 螯よ棡荳咲衍驕捺惹ｹ磯・鄂ｮ逋ｾ蛻・卆荵狗ｱｻ逧・・鄂ｮ・梧耳闕千峩謗･菴ｿ逕ｨ・・center'螻・ｸｭ・・top'鬘ｶ驛ｨ螻・ｸｭ・・bottom' 蠎暮Κ螻・ｸｭ・・left'蟾ｦ萓ｧ螻・ｸｭ・・right'蜿ｳ萓ｧ螻・ｸｭ
		position: "0% 40%",

		// 荳ｻ鬘ｵ讓ｪ蟷・枚蟄・
		homeText: {
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ荳ｻ鬘ｵ讓ｪ蟷・枚蟄・
			enable: true,
			// 荳ｻ鬘ｵ讓ｪ蟷・ｸｻ譬・｢・
			title: "Hello my friend!",
			// 荳ｻ鬘ｵ讓ｪ蟷・ｸｻ譬・｢伜ｭ嶺ｽ灘､ｧ蟆・
			titleSize: "3.8rem",
			// 荳ｻ鬘ｵ讓ｪ蟷・憶譬・｢・
			subtitle: [
				"Game Vui Dﾃnh Cho Cﾃ｡c B蘯｡n ^ ^ ",
				"Chﾃo M盻ｫng ﾄ雪ｺｿn V盻嬖 PQPGKD",
				"C蘯｣m ﾆn Cﾃ｡c B蘯｡n ﾄ静｣ Ghﾃｩ Thﾄノ 猪",
			],
			// 荳ｻ鬘ｵ讓ｪ蟷・憶譬・｢伜ｭ嶺ｽ灘､ｧ蟆・
			subtitleSize: "1.5rem",
			typewriter: {
				// 譏ｯ蜷ｦ蜷ｯ逕ｨ謇灘ｭ玲惻謨域棡
				// 謇灘ｭ玲惻蠑蜷ｯ 竊・蠕ｪ邇ｯ譏ｾ遉ｺ謇譛牙憶譬・｢・
				// 謇灘ｭ玲惻蜈ｳ髣ｭ 竊・豈乗ｬ｡蛻ｷ譁ｰ髫乗惻譏ｾ遉ｺ荳譚｡蜑ｯ譬・｢・
				enable: true,
				// 謇灘ｭ鈴溷ｺｦ・域ｯｫ遘抵ｼ・
				speed: 100,
				// 蛻髯､騾溷ｺｦ・域ｯｫ遘抵ｼ・
				deleteSpeed: 50,
				// 螳悟・譏ｾ遉ｺ蜷守噪證ょ●譌ｶ髣ｴ・域ｯｫ遘抵ｼ・
				pauseTime: 2000,
			},
		},
		// 蝗ｾ迚・擂貅・
		credit: {
			enable: {
				// 譯碁擇遶ｯ譏ｾ遉ｺ讓ｪ蟷・崟迚・擂貅先枚譛ｬ
				desktop: true,
				// 遘ｻ蜉ｨ遶ｯ譏ｾ遉ｺ讓ｪ蟷・崟迚・擂貅先枚譛ｬ
				mobile: true,
			},
			text: {
				// 譯碁擇遶ｯ隕∵仞遉ｺ逧・擂貅先枚譛ｬ
				desktop: "Facebook - P q p g k D",
				// 遘ｻ蜉ｨ遶ｯ隕∵仞遉ｺ逧・擂貅先枚譛ｬ
				mobile: "Facebook - P q p g k D",
			},
			url: {
				// 譯碁擇遶ｯ蜴溷ｧ玖下譛ｯ蜩∵・濶ｺ譛ｯ螳ｶ鬘ｵ髱｢逧・URL 體ｾ謗･
				desktop: "https://www.facebook.com/PqpgkD",
				// 遘ｻ蜉ｨ遶ｯ蜴溷ｧ玖下譛ｯ蜩∵・濶ｺ譛ｯ螳ｶ鬘ｵ髱｢逧・URL 體ｾ謗･
				mobile: "https://www.facebook.com/PqpgkD",
			},
		},
		// 讓ｪ蟷・ｯｼ闊ｪ譬城・鄂ｮ
		navbar: {
			// 讓ｪ蟷・ｯｼ闊ｪ譬城乗・讓｡蠑擾ｼ・semi" 蜊企乗・・・full" 螳悟・騾乗・・・semifull" 蜉ｨ諤・乗・
			transparentMode: "semifull",
			// 譏ｯ蜷ｦ蠑蜷ｯ豈帷悉迺・ｨ｡邉頑譜譫懶ｼ悟ｼ蜷ｯ蜿ｯ閭ｽ莨壼ｽｱ蜩埼｡ｵ髱｢諤ｧ閭ｽ・悟ｦよ棡荳榊ｼ蜷ｯ蛻呎弍蜊企乗・・瑚ｯｷ譬ｹ謐ｮ閾ｪ蟾ｱ逧・万螂ｽ蠑蜷ｯ
			enableBlur: true,
			// 豈帷悉迺・ｨ｡邉雁ｺｦ
			blur: 3,
		},
		// 豕｢豬ｪ蜉ｨ逕ｻ謨域棡驟咲ｽｮ・悟ｼ蜷ｯ蜿ｯ閭ｽ莨壼ｽｱ蜩埼｡ｵ髱｢諤ｧ閭ｽ・瑚ｯｷ譬ｹ謐ｮ閾ｪ蟾ｱ逧・万螂ｽ蠑蜷ｯ
		waves: {
			enable: {
				// 譯碁擇遶ｯ譏ｯ蜷ｦ蜷ｯ逕ｨ豕｢豬ｪ蜉ｨ逕ｻ謨域棡
				desktop: true,
				// 遘ｻ蜉ｨ遶ｯ譏ｯ蜷ｦ蜷ｯ逕ｨ豕｢豬ｪ蜉ｨ逕ｻ謨域棡
				mobile: true,
			},
		},
	},
	// 蜈ｨ螻城乗・隕・尠讓｡蠑冗音譛蛾・鄂ｮ
	overlay: {
		// 螻らｺｧ・檎｡ｮ菫晏｣∫ｺｸ蝨ｨ閭梧勹螻・
		zIndex: -1,
		// 螢∫ｺｸ騾乗・蠎ｦ
		opacity: 0.8,
		// 閭梧勹讓｡邉顔ｨ句ｺｦ
		blur: 1,
	},
};
