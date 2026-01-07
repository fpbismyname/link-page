import { set } from "date-fns";
import type { MenuInterface, SiteInterface } from "./site.type";
import ShareIcon from "@icons/lucide/share2.svg";
import WhatsappIcon from "@icons/simple-icon/whatsapp.svg";
import Favicon from "@images/brand/favicon.ico";
import Logo from "@images/brand/logo.png";
import BgCover from "@images/brand/bg-cover.webp";
import MapsIcon from "@icons/simple-icon/maps.svg";
import ReservasiIcon from "@icons/lucide/calendar-days.svg";
import GrabIcon from "@icons/simple-icon/grab.svg";
import InstagramIcon from "@icons/simple-icon/instagram.svg";
import { filterImportGlobImage } from "../utils/filter-import-glob-image";

const now = new Date();

export const site: SiteInterface = {
    lang: "id",
    name: "Coreeatery",
    description: "",
    slogan: "Savor the taste",
    picture: {
        logo: Logo,
        favicon: Favicon,
        bgCover: BgCover
    },
    openingHours: {
        senin: {
            open: set(now, { hours: 8, minutes: 0, seconds: 0 }),
            close: set(now, { hours: 22, minutes: 0, seconds: 0 })
        },
        selasa: {
            open: set(now, { hours: 8, minutes: 0, seconds: 0 }),
            close: set(now, { hours: 22, minutes: 0, seconds: 0 })
        },
        rabu: {
            open: set(now, { hours: 8, minutes: 0, seconds: 0 }),
            close: set(now, { hours: 22, minutes: 0, seconds: 0 })
        },
        kamis: {
            open: set(now, { hours: 8, minutes: 0, seconds: 0 }),
            close: set(now, { hours: 22, minutes: 0, seconds: 0 })
        },
        jumat: {
            open: set(now, { hours: 8, minutes: 0, seconds: 0 }),
            close: set(now, { hours: 22, minutes: 0, seconds: 0 })
        },
        sabtu: {
            open: set(now, { hours: 8, minutes: 0, seconds: 0 }),
            close: set(now, { hours: 22, minutes: 0, seconds: 0 })
        },
        minggu: {
            open: set(now, { hours: 8, minutes: 0, seconds: 0 }),
            close: set(now, { hours: 22, minutes: 0, seconds: 0 })
        }
    },
    shareOptions: [
        {
            label: "Bagikan Link",
            action: "copyLink",
            icon: ShareIcon
        },
        {
            label: "Bagikan ke Whatsapp",
            action: "shareToWhatsapp",
            icon: WhatsappIcon
        }
    ],
    links: [
        {
            label: "Kunjungi Lokasi Kami",
            href: "",
            external: true,
            icon: MapsIcon,
            style: "justify-start btn-primary"
        },
        {
            label: "Reservasi Meja",
            href: "",
            external: true,
            icon: ReservasiIcon,
            style: "justify-start btn-soft btn-primary"
        },
        {
            label: "Pesan di GrabFood",
            href: "",
            external: true,
            icon: GrabIcon,
            style: "justify-start btn-soft btn-primary"
        },
        {
            label: "Instagram Kami",
            href: "",
            external: true,
            icon: InstagramIcon,
            style: "justify-start btn-soft btn-primary"
        }
    ],
    footer: `© ${new Date().getFullYear()} Coreeatery by Cafedeh`
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
        pictures: filterImportGlobImage("nusantara", AllMenu)
    },
    {
        id: "habanero-signature",
        title: "Habanero Signature",
        pictures: filterImportGlobImage("habanero-signature", AllMenu)
    },
    {
        id: "snacks",
        title: "Snacks",
        pictures: filterImportGlobImage("snacks", AllMenu)
    },
    {
        id: "dessert",
        title: "Dessert",
        pictures: filterImportGlobImage("dessert", AllMenu)
    },
    {
        id: "signature-ice-cream",
        title: "Signature Ice cream",
        description: "Less sugar",
        pictures: filterImportGlobImage("signature-ice-cream", AllMenu)
    },
    {
        id: "caffeine-addict",
        title: "Caffeine Addict (Hot/Cold)",
        pictures: filterImportGlobImage("caffeine-addict", AllMenu)
    },
    {
        id: "malika-coffee-latte",
        title: "Malika Coffee Latte",
        pictures: filterImportGlobImage("malike-coffee-latte", AllMenu)
    },
    {
        id: "dpollen",
        title: "D'Pollen",
        pictures: filterImportGlobImage("dpollen", AllMenu)
    },
    {
        id: "mix-it-up",
        title: "Mix It Up",
        pictures: filterImportGlobImage("mix-it-up", AllMenu)
    },
    {
        id: "summer-breeze",
        title: "Summer Breeze",
        pictures: filterImportGlobImage("summer-breeze", AllMenu)
    },
    {
        id: "the-last-supper",
        title: "The Last Supper",
        pictures: filterImportGlobImage("the-last-supper", AllMenu)
    },
    {
        id: "shizuoka-japanese-matcha",
        title: "Shizuoka Japanese Matcha",
        pictures: filterImportGlobImage("shizuoka-japanese-matcha", AllMenu)
    },
    {
        id: "paket-tahun-baru",
        title: "Paket Tahun Baru",
        pictures: filterImportGlobImage("paket-tahun-baru", AllMenu)
    }
];
