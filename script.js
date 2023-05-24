const inspectionLevel = document.querySelector('.input_inspection');
const loteSize = document.querySelector('.lote_size');
const buttonVerify = document.querySelector('.button_verify');
const result = document.querySelector('.result');

function calculateSampleSize(loteSize, inspectionLevel) {
  const tableSample = {
    1: {
      sampleSize: [50, 80, 125, 200],
      acceptanceLimit: [0, 1, 2, 3],
      bounceLimit: [4, 5, 6, 7]
    },
    2: {
      sampleSize: [75, 100, 150, 250],
      acceptanceLimit: [0, 1, 2, 3],
      bounceLimit: [4, 5, 6, 7]
    },
    3: {
     sampleSize: [100, 150, 200, 300],
     acceptanceLimit: [0, 1, 2, 3],
     bounceLimit: [4, 5, 6, 7]
    },
  };

  let index;
  if (loteSize <= 500) {
    index = 0
  } else if (loteSize <= 1200 && loteSize > 500) {
    index = 1
  } else if (loteSize <= 3200 && loteSize > 1200) {
    index = 2
  } else { index = 3 };

  const examples = tableSample[inspectionLevel].sampleSize
  const acceptanceLimit = tableSample[inspectionLevel].acceptanceLimit
  const bounceLimit = tableSample[inspectionLevel].bounceLimit

  return {
    tamanho_da_amostra: examples[index],
    limite_aceitavel: acceptanceLimit[index],
    limite_de_rejeicao: bounceLimit[index]
  }
};

buttonVerify.addEventListener('click', () => {
  const getResult = calculateSampleSize(loteSize.value, inspectionLevel.value)
  result.innerHTML = `
    quantidade de amostras: ${getResult.tamanho_da_amostra}<br>
    limite aceitável: ${getResult.limite_aceitavel}<br>
    limite de rejeição: ${getResult.limite_de_rejeicao}
  `;
});
