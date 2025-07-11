export interface INavigation {
	key: number | string;
	name: string;
	href: string | '/';
	isActive?: boolean | false;
}