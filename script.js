// Custom JS file

// Get the elements from the document
var plan = document.getElementById("plan");
var color = document.getElementById("color");
var size = document.getElementById("size");
var currency = document.getElementById("currency");
var unit = document.getElementById("unit");
var price = document.getElementsByClassName("price")[0];
var watch = document.getElementsByClassName("watch")[0];

// Define the exchange rates and the unit conversions
var rates = {
    usd: 1,
    eur: 0.85,
    inr: 74.23,
    gbp: 0.73,
    cny: 6.47
};

var units = {
    metric: {
        heart: "bpm",
        blood: "mmHg",
        oxygen: "%",
        distance: "km",
        speed: "km/h"
    },
    imperial: {
        heart: "bpm",
        blood: "inHg",
        oxygen: "%",
        distance: "mi",
        speed: "mph"
    }
};

// Define the function to update the price based on the plan and the currency
function updatePrice() {
    // Get the values of the plan and the currency
    var planValue = plan.value;
    var currencyValue = currency.value;
    // Get the elements of the price
    var currencySymbol = price.getElementsByClassName("currency")[0];
    var amount = price.getElementsByClassName("amount")[0];
    var period = price.getElementsByClassName("period")[0];
    // Define the base price for the monthly plan in USD
    var basePrice = 199;
    // Calculate the price based on the plan and the currency
    var newPrice = basePrice * (planValue === "monthly" ? 1 : 10) * rates[currencyValue];
    // Round the price to two decimal places
    newPrice = newPrice.toFixed(2);
    // Update the price elements
    currencySymbol.textContent = currencyValue.toUpperCase();
    amount.textContent = newPrice;
    period.textContent = planValue === "monthly" ? "/month" : "/year";
}

// Define the function to update the watch image based on the color and the size
function updateWatch() {
    // Get the values of the color and the size
    var colorValue = color.value;
    // var sizeValue = size.value;
    // Define the base image name for the watch
    var baseImage = "";
    // Use a switch statement to assign the image name based on the color value
    switch (colorValue) {
        case "black":
            baseImage = "blk";
            break;
        case "orange":
            baseImage = "org";
            break;
        case "purple":
            baseImage = "pnk";
            break;
        default:
            baseImage = "watch";
    }
    baseImage += ".png";
    // Update the watch image source
    watch.src = "Images/"+baseImage;
}

// Define the function to update the unit labels based on the unit
function updateUnit() {
    // Get the value of the unit
    var unitValue = unit.value;
    // Get the elements of the unit labels
    var heartLabel = document.getElementById("heart-label");
    var bloodLabel = document.getElementById("blood-label");
    var oxygenLabel = document.getElementById("oxygen-label");
    var distanceLabel = document.getElementById("distance-label");
    var speedLabel = document.getElementById("speed-label");
    // Update the unit labels with the corresponding unit
    heartLabel.textContent = units[unitValue].heart;
    bloodLabel.textContent = units[unitValue].blood;
    oxygenLabel.textContent = units[unitValue].oxygen;
    distanceLabel.textContent = units[unitValue].distance;
    speedLabel.textContent = units[unitValue].speed;
}

// Add event listeners to the select elements to update the page dynamically
plan.addEventListener("change", updatePrice);
color.addEventListener("change", updateWatch);
size.addEventListener("change", updateWatch);
currency.addEventListener("change", updatePrice);
unit.addEventListener("change", updateUnit);

// Call the update functions initially to set the default values
updatePrice();
updateWatch();
updateUnit();