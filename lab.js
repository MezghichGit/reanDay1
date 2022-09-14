//console.log("Bienvenue à REAN");

/*
function maMethode(duree)  // declaration de méthode
{
    console.log("React native pour le dev mobile " + duree);
}

maMethode(3);  // appel de la méthode*/

// ES 6 
/*
function swap(a,b)
{
    if(a!=b)
    {
        let temp = a;
        var v = a;

        a = b;
        b = temp;
    }

   // console.log(temp);
    console.log(v);
}

swap(10,20);*/

let nom = "Amine";
let formation = "REAN";

function info()
{
    return "Formation chez PLB";
}
let phrase = `Je suis ${nom}, la formation est : ${formation}, la formation se déroule chez ${info()}`;
console.log(phrase);