import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "¡Conoceme!",

	// 公告内容
	content:
		"¿Quieres saber más sobre mí? ¡Haz clic en el botón para descubrir más!",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "Ir para allá",
		// 链接 URL
		url: "/info/",
		// 内部链接
		external: false,
	},
};
