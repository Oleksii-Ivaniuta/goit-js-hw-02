const country = null;
function getShippingCost(country) {
    let loCountry = country.toLowerCase();
    let china = 100;
    let chile = 250;
    let australia = 170;
    let jamaica = 120;
    switch (loCountry) {
        case `china`:
            return (`Shipping to ${country} will cost ${china} credits`);
            break;
        case `chile` :
            return (`Shipping to ${country} will cost ${chile} credits`);
            break;
        case `australia` :
            return (`Shipping to ${country} will cost ${australia} credits`);
            break;
        case `jamaica` :
            return (`Shipping to ${country} will cost ${jamaica} credits`);
            break;
        default:
            return (`Sorry, there is no delivery to your country`)
    }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"