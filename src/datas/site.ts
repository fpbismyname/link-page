import { set } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import type { MenuInterface, SiteInterface } from "./site.type";
import Favicon from "@images/brand/favicon.png";
import Logo from "@images/brand/logo.jpg";
import BgCover from "@images/brand/bg-cover.jpg";
import { filterImport } from "../utils/filters";
import type { ListLinkInterface } from "./blocks.type";

const currentTimezone = "Asia/Jakarta";
const cafeName = "CatsCafe";

const now = toZonedTime(new Date(), currentTimezone);
const reservationTemplate = encodeURIComponent("Halo kak, saya mau reservasi meja ya");

export const site: SiteInterface = {
    timezone: currentTimezone,
    lang: "id",
    name: cafeName,
    description: "",
    slogan: "Coffee & Lounge",
    picture: {
        logo: Logo,
        favicon: Favicon,
        bgCover: BgCover
    },
    openingHours: {
        senin: {
            open: "09:00",
            close: "21:00"
        },
        selasa: {
            open: "09:00",
            close: "21:00"
        },
        rabu: {
            open: "09:00",
            close: "21:00"
        },
        kamis: {
            open: "09:00",
            close: "21:00"
        },
        jumat: {
            open: "09:00",
            close: "21:00"
        },
        sabtu: {
            open: "09:00",
            close: "21:00"
        },
        minggu: {
            open: "09:00",
            close: "21:00"
        }
    },
    shareOptions: [
        {
            label: "Bagikan Link",
            action: "copyLink",
            icon: {
                name: "lucide:share-2",
                type: "icon",
                style: "w-6"
            }
        },
        {
            label: "Bagikan ke Whatsapp",
            action: "shareToWhatsapp",
            icon: {
                name: "mdi:whatsapp",
                type: "icon",
                style: "w-6"
            }
        }
    ] as ListLinkInterface[],
    shareMessage: `${cafeName} - Cianjur\n`,
    links: [
        {
            label: "Kunjungi Lokasi Kami",
            href: "https://maps.app.goo.gl/YYEsydhmmdkhYs4K9",
            external: true,
            icon: {
                name: "mdi:google-maps",
                style: "w-6",
                type: "icon"
            },
            style: "justify-start btn-primary"
        },
        {
            label: "Reservasi Meja",
            href: `https://wa.me/6282221177319?text=${reservationTemplate}`,
            external: true,
            icon: {
                name: "lucide:calendar-days",
                style: "w-6",
                type: "icon"
            },
            style: "justify-start btn-soft btn-primary"
        },
        {
            label: "Pesan di GoFood",
            href: "https://gofood.link/a/MyQECUq",
            external: true,
            icon: {
                name: "simple-icons:gojek",
                style: "w-6",
                type: "icon"
            },
            style: "justify-start btn-soft btn-primary"
        },
        {
            label: "Instagram Kami",
            href: "https://www.instagram.com/__baeco?igsh=MW5vemc3MG5jdTduOQ==",
            external: true,
            icon: {
                name: "mdi:instagram",
                style: "w-6",
                type: "icon"
            },
            style: "justify-start btn-soft btn-primary"
        }
    ] as ListLinkInterface[],
    footer: `© ${now.getFullYear()} ${cafeName} - Cianjur`
};

const AllMenu = Object.entries(
    import.meta.glob("../assets/images/menu/*.jpg", {
        eager: true,
        import: "default"
    })
);

export const menu: MenuInterface[] = [
    {
        id: "coffee",
        type: "text",
        title: "Coffee",
        description: "Our signature housebrew coffee.",
        children: [
            {
                name: "Americano",
                price: "23K"
            },
            {
                name: "Espresso",
                price: "23K"
            },
            {
                name: "Cappucino",
                price: "23K"
            }
        ]
    },
    {
        id: "Another",
        type: "images",
        title: "Another Menu",
        description: "All meals, snacks, and beverage is here.",
        children: filterImport("another-", AllMenu)
    }
];
