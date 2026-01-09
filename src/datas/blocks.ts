import BerandaIcon from "@icons/lucide/house.svg";
import MenuCategory from "@icons/lucide/menu.svg";
import MenuIcon from "@icons/lucide/clipboard-list.svg";
import ArrowUpFromLine from "@icons/lucide/arrow-up-from-line.svg";

import type {
    BlockInterface,
    DockMenuInterface,
    FabInterface,
    FooterTextInterface,
    HeaderInterface,
    HeaderProfileInterface,
    ListLinkInterface,
    ListMenuInterface
} from "./blocks.type";
import { menu, site } from "./site";

export const DockMenu: DockMenuInterface[] = [
    {
        label: "Beranda",
        icon: BerandaIcon,
        href: "/"
    },
    {
        label: "Menu",
        icon: MenuIcon,
        href: "/menu"
    }
];

export const Blocks: BlockInterface = {
    index: [
        {
            type: "header-profile",
            content: {
                title: site.name,
                subtitle: site.slogan,
                bgCover: site.picture.bgCover,
                profilePicture: site.picture.logo
            } as HeaderProfileInterface
        },
        {
            type: "list-link",
            content: site.links as ListLinkInterface[]
        },
        {
            type: "footer-text",
            content: {
                text: site.footer
            } as FooterTextInterface
        }
    ],
    menu: [
        {
            type: "list-menu",
            content: menu as ListMenuInterface[]
        },
        {
            type: "footer-text",
            content: {
                text: "Selamat menikmati hidangan kami."
            } as FooterTextInterface
        },
        {
            type: "fab",
            content: {
                icon: MenuCategory,
                children: {
                    title: "Kategori menu",
                    children: menu.map((item) => ({
                        label: item.title,
                        href: `#${item.id}`
                    }))
                }
            } as FabInterface
        }
    ]
};
