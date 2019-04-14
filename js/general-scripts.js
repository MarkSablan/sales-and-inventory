$('#hbg-menu').on('click', function(){
	$('#sidebar').toggleClass('hide-menu');
	$('#main').toggleClass('main-toggled');
	$('#comp-name').toggleClass('comp-name');
	$('#comp-name').toggleClass('show-name');
	console.log("awew");
	myChart.destroy();
	setTimeout(function(){
		createChart(previous);
	}, 600);
});

// let awew  = $('.cont-tabs').find('.active-top');
// console.log(awew);

$('.cont-tabs').find('.tab').on('click' , function(sender){
	let tabs = $('.cont-tabs').find('.tab');
	console.log(sender);
});

function toggle(e){
	let sender = e;
	console.log(sender);
}