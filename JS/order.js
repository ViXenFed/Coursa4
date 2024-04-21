function saveOrder(e) {
    if (!document.querySelector('input#orderName').value || 
    !document.querySelector('select#typeOrder').value || 
    !document.querySelector('#vk').value ||
    !document.querySelector('#coopName').value || 
    !document.querySelector('input#obr').checked
    ) {
        return null;
    } else {
        e.preventDefault();
        document.querySelector('dialog').showModal();
        localStorage.setItem('orderName', document.querySelector('input#orderName').value);
        localStorage.setItem('typeOrder', document.querySelector('select#typeOrder').value);
        orderNum++;
        localStorage.setItem('orderNum', orderNum);
    }
}

function getOrder() {
    if (localStorage.orderName && localStorage.typeOrder) {
        let orderHTML = `<details>
        <summary>Заказ №` + localStorage.getItem('orderNum') + `: `+ localStorage.getItem('orderName') + `</summary>
        <p>Тип заказа: `+ localStorage.getItem('typeOrder') +`</p>
        <p>Ваш эксперт: `+ getRandExpert() +`</p>
        <p>Стоимость: <b>`+ getPrice() +`</b></p>
    </details>`
    document.querySelector('div#check_order').innerHTML += orderHTML;
    } else {
        document.querySelector('div#check_order').innerHTML += '<h2>Все заказы завершены!</h2>'
    }
}

function setPrice() {
    let strPrice = '';
    switch (localStorage.typeOrder) {
        case 'Дизайн':
            strPrice = 2500;
            break;
        case 'Тираж': 
            strPrice = 3000;
            break;
        case 'Редактура':
            strPrice = 3500;
            break;
        case 'Публикация':
            strPrice = 4000;
            break
        default:
            strPrice = 1000;
            console.log('Error: undefined type of Order');
            break;
    }
    return strPrice;
}

function getPrice() {
    let result = 'От ' + setPrice() + ' руб.';
    return result;
}

function getRandExpert() {
    let Experts = [
        'Иванов Магомед Иванович',
        'Соловьёв Валерий Шаббатович',
        'Нухова Татьяна Сергеевна',
        'Ракшина Томара Васильевна'
    ]
    let index = Math.floor(Math.random() * 4)
    return Experts[index];
}

function checkOrder() {
    document.querySelector('#check_order').innerHTML = '';
    getOrder();
}

