var grille = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
[0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
[0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
[0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
[0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
[0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
[0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
[0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
[2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
[0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
[0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
[0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
[0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
[0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
[0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
[0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
[0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
[0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function getRandomIntInclusive(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1))+  min;
}

var pacman = new PacMan();

var fantomeBleu =
{
    x:10,
    y:11,
    directionFantomes:0,
    classe: "fantomebleu"
}
var fantomeOrange =
{
    x:10,
    y:11,
    directionFantomes:0,
    classe: "fantomeorange"
}
var fantomeVert =
{
    x:10,
    y:11,
    directionFantomes:0,
    classe: "fantomevert"
}
var fantomeRouge =
{
    x:10,
    y:10,
    directionFantomes:0,
    classe: "fantomerouge",
    nouvelleDirection: true
}

var compteBonbons = 0;

var compteScore;

var temps 

var maGrilleHTML = document.getElementById("grille");

// COMPTE DES BONBONS
for(let i=0 ; i < grille.length ; i++)
{
    for(let j=0 ; j < grille[i].length ; j++)
    {
        if(grille[i][j] == 2)
        {
            compteBonbons ++
        }
    }
}

// COMPTE DU SCORE
for(let i=0 ; i < grille.length ; i++)
{
    for(let j=0 ; j < grille[i].length ; j++)
    {
        if(grille[i][j] == 2)
        {
            compteScore = compteScore +10
        }
    }
}

//CRÉATION DE LA GRILLE


    function initGrille()
    {
        maGrilleHTML.innerHTML = "";
        maGrilleHTML.style.gridTemplateColumns = ("repeat(19, 40px)");
        maGrilleHTML.style.gridTemplateRows = ("repeat(22, 40px)");

        for(let i=0 ; i < grille.length ; i++)
        {
            for(let j=0 ; j < grille[i].length ; j++)
            {
                let monImg = document.createElement("div");
                monImg.style.gridRow = i+1;
                monImg.style.gridColumn = j+1;
                if(grille[i][j] == 0)
                {
                    monImg.classList.add("mur");
                }
                else if(grille[i][j] == 1)
                {
                    monImg.classList.add("sol");
                }
                else
                {
                    monImg.classList.add("bonbon");
                }
            maGrilleHTML.appendChild(monImg);
            }
        }
    document.getElementById("bonbons").innerHTML = "Il reste " + compteBonbons + " bonbons";
    document.getElementById("score").innerHTML = "Score: " + compteScore;
    }


    // DÉPLACEMENTS DE PACMAN

function deplacementPacman()
{
    if(pacman.direction == 0)
    {
        pacman.x ++
        if(pacman.x >= grille[0].length+1)
        {
            pacman.x = 1
        }
    }
    else if(pacman.direction == 1)
    {
        pacman.y --
    }
    else if(pacman.direction == 2)
    {
        pacman.x --
        if(pacman.x <= 0)
        {
            pacman.x = grille[0].length
        }
    }
    else if(pacman.direction == 3)
    {
        pacman.y ++
    }
    testCollision()
    var divPacman = document.createElement("div");
    divPacman.style.gridRow = pacman.y;
    divPacman.style.gridColumn = pacman.x;
    divPacman.classList.add("pacman");
    maGrilleHTML.appendChild(divPacman);
}

    // DÉPLACEMENTS DES FANTÔMES

function deplacementFantomes(quelFantome)
{
    quelFantome.directionFantomes = getRandomIntInclusive(0,3);
    if(quelFantome.directionFantomes == 0)
    {
        quelFantome.x ++
        if(quelFantome.x >= grille[0].length+1)
        {
            quelFantome.x = 1
        }
    }
    else if(quelFantome.directionFantomes == 1)
    {
        quelFantome.y --
    }
    else if(quelFantome.directionFantomes == 2)
    {
        quelFantome.x --
        if(quelFantome.x <= 0)
        {
            quelFantome.x = grille[0].length
        }
    }
    else if(quelFantome.directionFantomes == 3)
    {
        quelFantome.y ++
    }
    collisionFantomes(quelFantome);
    var divQuelFantome = document.createElement("div");
    divQuelFantome.style.gridRow = quelFantome.y;
    divQuelFantome.style.gridColumn = quelFantome.x;
    divQuelFantome.classList.add(quelFantome.classe);
    maGrilleHTML.appendChild(divQuelFantome);
}

// DÉPLACEMENT ++ DU FANTOME ROUGE

function deplacementsFantomeRouge(fantomeRouge)
{
    if(fantomeRouge.nouvelleDirection)
    {
    fantomeRouge.directionFantomes = getRandomIntInclusive(0,3);
    fantomeRouge.nouvelleDirection=false;
    }
    if(fantomeRouge.directionFantomes == 0)
    {
        fantomeRouge.x ++
        if(grille[fantomeRouge.y-1][fantomeRouge.x-1] == 0)
        {
            fantomeRouge.x --;
            fantomeRouge.nouvelleDirection=true;
        }
        if(fantomeRouge.x >= grille[0].length+1)
        {
            fantomeRouge.x = 1
        }
    }
    else if(fantomeRouge.directionFantomes == 1)
    {
        fantomeRouge.y --
        if(grille[fantomeRouge.y-1][fantomeRouge.x-1] == 0)
        {
            fantomeRouge.y ++;
            fantomeRouge.nouvelleDirection=true;
        }
    }
    else if(fantomeRouge.directionFantomes == 2)
    {
        fantomeRouge.x --
        if(grille[fantomeRouge.y-1][fantomeRouge.x-1] == 0)
        {
            fantomeRouge.x ++;
            fantomeRouge.nouvelleDirection=true;
        }
        if(fantomeRouge.x <= 0)
        {
            fantomeRouge.x = grille[0].length
        }
    }
    else if(fantomeRouge.directionFantomes == 3)
    {
        fantomeRouge.y ++
        if(grille[fantomeRouge.y-1][fantomeRouge.x-1] == 0)
        {
            fantomeRouge.y --;
            fantomeRouge.nouvelleDirection=true;
        }
    }
    if(fantomeRouge.x == pacman.x && fantomeRouge.y == pacman.y)
    {
        document.location.reload(false)
    }
    var divFantomeRouge = document.createElement("div");
    divFantomeRouge.style.gridRow = fantomeRouge.y;
    divFantomeRouge.style.gridColumn = fantomeRouge.x;
    divFantomeRouge.classList.add(fantomeRouge.classe);
    maGrilleHTML.appendChild(divFantomeRouge);
}

/*
pour fantome rouge :
se déplace aléatoirement une fois,
si il peut continuer, il le fait
sinon,
il recommence
*/

compteScore = 0
function testCollision()
{
    if(grille[pacman.y-1][pacman.x-1] == 2)
    {
        grille[pacman.y-1][pacman.x-1] = 1
        compteBonbons --
        compteScore = compteScore +10
        console.log(compteBonbons)
        if(compteBonbons <= 0)
        {
            window.alert("vous avez gagné en " + temps + " secondes ! Soit " + parseInt(temps/60) + " min et " + parseInt(temps%60) + " secondes !")
            document.location.reload(false)
        }
    }
    if(pacman.direction == 0)
    {
        if(grille[pacman.y-1][pacman.x-1] == 0)
        {
            pacman.x --
        }
    }
    else if(pacman.direction == 1)
    {
        if(grille[pacman.y-1][pacman.x-1] == 0)
        {
            pacman.y ++
        }
    }
    else if(pacman.direction == 2)
    {
        if(grille[pacman.y-1][pacman.x-1] == 0)
        {
            pacman.x ++
        }
    }
    else if(pacman.direction == 3)
    {
        if(grille[pacman.y-1][pacman.x-1] == 0)
        {
            pacman.y --
        }
    }
    if(pacman.x == fantomeBleu.x && pacman.y == fantomeBleu.y)
    {
        document.location.reload(false)
    }
    if(pacman.x == fantomeOrange.x && pacman.y == fantomeOrange.y)
    {
        document.location.reload(false)
    }
    if(pacman.x == fantomeRouge.x && pacman.y == fantomeRouge.y)
    {
        document.location.reload(false)
    }
    if(pacman.x == fantomeVert.x && pacman.y == fantomeVert.y)
    {
        document.location.reload(false)
    }
}

function collisionFantomes(quelFantome)
{
    if(quelFantome.directionFantomes == 0)
    {
        if(grille[quelFantome.y-1][quelFantome.x-1] == 0)
        {
            quelFantome.x --;
        }
    }
    else if(quelFantome.directionFantomes == 1)
    {
        if(grille[quelFantome.y-1][quelFantome.x-1] == 0)
        {
            quelFantome.y ++;
        }
    }
    else if(quelFantome.directionFantomes == 2)
    {
        if(grille[quelFantome.y-1][quelFantome.x-1] == 0)
        {
            quelFantome.x ++;
        }
    }
    else if(quelFantome.directionFantomes == 3)
    {
        if(grille[quelFantome.y-1][quelFantome.x-1] == 0)
        {
            quelFantome.y --;
        }
    }
    if(quelFantome.x == pacman.x && quelFantome.y == pacman.y)
    {
        document.location.reload(false)
    }
}

function appuiTouche(event)
{
    console.log(event.key);
    switch(event.key)
    {
        case "d":
        case "D":
            pacman.direction = 0;
            break;
        case "z":
        case "Zd":
            pacman.direction = 1;
            break;
        case "q":
        case "Q":
            pacman.direction = 2;
            break;
        case "s":
        case "S":
            pacman.direction =3;
            break;
    }
}

for(let i=0 ; i < grille.length ; i++)
{
    for(let j=0 ; j < grille[i].length ; j++)
    {
        let monImg = document.createElement("div");
        monImg.style.gridRow = i+1;
        monImg.style.gridColumn = j+1;
        if(grille[i][j] == 0)
        {
            monImg.classList.add("mur");
        }
        else if(grille[i][j] == 1)
        {
            monImg.classList.add("sol");
        }
        else
        {
            monImg.classList.add("bonbon");
        }
    maGrilleHTML.appendChild(monImg);
    }
}


    function boucleRefresh()
    {
        initGrille();
        deplacementPacman();
        deplacementFantomes(fantomeBleu);
        deplacementFantomes(fantomeOrange);
//        deplacementFantomes(fantomeRouge);
        deplacementsFantomeRouge(fantomeRouge);
        deplacementFantomes(fantomeVert);
        setTimeout(boucleRefresh, 300);
    }
boucleRefresh();

var temps = 0;
function ajouteTemps()
{
    document.getElementById("temps").innerHTML = "Temps: </br>" + temps++;
    setTimeout(ajouteTemps,1000);
}
ajouteTemps();

//document.getElementById("bonbons").innerHTML = "Il reste " + compteBonbons + " bonbons";
document.onkeypress=appuiTouche