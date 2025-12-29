import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 基础功能开关
	enable: true, // 启用音乐播放器功能

	// 使用方式：'meting' 或 'local'
	mode: "local", // "meting" 使用 Meting API，"local" 使用本地音乐列表

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",

		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",

		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",

		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237", // 网易云音乐歌单ID示例

		// 认证 token（可选）
		auth: "",

		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],

		// MetingJS 脚本路径
		// 默认使用 CDN：https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js
		// 备用CDN：https://unpkg.com/meting@2/dist/Meting.min.js
		// 也可配置为本地路径
		jsPath: "https://unpkg.com/meting@2/dist/Meting.min.js",
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	local: {
		playlist: [
			{
				name: "Owari No Sekai Kara",
      			artist: "Yanagi Nagi",
      			url: "/assets/music/Owari No Sekai Kara -Yanagi Nagi.mp3",
      			cover: "https://i1.sndcdn.com/artworks-000083065526-zt6meb-t500x500.jpg",
      			lrc: "",
			},
			{
				name: "'FICTION'",
      			artist: "BEAST 비스트",
      			url: "/assets/music/Fiction - BEAST.mp3",
      			cover: "https://image-cdn.nct.vn/song/2023/02/07/4/2/c/a/1675753261091_300.jpg",
      			lrc: "",
			},
			{
				name: "All Day Long (하루종일)",
      			artist: "ZE:A (제국의아이들)",
      			url: "/assets/music/All Day Long - ZEA.mp3",
      			cover: "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/8/2/b/a/82bac1351d49446c31316362fd3e699c.jpg",
      			lrc: "",
			},
			{
				name: "Ảo ảnh",
      			artist: "Tam Thúc Thuyết  海市蜃楼 - 三叔说",
      			url: "/assets/music/Ảo ảnh - Tam Thúc Thuyết  海市蜃楼 - 三叔说.mp3",
      			cover: "https://i1.sndcdn.com/artworks-oldbUF0ieiuzWJoW-aJb92w-t240x240.jpg",
      			lrc: "",
			},
			{
				name: "Dạ Vũ",
      			artist: "Tăng Duy Tân",
      			url: "/assets/music/Dạ Vũ - Tăng Duy Tân.mp3",
      			cover: "https://image-cdn.nct.vn/song/2021/08/15/a/7/9/2/1629021746388_300.jpg",
      			lrc: "",
			},
			{
				name: "An Angel",
      			artist: "Declan",
      			url: "/assets/music/Declan - An Angel.mp3",
      			cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46mk6GCQScRT8aNNxXRwJOtMmSMpyz0bwvQ&s",
      			lrc: "",
			},
			{
				name: "Because You Live",
      			artist: "Jesse McCartney",
      			url: "/assets/music/Jesse McCartney - Because You Live.mp3",
      			cover: "https://c.saavncdn.com/252/Beautiful-Soul-English-2006-500x500.jpg",
      			lrc: "",
			},
			{
				name: "Mirrors",
      			artist: "Justin Timberlake",
      			url: "/assets/music/Justin Timberlake - Mirrors.mp3",
      			cover: "https://image-cdn.nct.vn/song/2023/06/15/3/e/2/5/1686811832799_300.jpg",
      			lrc: "",
			},
			{
				name: "Trouble Is A Friend",
      			artist: "Lenka",
      			url: "/assets/music/Lenka - Trouble Is A Friend.mp3",
      			cover: "https://i1.sndcdn.com/artworks-fZOnrc3OkPmSEKC8-48Zk8A-t500x500.jpg",
      			lrc: "",
			},
			{
				name: "Futatsu no Kodou to Akai Tsumi",
      			artist: "ON OFF",
      			url: "/assets/music/ON OFF - Futatsu no Kodou to Akai Tsumi.mp3",
      			cover: "https://i1.sndcdn.com/artworks-000184622224-7p5ty7-t500x500.jpg",
      			lrc: "",
			},
			{
				name: "Hoa Cỏ Lau",
      			artist: "Phong Max",
      			url: "/assets/music/Phong Max - Hoa Cỏ Lau.mp3",
      			cover: "https://photo-resize-zmp3.zadn.vn/w360_r1x1_jpeg/avatars/3/9/f/5/39f54184641b0505d292a8350d5d07e2.jpg",
      			lrc: "",
			},
			{
				name: "Thương Ly Biệt - 伤离别",
      			artist: "Ngụy Tân Vũ - 魏新雨",
      			url: "/assets/music/Thương Ly Biệt - 伤离别 - Ngụy Tân Vũ - 魏新雨.mp3",
      			cover: "https://i1.sndcdn.com/artworks-000658801804-s4cjd5-t500x500.jpg",
      			lrc: "",
			},
			{
				name: "Vãn Phong Tác Tửu 晚风作酒 ",
      			artist: "Chu Lâm Phong 周林枫",
      			url: "/assets/music/Vãn Phong Tác Tửu - Chu Lâm Phong -- 晚风作酒 - 周林枫.mp3",
      			cover: "https://y.qq.com/music/photo_new/T002R300x300M000003FdArP2PlB1j_2.jpg?max_age=2592000",
      			lrc: "",
			},
			{
				name: "Far Away - feat. 初音ミク",
      			artist: "kz-livetune",
      			url: "/assets/music/faraway.mp3",
      			cover: "/assets/music/cover/1654168484688641684.png",
      			lrc: "",
			},
		],
	},

	// APlayer 配置选项
	player: {
		// 是否自动播放  浏览器可能会阻止，需用户交互一次网页后才自动播放
		autoplay: false,

		// 主题色
		theme: "var(--btn-regular-bg)",

		// 循环模式：'all'=列表循环, 'one'=单曲循环, 'none'=不循环
		loop: "all",

		// 播放顺序：'list'=列表顺序, 'random'=随机播放
		order: "list",

		// 预加载：'none'=不预加载, 'metadata'=预加载元数据, 'auto'=自动
		preload: "auto",

		// 默认音量 (0-1)
		volume: 0.7,

		// 是否互斥播放（同时只能播放一个播放器）
		mutex: true,

		// local歌词类型：0=不显示, 1=显示（需要提供 lrc 字段）, 2=显示（从 HTML 内容读取）
		lrcType: 1,

		// 歌词是否默认隐藏（当 lrcType 不为 0 时，可以通过此选项控制初始显示状态）
		// true=默认隐藏（用户可以通过歌词按钮手动显示）, false=默认显示
		lrcHidden: true,

		// 播放列表是否默认折叠
		listFolded: false,

		// 播放列表最大高度
		listMaxHeight: "340px",

		// localStorage 存储键名
		storageName: "aplayer-setting",
	},

	// 响应式配置
	responsive: {
		// 移动端配置
		mobile: {
			// 在移动端是否隐藏
			hide: false,

			// 移动端断点（小于此宽度时应用移动端配置）
			breakpoint: 768,
		},
	},
};
