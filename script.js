
    //starting div
    let div = document.createElement('div');
    div.className = 'header-container';


    //h1-h6 - append all to div
    let h1 = document.createElement('h1');
    h1.className = 'h1 h';
    let text1 = document.createTextNode('This is an h1');
    h1.appendChild(text1);
    div.appendChild(h1);

    let pizza = document.createElement('h2');
    pizza.className = 'h2';
    pizza.classList.add('h');
    let text2 = document.createTextNode('This is an h2');
    pizza.appendChild(text2);
    div.appendChild(pizza);

    let h3 = document.createElement('h3');
    h3.className = 'h3 h';
    let text3 = document.createTextNode('This is an h3');
    h3.appendChild(text3);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    h4.className = 'h4';
    h4.classList.add('h');
    let text4 = document.createTextNode('This is an h4');
    h4.appendChild(text4);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    h5.className = 'h5 h';
    let text5 = document.createTextNode('This is an h5');
    h5.appendChild(text5);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    h6.className = 'h6';
    h6.classList.add('h');
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
            headerClass[i].style.color = getRando();
        })
    };

    // connecting button from html to js
    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', list);


    //List Items
    let x = 0;
    function list() {
        let listItem = document.createElement('li');
        x++;
        let listText = document.createTextNode('This is list item ' + x);
        listItem.appendChild(listText);
        document.body.appendChild(listItem);


        listItem.addEventListener('mouseover', function () {
            listItem.style.color = getRando();
        })

        listItem.addEventListener('dblclick', function () {
            document.body.removeChild(listItem);
        })
    };





function getRando() {
    const randomColor = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomColor];
}