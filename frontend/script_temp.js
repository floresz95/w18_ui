function loadEvent () {
    let rootElement = document.getElementById("root");

    let beerData = ``;

    const beers = {
        id: "beers",
        logo: "Best Beers",
        button: "details",
        cards: [
            {
                title: "Mango Bay",
                sub: "Mad Scientist Beer",
                text: "Pale Ale - American"
            },
            {
                title: "Távoli Galaxis",
                sub: "Rothbeer Brewery",
                text: "IPA - American"
            },
            {
                title: "Flying Rabbit AIPA",
                sub: "MONYO Brewing Co.",
                text: "IPA - American"
            },
            {
                title: "Liquid Cocaine",
                sub: "Mad Scientist Beer",
                text: "IPA - Imperial"
            },
            {
                title: "Organic Chocolate Stout",
                sub: "Samuel Smith Old Brewery",
                text: "Stout - English"
            },
            {
                title: "Bracia",
                sub: "Thornbridge Brewery",
                text: "Strong Ale - English"
            },
            {
                title: "Oatmeal Stout",
                sub: "Samuel Smith Old Brewery",
                text: "Stout - Oatmeal"
            },
            {
                title: "Black Tokyo Horizon",
                sub: "BrewDog",
                text: "Stout - American Imperial"
            },
            {
                title: "Vintage Ale",
                sub: "Fuller's",
                text: "Old Ale"
            },
            {
                title: "All the Leaves are Brown",
                sub: "Tempest Brewing Company",
                text: "Brown Ale - American"
            },
        ]
    }

    for (const beer of beers) {
        beerData += `
        <div class="beerCard">
            <div class="beerHeader">
                <div class="title">${beers.cards.title}</div>               
            </div>
                <div class="sub">${beers.cards.sub}</div>
                <div class="text">${beers.cards.text}</div>
                <button></button>
        </div>
                `
    }

    rootElement.insertAdjacentHTML("beforeend", beerData)

}
window.addEventListener("load", loadEvent)