
const button = document.querySelector(".button");
const quoteText = document.querySelector(".text");



button.addEventListener("click", func)




function func()
	{
		document.body.style.backgroundColor = getRandomColor();
	}

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.addEventListener("DOMContentLoaded", getJoke);
button.addEventListener("click", getJoke);

async function getJoke() {
  const data = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const res = await data.json();
  quoteText.innerHTML = res.joke;
  console.log(data);
}









	



