import { Actions } from "@datas/actions";

function bindActions() {
    const Buttons = document.querySelectorAll("button[data-action]");

    Buttons.forEach((el) => {
        const Button = el as HTMLButtonElement;
        const keyAction = Button.dataset.action;
        const params = JSON.parse(Button.dataset.params);

        if (keyAction) {
            Button.addEventListener("click", () => {
                const action = Actions[keyAction];
                if (typeof action != "function") {
                    console.warn(`Action ${keyAction} not found.`);
                    return;
                }
                if (params) {
                    action(Button, params);
                } else {
                    action(Button);
                }
            });
        }
    });
}

document.addEventListener("astro:page-load", bindActions);
