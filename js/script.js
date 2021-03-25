$(document).ready(function () {
    
    $('.input-cart-number, #card-ccv').numeric();
    
    $('.input-cart-number').on('input', function(){
        if($(this).val().length > 3) {
            $(this).next().focus();
        }
        if($(this).val().length < 1) {
            $(this).prev().focus();
        }
        if($(this).val().length > 3 && $(this).index() == 4) {
            $('#card-holder').focus();
        }
        const index = $(this).index();
        const text = $(this).val();
        
        $(`.number span:nth-child(${index})`).text(text);
        
        // $(`.number span:nth-child(${$(this).index()})`).text($(this).val());
        
    })
    
    $('#card-holder').on('input', function(){
        $('.card-holder div').text($(this).val());
    })
    
    $('#card-expiration-month').on('input', function(){
        $('.month').text($(this).val() + '/');
    })
    
    $('#card-expiration-year').on('input', function() {
        $('.year').text($(this).val());
    })
    
    $('#card-ccv').on('focus', function() {
        $('.credit-card-box').addClass('hover');
    })
    $('#card-ccv').on('blur', function() {
        $('.credit-card-box').removeClass('hover');
    })
    $('#card-ccv').on('input', function(){
        $('.ccv div').text($(this).val());
    })
    
});