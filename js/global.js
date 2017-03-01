// Activa tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

/*Atajos de teclado inicio*/
// Nueva venta
Mousetrap.bind('alt+v', function () {
    window.location = ("http://127.0.0.1:54819/nuevafactura.html");
});
// Nueva Compra
Mousetrap.bind('alt+c', function () {
    window.location = ("http://127.0.0.1:54819/nuevacompra.html");
});

// map multiple combinations to the same callback
Mousetrap.bind(['command+k', 'ctrl+k'], function () {
    console.log('command k or control k');

    // return false to prevent default browser behavior
    // and stop event from bubbling
    return false;
});
/*Atajos de teclado fin*/