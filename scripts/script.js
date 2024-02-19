const seats = document.querySelectorAll('.seat');
let count = 0;

function myEventListenerFunction(event) {

    event.target.classList.add('bg-[rgb(29,209,0)]', 'text-white');
    event.target.setAttribute('disabled', true);

    count = count + 1;
    document.getElementById('count-seat').innerText = count;

    const seatLeftText = document.getElementById('seat-left').innerText;
    const seatLeftNumber = parseInt(seatLeftText);
    document.getElementById('seat-left').innerText = seatLeftNumber - 1;

    const seatName = event.target.innerText;

    const p = document.createElement('p');
    p.innerText = seatName;

    const p2 = document.createElement("p");
    p2.innerText = 'Economy';

    const p3 = document.createElement("p");
    p3.innerText = '550';

    const li = document.createElement('li');
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);

    const ul = document.getElementById('UL');

    ul.appendChild(li);

    const totalPriceText = document.getElementById('total-price').innerText;
    const totalPrice = parseInt(totalPriceText);
    document.getElementById('total-price').innerText = totalPrice + 550;

    const grandTotalText = document.getElementById('grand-total').innerText;
    const grandTotal = parseInt(grandTotalText);
    document.getElementById('grand-total').innerText = grandTotal + 550;

    if (count >= 4) {
        for (const seat of seats) {
            seat.removeEventListener('click', myEventListenerFunction);
            document.getElementById("apply-btn").removeAttribute('disabled', false);
        }
    }
}

for (const seat of seats) {
    seat.addEventListener('click', myEventListenerFunction);
}

const applyBtn = document.getElementById("apply-btn");

applyBtn.addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-field').value;
    const applyBtnInputField = document.getElementById('apply-btn-and-input-field')

    if (couponCode === 'NEW15') {
        const grandTotalText = document.getElementById('grand-total').innerText;
        const grandTotal = parseInt(grandTotalText);
        const discountedPrice = grandTotal * 0.15;
        const grandTotalAmount = grandTotal - discountedPrice;
        document.getElementById('grand-total').innerText = grandTotalAmount;

        applyBtnInputField.classList.add('hidden');

    } else if (couponCode === 'Couple 20') {
        const grandTotalText = document.getElementById('grand-total').innerText;
        const grandTotal = parseInt(grandTotalText);
        const discountedPrice = grandTotal * 0.2;
        const grandTotalAmount = grandTotal - discountedPrice;
        document.getElementById('grand-total').innerText = grandTotalAmount;

        applyBtnInputField.classList.add('hidden');
    } else {
        alert('Invalid Coupon Code');
    }

})


const nextBtn = document.getElementById('next-btn');
const labelInput = document.getElementById('my_modal_6');

nextBtn.addEventListener('click', function () {

    const numberFieldValue = document.getElementById('number').value.length;

    if (count >= 1 && numberFieldValue >= 1) {
        labelInput.removeAttribute('disabled', false);
    } else if(count == 0 && numberFieldValue == 0){
        alert('Please Select minimum one seat and Fill Up your Phone Number ');
    }else if (count <= 0) {
        alert('Please Select minimum one seat');
    }else if (numberFieldValue <= 0) {
        alert('Fill Up your Phone Number ');
    }

})
