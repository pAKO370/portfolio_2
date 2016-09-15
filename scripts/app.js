
(function(){
	
		var currentDiv = '.landing';
	
		var currentVar =  '';
	
		var about = "	<div class='about'><div class='about-div'><div class='personal-tab active'><h3>Personal</h3></div><div class='professional-tab'><h3>Professional</h3></div></div></div>";
	
		var personalDiv = "<div id='personal'><div class='image'><img src='assets/images/phil_trek.jpg' alt=''></div><div class='text'><p>When I am not writing code, I enjoy playing my Xbox, cycling and spending time with my family. I race mountain bike and cyclocross at an elite level.</p></div></div>";
	
		var professionalDiv = "	<div id='professional'><div class='image'><img src='assets/images/phil.png' alt=''></div><div class='text'><p>I am eager to bring several qualifications to any organization. I am proficient in HTML, CSS, Sass, Javascript, jQuery, and AngularJS. I am a team player and work well in a collaborative setting. I know my work ethic and attention to detail are great assets as well. Please feel free to contact me fo more info!</p></div></div>";
	
		var portfolio = "<div class='portfolio'><h1>Most Recent Projects</h1><h4>Click image to link to the site!</h4><div class='black-box'><a href='https://pfluegel.github.io/srg_golf/index.html'><img src='assets/images/sugar.png' class='black-image'></a><div id='left'><img src='assets/images/Arrow_Left.png'></div><div id='right'><img src='assets/images/Arrow_Right.png'></div></div></div>";
	
		var contact = "<div class='notifications open'>hello</div>";
	
		var imageArray = ['/assets/images/sugar.png','/assets/images/link-image.png','/assets/images/mentorHub.png','/assets/images/timer.png','/assets/images/kirras-kakes.png','/assets/images/blocJams.png','/assets/images/accurate.png'];
	
		var linkArray = ['https://pfluegel.github.io/srg_golf/index.html','http://frybabies.org/','http://mentorsite.herokuapp.com/','http://radiant-thicket-92194.herokuapp.com/','http://pfluegel.github.io/kirras_kakes/index.html','http://pfluegel.github.io/bloc-jams/index.html','https://pfluegel.github.io/acccurate/index.html'];
	
		$('.message-sent').fadeOut('fast');	
	
		$('.ion-navicon-round').on('click', showNav);
		$('.arrow').on('click', closeNav);
	
		$('.mobile-x').on('click', function(){
			$('.notifications').removeClass('open');
			$('.notifications .form-class').removeClass('show-form');
			$('li').addClass('hide');
			$('.ion-navicon-round').css('opacity','.' + 9);
			$('.about').removeClass('padding-move');
			$('.portfolio .black-box').removeClass('margin-move');
			$('.header-container').removeClass('margin-move');
			$('.nav-ul').css({'display': 'none'})
		});

		var i = 0;
	$('body').on('click', '#right',function(){
		i += 1;
		if(i > imageArray.length -1){
			i = 0;
		}
		$('.black-image').fadeOut(300, function(){
			$('.black-image').attr('src', imageArray[i]);
			$('.black-box a').attr('href', linkArray[i]);
			$('.black-image').fadeIn(600);
		});
	});
	
	$('body').on('click', '#left',function(){
			i -= 1;
			if(i < 0){
				i = imageArray.length - 1;
			}
			$('.black-image').fadeOut(300, function(){
				$('.black-image').attr('src', imageArray[i]);
				$('.black-image').fadeIn(600);
			});
		});
	
	function navClick(clickedNav, addedDiv, addVariable){
			
			closeNav;
			$(clickedNav).on('click', function(){
				var windowHeight = $(window).height();
				if(currentDiv == addedDiv){
					
				}else if(clickedNav == '#landing'){
					console.log('click on');
					closeNav();
					$('.header-container').removeClass('margin-move');
					$('.notifications').removeClass('open');
					$('.notifications .form-class').removeClass('show-form');
					$(addedDiv).css({'display': 'block'})
					//console.log('in the ' + currentDiv)
					$(currentDiv).css({'margin-top': windowHeight + 'px'});
					
					//$('li').addClass('hide');
					//$('.ion-navicon-round').css('opacity','.' + 9);
					//$('.nav-ul').css({'display': 'none'})
					setTimeout(function(){
						$(currentDiv).css({'display': 'none'});
						$(currentDiv).css({'margin-top': 0 + 'px'});
						$(currentDiv).remove();
					},900);
					setTimeout(function(){
						currentDiv = addedDiv;
					},900);
				}else{
					$('.notifications').removeClass('open');
					$('.notifications .form-class').removeClass('show-form');
					$(currentDiv).after(addVariable);
					$(currentDiv).css({'margin-top': '-' + windowHeight + 'px'});
					$(addedDiv).css({'display': 'block'});
					//$('li').addClass('hide');
					//$('.ion-navicon-round').css('opacity','.' + 9);
					//$('.nav-ul').css({'display': 'none'})
					closeNav();
					setTimeout(function(){
						$(currentDiv).css({'display': 'none'});
						$(currentDiv).css({'margin-top': 0 + 'px'});
						if(currentDiv != '.landing'){
							$(currentDiv).remove();
						}
					},900);
					setTimeout(function(){
						if(addedDiv === '.about' || addedDiv === '.portfolio'){
							currentDiv = addedDiv;
							currentVar =  addVariable;
							if(addedDiv === '.about'){
								$('.professional-tab').after(professionalDiv);
								$('.professional-tab').addClass('active-tab');
							}
						}

					},900);
					}
				});
			}
	
	$('#contact').on('click', function(){
		$('.notifications').toggleClass('open');
			setTimeout(function(){
				$('.notifications .form-class').toggleClass('show-form');
			}, 500 );
	});
	
	$('body').on('click', '.personal-tab', function(){
		$('#professional').remove();
		$('.professional-tab').after(personalDiv);
		$('.professional-tab').removeClass('active-tab');
		$('.personal-tab').addClass('active-tab');
	});
	
	$('body').on('click','.professional-tab', function(){
		$('#personal').remove();
		$('.professional-tab').after(professionalDiv);
		$('.professional-tab').addClass('active-tab');
		$('.personal-tab').removeClass('active-tab');
	});
	
	navClick('#about', '.about', about);
	navClick('#landing', '.landing');
	navClick('#portfolio', '.portfolio', portfolio);
	$('#send').css('cursor', 'pointer');
	$('body').on('click', '#send', function(){
		$('.form-class').fadeOut('fast');
		setTimeout(function(){
			$('.message-sent').fadeIn('slow')
		}, 500 );
		
		setTimeout(function(){
			$( ".sub" ).trigger( "click" );
		}, 2500 );
	});
	
	function showNav(){
			console.log('test');
			$('.ion-navicon-round').css('opacity',0);
			//$('.nav-ul').css({'display': 'block'})
			$('.nav-ul li').removeClass('hide');
			$('.nav-ul li').addClass('show');
			$('.about').addClass('padding-move');
			$('.about-div').addClass('padding-move');
			$('.portfolio').addClass('padding-move');
			$('.portfolio .black-box').addClass('margin-move');
			$('.header-container').addClass('margin-move');
		}
	
		function closeNav(){
			
			$('.nav-ul li').addClass('hide');
			console.log('in closed nav');
			setTimeout(function(){
				$('.nav-ul li').removeClass('show');					 	
			}, 600);
			
			$('.notifications').removeClass('open');
			$('.notifications .form-class').removeClass('show-form');
			$('.ion-navicon-round').css('opacity','.' + 9);
			$('.about').removeClass('padding-move');
			$('.about-div').removeClass('padding-move');
			$('.portfolio').removeClass('padding-move');
			$('.portfolio .black-box').removeClass('margin-move');
			$('.header-container').removeClass('margin-move');
		}
	
})();