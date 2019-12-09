// Desplegable Portfolio
$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip(); 
    $(document).ready(function () {
        $('.toast').toast('show');
    });
    
    $('#ex1').zoom();
    $('#ex2').zoom();
    $('#ex3').zoom();
    $('#ex4').zoom();
    $('#ex5').zoom();
    $('#ex6').zoom();
    $('#ex7').zoom();
    $('#ex8').zoom();
    $('#ex9').zoom();
    $('#ex10').zoom();

    $(".pantallaCarga").fadeOut("slow");
  
    $("[data-localize]").localize("js/index", { language: "es" });

    $("#banderaEspanya").click(function () { 
        $("[data-localize]").localize("js/index", { language: "es" });
    });

    $("#banderaIngles").click(function () { 
        $("[data-localize]").localize("js/index", { language: "en" });
    });

    var ancho = $(window).width();


    // Disminución de imagen al hacer scroll

    if (ancho > 780) {
        jQuery(window).scroll(function () {

            if (jQuery(this).scrollTop() > 200) {
                jQuery('#imagenCabecera1')
                    .css({ 'width': '40%' })

                jQuery('#imagenCabecera2')
                    .css({ 'width': '20%' })

            }
            if (jQuery(this).scrollTop() < 200) {
                jQuery('#imagenCabecera1')
                    .css({
                        'width': '50%',

                        '-webkit-transition': 'all 0.5s ease',
                        '-moz-transition': 'all 0.5s ease',
                        '-ms-transition': 'all 0.5s ease',
                        '-o-transition': 'all 0.5s ease',
                        'transition': 'all 0.5s ease'
                    })
                    .attr('src', 'img/Logotipos/logotipoP2.png');

                jQuery('#imagenCabecera2')
                    .css({
                        'width': '30%',
                        '-webkit-transition': 'all 0.5s ease',
                        '-moz-transition': 'all 0.5s ease',
                        '-ms-transition': 'all 0.5s ease',
                        '-o-transition': 'all 0.5s ease',
                        'transition': 'all 0.5s ease'
                    })
                    .attr('src', 'img/Logotipos/logotipoAlternativa.png');
            }
        })
    } else {
        jQuery(window).scroll(function () {

            if (jQuery(this).scrollTop() > 200) {
                jQuery('#imagenCabecera1')
                    .css({ 'width': '50%' })

                jQuery('#imagenCabecera2')
                    .css({ 'width': '30%' })

            }
            if (jQuery(this).scrollTop() < 200) {
                jQuery('#imagenCabecera1')
                    .css({
                        'width': '50%',

                        '-webkit-transition': 'all 0.5s ease',
                        '-moz-transition': 'all 0.5s ease',
                        '-ms-transition': 'all 0.5s ease',
                        '-o-transition': 'all 0.5s ease',
                        'transition': 'all 0.5s ease'
                    })
                    .attr('src', 'img/Logotipos/logotipoP2.png');

                jQuery('#imagenCabecera2')
                    .css({
                        'width': '30%',
                        '-webkit-transition': 'all 0.5s ease',
                        '-moz-transition': 'all 0.5s ease',
                        '-ms-transition': 'all 0.5s ease',
                        '-o-transition': 'all 0.5s ease',
                        'transition': 'all 0.5s ease'
                    })
                    .attr('src', 'img/Logotipos/logotipoAlternativa.png');
            }
        })
    }

    $(window).resize(function () {

        //aqui el codigo que se ejecutara cuando se redimencione la ventana
        ancho = $(window).width();

        console.log(ancho);

        if (ancho > 780) {
            jQuery(window).scroll(function () {

                if (jQuery(this).scrollTop() > 200) {
                    jQuery('#imagenCabecera1')
                        .css({ 'width': '40%' })

                    jQuery('#imagenCabecera2')
                        .css({ 'width': '20%' })

                }
                if (jQuery(this).scrollTop() < 200) {
                    jQuery('#imagenCabecera1')
                        .css({
                            'width': '50%',

                            '-webkit-transition': 'all 0.5s ease',
                            '-moz-transition': 'all 0.5s ease',
                            '-ms-transition': 'all 0.5s ease',
                            '-o-transition': 'all 0.5s ease',
                            'transition': 'all 0.5s ease'
                        })
                        .attr('src', 'img/Logotipos/logotipoP2.png');

                    jQuery('#imagenCabecera2')
                        .css({
                            'width': '30%',
                            '-webkit-transition': 'all 0.5s ease',
                            '-moz-transition': 'all 0.5s ease',
                            '-ms-transition': 'all 0.5s ease',
                            '-o-transition': 'all 0.5s ease',
                            'transition': 'all 0.5s ease'
                        })
                        .attr('src', 'img/Logotipos/logotipoAlternativa.png');
                }
            })
        } else {
            jQuery(window).scroll(function () {

                if (jQuery(this).scrollTop() > 200) {
                    jQuery('#imagenCabecera1')
                        .css({ 'width': '50%' })

                    jQuery('#imagenCabecera2')
                        .css({ 'width': '30%' })

                }
                if (jQuery(this).scrollTop() < 200) {
                    jQuery('#imagenCabecera1')
                        .css({
                            'width': '50%',

                            '-webkit-transition': 'all 0.5s ease',
                            '-moz-transition': 'all 0.5s ease',
                            '-ms-transition': 'all 0.5s ease',
                            '-o-transition': 'all 0.5s ease',
                            'transition': 'all 0.5s ease'
                        })
                        .attr('src', 'img/Logotipos/logotipoP2.png');

                    jQuery('#imagenCabecera2')
                        .css({
                            'width': '30%',
                            '-webkit-transition': 'all 0.5s ease',
                            '-moz-transition': 'all 0.5s ease',
                            '-ms-transition': 'all 0.5s ease',
                            '-o-transition': 'all 0.5s ease',
                            'transition': 'all 0.5s ease'
                        })
                        .attr('src', 'img/Logotipos/logotipoAlternativa.png');
                }
            })
        }
    });

});
