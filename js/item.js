$('#item_inventory').change(function () {
	if (this.checked)
		$('.item_inventory').show();
	else
		$('.item_inventory').hide();

});
// duplicar valor de códigos
$("#item_codigo").change(function() {                
	$('#item_codigo_fabrica').val(this.value);                  
}); 