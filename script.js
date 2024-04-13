let text = "Your fortune for every day..."
let i = 0;
let speed = 90;

function type() {
    if (i < text.length) {
        document.querySelector("#header").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = ["Do not be afraid of competition",
"An exciting opportunity lies ahead of you", 
"You will always be surrounded by true friends", 
"Sell your ideas-they have exceptional merit",
"You should be able to undertake and complete anything",
"Your ability to juggle many tasks will take you far",
"Respect yourself and others will respect you",
"Sing everyday and chase the mean blues away",
"Once you make a decision the universe conspires to make it happen",
"Appreciate. Appreciate. Appreciate"];


button.addEventListener("click", function() {
    let randomQoute = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQoute;
})


