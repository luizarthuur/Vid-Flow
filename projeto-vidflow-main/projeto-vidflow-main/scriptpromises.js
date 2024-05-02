const containerVideos = document.querySelector('.videos__container');

const api = fetch('http://localhost:3000/videos') //Promise de captura de dados da API - pode retornar positivo (fullfilled) ou negativo (rejected) ou estar pendente (pending)
api.then(res => (res.json())) //Tratamento da promise usando then (Código executará o then só após o retorno da promise (negativo ou positivo) assim transformando essa resposta em um JSON)
api.then((videos) => {
    videos.forEach(video => {
        containerVideos.innerHTML +=`
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `;
    });
})
api.catch((error) => {
    containerVideos.innerHTML = `<p>Ocorreu um erro ao carregar os vídeos:</p>` + error
})


//As promises podem levar dois argumentos resolve (solução) e reject (erro)

//Para encadear mais processos utilizamos o método then


