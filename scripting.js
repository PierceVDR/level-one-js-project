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

total = document.getElementById("total");


pup.addEventListener("click", pupf);
pdown.addEventListener("click", pdownf);

nup.addEventListener("click", nupf);
ndown.addEventListener("click", ndownf);

dup.addEventListener("click", dupf);
ddown.addEventListener("click", ddownf);

qup.addEventListener("click", qupf);
qdown.addEventListener("click", qdownf);



function updateCoins() {
    pennies = Math.max(0,pennies);
    nickels = Math.max(0,nickels);
    dimes = Math.max(0,dimes);
    quarters = Math.max(0,quarters);

    p.innerHTML=pennies;
    n.innerHTML=nickels;
    d.innerHTML=dimes;
    q.innerHTML=quarters;

    totalCents = (pennies + nickels*5 + dimes*10 + quarters*25);
    dollars = Math.floor(totalCents/100);
    cents = totalCents - dollars*100;

    if (cents<10) {
        cents = "0"+cents;
    }

    total.innerHTML = "$"+dollars+"."+cents;
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