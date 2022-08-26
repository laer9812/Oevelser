const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const mereinfo = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

async function hentData() {
  const response = await fetch(endpoint, mereinfo);
  const person = await response.json();
  console.log(person);
  vis(person);
}

function vis(person) {
  console.log(person);
  const holder = document.querySelector("#holder");
  const skabelon = document.querySelector("template").content;
  person.forEach((person) => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector("img").src = "faces/" + person.billede;
    klon.querySelector(".fornavn").textContent = person.fornavn;
    klon.querySelector(".efternavn").textContent = person.efternavn;
    // klon.querySelector(".fødselsdag").textContent = person.fødseldag;
    holder.appendChild(klon);
  });
}
hentData();
