//
// SmoothScroll for websites v1.3.8 (Balazs Galambosi)
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction would be not to publish any  
// extension for browsers or native application
// without getting a written permission first.
//
!function(){function e(){M.keyboardSupport&&m("keydown",a)}function t(){if(!z&&document.body){z=!0;var t=document.body,o=document.documentElement;window.innerHeight,t.scrollHeight;H=document.compatMode.indexOf("CSS")>=0?o:t,S=t,e(),top!=self&&(C=!0),M.fixedBackground||T||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o){if(w(t,o),1!=M.accelerationMax){var n=Date.now(),a=n-L;if(a<M.accelerationDelta){var r=(1+50/a)/2;r>1&&(r=Math.min(r,M.accelerationMax),t*=r,o*=r)}L=Date.now()}if(A.push({x:t,y:o,lastX:0>t?.99:-.99,lastY:0>o?.99:-.99,start:Date.now()}),!K){var l=e===document.body,i=function(n){for(var a=Date.now(),r=0,c=0,u=0;u<A.length;u++){var d=A[u],s=a-d.start,m=s>=M.animationTime,f=m?1:s/M.animationTime;M.pulseAlgorithm&&(f=g(f));var w=d.x*f-d.lastX>>0,p=d.y*f-d.lastY>>0;r+=w,c+=p,d.lastX+=w,d.lastY+=p,m&&(A.splice(u,1),u--)}l?window.scrollBy(r,c):(r&&(e.scrollLeft+=r),c&&(e.scrollTop+=c)),t||o||(A=[]),A.length?R(i,e,1e3/M.frameRate+1):K=!1};R(i,e,0),K=!0}}function n(e){z||t();var n=e.target,a=c(n);if(!a||e.defaultPrevented||e.ctrlKey)return!0;if(f(S,"embed")||f(n,"embed")&&/\.pdf/i.test(n.src)||f(S,"object"))return!0;var r=-e.wheelDeltaX||e.deltaX||0,i=-e.wheelDeltaY||e.deltaY||0;return Y&&(e.wheelDeltaX&&h(e.wheelDeltaX,120)&&(r=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&h(e.wheelDeltaY,120)&&(i=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),r||i||(i=-e.wheelDelta||0),1===e.deltaMode&&(r*=40,i*=40),!M.touchpadSupport&&p(i)?!0:(Math.abs(r)>1.2&&(r*=M.stepSize/120),Math.abs(i)>1.2&&(i*=M.stepSize/120),o(a,r,i),e.preventDefault(),void l())}function a(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==B.spacebar;document.contains(S)||(S=document.activeElement);var a=/^(textarea|select|embed|object)$/i,r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(a.test(t.nodeName)||f(t,"input")&&!r.test(t.type)||f(S,"video")||v(e)||t.isContentEditable||e.defaultPrevented||n)return!0;if((f(t,"button")||f(t,"input")&&r.test(t.type))&&e.keyCode===B.spacebar)return!0;var i,u=0,d=0,s=c(S),m=s.clientHeight;switch(s==document.body&&(m=window.innerHeight),e.keyCode){case B.up:d=-M.arrowScroll;break;case B.down:d=M.arrowScroll;break;case B.spacebar:i=e.shiftKey?1:-1,d=-i*m*.9;break;case B.pageup:d=.9*-m;break;case B.pagedown:d=.9*m;break;case B.home:d=-s.scrollTop;break;case B.end:var w=s.scrollHeight-s.scrollTop-m;d=w>0?w+10:0;break;case B.left:u=-M.arrowScroll;break;case B.right:u=M.arrowScroll;break;default:return!0}o(s,u,d),e.preventDefault(),l()}function r(e){S=e.target}function l(){clearTimeout(k),k=setInterval(function(){q={}},1e3)}function i(e,t){for(var o=e.length;o--;)q[N(e[o])]=t;return t}function c(e){var t=[],o=document.body,n=H.scrollHeight;do{var a=q[N(e)];if(a)return i(t,a);if(t.push(e),n===e.scrollHeight){var r=d(H)&&d(o),l=r||s(H);if(C&&u(H)||!C&&l)return i(t,P())}else if(u(e)&&s(e))return i(t,e)}while(e=e.parentElement)}function u(e){return e.clientHeight+10<e.scrollHeight}function d(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"hidden"!==t}function s(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function m(e,t){window.addEventListener(e,t,!1)}function f(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function w(e,t){e=e>0?1:-1,t=t>0?1:-1,(E.x!==e||E.y!==t)&&(E.x=e,E.y=t,A=[],L=0)}function p(e){return e?(X.length||(X=[e,e,e]),e=Math.abs(e),X.push(e),X.shift(),clearTimeout(D),D=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=X.join(","))},1e3),!b(120)&&!b(100)):void 0}function h(e,t){return Math.floor(e/t)==e/t}function b(e){return h(X[0],e)&&h(X[1],e)&&h(X[2],e)}function v(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do if(o=t.classList&&t.classList.contains("html5-video-controls"))break;while(t=t.parentNode);return o}function y(e){var t,o,n;return e*=M.pulseScale,1>e?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*M.pulseNormalize}function g(e){return e>=1?1:0>=e?0:(1==M.pulseNormalize&&(M.pulseNormalize/=y(1)),y(e))}var S,k,D,x={frameRate:150,animationTime:600,stepSize:150,pulseAlgorithm:!0,pulseScale:6,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},M=x,T=!1,C=!1,E={x:0,y:0},z=!1,H=document.documentElement,X=[120,120,120],Y=/^Mac/.test(navigator.platform),B={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},M=x,A=[],K=!1,L=Date.now(),N=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),q={};window.localStorage&&localStorage.SS_deltaBuffer&&(X=localStorage.SS_deltaBuffer.split(","));var O,R=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),P=(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var o=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,1),e=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-1),document.body.removeChild(t)}return e}}());"onwheel"in document.createElement("div")?O="wheel":"onmousewheel"in document.createElement("div")&&(O="mousewheel"),O&&(m(O,n),m("mousedown",r),m("load",t))}();



/**
* jquery.matchHeight-min.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=
function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);
a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),
f=0;if(d.target)f=d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");b={display:b};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),
a.css(d.property,f-b+"px"))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,
this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);



(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });



    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();



/* Carousel
*/
(function( $ ) {

	//Function to animate slider captions
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}

	//Variables on page load
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

	//Initialize carousel
	$myCarousel.carousel();

	//Animate captions in first slide on page load
	doAnimations($firstAnimatingElems);

	//Pause carousel
	$myCarousel.carousel('pause');


	//Other slides to be animated on carousel slide event
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});

})(jQuery);


// =============================================
// Match Height
// =============================================
$('.equal-heights .col-md-4').matchHeight();


})(jQuery); // End of use strict
