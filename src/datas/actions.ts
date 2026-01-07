import { navigate } from "astro:transitions/client";
import { site } from "./site";

const currentUrl = new URL(window.location.origin);
const durationCopiedLink = 1000;

export const Actions = {
    copyLink: async (currentElement: HTMLButtonElement) => {
        const shareData = {
            title: site.name,
            text: site.description,
            url: currentUrl.origin
        };

        const titleButton = currentElement.children.item(1);

        if (!navigator.share) {
            titleButton.innerHTML = "Link disalin";
            setTimeout(() => {
                titleButton.innerHTML = "Bagikan Link";
                console.log(titleButton);
            }, durationCopiedLink);
            navigator.clipboard.writeText(currentUrl.origin);
        } else {
            navigator.share(shareData);
        }
    },
    shareToWhatsapp: () => {
        const TextMessage = `${site.name}\n${currentUrl}`;
        const waText = encodeURIComponent(TextMessage);
        window.open(`https://wa.me?text=${waText}`, "_blank");
    }
};
