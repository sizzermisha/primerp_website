import { MouseEventHandler } from "react";

export type Button = {
	icon?: string | null;
	name: string;
	linkButton?: string | null;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}