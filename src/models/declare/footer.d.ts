export type FooterTitle = "Игрокам" | "Важная информация" | "Контакты";

export interface IFooterList {
	id: number;
	text: string;
	href: string;
}

export interface IFooter {
	key: "igrok" | "main_info" | "contacts";
	title: FooterTitle;
	list: IFooterList[];
}