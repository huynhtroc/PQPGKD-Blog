import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 模板默认侧边栏和导航栏两个都显示，正常情况下建议二选一，关闭其中一个
	// 1. 侧边栏：在sidebarConfig.ts侧边栏配置把音乐组件enable设为false禁用即可
	// 2. 导航栏：在本配置文件把showInNavbar设为false禁用即可

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

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
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
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
      			cover: "https://i.scdn.co/image/ab67616d0000b2739ebc45791dad84d03a71c0e0",
      			lrc: "",
			},
		],
	},
};
