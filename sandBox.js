const form = document.getElementById("myForm")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements("name").value
  console.log(name)
})