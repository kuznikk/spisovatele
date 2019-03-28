$(function(){
    $('#spisovatele p').hide();
    $('#spisovatele h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#38a'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(500);
    });

    var citaty = $('#citaty');
    function zmenaCitatu(){
        citaty.find('h4').text(citat[i].title);
        citaty.find('p').text(citat[i].text);
    }
    var i = 0;
    zmenaCitatu();
    $('#dalsi').on('click',function(){
        i < citat.length-1 ? i++ : i=0;
        zmenaCitatu();
    })
    $('#predchozi').on('click',function(){
        i > 0 ? i-- : i=citat.length-1;
        zmenaCitatu();
    })
    })