document.querySelector("button").addEventListener("click", tjekTal);
let forsoeg = 0;
const ranNum = Math.floor(Math.random() * 11);
console.log(ranNum);

function tjekTal() {
  forsoeg++;
  const brugerTal = document.querySelector("#tal").value;
  if (ranNum > brugerTal) {
    alert("Øv! " + brugerTal + "var for lavt. Prøv igen :)");
    console.log(ranNum, brugerTal);
  } else if (ranNum < brugerTal) {
    alert("Øv! " + brugerTal + " var for højt. Prøv igen :)");
    console.log(ranNum, brugerTal);
  } else {
    alert(brugerTal + " er rigtigt!" + " Du brugte " + forsoeg + "forsøg. Prøv igen :)");
    console.log("Du gættede rigtigt!");
    location.reload();
  }
}
