// fantasia, aventura, drama



// a viagem de chihiro, LIVRE, fantasia, aventura
// guardiões da galáxia, 12 anos, fantasia, aventura
// planeta do tesouro, 12 anos, fantasia, aventura
// aventura de pi, 10 anos, drama, aventura, fantasia
// ladrões de bicicleta, 12 anos, drama
// o menino que descobriu o vento, 14 anos, drama

let campoIdade;




function setup() {
  createCanvas(400, 400);
  campoIdade = createInput();
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text (recomendacao, width / 2, height / 2);
  
}
function geraRecomendacao(idade){
  if (idade >= 10){
    if (idade >= 14){
    return "As aventuras de PI"
    }
  } else {
  return "A viagem de Chihiro";
  }
  
}