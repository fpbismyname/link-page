import type { SvgComponent } from "astro/types";
import type { itemType } from "./site.type";

export interface DockMenuInterface {
    label: string;
    icon: SvgComponent;
    href: string;
}

type BlockType = "header-profile" | "header" | "list-link" | "list-menu" | "footer-text";

export interface BlockInterface extends Record<string, any> {
    [key: string]: BlockItem[];
}
export interface BlockItem {
    type: BlockType;
    content: HeaderProfileInterface | ListLinkInterface[] | FooterTextInterface | HeaderInterface;
}

export interface HeaderInterface {
    title: string;
    rightItem: itemType;
}

export interface HeaderProfileInterface {
    title: string;
    subtitle?: string;
    bgCover?: ImageMetadata;
    profilePicture: ImageMetadata;
}

export interface ListLinkInterface {
    label: string;
    href: string;
    external: boolean;
    icon?: SvgComponent;
    style?: string;
}

export interface FooterTextInterface {
    text?: string;
}
