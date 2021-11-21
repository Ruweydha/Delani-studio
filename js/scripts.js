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
$("#one").mouseenter(function(){
    $("#jim").show(function(){
        $(this). mouseleave(function(){
            $(this).hide();
        })
    });
})
$("#two").mouseenter(function(){
    $("#yellow").show(function(){
        $(this). mouseleave(function(){
            $(this).hide();
        })
    });
})
$("#three").mouseenter(function(){
    $("#ontario").show(function(){
        $(this). mouseleave(function(){
            $(this).hide();
        })
    });
})

$("#four").mouseenter(function(){
    $("#black").show(function(){
        $(this). mouseleave(function(){
            $(this).hide();
        })
    });
})
$("#five").mouseenter(function(){
    $("#landing").show(function(){
        $(this). mouseleave(function(){
            $(this).hide();
        })
    });
})
$("#six").mouseenter(function(){
    $("#calculate").show(function(){
        $(this). mouseleave(function(){
            $(this).hide();
        })
    });
})
$("#seven").mouseenter(function(){
    $("#burned").show(function(){
        $(this). mouseleave(function(){
            $(this).hide();
        })
    });
})
$("#eight").mouseenter(function(){
    $("#giraffe").show(function(){
        $(this). mouseleave(function(){
            $(this).hide();
        })
    });
})