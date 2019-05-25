const Unloading = () => {
    window.onbeforeunload = async function () {
        const response = await fetch("/close");
    };
    return this;
};
export default Unloading;