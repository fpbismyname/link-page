import clsx from "clsx";
import Toastify from "toastify-js";

export const Toast = (type: "success" | "error" | "info", message: string, avatar?: string) => {
    Toastify({
        text: message,
        duration: 2000,
        gravity: "top",
        position: "center",
        style: {
            background: `var(--color-${type})`,
            color: "var(--color-primary-content)",
            borderRadius: "var(--radius-box)"
        }
    }).showToast();
};
