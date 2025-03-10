const offersList = document.getElementById('offers-list');
const offer1 = document.getElementById('offer1');
const offer2 = document.getElementById('offer2');
const offer3 = document.getElementById('offer3');
const offer4 = document.getElementById('offer4');
const offer5 = document.getElementById('offer5');
const offer6 = document.getElementById('offer6');

async function fetchOffers() {
    const response = await fetch("https://www.codepassport.dev/api/offers");
    const offers = await response.json();
    offersList.innerText = "";
    for (let x = 0 ; x < offers.length ; x++) {
        console.log('wesh')
        const newOffer = document.createElement("div");
        newOffer.classList.add("offers");
        newOffer.innerHTML = `<h2>${offers[x].titre}</h2><p>${offers[x].description}</p>`;
        offersList.appendChild(newOffer);
        
        
    }
    // offer1.innerHTML = `<h2>${offers[0].titre}</h2><p>${offers[0].description}</p>`;
    // offer2.innerHTML = `<h2>${offers[1].titre}</h2><p>${offers[1].description}</p>`;
    // offer3.innerHTML = `<h2>${offers[2].titre}</h2><p>${offers[2].description}</p>`;
    // offer4.innerHTML = `<h2>${offers[3].titre}</h2><p>${offers[3].description}</p>`;
    // offer5.innerHTML = `<h2>${offers[4].titre}</h2><p>${offers[4].description}</p>`;
    // offer6.innerHTML = `<h2>${offers[5].titre}</h2><p>${offers[5].description}</p>`;
}
fetchOffers();