const cabecalho = document.querySelector('header')

// console.log(cabecalho);

const tweetar = document.querySelector('button')
const textArea = document.querySelector('textarea')
const feed = document.querySelector('.conteudoPrincipal__listaTweets')
// console.log(tweetar);

function pegarTweet(event) {
    event.preventDefault()
    const valorTweet = textArea.value
    criarTweet(valorTweet)
    // console.log(event);
    
}

tweetar.addEventListener('click', pegarTweet)

function criarTweet(tweetTexto) {
    // console.log(tweetTexto);

    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()

    const tweet = {
        nome: "Daniela",
        foto: "assets/ProfilePic (1).png",
        usuario: "@DanielaAlgumaCoisa",
        texto: tweetTexto,
        tempo: `${hora}:${minuto}`
    }
    listarTemplateTweet(tweet)

}

function listarTemplateTweet(tweet) {

    const {nome, foto, usuario, texto, tempo} = tweet

    let li = document.createElement('li')
    li.classList.add('.conteudoPrincipal__tweet')
    let img = document.createElement('img')
    img.classList.add('tweet__fotoPerfil')
    img.src = foto
    let div = document.createElement('div')
    div.classList.add('tweet_conteudo')
    let h2 = document.createElement('h2')
    h2.innerText = nome
    let span = document.createElement('span')
    span.innerText = `${usuario} ${tempo}`
    let p = document.createElement('p')
    p.innerText = texto

    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)


    li.appendChild(img)
    li.appendChild(div)
    // console.log(li);
    feed.appendChild(li)
}