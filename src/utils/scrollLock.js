export const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${
        window.innerWidth - document.documentElement.clientWidth
    }px`;
};

export const enableScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
};
