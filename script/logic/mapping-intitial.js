let arrchess = document.querySelectorAll(".files");
let main = document.querySelector(".main-container");
// console.log(arrchess);
let abc = ["a", "b", "c", "d", "e", "f", "g", "h"];

let acnt = 0;
for (let file of arrchess) {
  let cnt = 8;
  for (let sq of file.children) {
    sq.setAttribute("box", cnt + abc[acnt]);
    sq.setAttribute("id", cnt + "" + (acnt + 1));
    cnt--;
  }
  acnt++;
}
let prevz = null;
function handler(e) {
  let block = e.target.closest(".square");
  if (block?.children.length === 0) return;
  // if (e.type == "click") console.log(block.children[0].getAttribute("id"));
  if (e.type == "mouseover") {
    if (block === null) return;

    block.style.background = "#C0C0C0";
    if (prevz != null) prevz.style.background = "";
    prevz = block;
  }
}
// main.addEventListener("click", handler);
main.addEventListener("mouseover", handler);
// main.addEventListener("mouseout", handler);
