const raiz = document.getElementById('lista');

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://juliovasquez.pythonanywhere.com/api/funcionarios');

// xhr.onload = function(){
//     var data = JSON.parse(xhr.response);
//     data.funcionarios.forEach(element => {
//         // criamos a linha da tabela
//         var linha = document.createElement('tr');
//         raiz.appendChild(linha);

//         // criamos as colunas
//         var funcionario = document.createElement('td');
//         funcionario.textContent = element.nome_usuario;
//         linha.appendChild(funcionario);

//         var hora = document.createElement('td');
//         hora.textContent = element.data;
//         linha.appendChild(hora);
//     });
// }
// xhr.onerror = {}

// xhr.send();

fetch('http://juliovasque.pythonanywhere.com/api/funcionarios') // GET por default
.then(res => {return res.json();})
.then(data => {
    data.funcionarios.forEach(element => {
        // criamos a linha da tabela
        var linha = document.createElement('tr');
        raiz.appendChild(linha);

        // criamos as colunas
        var funcionario = document.createElement('td');
        funcionario.textContent = element.nome_usuario;
        linha.appendChild(funcionario);

        var hora = document.createElement('td');
        hora.textContent = element.data;
        linha.appendChild(hora);
    });
})
.catch( err => {
    console.log('Ocorreu um problema.');
})
.finally(() =>{
    console.log('Linha que sempre aparece no final');
})