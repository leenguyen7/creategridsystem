
$(document).ready(function() {
	
	var dropZone = $('#wrapper');
 
 	$('#column1').on("click", function(event){
 		dropZone.append('<div class="row"><div class="col-12"></div></div>');
 	})
 	$('#column2').on("click", function(event){
 		dropZone.append('<div class="row"><div class="col-6"></div><div class="col-6"></div></div>');
 	})
 	$('#column3').on("click", function(event){
 		dropZone.append('<div class="row"><div class="col-4"></div><div class="col-4"></div><div class="col-4"></div></div>');
 	})
 	$('#column4').on("click", function(event){
 		dropZone.append('<div class="row"><div class="col-3"></div><div class="col-3"></div><div class="col-3"></div><div class="col-3"></div></div>');
 	})

});
