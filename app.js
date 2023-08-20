function AnimeFruit(x, y) {
    let NewFruit = document.createElement("div");
    NewFruit.classList.add("fruit");
    const fruitItem = ["🍌", "🍎", "🍍", "🍐", "🍑", "🍓"];


    NewFruit.style.animationDuration = Math.random() * 1 + 3 + "s";
    NewFruit.innerHTML = fruitItem[Math.floor(Math.random() * fruitItem.length)];
    NewFruit.style.left = x + "px";
    NewFruit.style.top = y + "px";

    


    setTimeout(() => {
        document.body.appendChild(NewFruit)
    }, 50)
    setTimeout(() => {
        NewFruit.remove();
    }, 300)
    // NewFruit.style.top = -40 + "px";

}
document.addEventListener("mousemove", (e) => {
    AnimeFruit(e.clientX, e.clientY)

})


// setInterval(AnimeFruit, 100);

