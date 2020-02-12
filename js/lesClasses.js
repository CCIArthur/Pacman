class Voiture
{
    Marque;
    Modele;
    Couleur;
    constructor(marque,modele,couleur)
    {
        this.Marque = marque;
        this.Modele = modele;
        this.Couleur = couleur;
    }
    roule()
    {
        return "Vroum vroum"
    }
    get Toto()
    {
        return "Voiture de marque " + this.Marque;
    }
    set Toto(laMarque)
    {
        this.Marque = laMarque.toUpperCase();
    }
}

var maVoiture = new Voiture("Peugeot","206","gris")
console.log(maVoiture.roule())
console.log(maVoiture.Toto)

maVoiture.Toto="Ford";
console.log(maVoiture.Toto);