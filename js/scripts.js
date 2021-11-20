$("#design").click(function(){
    $(".designImg").hide( function(){
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
    $(".developmentImg").hide( function(){
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
    $(".productImg").hide( function(){
        $(".ProductWording").show( function(){
            $("#heading3").css('font-weight', 'bold');
            $(this).click(function(){
                $(this).hide()
                $(".productImg").show();
            });
        });
    });
});