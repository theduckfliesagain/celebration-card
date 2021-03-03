const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const greeting = e.target.greeting.value;
    const event = e.target.event.value;
    const message = e.target.message.value;
    console.log(message);

    // const card = document.createElement("div");
    // card.setAttribute("id", "card");
    const card = document.getElementById("card");
    // const heading = document.createElement("p");
    const greetingString =  document.createTextNode(`${greeting} ${event}!`); 
    card.appendChild(greetingString);

    form.remove()
    
    // debugger;

    // celebrationCard.appendChild(heading);

})