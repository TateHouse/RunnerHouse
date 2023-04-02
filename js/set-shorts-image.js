function selectShortsImage() {
    const images = ["images/shorts/boausa-elite-split-buffalo-plaid.png",
                    "images/shorts/boausa-elite-split-ducky.png",
                    "images/shorts/boausa-elite-split-grunge.png",
                    "images/shorts/boausa-elite-split-thin-blue-line-flag.png",
                    "images/shorts/boausa-elite-split-ugly-sweater.png",
                    "images/shorts/boausa-elite-split-usa.png"];

    const altDescriptions = ["A pair of 1 inch shorts from BOA with a buffalo plaid design",
                             "A pair of 1 inch shorts from BOA with a rubber ducky design",
                             "A pair of 1 inch shorts from BOA with a grunge design",
                             "A pair of 1 inch shorts from BOA with a thin blue line flag design",
                             "A pair of 1 inch shorts from BOA with an ugly christmas sweater design",
                             "A pair of 1 inch shorts from BOA with a USA flag design"];

    function getImageElement() {
        return document.querySelector("#shorts-img");
    }

    function generateRandomIndex() {
        return Math.floor(Math.random() * images.length);
    }

    function setImage(imageElement, imageIndex) {
        imageElement.src = images[imageIndex];
    }

    function setAltDescription(imageElement, altIndex) {
        imageElement.alt = altDescriptions[altIndex];
    }

    const imageElement = getImageElement();
    const index = generateRandomIndex();
    setImage(imageElement, index);
    setAltDescription(imageElement, index);

    return index;
}


function selectShortsURL(index) {
    const urls = ["https://www.boausa.com/collections/1-elite-shorts/products/mens-stretch-1-elite-printed-split-run-short-buffalo-plaid",
                  "https://www.boausa.com/collections/1-elite-shorts/products/mens-stretch-1-elite-printed-split-run-short-rubber-duckie",
                  "https://www.boausa.com/collections/1-elite-shorts/products/mens-1-elite-split-shorts-grunge",
                  "https://www.boausa.com/collections/1-elite-shorts/products/mens-1-inch-inseam-elite-split-running-shorts-thin-blue-line",
                  "https://www.boausa.com/collections/1-elite-shorts/products/mens-stretch-1-elite-printed-split-run-short-ugly-sweater",
                  "https://www.boausa.com/collections/1-elite-shorts/products/1000swp-sab"];

    function getLinkElement() {
        return document.querySelector("#shorts-link");
    }

    function setURL(linkElement, index) {
        linkElement.href = urls[index];
    }

    const linkElement = getLinkElement();
    setURL(linkElement, index);
}

const index = selectShortsImage();
selectShortsURL(index);