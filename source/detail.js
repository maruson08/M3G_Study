$('document').ready(function(){
    const id = new URLSearchParams(window.location.search).get('id');
    $('body').append(id)
})