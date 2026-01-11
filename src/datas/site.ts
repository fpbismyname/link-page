import { set } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import type { MenuInterface, SiteInterface } from "./site.type";
import Favicon from "@images/brand/favicon.ico";
import Logo from "@images/brand/logo.jpg";
import BgCover from "@images/brand/bg-cover.jpg";
import { filterImportGlobImage } from "../utils/filter-import-glob-image";
import type { ListLinkInterface } from "./blocks.type";

const currentTimezone = "Asia/Jakarta";
const now = toZonedTime(new Date(), currentTimezone);
const reservationTemplate = encodeURIComponent("Halo kak, saya mau reservasi meja ya");

export const site: SiteInterface = {
    timezone: currentTimezone,
    lang: "id",
    name: "Baeco Cafe",
    description: "",
    slogan: "Time together",
    picture: {
        logo: Logo,
        favicon: Favicon,
        bgCover: BgCover
    },
    openingHours: {
        senin: {
            open: "11:00",
            close: "22:00"
        },
        selasa: {
            open: "11:00",
            close: "22:00"
        },
        rabu: {
            open: "11:00",
            close: "22:00"
        },
        kamis: {
            open: "11:00",
            close: "22:00"
        },
        jumat: {
            open: "11:00",
            close: "22:00"
        },
        sabtu: {
            open: "11:00",
            close: "22:00"
        },
        minggu: {
            open: "11:00",
            close: "22:00"
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
    shareMessage: `Baeco Cafe - Cianjur\n`,
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
    footer: `© ${now.getFullYear()} Baeco cafe - Cianjur`
};

const AllMenu: [string, ImageMetadata][] = Object.entries(
    import.meta.glob("/src/assets/images/menu/*.jpg", {
        eager: true,
        import: "default"
    })
);

export const menu: MenuInterface[] = [
    {
        id: "nusantara",
        title: "Nusantara",
        type: "images",
        children: filterImportGlobImage("nusantara", AllMenu)
    },
    {
        id: "habanero-signature",
        title: "Habanero Signature",
        type: "images",
        children: filterImportGlobImage("habanero-signature", AllMenu)
    },
    {
        id: "snacks",
        title: "Snacks",
        type: "images",
        children: filterImportGlobImage("snacks", AllMenu)
    },
    {
        id: "dessert",
        title: "Dessert",
        type: "images",
        children: filterImportGlobImage("dessert", AllMenu)
    },
    {
        id: "signature-ice-cream",
        title: "Signature Ice cream",
        type: "images",
        children: filterImportGlobImage("signature-ice-cream", AllMenu)
    },
    {
        id: "caffeine-addict",
        title: "Caffeine Addict",
        type: "images",
        children: filterImportGlobImage("caffeine-addict", AllMenu)
    },
    {
        id: "malika-coffee-latte",
        title: "Malika Coffee Latte",
        type: "images",
        children: filterImportGlobImage("malika-coffee-latte", AllMenu)
    },
    {
        id: "dpollen",
        title: "D'Pollen",
        type: "images",
        children: filterImportGlobImage("dpollen", AllMenu)
    },
    {
        id: "mix-it-up",
        title: "Mix It Up",
        type: "images",
        children: filterImportGlobImage("mix-it-up", AllMenu)
    },
    {
        id: "summer-breeze",
        title: "Summer Breeze",
        type: "images",
        children: filterImportGlobImage("summer-breeze", AllMenu)
    },
    {
        id: "the-last-supper",
        title: "The Last Supper",
        type: "images",
        children: filterImportGlobImage("the-last-supper", AllMenu)
    },
    {
        id: "shizuoka-japanese-matcha",
        title: "Shizuoka Japanese Matcha",
        type: "images",
        children: filterImportGlobImage("shizuoka-japanese-matcha", AllMenu)
    },
    {
        id: "paket-tahun-baru",
        title: "Paket Tahun Baru",
        type: "images",
        children: filterImportGlobImage("paket-tahun-baru", AllMenu)
    }
];
