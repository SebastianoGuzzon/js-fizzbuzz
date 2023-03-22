
const container = document.querySelector(".container");
  console.log(container)
  
for (let i = 1; i <= 100; i++){
    console.log(i)

    const box = document.createElement("div")

    box.classList.add("box")

    box.append(i)
  
    container.append(box)
  }
  