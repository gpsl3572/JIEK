$(document).ready(function(){

//----------------------- menu btn 
    
    $('.quick_menu').click(function(){
        $('.quick_menuwrap').animate({
            left : 0
        });
    });


    $('.close_btn').click(function(){
        $('.quick_menuwrap').stop().animate({
            left : '100vw'
        });
    });

// ----------------------- menu btn end

$(window).scroll(function(){

    sct = $(window).scrollTop();
    useScroll = $('.section_1').height() - (window.innerHeight);

    sec1_top = $('.section_1').offset().top;
    sec2_top = $('.section_2').offset().top;
    sec3_top = $('.section_3').offset().top;
    sec4_top = $('.section_4').offset().top;
    sec5_top = $('.section_5').offset().top;
    sec6_top = $('.section_6').offset().top;
    footer_top = $('footer').offset().top;

//  console.log(sec2_top)

    if( sct >= sec1_top && sct < sec2_top){
        $('.sec1_imgwrap').css({
            right : - (sct / useScroll) * 100 + '%'
        });

        
        console.log(sct)


        $('.sec1_h01').css({
            display : 'block'
        });
        $('.sec1_imgwrap').css({
            display : 'block'
        });

        

        // if(sct >= 2900){
        //     $('.sec1_imgwrap').css({
        //         right :'-75%'
        //     });
        //     alert(123)
        // }
     
    }
    
    if(sct >= sec2_top - 200 ){

        // $('.sec1_h01').css({
        //     position : 'absolute'
        // });

        // $('.sec1_imgwrap').css({
        //     position : 'absolute'
        // });
        $('.sec1_h01').css({
            position : 'fixed'
        });

        $('.sec1_imgwrap').css({
            position : 'fixed'
        });
    }

// sec _ 1 

    if( sct >= sec2_top - 100){

        $('.sec2_title').addClass('sec2_move');
        $('.sec2_text').addClass('sec2_move');
        $('.sec2_more_btn').addClass('sec2_move');
    }


//  sec _ 2

    if( sct >= sec3_top - 100){
        $('.sec3_textbox1').addClass('sec3_textbox1_move');
        $('.sec3_imgbox1').addClass('sec3_imgbox1_move');
        $('.sec3_imgbox2').addClass('sec3_imgbox2_move');
        $('.sec3_textbox2').addClass('sec3_textbox2_move');
    }

// sec 3 _

    if( sct >= sec4_top - 100){
        
        $('.sec4_title').addClass('sec4_move');
        $('.sec4_text').addClass('sec4_move');
        $('.sec4_more_btn').addClass('sec4_move');

    }

// sec 4 _

    if(sct >= sec1_top && sct <= footer_top){
        $('.logo').css({opacity : 1});
    }

    if(sct >= footer_top){
        $('.logo').css({opacity : 0});
    }














});
// window scroll end
});
// document end