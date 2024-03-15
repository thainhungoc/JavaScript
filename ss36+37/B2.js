const botton = document.getElementById("btn");
botton.addEventListener("click", function () {
  if (botton.textContent == "ON") {
    botton.textContent = "OFF";
  } else {
    botton.textContent = "ON";
  }
});


