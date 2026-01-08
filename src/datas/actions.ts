import { navigate } from "astro:transitions/client";
import { site } from "./site";
import { Toast } from "../utils/toastify";

const currentUrl = new URL(window.location.toString());
const durationCopiedLink = 1000;

export const Actions = {
    copyLink: async (currentElement: HTMLButtonElement) => {
        const shareData = {
            title: site.name,
            text: site.shareMessage,
            url: currentUrl.origin
        };

        const titleButton = currentElement.children.item(1);

        if (!navigator.share) {
            titleButton.innerHTML = "Link disalin";
            setTimeout(() => {
                titleButton.innerHTML = "Bagikan Link";
            }, durationCopiedLink);
            navigator.clipboard.writeText(currentUrl.origin);
        } else {
            navigator.share(shareData);
        }
    },
    copyLinkMenu: async (currentElement: HTMLButtonElement, href) => {
        const Link = `${currentUrl.origin + currentUrl.pathname}${href ? `#${href}` : null}`;

        const shareData = {
            title: site.name,
            text: site.shareMessage,
            url: Link
        };

        if (!navigator.share) {
            currentElement.disabled = true;
            Toast("success", "Link menu disalin.");
            setTimeout(() => {
                currentElement.disabled = false;
            }, durationCopiedLink);
            navigator.clipboard.writeText(Link);
        } else {
            navigator.share(shareData);
        }
    },
    shareToWhatsapp: () => {
        const TextMessage = `${site.shareMessage}${currentUrl}`;
        const waText = encodeURIComponent(TextMessage);
        window.open(`https://wa.me?text=${waText}`, "_blank");
    }
};
