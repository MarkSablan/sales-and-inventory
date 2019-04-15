// $(document).on('load', function(){
// 	createChart('bar');
// });
setTimeout(function(){
	createChart('bar');
}, 200);

$('#hbg-menu').on('click', function(){
	$('#sidebar').toggleClass('hide-menu');
	$('#main').toggleClass('main-toggled');
	$('#comp-name').toggleClass('comp-name');
	$('#comp-name').toggleClass('show-name');
	console.log("awew");
	myChart.destroy();

	// delay for 600ms before the chart is created
	setTimeout(function(){
		createChart(previous);
	}, 600);
});

//Highlights (on the top) the clicked tab
$('.cont-tabs').find('.tab').on('click' , function(){
	// console.log($(this));
	let clickedTab = $(this).find('.indicator');
	let parentNode = $(this).parent();
	// console.log(clickedTab + "a");
	parentNode.find("*").removeClass("active-top");
	clickedTab.addClass("active-top");
});
