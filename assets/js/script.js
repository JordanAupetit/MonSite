
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
	

	//alert("Width : " + $(window).width() + " Height : " + $(".navbar").height());

    var duration_animation = 2000;
    var nb_page = $(".navbar-items").length;
    var window_width = $(window).width();
    var window_height = $(window).height();

	$(".page-horizontal-slider").css({
								    width : window_width, 
								    height : (window_height - 55)
								});

    $(".navbar-items").click(function(){
        var page_click =$(".navbar-items").index($(this));

        $(".pages-slider").stop().animate({left: -(page_click * window_width)}, duration_animation, function(){});        
    });

});
