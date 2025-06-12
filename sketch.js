let campoIdade;
let campoAção;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoAção = createCheckbox("Gosta de ação?");
  campoAventura = createCheckbox("Gosta de aventura?");
}
function draw() {
  background("light_blue");
  let idade = campoIdade.value();
  let gostaDeAção = campoAção.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAção, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}
function geraRecomendacao(idade, gostaDeAção, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeAção || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeAção) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeAção) {
      return "Looney Tunes: De Volta à Ação";
    } else {
      return "O feitiço do tempo";
    }
  }
}

