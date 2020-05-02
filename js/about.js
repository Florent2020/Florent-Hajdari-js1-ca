setTimeout(() => {
    const capitalElement = document.querySelector(".about");
    const smallElement = document.querySelector(".about");


    capitalElement.innerHTML = capitalElement.innerHTML.replace("The", "Banana");

    smallElement.innerHTML = smallElement.innerHTML.replace(/the/g, "banana");
}, 3000);