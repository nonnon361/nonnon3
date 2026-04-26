const input = document.getElementById("noteInput");
const button = document.getElementById("addBtn");
const notes = document.getElementById("notes");
button.addEventListener("click", () => {
  console.log("clicked");
});
button.addEventListener("click", () => {
  if (input.value === "") return;

  const div = document.createElement("div");
  div.textContent = input.value;
  div.addEventListener("click", () => {
  div.remove();
});

  notes.appendChild(div);

  input.value = "";
});
const category = document.getElementById("category");