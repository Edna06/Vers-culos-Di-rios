// variáveis?
//dados de entrada?
//dados de saída?



const elementoResposta = document.querySelector("#resposta") 
//pesquise pelo seletor dentro do meu html 


// array
const respostas = [
  "1 Coríntios 2:9 - Olho nenhum viu, ouvido nenhum ouviu, mente nenhuma imaginou o que Deus preparou para aqueles que o amam.",

  "Mateus 24:36 - Quanto ao dia e à hora ninguém sabe, nem os anjos dos céus, nem o Filho, senão somente o Pai.",

  "Mateus 7:24 - Portanto, quem ouve estas minhas palavras e as pratica é como um homem prudente que construiu a sua casa sobre a rocha.",
  
  "Hebreus 13:5-6 - Conservem-se livres do amor ao dinheiro e contentem-se com o que vocês têm, porque Deus mesmo disse: ‘Nunca o deixarei, nunca o abandonarei’. Podemos, pois, dizer com confiança: ‘O Senhor é o meu ajudador, não temerei. O que me podem fazer os homens?",
  
  "Deuteronômio 7:9 - 'Saibam, portanto, que o Senhor, o seu Deus, é Deus; Ele é o Deus fiel, que mantém a aliança e a bondade por mil gerações daqueles que o amam e obedecem aos seus mandamentos'",

  "Isaías 41:13- Pois eu sou o Senhor, o seu Deus, que o segura pela mão direita e diz a você: Não tema; eu o ajudarei.",

  "Salmos 31:19 - Oh! Quão grande é a tua bondade, que guardaste para os que Te temem, e que Tu mostraste àqueles que em Ti confiam na presença dos filhos dos homens!",

  "João 8:32 - E conhecerão a verdade e a verdade os libertará.",

  "Mateus 28:19-20 - Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos.",

  " Mateus 6:6 - Mas, quando você orar, vá para seu quarto, feche a porta e ore a seu Pai, que está em secreto. Então seu Pai, que vê em secreto, o recompensará.",

  " Gênesis 2:7 - Então o Senhor Deus for­mou o homem do pó da terra e soprou em suas narinas o fôlego de vida, e o homem se tornou um ser vivente.",
  
  "Mateus 6:33 - Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",

  "Salmos 28:7 - O Senhor é a minha força e o meu escudo; Nele o meu coração confia e Dele recebo ajuda. Meu coração exulta de alegria, e com o meu cântico lhe darei graças. Toda a minha confiança e a minha fé estão com o Senhor. Apenas Ele é capaz de curar meu coração aflito e me guiar quando já não imagino uma saída. A Ele agradeço todos os dias.",
  
  " Salmos 23:1 - O Senhor é o meu pastor; de nada terei falta.",

  "Salmos 30:5 - Pois a sua ira só dura um instante, mas o seu favor dura a vida toda; o choro pode persistir uma noite, mas de manhã irrompe a alegria.",

  "Salmos 90:2 - Antes de nascerem os montes e de criares a terra e o mundo,de eternidade a eternidade tu és Deus.",

  "Jeremias 29:11 - Pois eu bem sei os planos que estou projetando para vós, diz o Senhor: planos de paz, não de mal, para vos dar um futuro e uma esperança.",

  "João 3:16 - Porque Deus amou o mundo de tal maneira que deu o Seu Filho unigênito, para que todo aquele que Nele crê não pereça, mas tenha a vida eterna.",

  "João 14:27 - Deixo a paz a vocês; a minha paz dou a vocês. Não a dou como o mundo a dá. Não se perturbe o seu coração, nem tenham medo.",

  "1 João 4:19-20 - Nós amamos porque Ele nos amou primeiro. Se alguém afirmar: ‘Eu amo a Deus’, mas odiar seu irmão, é mentiroso, pois quem não ama seu irmão, a quem vê, não pode amar a Deus, a quem não vê.",

  "João 14:27 - Deixo a paz a vocês; a minha paz dou a vocês. Não a dou como o mundo a dá. Não se perturbe o seu coração, nem tenham medo.",

  " Isaías 41:13 - Pois eu sou o Senhor, o seu Deus que o segura pela mão direita e diz a você: Não tema; eu o ajudarei.",
]

//clicar em fazer pergunta 
function cliqueAqui () {


  //gerar número aleatório 
  const totalResposta = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalResposta)

  elementoResposta.innerHTML = respostas [numeroAleatorio]

}