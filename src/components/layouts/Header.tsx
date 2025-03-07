import { INavigation } from "../../models/navigation"
import NavigationButton from "../ui/NavigationButton"


export default function Header() {
	const dataNavigation: INavigation[] = [
		{
			key: 'header_nav_main',
			name: 'Главная',
			href: '/'
		},
		{
			key: 'header_nav_main',
			name: 'О проекте',
			href: '/'
		},
		{
			key: 'header_nav_main',
			name: 'Форум',
			href: '/'
		},
		{
			key: 'header_nav_main',
			name: 'Discord',
			href: '/'
		},
	]

	const handleChangeLanguage = () => {
		console.log('Clicked')
	}

	return (
		<header className="header">
			<div className="header__inner container">
				<img
					src="/logo_prime.svg"
					alt="Prime RP"
					width={169}
					height={29}
					loading="lazy"
				/>

				<nav className="header__navigation">
					<ul className="header__list">
						{dataNavigation.map((value) => {
							return (<li key={value.key} className="header__item"><a href={value.href} className="header__link">{value.name}</a></li>)
						})}
					</ul>

					<div className="header__listButton">
						<NavigationButton icon={'language.svg'} name="Сменить язык" onClick={handleChangeLanguage} />
						<NavigationButton icon={'donate.svg'} name="Пополнение счёта" linkButton="/donate" />
					</div>
				</nav>
			</div>
		</header>
	)
}
