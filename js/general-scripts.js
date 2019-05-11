let table = $('.table-flat');
let actionBtn = $('.action-icon');
let stocksTbl = $('#stocksTbl');

setTimeout(function(){
	createChart('bar');
}, 200);

$('#hbg-menu').on('click', function(){
	$('#sidebar').toggleClass('hide-menu');
	$('#main').toggleClass('main-toggled');
	$('#comp-name').toggleClass('comp-name');
	$('#comp-name').toggleClass('show-name');
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

$('.add-btn').on('click', function(){
	$('#add-record').toggleClass('add-record-show');
});

// table row selection
table.find('tbody').find('tr').on('click', function(){
	let tbody = $(this).parent();
	let cbox = tbody.find('input[type="checkbox"]');

	// checks the individual check boxes
	// if unchecked, remove highlight ('selected class')
	cbox.each(function(){
		// console.log($(this).prop('checked'));
		if($(this).prop('checked') == false) $(this).parent().parent().removeClass('selected');
	});
	// highlights the selected elements
	// if()
	$(this).addClass('selected');
});

// display details of selected row
stocksTbl.find('tr').on('click', function(){
	// console.log(awew);
	let tr = $(this);
	let display = $('.details');
	let id = tr.find('.id').text();
	let name = tr.find('.name').text();
	let price = tr.find('.price').text();
	let quantity = tr.find('.quantity').text();
	let unit = tr.find('.unit').text();

	let output = '<div class="scroll-content"><h4 class="title">'+ id +'</h4></div>' +
				'<div class="scroll-content"><h4 class="title">'+ name +'</h4></div>' +
				'<div class="scroll-content"><h4 class="title">'+ price +'</h4></div>' +
				'<div class="scroll-content"><h4 class="title">'+ quantity +'</h4></div>' +
				'<div class="scroll-content"><h4 class="title">'+ unit +'</h4></div>';
	
	display.html(output);
});

// individual checkbox
table.find('tbody').find('input[type="checkbox"]').on('click', function(){
	let input = $(this);
	if(input.prop('checked') == true){
		// add class 'selected' to the td > tr element
		input.parent().parent().addClass('selected');
	}else{
		input.parent().parent().removeClass('selected');
	}
});

table.find('thead').find('input[type="checkbox"]').on('click', function(){
	if($(this).prop('checked') == true){
		table.find('tbody').find('input[type="checkbox"]').prop('checked', true);
		table.find('tbody').find('tr').addClass('selected');

	}else{
		table.find('tbody').find('input[type="checkbox"]').prop('checked', false);
		table.find('tbody').find('tr').removeClass('selected');

	}
});

actionBtn.on('click', function(){
	let parent = $(this).parent().parent();
	let id = parent.find('.id').text();
	let	name = parent.find('.name').text();
	let dialogBox = $('.dialog-box');
	dialogBox.toggleClass('show-dialog');
	dialogBox.find('.cont-title').text(id + ' ' + name);

	dialogBox.find('contents').text($(this));
});

