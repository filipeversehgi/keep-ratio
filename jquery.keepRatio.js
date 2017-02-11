(function ($) {
	$.fn.keepRatio = function(params) {
		// Set the default parameters
		params = $.extend({
			ratio: "16:9"
		}, params);

		// Single node as JQuery Object
		var $t = $(this);

		var ratios = params.ratio.split(":");
		var width_to_height_ratio = ratios[1] / ratios[0];

		// Parametros base
		var current_width = $t.width();
		var current_height = $t.height();

		$t.height(current_width * width_to_height_ratio);

	};
})(jQuery);