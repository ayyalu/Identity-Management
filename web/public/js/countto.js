//----APPEAR---//
!function(e){function r(){n=!1;for(var r=0;r<i.length;r++){var a=e(i[r]).filter(function(){return e(this).is(":appeared")});if(a.trigger("appear",[a]),t){var o=t.not(a);o.trigger("disappear",[o])}t=a}}var t,i=[],a=!1,n=!1,o={interval:250,force_process:!1},f=e(window);e.expr[":"].appeared=function(r){var t=e(r);if(!t.is(":visible"))return!1;var i=f.scrollLeft(),a=f.scrollTop(),n=t.offset(),o=n.left,p=n.top;return p+t.height()>=a&&p-(t.data("appear-top-offset")||0)<=a+f.height()&&o+t.width()>=i&&o-(t.data("appear-left-offset")||0)<=i+f.width()?!0:!1},e.fn.extend({appear:function(t){var f=e.extend({},o,t||{}),p=this.selector||this;if(!a){var s=function(){n||(n=!0,setTimeout(r,f.interval))};e(window).scroll(s).resize(s),a=!0}return f.force_process&&setTimeout(r,f.interval),i.push(p),e(p)}}),e.extend({force_appear:function(){return a?(r(),!0):!1}})}(jQuery);



(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));



//counters init on scroll
	if (jQuery().appear) {
		jQuery('.counter').appear();
		jQuery('body').on('appear', '.counter', function(e, $affected ) {
			jQuery($affected).each(function(index){
				if (jQuery(this).hasClass('counted')) {
					return;
				} else {
					jQuery(this).countTo().addClass('counted');
				}
				
			});
		});
	}