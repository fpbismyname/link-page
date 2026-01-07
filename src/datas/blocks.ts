import BerandaIcon from "@icons/lucide/house.svg";
import MenuIcon from "@icons/lucide/clipboard-list.svg";

import type {
    BlockInterface,
    DockMenuInterface,
    FooterTextInterface,
    HeaderInterface,
    HeaderProfileInterface,
    ListLinkInterface
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
            type: "header",
            content: {
                title: "Daftar Menu",
                rightItem: [
                    {
                        icon: MenuIcon,
                        children: menu.map((item) => ({
                            id: item.id,
                            label: item.title
                        }))
                    }
                ]
            } as HeaderInterface
        }
    ]
};
