import type { TransitionAnimationPair, TransitionDirectionalAnimations } from "astro";

const anim: TransitionAnimationPair = {
    old: {
        name: "fade-in",
        duration: 50,
        easing: "ease-out",
        direction: "reverse"
    },
    new: {
        name: "fade-in",
        duration: 300,
        easing: "ease-in"
    }
};

export const FadeIn: TransitionDirectionalAnimations = {
    forwards: anim,
    backwards: anim
};
