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
        localStorage.setItem('typeOrder', document.querySelector('select#typeOrder'))
    }
}