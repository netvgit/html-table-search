(function($){
	$.fn.tableSearch = function(options){
		if(!$(this).is('table')){
			return;
		}
		var tableObj = $(this),
			divObj = $('<div style="float:right;">Search: </div><br /><br />'),
			inputObj = $('<input type="text" />');
		inputObj.off('keyup').on('keyup', function(){
			var searchFieldVal = $(this).val();
			tableObj.find('tbody tr').hide().each(function(){
				var currentRow = $(this);
				currentRow.find('td').each(function(){
					if($(this).html().indexOf(searchFieldVal)>-1){
						currentRow.show();
						return false;
					}
				});
			});
		});
		tableObj.before(divObj.append(inputObj));
	}
}(jQuery));