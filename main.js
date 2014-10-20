$(function(){
	$('.booth').click
	(
		function(e)
		{
			if($(e.target).data('available'))
			{
				if($(e.target).hasClass('selected'))
				{
					// deselect it
					$(e.target).removeClass('selected');
				}
				else
				{
					// select it
					$(e.target).addClass('selected');
				}
			}
			
		}
	)
})