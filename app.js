const personne = function (SonNom, SonPrenom, SonAge, SonSexe, SonJob) {
    this.nom = SonNom ;
    this.prenom = SonPrenom ;
    this.age = SonAge ;
    this.sexe = SonSexe ;
    this.job = SonJob ;

    this.getNomPrenom= function (){
        return this.nom + " " + this.prenom + " " + this.age+ " " + this.sexe ;
    }

    this.changeElement = function (newAge, newSexe){
        this.age = newAge;
        this.sexe = newSexe;

    }

}

let eleonaure = new personne ('eleonaure', 'var', 6, 'feminin','ecole');
let dominique = new personne ('dominique', 'var', 9, 'masculin','ecole' );
let angelo = new personne ('angelo', 'mura', 20, 'masculin', 'en formation' );
let maickel = new personne('maickel', 'mura', 22, 'masculin', 'vendeur' );
let stephanie = new personne ('stephanie', 'mura', 24, 'feminin', 'mere au foyer');

let array = [eleonaure, dominique, angelo, maickel, stephanie];
let classe =
    { person: [eleonaure, dominique, angelo, maickel, stephanie],

}
for (let i = 0; i<classe.person.length; i++){
    let div = document.createElement('div');
    document.body.append(div);
    div.innerHTML = classe.person[i].getNomPrenom();
}