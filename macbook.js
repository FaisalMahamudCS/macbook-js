function costing(product,price,ui){
document.getElementById(product).addEventListener('click', function(){
    var memory=document.getElementById(ui)
    // console.log('77')
memory.innerText=price;
var pricing=parseFloat(memory.innerText);

memoryPrice=document.getElementById('memory').innerText;
memoryPricing= parseFloat(memoryPrice)
//console.log(memoryPricing)
storagePrice=document.getElementById('storage').innerText;
storagePricing= parseFloat(storagePrice)

deliveryPrice=document.getElementById('delivery-crg').innerText;
deliveryPricing= parseFloat(deliveryPrice)
basePrice=document.getElementById('base-price').innerText;
basePricing=parseFloat(basePrice)
//console.log(basePricing)
var totaly=memoryPricing + storagePricing + deliveryPricing + basePricing;
//console.log(totaly)
document.getElementById('price-subtotal').innerText=totaly;
})


//return memory.innerText;
}


costing('memory-8GB',200,'memory')
costing('memory-16GB',400,'memory')
//console.log(totalpricing)

costing('storage-256GB',250,'storage')
costing('storage-512GB', 415,'storage')
costing('storage-1TB',600,'storage');
costing('free-delivery',0,'delivery-crg')

costing('delivery-cost',20,'delivery-crg')

 
