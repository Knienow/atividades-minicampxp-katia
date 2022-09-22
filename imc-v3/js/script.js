function start() {
  //pode usar a tag, classe ou id no selector
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
//  weightRange();
}

//função principal da aplicação
function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  //selecionar somente pelo id
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  //converter a string em number e informar só os valores
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  //executar a função calculateImc
  var imc = calculateImc(weight, height);
  //formatar o imc para exibir duas casas decimais e substituir ponto por vírgula
  var formattedImc = imc.toFixed(2).replace('.', ','); 

  //alterar o texto que será exibido no imcResult
  imcResult.textContent = formattedImc;

  if (imc >= 16 && imc < 17) {
    document.getElementById("responseHere").innerHTML = '<span id="very-underweight">Muito abaixo do peso</span>';
  } else if (imc >= 17 && imc < 18.5) {
    document.getElementById("responseHere").innerHTML = '<span id="underweight">Abaixo do peso</span>';
  } else if (imc >= 18.5 && imc < 25) {
    document.getElementById("responseHere").innerHTML = '<span id="normal-weight">Peso normal</span>';
  } else if (imc >= 25 && imc < 30) {
    document.getElementById("responseHere").innerHTML = '<span id="overweight">Acima do peso</span>'
  } else if (imc >= 30 && imc < 35) {
    document.getElementById("responseHere").innerHTML = '<span id="grade-one-obesity">Obesidade grau I</span>';
  } else if (imc >= 35 && imc < 40) {
    document.getElementById("responseHere").innerHTML = '<span id="grade-two-obesity">Obesidade grau II</span>';
  } else {
    document.getElementById("responseHere").innerHTML = '<span id="grade-three-obesity">Obesidade grau III</span>';
  }


}

start();
