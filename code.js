const marco = document.getElementById("marco");
const label = document.getElementById("p")
const form = document.querySelector("#fm1");

form.addEventListener("submit",verificar)

function verificar(r){
  r.preventDefault();
  const largo = Number(document.querySelector("#txt1").value);
  const grosor = Number(document.querySelector("#txt2").value);
  var perimetro = 3.14 * grosor;
  var potencia = largo + perimetro;
  if (largo == 0 || grosor == 0){
    alert("Valores invalidos!!")
  }
  else if (potencia > 0 && potencia <= 23){
    marco.src = "https://i.postimg.cc/TwNcyQfd/chika.png";
    label.textContent = "ruby kurosawa";
  }
  else if (potencia > 23 && potencia <= 24){
    marco.src = "https://i.postimg.cc/1XND8QvB/yohane.png";
    label.textContent = "yohane tsushima";
  }
  else if (potencia > 24 && potencia <= 25){
    marco.src = "https://i.postimg.cc/9M0djTTv/riko.png";
    label.textContent = "riko sakurauchi";
  }
  else if (potencia > 25 && potencia <= 26){
    marco.src = "https://i.postimg.cc/TwNcyQfd/chika.png";
    label.textContent = "chika takami";
  }
  else if (potencia > 26 && potencia <= 27){
    marco.src = "https://i.postimg.cc/76RgP6nb/dia.png";
    label.textContent = "dia kurosawa";
  }
  else if (potencia > 27 && potencia <= 28){
    marco.src = "https://i.postimg.cc/tCWmfQ9F/you.png";
    label.textContent = "you watanabe";
  }
  else if (potencia > 28 && potencia <= 29){
    marco.src = "https://i.postimg.cc/Pq2WcKLW/hanamaru.png";
    label.textContent = "hanamaru kunikida";
  }
  else if (potencia > 29 && potencia <= 32){
    marco.src = "https://i.postimg.cc/DwQdQ7nY/mari.png";
    label.textContent = "mari ohara";
  }
  else if (potencia > 32 && potencia <=35){
    marco.src = "https://i.postimg.cc/pybz867H/kanan.png";
    label.textContent = "kanan matsura";
  }
  else{
    alert("wtf, con eso las matas!! Xd");
  }
  
  console.log(potencia)
  console.log(perimetro)
}