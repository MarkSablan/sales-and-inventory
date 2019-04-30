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

// For Tabs 
//Highlights (on the top) the clicked tab
$('.cont-tabs').find('.tab').on('click' , function(){
	let clickedTab = $(this).find('.indicator');
	let parentNode = $(this).parent();

	parentNode.find("*").removeClass("active-top");
	clickedTab.addClass("active-top");
});

// For accordion navigation menu
$('.accordion-nav').find('.item').on('click', function (){
	let clicked = $(this).find('.sub-menu');
	let parent = $(this).parent();

	parent.find('*').removeClass('drop-sub-menu');
	parent.find('.sub-menu').addClass('hide-sub');
	clicked.removeClass('hide-sub');
	clicked.addClass('drop-sub-menu');
	// console.log(clicked);
});