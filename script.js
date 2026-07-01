const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");

darkBtn.addEventListener("click", () => {document.body.style.backgroundColor = "black"; 
                                         document.body.style.color = "white";});

lightBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
});
