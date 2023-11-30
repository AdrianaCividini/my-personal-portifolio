let heading = document.querySelector("#head");
heading.innerHTML = "Adriana Cividini";

new Typewriter("#head", {
  strings: "Adriana Cividini",
  autoStart: true,
  cursor: "✨",
  delay: 100,
});
