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
        icon: {
            name: "lucide:house",
            type: "icon",
            style: ""
        },
        href: "/"
    },
    {
        label: "Menu",
        icon: {
            name: "lucide:clipboard-list",
            type: "icon",
            style: ""
        },
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
            type: "fab",
            content: {
                icon: {
                    name: "lucide:menu",
                    type: "icon",
                    style: "w-6"
                },
                children: {
                    title: "Kategori menu",
                    children: menu.map((item) => ({
                        label: item.title,
                        href: `#${item.id}`,
                        action: "scrollTo",
                        type: "anchor"
                    }))
                }
            } as FabInterface
        }
    ]
};
