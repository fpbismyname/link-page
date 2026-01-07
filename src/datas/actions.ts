import { navigate } from "astro:transitions/client";
import { site } from "./site";

let alertTimeout: number | null = null;

const currentUrl = new URL(window.location.origin);

export const Actions = {
    copyLink: () => {
        const TextCopyLink = "Link di salin";
        const DurationCloseModal = 2000;

        const alertEl = document.getElementById("alert-element");
        const alertTitle = alertEl.children.item(0);

        if (navigator.share) {
            navigator.share({
                title: `${site.name}\n`,
                text: `${site.description}\n`,
                url: currentUrl.origin
            });
        } else {
            alertTitle.innerHTML = TextCopyLink;
            alertEl.classList.remove("hidden");
            alertEl.classList.remove("opacity-0");

            // Clear timeout sebelumnya supaya nggak numpuk
            if (alertTimeout) {
                clearTimeout(alertTimeout);
            }

            // Set timeout baru
            alertTimeout = window.setTimeout(() => {
                alertEl.classList.add("opacity-0");

                // sembunyikan element setelah animasi
                setTimeout(() => {
                    alertTitle.textContent = "";
                    alertEl.classList.add("hidden");
                }, DurationCloseModal - 1000); // sesuai animasi
            }, DurationCloseModal);
            navigator.clipboard.writeText(currentUrl.origin);
        }
    },
    shareToWhatsapp: () => {
        const TextMessage = `${site.name}\n${currentUrl}`;
        const waText = encodeURIComponent(TextMessage);
        window.open(`https://wa.me?text=${waText}`, "_blank");
    }
};
