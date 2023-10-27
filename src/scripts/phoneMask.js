function phoneMask() {
    const element = document.getElementById('tel');
    const maskOptions = {
        mask: '+{375}(00)000-00-00'
    };
    const mask = IMask(element, maskOptions);
}

export default phoneMask;