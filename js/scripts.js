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