/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

$(document).ready(function () {
	'use strict';

	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	$(window).on('scroll', function () {
		//.Scroll to top show/hide
		if ($('#scroll-to-top').length) {
			var scrollToTop = $('#scroll-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 200) {
				scrollToTop.fadeIn(200);
			} else {
				scrollToTop.fadeOut(100);
			}
		}
	});
	// scroll-to-top
	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}

	// Shuffle js filter and masonry
	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});


	// CountDown JS
	var countDownEl = $('.count-down');
	if (countDownEl) {
		$('.count-down').syotimer({
			year: 2021,
			month: 5,
			day: 9,
			hour: 20,
			minute: 30
		});
	}

	// Magnific Popup Image
	$('.portfolio-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: true,
		fixedBgPos: true
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

});
function filtrarProdutos() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('search-input');
	filter = input.value.toUpperCase();
	div = document.getElementById('lista-produtos');
	produtos = div.getElementsByClassName('produto');
	for (i = 0; i < produtos.length; i++) {
	  a = produtos[i].getElementsByTagName("h3")[0];
	  txtValue = a.textContent || a.innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		produtos[i].style.display = "";
	  } else {
		produtos[i].style.display = "none";
	  }
	}
  }// Array para armazenar os itens do carrinho
  // Array para armazenar os itens do carrinho
  var carrinho = [];
  
  // Função para adicionar ao carrinho
  function adicionarAoCarrinho(nome, preco) {
	carrinho.push({ nome: nome, preco: preco });
	atualizarCarrinho();
  }
  
  // Função para atualizar o carrinho
  function atualizarCarrinho() {
	var itensCarrinho = document.getElementById('itens-carrinho');
	var totalCarrinho = document.getElementById('total-carrinho');
	var total = 0;
	itensCarrinho.innerHTML = ''; // Limpa a lista de itens
  
	// Adiciona cada item ao DOM
	carrinho.forEach(function(item) {
	  var divItem = document.createElement('div');
	  divItem.textContent = item.nome + ' - R$' + item.preco;
	  itensCarrinho.appendChild(divItem);
	  total += parseFloat(item.preco);
	});
  
	// Atualiza o total
	totalCarrinho.textContent = 'R$' + total.toFixed(2);
  }
  
  // Eventos de clique para adicionar ao carrinho
  document.querySelectorAll('.btn-comprar').forEach(function(button) {
	button.addEventListener('click', function() {
	  var nome = this.parentNode.querySelector('h3').textContent;
	  var preco = this.parentNode.querySelector('.preco').textContent.replace('R$', '');
	  adicionarAoCarrinho(nome, preco);
	});
  });
// Evento de clique para finalizar compra
document.getElementById('finalizar-compra').addEventListener('click', function() {
	// Aqui você pode adicionar qualquer lógica adicional para processamento de pagamento
  
	// Limpa o carrinho
	carrinho = [];
	
	// Atualiza o carrinho para mostrar que está vazio
	atualizarCarrinho();
	
	// Exibe uma mensagem para o usuário
	alert('Compra finalizada com sucesso!');
  });
  