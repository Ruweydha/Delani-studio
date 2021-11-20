$("#design").click(function(){
    $(".designImg").toggle( function(){
        $(".DesignWording").show( function(){
            $("#heading1").css('font-weight', 'bold');
            $(this).click(function(){
                $(this).hide()
                $(".designImg").show();
            });
        });
    });
});
$("#development").click(function(){
    $(".developmentImg").toggle( function(){
        $(".DevelopmentWording").show( function(){
            $("#heading2").css('font-weight', 'bold');
            $(this).click(function(){
                $(this).hide()
                $(".developmentImg").show();
            });
        });
    });
});
$("#product").click(function(){
    $(".productImg").toggle( function(){
        $(".ProductWording").show( function(){
            $("#heading3").css('font-weight', 'bold');
            $(this).click(function(){
                $(this).hide()
                $(".productImg").show();
            });
        });
    });
});