import type { ListLinkInterface } from "./blocks.type";

type Days = "senin" | "selasa" | "rabu" | "kamis" | "jumat" | "sabtu" | "minggu";

export type itemType = Array<
    Partial<Record<"id" | "label" | "href" | "icon" | "external" | "images" | "children", any>>
>;
export type shareItemType = Array<Partial<Record<"id" | "label" | "icon" | "action" | "images", any>>>;

export interface SiteInterface {
    timezone: string;
    lang: string;
    name: string;
    description: string;
    slogan: string;
    openingHours: Record<Days, any>;
    picture: {
        favicon: string;
        logo: ImageMetadata;
        bgCover?: ImageMetadata;
    };
    shareOptions: shareItemType;
    shareMessage: string;
    links: ListLinkInterface[];
    footer: string;
}

export interface MenuInterface {
    id?: string;
    title: string;
    type: "images" | "text";
    description?: string;
    children: ImageMetadata | ImageMetadata[] | Array<Partial<Record<"name" | "description" | "price", any>>>;
}
