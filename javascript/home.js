let apiProductApi = new TempApi.ProductApi();import TempApi from '../src/index';let product = new TempApi.Product();$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('icsxy').onclick = (event) => {
    event.preventDefault();
    product['ptitle'] = document.querySelector("[annotationname = 'ptitle']").value;product['pprice'] = document.querySelector("[annotationname = 'pprice']").value;apiProductApi.createproduct( product, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/view/'+response.body.query._id+'' ;}}});};window.onload = () => {};