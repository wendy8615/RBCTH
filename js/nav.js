$(document).ready(function() {
	//responsive menu toggle

	$("#menutoggle").click(function() {
		$('.xs-menu').toggleClass('displaynone');

		});
	//add active class on menu
	//$('ul li').click(function(e) {
	//	e.preventDefault();
	//	$('li').removeClass('active');
	//	$(this).addClass('active');
	//});
	//垂直導覽列
	//把所有dd標籤的內容都hide起來
    $(".dd").hide();
 
    //按下dt元素連結
    $(".dt a").click(function() {
      $(".dd").slideUp("slow"); //子分頁
 
      //下一個主選單以下的內容要slide down
      $(this).parent().next().slideDown("slow");
       return false;
    });

//drop down menu	
		$(".drop-down-introduction").hover(function() {
			$('.mega-menu-introduction').addClass('display-on');
		});
		$(".drop-down-introduction").mouseleave(function() {
			$('.mega-menu-introduction').removeClass('display-on');
		});
		$(".drop-down-about-core").hover(function() {
			$('.mega-menu-about-core').addClass('display-on');
		});
		$(".drop-down-about-core").mouseleave(function() {
			$('.mega-menu-about-core').removeClass('display-on');
		});
		$(".drop-down-application").hover(function() {
			$('.mega-menu-application').addClass('display-on');
		});
		$(".drop-down-application").mouseleave(function() {
			$('.mega-menu-application').removeClass('display-on');
		});
// flexslider

	$('.flexslider').flexslider({
	    animation: "slide"
	});
	
	// carousel plugin
	
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:16,
	    nav:true,
	    navText:[],
	    dots: false,
	    video: true,
	    responsive:{
	        0:{
	            items: 1
	        },
	        480:{
	            items: 2
	        },
	        768:{
	            items: 3
	        },
	        1000:{
	        	items: 4
	        }
	    }
	})
	//skrollr初始化
	var s = skrollr.init();
});

