
function a(id) {
	var isbn =id;
	$.ajax({
		  url: '/library/v1/books/'+isbn+'/?status=lost',
		  type: 'PUT',
		  dataType:"json",
		  success: function(data) {
		    alert('The book with isbn:'+isbn+' is reported lost.');
		    window.lolocation.reload();
		  },
		  error: function(xhr,status){
			  alert("Couldn't complete the request.")
		  }
		});
	
	documetn.get
};

$(document).ready(function() {
    var table = document.getElementById("books_table");
    for (var i = 0, row; row = table.rows[i]; i++) {
                    var newStatus=table.rows[i].cells[4].innerHTML;
                    if (newStatus=="lost")
                            {
                            var newIsbn=table.rows[i].cells[0].innerHTML;
                            document.getElementById(newIsbn).disabled = true;
                            }
            }
});

