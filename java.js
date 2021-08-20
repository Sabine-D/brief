// Éléments du DOM
const postSection = document.getElementById("postSection");

// Requête GET
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json()) // Transformation de la réponse reçu au format JSON
    .then(posts => {    // Extraction de l'ensemble des post du JSON

        // Pour chaque post extrait, créer une arboresence à ajouter au DOM
        posts.forEach(post => {

            // Contenu de chaque post
            let title = document.createTextNode(post.title);
            let content = document.createTextNode(post.completed);

            // Création des élments HTML du post à ajouter au DOM
            let postDiv = document.createElement("div");
            postDiv.classList.add("post");


            if (post.completed == true)
            {
               postDiv.classList.add("true")
            }
            else
             {
             postDiv.classList.add("false")
            }



            let titleParagraph = document.createElement("p");
            titleParagraph.classList.add("title");

            let contentParagraph = document.createElement("p");
            contentParagraph.classList.add("content");

             // Ajout du post au DOM
            titleParagraph.appendChild(title);
            contentParagraph.appendChild(content);
            postDiv.appendChild(titleParagraph);
            postDiv.appendChild(contentParagraph);
            postSection.appendChild(postDiv);
        });
    });