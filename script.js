document.addEventListener('DOMContentLoaded', function () {

    //starting div
    let div = document.createElement('div');
    div.className = 'header-container';


    //h1-h6 - append all to div
    let h1 = document.createElement('h1');
    h1.className = 'h1';
    h1.className = 'h';
    let text1 = document.createTextNode('This is an h1');
    h1.appendChild(text1);
    div.appendChild(h1);

    let pizza = document.createElement('h2');
    pizza.className = 'h2';
    pizza.className = 'h';
    let text2 = document.createTextNode('This is an h2');
    pizza.appendChild(text2);
    div.appendChild(pizza);

    let h3 = document.createElement('h3');
    h3.className = 'h3';
    h3.className = 'h';
    let text3 = document.createTextNode('This is an h3');
    h3.appendChild(text3);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    h4.className = 'h4';
    h4.className = 'h';
    let text4 = document.createTextNode('This is an h4');
    h4.appendChild(text4);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    h5.className = 'h5';
    h5.className = 'h';
    let text5 = document.createTextNode('This is an h5');
    h5.appendChild(text5);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    h6.className = 'h6';
    h6.className = 'h';
    let text6 = document.createTextNode('This is an h6');
    h6.appendChild(text6);
    div.appendChild(h6);


    //append div to body
    document.body.appendChild(div);


    //Color Array
    const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966'];

    const headerClass = document.getElementsByClassName('h');
    for (let i = 0; i < headerClass.length; i++) {
        headerClass[i].addEventListener('dblclick', function () {
            //console.log(headerClass[i]);
            Math.floor(Math.random() * colorArray.length);
        });
        
    }


    //List Items - Having trouble with 1.The button being in the html 2.How to count +1 on every click
    function list() {
    let listItem = document.createElement('li');
    let x = 1;
    //x++; Nope
    let listText = document.createTextNode('This is list item ' + x);
    listItem.appendChild(listText);
    document.body.appendChild(listItem);
    };

    //document.addEventListener('click', list); //should be button.addEventListener('click', list);
  
})