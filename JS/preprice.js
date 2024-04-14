
function writePriceDesign() {
    let price=0;
    switch (document.querySelector('select').value) {
        case 'A5':
            price=2500 + ' руб';
            break;
        case 'A4':
            price=3000 + ' руб';
            break;
        case 'A3':
            price=3500 + ' руб';
            break;
        case 'A2':
            price=4000 + ' руб';
            break;
        case 'A1':
            price=5000 + ' руб';
            break;
    
        default:
            console.log('Error: undefined type of design');
            price = 'от 2500 руб'
            break;
    }
    document.querySelector('b#preResult').innerHTML = price;
}

function writePricePublic() {
    let price=0;
    switch (document.querySelector('select#pub').value) {
        case '100-250':
            price=4000 + ' руб';
            break;
        case '251-400':
            price=4500 + ' руб';
            break;
        case '401-600':
            price=5000 + ' руб';
            break;
        case '601-800':
            price=5500 + ' руб';
            break;
        case '801-1000':
            price=6000 + ' руб';
            break;
    
        default:
            console.log('Error: undefined type of public');
            price = 'от 4000 руб'
            break;
    }
    document.querySelector('b#preResultPub').innerHTML = price;
}

function writePriceEdit() {
    let price=0;
    switch (document.querySelector('select#ed').value) {
        case '100-250':
            price=3500 + ' руб';
            break;
        case '251-400':
            price=4000 + ' руб';
            break;
        case '401-600':
            price=4500 + ' руб';
            break;
        case '601-800':
            price=5000 + ' руб';
            break;
        case '801-1000':
            price=5500 + ' руб';
            break;
    
        default:
            console.log('Error: undefined type of public');
            price = 'от 3500 руб'
            break;
    }
    document.querySelector('b#preResultEdit').innerHTML = price;
}

function writePriceTirazh() {
    let price=0;
    switch (document.querySelector('select#tir').value) {
        case '100-200':
            price=3000 + ' руб';
            break;
        case '201-300':
            price=3500 + ' руб';
            break;
        case '301-400':
            price=4000 + ' руб';
            break;
        case '401-500':
            price=4500 + ' руб';
            break;
        case '501+':
            price=5000 + '+ руб';
            break;
    
        default:
            console.log('Error: undefined type of public');
            price = 'от 3000 руб'
            break;
    }
    document.querySelector('b#preResultTirazh').innerHTML = price;
}