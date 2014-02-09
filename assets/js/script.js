
$(function() { 

	/*$('.highchart_container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true
        },
        title: {
            text: 'Browser market shares at a specific website, 2010'
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: false, // changed
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                ['Chrome', 12.8],
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
    });*/
	

    var duration_animation = 1000;
    var nb_page = $(".navbar-items").length;
    var window_width = $(window).width();
    var window_height = $(window).height();
    var current_page = 0;
    var jordan_page = 1; // a MODIFIER si besoin
    var projets_page = 2; // a MODIFIER si besoin

    //alert("Width : " + $(window).width() + " Height : " + $(".navbar").height());

    $( document ).ready(function() {
        //alert("Width : " + $(window).width() + " Height : " + $(".navbar").height());
        window_width = $(window).width();
        window_height = $(window).height();
        initPageSlider();
        initRoundSlider();
    });

    // ===============
    // ATTENTION <<< Il faudra modifier ça lorsque la page de départ de sera pas l'accueil
    // ===============

    var initPageSlider = function(){
        $(".page-horizontal-slider").css({
                                        width : window_width, 
                                        height : (window_height - 55)
                                    });
    };

    var initRoundSlider = function(){
        $(".round-active").css({
                                left : $(".navbar-items:eq(" + current_page + ")").offset().left + ($(".navbar-items:eq(0)").width() / 2)
                            });
    };

    initPageSlider();
    initRoundSlider();
    

    $(".navbar-items").click(function(){
        var page_click = $(".navbar-items").index($(this));
        movePage(page_click, false);
        /*current_page = page_click;

        $(".pages-slider").stop().animate({left: -(page_click * window_width)}, duration_animation, function(){}); 

        var new_left_round = $(".navbar-items:eq(" + current_page + ")").offset().left + ($(".navbar-items:eq(0)").width() / 2);
        $(".round-active").stop().animate({left: new_left_round}, duration_animation, function(){}); */       
    });

    $(".btn-page-jordan").click(function(){
        movePage(jordan_page, false);
    });

    $(".btn-page-projets").click(function(){
        movePage(projets_page, false);
    });

    function movePage(pageClick, instant){
        current_page = pageClick;
        var new_left_round = $(".navbar-items:eq(" + current_page + ")").offset().left + ($(".navbar-items:eq(0)").width() / 2);

        if (instant) {
            $(".pages-slider").css({left: -(pageClick * window_width)});
            $(".round-active").css({left: new_left_round});
        } else {
            $(".pages-slider").stop().animate({left: -(pageClick * window_width)}, duration_animation, function(){}); 
            $(".round-active").stop().animate({left: new_left_round}, duration_animation, function(){}); 
        }
    }

    var container = $('#container-masonry');
    container.masonry({
      columnWidth: 320,
      itemSelector: '.item-projet'
    });

    $( window ).resize(function() {
        window_width = $(window).width();
        window_height = $(window).height();
        initPageSlider();
        initRoundSlider();
        movePage(current_page, true);
    });

});
