// business logic
function validate(){
    let name  = $("#name").val();
    let email = $("#email").val();
    let message = $("message").val();
    let form = $("#form")[0];
    console.log(form);

    if(name ==""|| email =="" || message ==""){
        alert("Please fill in all fields");
        return false;
    }
    else{
        form.method ="post";
        form.action = "https://gmail.us20.list-manage.com/subscribe/post?u=d0562daff28995d444155c66e&amp;id=27c5de8c4e";
        alert(`${name} We have received your message thank you for reaching out to us`)
        return true;
       
    };

}
//  User interface logic
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

function hovering(id1, id2){
    $(id1).mouseenter(function(){
            $(id2).show(function(){
                 $(id2). mouseleave(function(){
                 $(id2).hide();
             })
        });
     })
}
hovering("#eight", "#giraffe");
hovering("#seven", "#burned");
hovering("#six", "#calculate");
hovering("#five", "#landing");
hovering("#four", "#black");
hovering("#three", "#ontario");
hovering("#two", "#yellow");
hovering("#one", "#jim");


$("#form").submit(function(){
    validate();
})


