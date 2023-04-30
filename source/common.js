$('.menu').click(function(e){
    const id = $(this).attr('id');
    window.location.href = `product.html?id=${id}`;
    e.preventDefault();  

})