import { IFooter } from "./declare/footer";

export const dataFooter: IFooter[] = [
	{
			key: 'igrok',
			title: 'Игрокам',
			list: [
					{
							id: 1,
							text: 'Форум',
							href: '/',
					},
					{
							id: 2,
							text: 'О проекте',
							href: '/',
					},
					{
							id: 3,
							text: 'Следить за новостями',
							href: '/',
					},
			],
	},
	{
			key: 'main_info',
			title: 'Важная информация',
			list: [
					{
							id: 1,
							text: 'Условия использования',
							href: '/',
					},
					{
							id: 2,
							text: 'Пользовательское соглашение',
							href: '/',
					},
					{
							id: 3,
							text: 'Правила оплаты',
							href: '/',
					},
			],
	},
	{
			key: 'contacts',
			title: 'Контакты',
			list: [
					{
							id: 1,
							text: 'Канал поддержки',
							href: '/',
					},
					{
							id: 2,
							text: 'help@prime-rp.ru',
							href: 'mailto:help@prime-rp.ru',
					},
			],
	},
];