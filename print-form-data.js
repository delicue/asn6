function printFormData() {
  const form = document.querySelector('#formPI');
  const formData = new FormData(form);

  const formDataOutput = document.querySelector("#formDataOutput");
  formDataOutput.textContent = '';
  formData.forEach((v, k, data) => {
    formDataOutput.append(`${k}: ${v?v:null}`);
    formDataOutput.textContent += '<br>';
  })
}