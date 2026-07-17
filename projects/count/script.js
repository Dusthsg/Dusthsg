const add = document.getElementById("add");
const sub = document.getElementById("sub");
const count = document.getElementById("number");
const msg = document.getElementById("msg");

let val = 0;

add.addEventListener("click", () => {
  msg.style.display = "none";
  val++;
  count.textContent = val;
  sub.disabled = false;
});

sub.addEventListener("click", () => {
  val--;
  count.textContent = val;

  if (val < 0) {
    msg.textContent = "Valores abaixo de zero não são permitidos!";
    msg.style.display = "block";
    val = 0;
    count.textContent = val;
  }
});
