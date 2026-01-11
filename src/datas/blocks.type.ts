import type { SvgComponent } from "astro/types";
import type { itemType, MenuInterface } from "./site.type";

export interface DockMenuInterface {
    label: string;
    icon: {
        name: string | ImageMetadata;
        style?: string;
        type: iconType;
    };
    href: string;
}

type BlockType = "header-profile" | "header" | "list-link" | "list-menu" | "footer-text" | "fab";

export interface BlockInterface extends Record<string, any> {
    [key: string]: BlockItem[];
}

type iconType = "image" | "icon";

export interface BlockItem {
    type: BlockType;
    content:
        | HeaderProfileInterface
        | ListLinkInterface[]
        | FooterTextInterface
        | HeaderInterface
        | ListMenuInterface[]
        | FabInterface;
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
    icon?: {
        name: string | ImageMetadata;
        style: string;
        type: iconType;
    };
    action?: string;
    style?: string;
}

export interface ListMenuInterface extends MenuInterface {}

export interface FooterTextInterface {
    text?: string;
}

export interface FabInterface {
    icon: {
        name: string | ImageMetadata;
        style?: string;
        type: iconType;
    };
    children: {
        title: string;
        children: Array<Partial<Record<"icon" | "label" | "action" | "href" | "type", any>>>;
    };
}
