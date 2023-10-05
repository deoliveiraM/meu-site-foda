function botaosim() {
  alert("gayzaokkkkkkk");
  location.href = "https://youtube.com/shorts/XX51Tp63leA?si=3tHhnD9wYCm2XW99"
}
function desviar(t) {
  var btn = t;
  btn.style.position = "absolute";
  btn.style.bottom = gerarposicao(10,90);
  btn.style.left = gerarposicao(10,90);
  console.log("opa desviei");
}
function gerarposicao(min, max) {
  return Math.random() * (max - min) + min + "%";
}
