import { Actions } from "@datas/actions";

function bindActions() {
    const Buttons = document.querySelectorAll("button[data-action]");

    Buttons.forEach((el) => {
        const Button = el as HTMLButtonElement;
        const dataAction = Button.dataset.action;

        Button.addEventListener("click", () => {
            Actions[dataAction]();
        });
    });
}

document.addEventListener("astro:page-load", bindActions);
