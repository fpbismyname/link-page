import type { ListLinkInterface } from "./blocks.type";

type Days = "senin" | "selasa" | "rabu" | "kamis" | "jumat" | "sabtu" | "minggu";

export type itemType = Array<
    Partial<Record<"id" | "label" | "href" | "icon" | "external" | "images" | "children", any>>
>;
export type shareItemType = Array<Partial<Record<"id" | "label" | "icon" | "action" | "images", any>>>;

export interface SiteInterface {
    lang: string;
    name: string;
    description: string;
    slogan: string;
    openingHours: Record<Days, { open?: Date; close?: Date }>;
    picture: {
        favicon: string;
        logo: ImageMetadata;
        bgCover?: ImageMetadata;
    };
    shareOptions: shareItemType;
    links: ListLinkInterface[];
    footer: string;
}

export interface MenuInterface {
    id?: string;
    title: string;
    description?: string;
    pictures: ImageMetadata | ImageMetadata[];
}
