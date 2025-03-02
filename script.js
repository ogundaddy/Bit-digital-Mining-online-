// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'yellow';
    }
});

// Live Crypto Price Tracker
async function fetchCryptoPrices() {
    try {
        let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        let data = await response.json();
        document.getElementById('btc-price').textContent = `$${data.bitcoin.usd}`;
        document.getElementById('eth-price').textContent = `$${data.ethereum.usd}`;
    } catch (error) {
        console.error("Error fetching crypto prices:", error);
    }
}

// Fetch prices every 10 seconds
setInterval(fetchCryptoPrices, 10000);
fetchCryptoPrices();

// Testimonial Pop-ups
const testimonials = [
    "John just earned $500 from Bitcoin Mining!",
    "Sarah withdrew $2000 in Ethereum rewards!",
    "Alex made a 15% profit on his investment!",
    "Michael just mined 0.02 BTC!"
];

function showTestimonial() {
    let randomIndex = Math.floor(Math.random() * testimonials.length);
    document.getElementById('testimonial-text').textContent = testimonials[randomIndex];
    document.getElementById('testimonials').style.display = "block";

    setTimeout(() => {
        document.getElementById('testimonials').style.display = "none";
    }, 4000);
}

// Show a new testimonial every 10 seconds
setInterval(showTestimonial, 10000);
