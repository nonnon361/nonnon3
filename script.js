const input = document.getElementById("noteInput");
const button = document.getElementById("addBtn");
const notes = document.getElementById("notes");
button.addEventListener("click", () => {
  console.log("clicked");
});
button.addEventListener("click", () => {
  if (input.value === "") return;

  const div = document.createElement("div");
  div.textContent = input.value + " (" + category.value + ")";
  div.addEventListener("click", () => {
  div.remove();
});

  notes.appendChild(div);

  input.value = "";
});
const category = document.getElementById("category");
const color = document.getElementById("color");
div.style.background = color.value;
localStorage.setItem("notes", notes.innerHTML);
window.onload = () => {
  notes.innerHTML = localStorage.getItem("notes") || "";
};
const search = document.getElementById("search");
search.addEventListener("input", () => {
  document.querySelectorAll("#notes div").forEach(note => {
    if (note.textContent.includes(search.value)) {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  });
});