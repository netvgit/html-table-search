/**
	**options to have following keys:
		**searchText: this should hold the value of search text
		**searchPlaceHolder: this should hold the value of search input box placeholder
**/
(function($){
	$.fn.tableSearch = function(options){
		if(!$(this).is('table')){
			return;
		}
		var tableObj = $(this),
			searchText = (options.searchText)?options.searchText:'Search: ',
			searchPlaceHolder = (options.searchPlaceHolder)?options.searchPlaceHolder:'',
			divObj = $('<div style="float:right;">'+searchText+'</div><br /><br />'),
			inputObj = $('<input type="text" placeholder="'+searchPlaceHolder+'" />');
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