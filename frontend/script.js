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

const header = () => {
    return `
        <header id="header">
        <span id="caption">Best Beers</span>
        <span id="headerIcon" class="material-symbols-outlined">menu</span>
        </header>
    `
}

const beerCardDiv = `
    <div id="beerCards"></div>
`

const beerCard = (num, title, sub, text) => {
    return `
        <div class="card">
            <p class="number">${num}</p>
            <p class="title">${title}</p>
            <p class="sub">${sub}</p>
            <p class="text">${text}</p>
            <button>
                <span class="details">details</span><span class="material-symbols-sharp" id="arrowIcon">arrow_forward</span>
            </button>
        </div>
    `
}

const createBeerCard = (obj) => {
    return obj.cards.map((x, i) => beerCard(i+1, x.title, x.sub, x.text)).join(" ")
}

const loadEvent = () => {
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", header())
    rootElement.insertAdjacentHTML("beforeend", beerCardDiv)

    const beerCardDivElement = document.getElementById("beerCards")
    beerCardDivElement.insertAdjacentHTML("beforeend", createBeerCard(beers))
}

window.addEventListener("load", loadEvent)