import { DataSocialType } from "./declare/social";
import Styles from '../components/layouts/SocialSection/SocialSection.module.scss';

export const dataSocial: DataSocialType[] = [
	{
		name: 'ВКонтакте',
		href: 'https://vk.com',
		image: '/icons/Social/logo_vk.svg',
		additionalClassName: Styles.SocialItem__vk
	},
	{
		name: 'Discord',
		href: 'https://discord.com',
		image: '/icons/Social/logo_discord.svg',
		additionalClassName: Styles.SocialItem__discord
	},
	{
		name: 'YouTube',
		href: 'https://youtube.com',
		image: '/icons/Social/logo_youtube.svg',
		additionalClassName: Styles.SocialItem__youtube
	},
	{
		name: 'Telegram',
		href: 'https://web.telegram.org',
		image: '/icons/Social/logo_telegram.svg',
		additionalClassName: Styles.SocialItem__telegram
	},
]