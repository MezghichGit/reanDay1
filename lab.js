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

/*
let nom = "Amine";
let formation = "REAN";

function info()
{
    return "Formation chez PLB";
}
let phrase = `Je suis ${nom}, la formation est : ${formation}, la formation se déroule chez ${info()}`;
console.log(phrase);*/

/*let som = function (x = 0, y = 0) {   // fonction anonyme
    return x + y;
}

//console.log(som(10,20));
console.log(som());*/

// foreach de ES6
/*
let languages = ["HTML", "CSS","JS"];
for(let [index, val] of languages.entries())
{
    console.log(`Indice = ${index} : Valeur = ${val}` )
}*/

let stagiaire = {

    prixFormation : 2000,
    
     info(){
        return "J'apprends REACN";
    },
    
    getLieuPrix(){
       console.log(`${this.info()} PLB ${this.prixFormation}`);
    }
};

stagiaire.getLieuPrix();