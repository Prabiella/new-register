// Función para crear elementos <li> con las imágenes y descripciones
function createListElements(listId, data) {
    var ul = document.getElementById(listId);

    data.forEach(function (item) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = item.img_src;
        img.alt = item.alt;
        li.appendChild(img);
        ul.appendChild(li);
    });
}

// Cargar el JSON desde un archivo externo usando fetch
fetch('js/pagos.json')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Llama a la función para llenar las listas
        createListElements("first-list", data.slice(0, 4)); // Primer conjunto de imágenes
        createListElements("second-list", data.slice(4)); // Segundo conjunto de imágenes
    })
    .catch(error => console.error('Error:', error));


