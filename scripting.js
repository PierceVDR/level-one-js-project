pennies=0;
nickels=0;
dimes=0;
quarters=0;

pup = document.getElementById("pup");
p = document.getElementById("p");
pdown = document.getElementById("pdown");

nup = document.getElementById("nup");
n = document.getElementById("n");
ndown = document.getElementById("ndown");

dup = document.getElementById("dup");
d = document.getElementById("d");
ddown = document.getElementById("ddown");

qup = document.getElementById("qup");
q = document.getElementById("q");
qdown = document.getElementById("qdown");



pup.addEventListener("click", pupf);
pdown.addEventListener("click", pdownf);

nup.addEventListener("click", nupf);
ndown.addEventListener("click", ndownf);

dup.addEventListener("click", dupf);
ddown.addEventListener("click", ddownf);

qup.addEventListener("click", qupf);
qdown.addEventListener("click", qdownf);



function updateCoins() {
    p.innerHTML=pennies;
    n.innerHTML=nickels;
    d.innerHTML=dimes;
    q.innerHTML=quarters;
}


function pupf() {
    pennies++;
    updateCoins();
}
function pdownf() {
    pennies--;
    updateCoins();
}

function nupf() {
    nickels++;
    updateCoins();
}
function ndownf() {
    nickels--;
    updateCoins();
}

function dupf() {
    dimes++;
    updateCoins();
}
function ddownf() {
    dimes--;
    updateCoins();
}

function qupf() {
    quarters++;
    updateCoins();
}
function qdownf() {
    quarters--;
    updateCoins();
}