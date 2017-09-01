$(document).ready(function(){
$('#tweet-controls').hide();

$('#tweet-content .tweet-compose').click(function () {
     $('#tweet-controls').fadeToggle('fast', 'linear');
     $(this).css("height", "75px");
  });



  $('.tweet-compose').on("input", function () {
    var text = $(this);
    var chars = $('#char-count');
  if(text.val().length >= 130){
    chars.css("color", "red");
    }
    else{
      chars.css("color","black");
    }
    var charCount = 140-text.val().length;
  chars.text(140-text.val().length);


  if(charCount <= 0){
    $('.button').attr('disabled', "disabled");
  }
  if (charCount > 0){
    $('.button').removeAttr('disabled',"disabled");
  }

});

  $(".button").on('click',function(e){
    console.log('HIT');
    var tweet = $(".tweet-compose").val();
    var $tweet = $(".tweet").first().clone();

  $tweet.find(".tweet-text").text(tweet);
  $tweet.find(".fullname").text("James Scott");
  $tweet.find(".username").text('@JamesnotJimey');
  $tweet.find(".avatar").first().attr("src");
  console.log('OTHER HIT');
  $('#stream').prepend($tweet);

  });


  $('.tweet-actions').hide();

  $(".tweet-text").mouseenter(function(){
    $('.content').find(".tweet-actions").show();
  });

  $(".tweet-text").mouseleave(function(){
    $('.content').find(".tweet-actions").hide();
  });



    $('.stats, .reply').hide();

    $(".tweet").on('click', function(){
      $(this).find('.stats, .reply').show();
    });











});
