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

function alternate (id1, id2, id3,id4){
     $(id1).click(function(){
         $(id2).hide(function(){
             $(id3).show(function(){
                 $(id4).css('font-weight', 'bold');
                 $(id3).click(function(){
                     $(id3).hide()
                     $(id2).show();
                 });
             });
         });
     });
}
alternate("#design",".designImg", ".DesignWording", "#heading1" );
alternate("#development", ".developmentImg", ".DevelopmentWording", "#heading2");
alternate("#product", ".productImg", ".ProductWording", "#heading3");



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


