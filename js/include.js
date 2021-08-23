document.addEventListener("DOMContentLoaded", e => {
    let atributos = document.querySelectorAll("[data-include]");
    const includeHTML = async (el, url) => {
        try {
            let html = await fetch(url),
                main = await html.text();
            el.outerHTML = main;
            if (!html.ok) throw {
                status: res.status,
                statusText: res.statusText
            }
        } catch (error) {
            let message = error.statusText || "ocurrio un error";
            document.outerHTML = `Error ${error.status}: ${message}`
        }
    }
    atributos.forEach(el => includeHTML(el, el.getAttribute("data-include")))
});