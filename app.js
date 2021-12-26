// get the value of memory
let codeAplied = false;
function calculateTotal() {
    mem = parseFloat(document.getElementById('memory-price').innerText)
    best = parseFloat(document.getElementById('best-price').innerText)
    storage = parseFloat(document.getElementById('storage-price').innerText)
    delivery = parseFloat(document.getElementById('delivery-price').innerText)




    bestPrice = document.getElementById('best-price');
    totalPrice = document.getElementById('total-price');
    total = document.getElementById('total');
    storagePrice = document.getElementById('storage-price')
    deliveryPrice = document.getElementById('delivery-price')
    //bestPrice.innerText=best;
    totalPrice.innerText = mem + best + storage + delivery;
    total.innerText = mem + best + storage + delivery;
}
document.getElementById('memory').addEventListener('click',
    function (event) {
        tag = event.target.innerText
        memory_price = document.getElementById('memory-price')
        console.log(memory_price.innerText)
        if (tag == '16Gb') {
            memory_price.innerText = '100';
        } else if (tag == '8Gb') {
            memory_price.innerText = '0';
        }
        // console.log(tag);

        calculateTotal()
    })

document.getElementById('storage').addEventListener('click',
    function (event) {
        const tag = event.target.innerText;
        storagePrice = document.getElementById('storage-price')
        console.log(storagePrice.innerText)
        if (tag == '512 SSD STORAGE') {
            storagePrice.innerText = '500';
        }
        else if (tag == '256 SSD STORAGE') {
            storagePrice.innerText = '200';
        }
        else {
            storagePrice.innerText = '0';

        }
        console.log(tag);
        calculateTotal()
    })


document.getElementById('delivery').addEventListener('click',
    function (event) {
        tag = event.target.innerText;
        deliveryPrice = document.getElementById('delivery-price')
        if (tag == 'within 2 working days with charge $20 extra') {
            deliveryPrice.innerText = '20';

        }
        else if (tag == 'wednesday,24 january free delivery') {
            deliveryPrice.innerText = '0'
        }
        calculateTotal();

    })
// document.getElementById('').addEventListener('click',
// function (event){


// })

function applyPromo() {
    let total = document.getElementById('total');
    let code = document.getElementById('promo');
    console.log(code.value)
    if (code.value == 'stevkaku') {
        if (!codeAplied) {
            const discount = (parseFloat(total.innerText) * 0.20);
            total.innerText = parseFloat(total.innerText) - discount;
            codeAplied=true;
        } else{
            const usedCode = document.getElementById('notify-usded');
            usedCode.style.display = 'block';
            

        }

        code.value = '';
    } else {
        const wrongCode = document.getElementById('notify-fail');
        wrongCode.style.display = 'block';
    }
}





