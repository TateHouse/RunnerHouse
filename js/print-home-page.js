function getPrintButton() {
    return document.querySelector("#button-print");
}

function addClickEventListenerToButton(button) {
    function print() {
        window.print();
    }

    button.addEventListener("click", print);
}

const button = getPrintButton();
addClickEventListenerToButton(button);