const btn = document.querySelector(".btn-fr");
let frase = document.getElementById("frase");
let autor = document.getElementById("autor");

const frases = {
  "- Shu Ouma": '"Mientras tu voluntad sea grande. No habrá obstáculo que te detenga"',
  "- Frases": '"Todo el mundo puede ser un capítulo. No todos llegan a ser historia"',
  "- Comodin": '"El destino es quien reparte las cartas. Tú el que las juega"',
  "- Vincent Van Gogh": '"¿Qué sería de la vida si no tuviéramos el valor de intentar algo nuevo"',
  "- Anonímo": '"La vida es un misterio a vivir no un rompecabezas a resolver"',
  "- El Principito": '"Lo más importante nunca se ve"',
  "- Tomoya-Kun": '"La vida es un dibujo. Que debes pintar a tu gusto."',
  "- Joseph Campbell": '"En la cueva a la que temes entrar, yace el tesoro que buscas"',
  "- Alexandre Graham Bel": 'Nunca vayas por el camino trazado, porque conduce hacia donde otros han ido ya',
}

btn.addEventListener("click",()=>{
  const autores = Object.keys(frases);
  let autor2 = autores[Math.floor(Math.random()*autores.length)];
  let frase2 = frases[autor2];

  frase.textContent = frase2;
  autor.textContent = autor2;
});

