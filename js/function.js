let arrayOfImage = [
    "image/collectionFerrari.jpg",
    "image/collections.jpg",
    "image/devanture.jpg",
    "image/devanturePresentoire.jpg",
    "image/mu_and_tshirt.jpg",
    "image/mur.jpg",
    "image/presentoireCasquette.jpg",
    "image/produits.jpg",
    "image/logo.jpg"
];
let valeurMaximal = 8;
class UrlImage {
    constructor(image) {
        this.image = image
    }
    sayUrlImagesource(eltid_element) {
        let elt = document.getElementById(eltid_element);
        elt.innerHTML = elt.innerHTML + "<div class=\"requeteImage\"><img src=" + this.image + ">";
    }
}

for (let i = 0; i < valeurMaximal; i++) {
    const element = arrayOfImage[i];
    const nvl = new UrlImage(element);
    nvl.sayUrlImagesource("container_img");
    console.log(nvl)
}

let arrayOfcommentaires = ["Vendeuse très sympa, de nombreux articles officiels que l’on ne trouve pas dans les autres boutiques",
    "Vendeuse très sympa 😉👍prend le temps d'envoyer des photos pour un achat à distance. Je recommande.",
    "Tres bonne boutique du Rocher"
];

class classForCommentaires {
    constructor(commentaire) {
        this.commentaire = commentaire
    }
    sayForCommentaires(eltForCommentaire) {
        let eltCommentaire = document.getElementById(eltForCommentaire);
        eltCommentaire.innerHTML = eltCommentaire.innerHTML + "<p class=\"paragraphecommentaires\">" + this.commentaire + "</p>"
    }
}

for (let i = 0; i < arrayOfcommentaires.length; i++) {
    const elementCommentaire = arrayOfcommentaires[i];
    const newForCommentaire = new classForCommentaires(elementCommentaire);
    newForCommentaire.sayForCommentaires("commentaires");
}

let arrayLocalitationMagasin = ["https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=fr&region=MC&markers=color:0x88b06a|43.7310417,7.4218825&zoom=16&client=google-presto&signature=1-2_hlGOx8RDx_1E8juuqKTkYjs"];

class ForMagasin {
    constructor(imageLocalitation) {
        this.imageLocalitation = imageLocalitation
    }
    SayLocalitationMagasin(eltLocalitationMagasin) {
        let elt = document.getElementById(eltLocalitationMagasin);
        elt.innerHTML = elt.innerHTML + "<div class=\"imageLocalitation\"><img src=" + this.imageLocalitation + ">";
    }
}

for (let i = 0; i < arrayLocalitationMagasin.length; i++) {
    const elementLocalitationMagasin = arrayLocalitationMagasin[i];
    const newForMagasin = new ForMagasin(elementLocalitationMagasin);
    newForMagasin.SayLocalitationMagasin("localitationMagasin");
}