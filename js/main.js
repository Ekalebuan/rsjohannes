jQuery(function($) {

	$(document).ready(function () {

		$('#navbar .dropdown').hover(function () {
			debugger;
        	$(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
    	}, function () {
        $(this).find('..dropdown-menu').first().stop(true, true).slideUp(105)
    	});

    	window.onscroll = function() {scrollFunction()};

	    function scrollFunction() {
	      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	        $('body').addClass("fixed-nav");
	        $('#lm').addClass("show");
	      } else {
	       $('body').removeClass("fixed-nav");
	       $('#lm').removeClass("show");
	      }
	    }

	    VanillaTilt.init(document.querySelectorAll(".dh_text"), {
	        max: 25,
	        speed: 400,
	        glare: false, //霧面反光
	        "max-glare": 1
	    });

	    VanillaTilt.init(document.querySelectorAll(".so_overlay"), {
	        max: 15,
	        speed: 400,
	        glare: false, //霧面反光
	        "max-glare": 1
	    });

	    VanillaTilt.init(document.querySelectorAll(".ncs_konten"), {
	        max: 15,
	        speed: 400,
	        glare: false, //霧面反光
	        "max-glare": 1
	    });

	    VanillaTilt.init(document.querySelectorAll(".ncs_prokes"), {
	        max: 25,
	        speed: 400,
	        glare: false, //霧面反光
	        "max-glare": 1
	    });

	    VanillaTilt.init(document.querySelectorAll(".stat_satu"), {
	        max: 25,
	        speed: 400,
	        glare: false, //霧面反光
	        "max-glare": 1
	    });

	    VanillaTilt.init(document.querySelectorAll(".stat_dua"), {
	        max: 25,
	        speed: 400,
	        glare: false, //霧面反光
	        "max-glare": 1
	    });

	    VanillaTilt.init(document.querySelectorAll(".ghf_text"), {
	        max: 25,
	        speed: 400,
	        glare: false, //霧面反光
	        "max-glare": 1
	    });

	    VanillaTilt.init(document.querySelectorAll(".page_sejarah_cover"), {
	        max: 25,
	        speed: 400,
	        glare: false, //霧面反光
	        "max-glare": 1
	    });

	    VanillaTilt.init(document.querySelectorAll(".layanan_single_konten_detail"), {
	        max: 25,
	        speed: 400,
	        glare: false, //霧面反光
	        "max-glare": 1
	    });

	    
	});

	$(document).ready(function(){

		new Typed('#ketik',{
            strings : ['Pemerintah Belanda pada tahun 1941 mendirikan rumah sakit darurat kecil yang berlokasi di kawasan Bakunase (sekarang SD Negeri I Bakunase), yang berfungsi memberikan pelayanan kesehatan kepada masyarakat Kota Kupang maupun pemerintah penjajah. Dokter pertama kali yang menangani rumah sakit tersebut adalah dokter Habel, seorang warga negara Belanda.','Tahun 1942 terjadi peralihan kekuasaan dari pemerintah penjajah Belanda ke pemerintah penjajah Jepang. Rumah sakit darurat kecil diambil alih oleh pemerintah Jepang, semua fasilitas dan tenaga medis dari pihak Belanda tetap dimanfaatkan termasuk dr Habel.','Pada 1952 atas prakarsa Residen Mr.Amalo, rumah sakit darurat kecil di kawasan bakunase dipindahkan ke bekas gedung kesatuan Brigadir Mobil (BRIMOB) yang terletak dikawasan Oetete (sekarang RSUD Prof.Dr.W.Z.Johanes Kupang) dengan nama rumah sakit kuanino.','Pada tanggal 5 juli 1959 Presiden Soekarno mengeluarkan dekrit, saat itulah segala kegiatan rumah sakit kuanino diambil alih Pemerintah Daerah Tingkat I Nusa Tenggara Timur dengan mendapat bantuan dari Departemen Kesehatan Republik Indonesia.','Nama Rumah Sakit Kuanino ini kemudian atas kesepakatan DPRD Tingkat I Nusa Tenggara Timur pada tanggal 12 November 1970 diganti dengan nama seorang pahlawan nasional bangsa Indonesia asal Nusa Tenggara Timur yang berkecimpung dibidang kedokteran yaitu Prof.Dr.W.Z.Johannes.'],
            typeSpeed : 150,
            delaySpeed : 600,
            loop : true
        });

	    $(".owl-carousel").owlCarousel({
	        loop:true,
	        margin:15,
	        autoplay:true,
	        animateOut: 'fadeOut',
	        animateIn: 'fadeIn',
	        autoplayTimeout:6000,
	        dots:false,
	        nav:true,
	          navText:['<i class="fa fa-long-arrow-alt-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-alt-right" aria-hidden="true"></i>'],
	         responsive: {
	          0: {
	            items: 1
	          },
	          600: {
	            items: 2
	          },
	          1000: {
	            items: 4
	          }
	        }
	    });
  	
	    $(".do_konten").owlCarousel({
	        loop:true,
	        margin:15,
	        autoplay:true,
	        animateOut: 'fadeOut',
	        animateIn: 'fadeIn',
	        autoplayTimeout:6000,
	        dots:false,
	        nav:true,
	          navText:['<i class="fa fa-long-arrow-alt-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-alt-right" aria-hidden="true"></i>'],
	         responsive: {
	          0: {
	            items: 1
	          },
	          600: {
	            items: 2
	          },
	          1000: {
	            items: 4
	          }
	        }
	    });


	    particlesJS("partikeljs", {
          "particles": {
            "number": {
              "value": 50,
              "density": {
                "enable": true,
                "value_area": 700
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
            },
            "opacity": {
              "value": 0.6,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.5,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 125,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 4,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 20,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });


        $('.slider-for').slick({
	       slidesToShow: 1,
	       slidesToScroll: 1,
	       arrows: false,
	       fade: true,
	       asNavFor: '.slider-nav'
	    });

	    $('.slider-nav').slick({
	        centerMode: true,
	        centerPadding: '60px',
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        asNavFor: '.slider-for',
	        dots: false,
	        focusOnSelect: true,
	        
	        responsive: [
	            {
	              breakpoint: 1024,
	              settings: {
	                centerMode: true,
	                slidesToShow: 3,
	                slidesToScroll: 1,
	                infinite: true,
	                dots: true,
	                centerPadding: '40px',
	              }
	            },
	            {
	              breakpoint: 600,
	              settings: {
	                centerMode: true,
	                slidesToShow: 2,
	                slidesToScroll: 1
	              }
	            },
	            {
	              breakpoint: 480,
	              settings: {
	                centerMode: true,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                centerPadding: '40px',
	              }
	            }
	        ]
	    });

	    $('a[data-slide]').click(function(e) {
	       e.preventDefault();
	       var slideno = $(this).data('slide');
	       $('.slider-nav').slick('slickGoTo', slideno - 1);
	     });

		

	    


        $('#pengaduan').on('click',function(){
          $('#fp').addClass("aktif");
        })

        $('#hidefp').on('click',function(){
          $('#fp').removeClass("aktif");
        })



    });


});