$(document).ready(function(){
	/* Dim */
	$("#dim").click(function(){
		dim_close();
	});
	function dim_open(){
		$("body").css("overflow", "hidden");
		$("#dim").fadeIn(500);
	}
	function dim_close(){
		$("body").css("overflow", "auto");
		$(".basicPopup").removeClass("active");
		$("#dim").fadeOut(500);
	}
});