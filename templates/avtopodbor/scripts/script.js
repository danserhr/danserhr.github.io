var pics = {
	index: 0,
	items: jQuery('.block-2-left .accords span'),
	changeIndex: function() { this.index = (this.index < this.items.length - 1) ? this.index + 1 : 0; },
	getItem: function() { return jQuery(this.items[this.index]); }
};
setInterval(function(){
	pics.getItem().fadeOut(500);
	pics.changeIndex();
	pics.getItem().fadeIn(500);
},3000);

jQuery('.block-10 .items .fl span, .block-11 .items .fl, .block-13 .items .fl, .block-15 .item-right .button, .block-16 .item-3 span, #sectionfour .container .button .call').click(function(){
	jQuery('#callback').arcticmodal();
});
jQuery('.block-11 .items .fr, .block-13 .items .fr').click(function(){
	jQuery('#callback-2').arcticmodal();
});

jQuery('.block-0 a').bind("click",function(e){
	var anchor = jQuery(this);
	jQuery('html, body').stop().animate({
		scrollTop: jQuery(anchor.attr('href')).offset().top-46
	},1000);
	e.preventDefault();
});