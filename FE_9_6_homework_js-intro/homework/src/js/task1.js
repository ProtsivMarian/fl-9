const amount = prompt( 'Enter amount', '0');
const discount = prompt( 'Enter discount','0');

if (amount <= 0 || discount < 0 || discount > 100 || isNaN(amount) || isNaN(discount)) {
    alert('Invalid data');
} else {
    const saved = amount / 100 * discount;
    const price = amount - saved;

    console.log('Price without discount: ' + Math.round(amount * 100) / 100 + '\n' +
                'Discount: ' + Math.round(discount * 100) / 100 + '%' + '\n' +
                'Price with discount: ' + Math.round(price * 100) / 100 + '\n' +
                'Saved: ' + Math.round(saved * 100) / 100);
}
