/* the code for doing autocomplete */

// $(document).ready(function(){
// 	brands = ["Lenovo","Apple","Samsung","Nokia","Motorola","Sony","Micromax","Gionee","Spice","Karbonn","Lava","HTC","Zen"," Asus","BlackBerry"];
// 	$("#searchbox").autocomplete({
// 		source: brands
// 	});

// });  

/* code for autocomplete ends */

$("#displaymsg").hide();

$("#filterbybrandbox").click(function(){
	$("#filterbox").slideToggle("slow");
	$(this).find("i").toggle("slow");
	clickToClose();
});


$(document).ready(function() {

	$("#searchbox").keyup(function () {

		var jobCount = $('#brandlist .brandlist-item').length;	
		
		$("#closebutton").show();

		var searchTerm = $("#searchbox").val();

		var listItem = $('#brandlist').children('li');

		$.extend($.expr[':'], {
			'containsi': function(elem, i, match, array)
			{
				return (elem.textContent || elem.innerText || '').toLowerCase()
				.indexOf((match[3] || "").toLowerCase()) >= 0;
			}
		});


		// var searchSplit = searchTerm.replace(/ /g, "'):containsi('");  /* to make the search possible with space */

		// alert(searchSplit +" & "+searchTerm);



		$("#brandlist li").not(":containsi(" + searchTerm + ")").each(function()   {
			$(this).addClass('hidden');
			jobCount--;
			$("#numberofresults").show();
		});
		
		if(jobCount == '0'){
			$("#displaymsg").show();
			$("#numberofresults").hide();
		}
		else if((jobCount == '1')){
			$("#displaymsg").hide();
			
			$("#numberofresults").text("We got "+jobCount+" similar brand!").show();		
		}
		else{
			$("#displaymsg").hide();
			
			$("#numberofresults").text("We got "+jobCount+" similar brands!").show();		
		}

	

   
    $("#brandlist li:containsi(" + searchTerm + ")").each(function() {

    	$(this).removeClass('hidden');
    	jobCount++;
    	$("#numberofresults").show();
    });

    if(searchTerm == ""){
    	$("#brandlist li").removeClass('hidden');
    	$("#closebutton").hide();
    	$("#displaymsg").hide();
    	$("#numberofresults").hide();
    }
	});
	
});


/* details diplaying code */ 

$(".brandlist-item").click(function(){
	var $value = $(this).data("value");
	$(".hide-details").hide();
	$("#"+$value+"-details").show();
});

/* details displaying code ends */ 


/* code for controlling the close or cross */

function clickToClose(){
	$("#brandlist li").removeClass('hidden');
	$("#closebutton").hide();
	$("#searchbox").val("");
	$("#displaymsg").hide();
	$("#numberofresults").hide();
}

/* code for controlling the close or cross ends */







