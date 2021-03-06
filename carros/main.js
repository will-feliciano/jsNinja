(function($){
    'use-strict';

    /*
    Vamos estruturar um pequeno app utilizando módulos.
    Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
    A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
    seguinte forma:
    - No início do arquivo, deverá ter as informações da sua empresa - nome e
    telefone (já vamos ver como isso vai ser feito)
    - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
    um formulário para cadastro do carro, com os seguintes campos:
        - Imagem do carro (deverá aceitar uma URL)
        - Marca / Modelo
        - Ano
        - Placa
        - Cor
        - e um botão "Cadastrar"
    Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
    carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
    aparecer no final da tabela.
    Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
    empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
    Dê um nome para a empresa e um telefone fictício, preechendo essas informações
    no arquivo company.json que já está criado.
    Essas informações devem ser adicionadas no HTML via Ajax.
    Parte técnica:
    Separe o nosso módulo de DOM criado nas últimas aulas em
    um arquivo DOM.js.
    E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
    que será nomeado de "app".
    */

    var app = (function() {
        return{
            init: function init(){
                console.log('app init');
                this.cpInfo();
                this.initEvts();
            },

            initEvts: function initEvts(){
                $('[data-js="form-reg"]').on('submit', this.handleSub);
            },

            handleSub: function handleSub(ev){
                ev.preventDefault();
                console.log('submit');
                var $tableCar = $('[data-js="table-cars"]').get();
                $tableCar.appendChild(app.createNewCar());
            },

            createNewCar: function createNewCar(){
                var $fragment = document.createDocumentFragment();
                var $tr = document.createElement('tr');
                var $tdImg = document.createElement('td');
                var $tdBrand = document.createElement('td');
                var $tdYear = document.createElement('td');
                var $tdPlate = document.createElement('td');
                var $tdColor = document.createElement('td');

                $image.setAtribute('src', $('[data-js="image"]').get().value);
                $tdImg.appendChild($image);

                $tdImg.textContent = $('[data-js="img"]').get().value;
                $tdBrand.textContent = $('[data-js="brand"]').get().value;
                $tdYear.textContent = $('[data-js="year"]').get().value;
                $tdPlate.textContent = $('[data-js="plate"]').get().value;
                $tdColor.textContent = $('[data-js="color"]').get().value;
                
                $tr.appendChild($tdImg);
                $tr.appendChild($tdBrand);
                $tr.appendChild($tdYear);
                $tr.appendChild($tdPlate);
                $tr.appendChild($tdColor);

                return $fragment;
            },

            cpInfo: function cpInfo(){
                var aj = new XMLHttpRequest();
                aj.open('GET','/company.json', true);
                aj.send();
                aj.addEventListener('readystatechange', this.getCP, false);
            },

            getCP: function getCP(){
                if(!app().isRdy.call(this))
                    return;
                    
                var data = JSON.parse(this.responseText);
                var $CPname = $('[data-js="cp-name"]').get();
                var $CPtel = $('[data-js="cp-tel"]').get();

                $CPname.textContent = data.name;
                $CPtel.textContent = data.phone;
            },

            isRdy: function isRdy(){
                return this.readyState === 4 && this.status === 200;
            }
        };
    })();

    app().init();

    
    

})(window.DOM);