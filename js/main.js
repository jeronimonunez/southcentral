
function updateScrollbar() {
    var width = 372;
    var height = 312;

    $("#scroller").width(width).height(height);

    // update perfect scrollbar
    $("#scroller").perfectScrollbar('update');
}	


$(function() {

	//first of all
	$('#scroller .text').html( $('#home').html() );
	$('#home-tab a').addClass('active');

    $("#scroller").perfectScrollbar({
    	suppressScrollX: true
    });

    $('.tabs ul li a').on('click', function() {
    	var target = $(this).data('content'),
    		html = $( target ).html();

		$('#scroller .text').html( html );

        $("#scroller").scrollTop(0);
		$("#scroller").perfectScrollbar('update');

		$(this).parents('ul').find('a').removeClass('active');
		$(this).addClass('active');
    })
});
