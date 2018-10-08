/* =========================================
               Preloader
============================================ */
$(function(){
	
	$('.preloader').fadeOut(2000)
	//navBtn
	$('.navBtn').click(function(){
		$('.nav').toggleClass('nav-show')
	});
	//video switch
	$('.video_switch-container').click(function(){
		const value = $('.video_switch-btn').hasClass('btnSlide')
		if (value){
			$('.video_switch-btn').removeClass('btnSlide')
			$('#video').get(0).play()
		}
		else{
			$('.video_switch-btn').addClass('btnSlide')
			$('#video').get(0).pause()
		}
	});
	
	/* Magnific Popup */	
	$('#projects_modal').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			// options for gallery
			enabled: true
		}
		// other options
	});
	
	/*Accordion Drop*/
	$('.accordion_btn').click(function(){
//		console.log(this);
		
		$('.accordion_btn').not(this).removeClass('rotate');
		$('.accordion_btn').not(this).parent().next().slideUp();
		
		$(this).toggleClass('rotate');
		$(this).parent().next().slideToggle();
	});
	//team member
	//iify - instantly invoked function expression
	
	(function(){
		let data = [{
		  id: 0,
		  name: 'deadpool',
		  job: 'developer',
		  text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
		  favorites: ['eat', 'drink', 'sleep'],
		  img: 'img/team-1.jpg'
		 },
		 {
		  id: 1,
		  name: 'thor',
		  job: 'superhero',
		  text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
		  favorites: ['paint', 'draw', 'run'],
		  img: 'img/team-2.jpg'
		 },
		 {
		  id: 2,
		  name: 'ironman',
		  job: 'scientist',
		  text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
		  favorites: ['math', 'physics', 'more math'],
		  img: 'img/team-3.jpg'
		 },
		 {
		  id: 3,
		  name: 'spiderman',
		  job: 'intern',
		  text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
		  favorites: ['bark', 'run', 'bite'],
		  img: 'img/team-4.jpg'
		 }]
		
		$('.team-img_item').click(function(){
			//add/remove class active
			$('.team-img_item').not(this).removeClass('active')
			$(this).addClass('active')
			//change data
			let id = $(this).attr('data-id')
			//console.log(id);
			$('.team-info_member-name').text(data[id].name)
			$('.team-info_member-job').text(data[id].job)
			$('.team-info_member-text').text(data[id].text)
			
			$('.team-info_member-single-favorite-text').each(function(index){
				$(this).text(data[id].favorites[index])
			})
			
			
			$('.team-info_img').attr('src', data[id].img)
		})
		
	})();
	//owl Carousel setup
	$(function () {
		 $('.owl-carousel').owlCarousel({
		  loop: true,
		  smartSpeed: 2000,
		  margin: 10,
		  nav: true,
		  responsive: {
		   0: {
		    items: 1
		   },
		   600: {
		    items: 1
		   },
		   1000: {
		    items: 1
		   }
		  }
		 })
		 $(".owl-prev").html('<div><i class="fas fa-chevron-left"></i></div>');
		 $(".owl-next").html('<div><i class="fas fa-chevron-right"></i></div>');
		})
	
});


//Modal-Popup
$(function(e){
    popup('mymodal');
    function popup(oID){
      // $('#mymask').show();
      // console.log($('#'+oID).width()/2);
      // console.log(($(window).width()/2)-$('#'+oID).width()/2);
      var w = ($(window).width()/2)-$('#'+oID).width()/2;
      var h = ($(window).height()/2)-$('#'+oID).height()/2;
      $('#'+oID).css('left',w);
      $('#'+oID).css('top',h);
      // Window Dimensions
      // var wHeight =

      $('#'+oID+', #mymask ').show();
    console.log('launch modal');
    };
    $('.closeme').click(function(e){
      var myid = $(this).parents('div').attr('id');
      $('#mymask, #'+myid).hide();
    });
  });













