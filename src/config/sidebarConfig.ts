import type { SidebarLayoutConfig } from "../types/config";

/**
 * 萓ｧ霎ｹ譬丞ｸ・ｱ驟咲ｽｮ
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 譏ｯ蜷ｦ蜷ｯ逕ｨ萓ｧ霎ｹ譬丞粥閭ｽ
	enable: true,

	// 萓ｧ霎ｹ譬丈ｽ咲ｽｮ・・
	// left: 莉・仞遉ｺ蟾ｦ萓ｧ霎ｹ譬・
	// right: 莉・仞遉ｺ蜿ｳ萓ｧ霎ｹ譬・
	// both: 蜿御ｾｧ霎ｹ譬擾ｼ・280px莉･荳雁酔譌ｶ譏ｾ遉ｺ蟾ｦ蜿ｳ・・69-1279px譬ｹ謐ｮtabletSidebar驟咲ｽｮ譏ｾ遉ｺ蜈ｶ荳ｭ荳萓ｧ
	position: "both",

	// 蟷ｳ譚ｿ遶ｯ(769-1279px)譏ｾ遉ｺ蜩ｪ萓ｧ萓ｧ霎ｹ譬擾ｼ御ｻ・osition荳ｺboth譌ｶ逕滓譜
	// left: 蟷ｳ譚ｿ遶ｯ譏ｾ遉ｺ蟾ｦ萓ｧ霎ｹ譬・
	// right: 蟷ｳ譚ｿ遶ｯ譏ｾ遉ｺ蜿ｳ萓ｧ霎ｹ譬・
	tabletSidebar: "left",

	// 菴ｿ逕ｨ蜊穂ｾｧ譬・position荳ｺleft謌睦ight)譌ｶ・梧弍蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ蜿御ｾｧ霎ｹ譬・
	// 蠖菟osition荳ｺleft譌ｶ蠑蜷ｯ豁､鬘ｹ・梧枚遶隸ｦ諠・｡ｵ蟆・｢晏､匁仞遉ｺ蜿ｳ萓ｧ霎ｹ譬・
	// 蠖菟osition荳ｺright譌ｶ蠑蜷ｯ豁､鬘ｹ・梧枚遶隸ｦ諠・｡ｵ蟆・｢晏､匁仞遉ｺ蟾ｦ萓ｧ霎ｹ譬・
	// 騾ら畑蝨ｨ蜿ｪ諠ｳ逕ｨ蜊穂ｾｧ譬擾ｼ御ｽ・惠譁・ｫ隸ｦ諠・｡ｵ諠ｳ逕ｨ蟇ｹ萓ｧ譬冗噪逶ｮ蠖慕ｭ臥ｻ・ｻｶ逧・惻譎ｯ
	showBothSidebarsOnPostPage: true,

	// 蟾ｦ萓ｧ霎ｹ譬冗ｻ・ｻｶ驟咲ｽｮ蛻苓｡ｨ
	// 扈・ｻｶ逧・ｸｲ譟馴｡ｺ蠎丞ｮ悟・蜿門・莠主ｮ・ｻｬ蝨ｨ驟咲ｽｮ謨ｰ扈・ｸｭ蜃ｺ邇ｰ逧・｡ｺ蠎擾ｼ御ｽ・op逧・ｻ・ｻｶ莨壻ｼ伜・莠市ticky菴咲ｽｮ逧・ｻ・ｻｶ貂ｲ譟・
	// type 扈・ｻｶ邀ｻ蝙・
	// enable 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
	// position 扈・ｻｶ菴咲ｽｮ・嗾op蝗ｺ螳夐｡ｶ驛ｨ・茎ticky邊俶ｧ螳壻ｽ・莨夊ｷ滄囂鬘ｵ髱｢貊壼勘)
	// showOnPostPage 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ隸･扈・ｻｶ
	// showOnNonPostPage 譏ｯ蜷ｦ蝨ｨ髱樊枚遶隸ｦ諠・｡ｵ譏ｾ遉ｺ隸･扈・ｻｶ・磯勁譁・ｫ隸ｦ諠・｡ｵ螟夜・譏ｾ遉ｺ・・
	// configId 扈・ｻｶ驟咲ｽｮID・育岼蜑堺ｻ・ｹｿ蜻顔ｻ・ｻｶ菴ｿ逕ｨ・会ｼ檎畑莠主玄蛻・ｸ榊酔逧・ｹｿ蜻企・鄂ｮ
	// responsive 蜩榊ｺ泌ｼ城・鄂ｮ・磯Κ蛻・ｻ・ｻｶ蜿ｯ逕ｨ・悟庄逕ｨ譚･隶ｾ螳夐Κ蛻・ｻ・ｻｶ髴隕∫噪蜿よ焚・・
	leftComponents: [
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ夂畑謌ｷ襍・侭扈・ｻｶ
			type: "profile",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "top",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壼・蜻顔ｻ・ｻｶ
			type: "announcement",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "top",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ夐浹荵先眺謾ｾ蝎ｨ
			type: "music",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "sticky",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壼・邀ｻ扈・ｻｶ
			type: "categories",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "sticky",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
			// 蜩榊ｺ泌ｼ城・鄂ｮ
			responsive: {
				// 謚伜匠髦亥ｼ・壼ｽ灘・邀ｻ謨ｰ驥剰ｶ・ｿ・5荳ｪ譌ｶ閾ｪ蜉ｨ謚伜匠
				collapseThreshold: 5,
			},
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壽・ｭｾ扈・ｻｶ
			type: "tags",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "sticky",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
			// 蜩榊ｺ泌ｼ城・鄂ｮ
			responsive: {
				// 謚伜匠髦亥ｼ・壼ｽ捺・ｭｾ謨ｰ驥剰ｶ・ｿ・10荳ｪ譌ｶ閾ｪ蜉ｨ謚伜匠
				collapseThreshold: 10,
			},
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壼ｹｿ蜻頑冗ｻ・ｻｶ 1
			type: "advertisement",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "sticky",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
			// 驟咲ｽｮID・壻ｽｿ逕ｨ隨ｬ荳荳ｪ蟷ｿ蜻企・鄂ｮ
			configId: "ad1",
		},
	],

	// 蜿ｳ萓ｧ霎ｹ譬冗ｻ・ｻｶ驟咲ｽｮ蛻苓｡ｨ
	rightComponents: [
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ夂ｫ咏せ扈溯ｮ｡扈・ｻｶ
			type: "stats",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "top",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
		},
		{
			type: "umamiStats",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壽律蜴・ｻ・ｻｶ
			type: "calendar",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "sticky",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: false,
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壻ｾｧ霎ｹ譬冗岼蠖慕ｻ・ｻｶ・亥宵蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ・・
			type: "sidebarToc",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "sticky",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
			// 譏ｯ蜷ｦ蝨ｨ髱樊枚遶隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnNonPostPage: false,
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壼ｹｿ蜻頑冗ｻ・ｻｶ 2
			type: "advertisement",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 扈・ｻｶ菴咲ｽｮ
			position: "sticky",
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
			// 驟咲ｽｮID・壻ｽｿ逕ｨ隨ｬ莠御ｸｪ蟷ｿ蜻企・鄂ｮ
			configId: "ad2",
		},
		{
			type: "feedcat",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
		},
	],

	// 遘ｻ蜉ｨ遶ｯ蠎暮Κ扈・ｻｶ驟咲ｽｮ蛻苓｡ｨ
	// 霑吩ｺ帷ｻ・ｻｶ蜿ｪ蝨ｨ遘ｻ蜉ｨ遶ｯ(<768px)譏ｾ遉ｺ蝨ｨ鬘ｵ髱｢蠎暮Κ・檎峡遶倶ｺ主ｷｦ蜿ｳ萓ｧ霎ｹ譬城・鄂ｮ
	mobileBottomComponents: [
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ夂畑謌ｷ襍・侭扈・ｻｶ
			type: "profile",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壼・蜻顔ｻ・ｻｶ
			type: "announcement",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ夐浹荵先眺謾ｾ蝎ｨ
			type: "music",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壼・邀ｻ扈・ｻｶ
			type: "categories",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
			// 蜩榊ｺ泌ｼ城・鄂ｮ
			responsive: {
				// 謚伜匠髦亥ｼ・壼ｽ灘・邀ｻ謨ｰ驥剰ｶ・ｿ・荳ｪ譌ｶ閾ｪ蜉ｨ謚伜匠
				collapseThreshold: 5,
			},
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ壽・ｭｾ扈・ｻｶ
			type: "tags",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
			// 蜩榊ｺ泌ｼ城・鄂ｮ
			responsive: {
				// 謚伜匠髦亥ｼ・壼ｽ捺・ｭｾ謨ｰ驥剰ｶ・ｿ・0荳ｪ譌ｶ閾ｪ蜉ｨ謚伜匠
				collapseThreshold: 20,
			},
		},
		{
			// 扈・ｻｶ邀ｻ蝙具ｼ夂ｫ咏せ扈溯ｮ｡扈・ｻｶ
			type: "stats",
			// 譏ｯ蜷ｦ蜷ｯ逕ｨ隸･扈・ｻｶ
			enable: true,
			// 譏ｯ蜷ｦ蝨ｨ譁・ｫ隸ｦ諠・｡ｵ譏ｾ遉ｺ
			showOnPostPage: true,
		},
	],
};
