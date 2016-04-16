$(document).ready(function(){

var score = 0;
var current_position = 0;
var percentage = 0;
var question = [
  {
    scene_url: "https://www.youtube.com/embed/9H10qIjbLwQ",
    scene_name: "はじめます！",
    scene_difficulty: "簡単",
    scene_d: 'e',
    scene_description: "sometitle lol sometitle..sdfdskjfbfd dafsd dsafsda dsafsda",
    q: "My first question would be what is the question?",
    a_a: "random answer bra bra bra bra",
    a_b: "random answer bra bra bra bra",
    a_c: "random answer bra bra bra bra",
    a_d: "random answer bra bra bra bra",
    a: "a"
  }, {
    scene_url: "https://www.youtube.com/embed/vdo8tg2xOWY",
    scene_name: "asdjashkd sadas dsad sad sad sad sad ddsad as dsad sad",
    scene_difficulty: "一般",
    scene_d: 'm',
    scene_description: "dnfbams dsaf sdf dsf dsf sda fsdaf qwe qw e sadas d as asfd dsfas df a sd asd as das das da sd qwe qw das d dsad sadasdasda sadasd",
    q: "My second question is why Bill is so dumb?",
    a_a: "random answer bra bra bra bra",
    a_b: "random answer bra bra bra bra",
    a_c: "random answer bra bra bra bra",
    a_d: "random answer bra bra bra bra",
    a: "c"
  }, {
    scene_url: "https://www.youtube.com/embed/tXgIROsgDxk",
    scene_name: "asdasd asdas sadwqeqwe fddfqwe qweqwe asd xzcxc！",
    scene_difficulty: "難しい",
    scene_d: 'h',
    scene_description: "Four girls dancing in the campus! And the passerbys are super confused @@ wtf wtf! why?!!!!!! why?",
    q: "My last question is that how Bill solves this programming problem?",
    a_a: "random answer bra bra bra bra",
    a_b: "random answer bra bra bra bra",
    a_c: "random answer bra bra bra bra",
    a_d: "random answer bra bra bra bra",
    a: "b"
  }
];

$('#my_popup').popup({
  transition: 'all 0.5s'
});

(function(){
  $('#my_popup').popup('show');
})()

var getReady = function (){
  $(".question iframe").attr("src", question[current_position]["scene_url"]);
  $(".question h3.scene_name").text(question[current_position]["scene_name"]);
  $(".question p.q_difficulty").text(question[current_position]["scene_difficulty"]);
  $(".question p.q_description").text(question[current_position]["scene_description"]);
  $(".question p.q_description").text(question[current_position]["scene_description"]);
  $(".question p.q_description").text(question[current_position]["scene_description"]);

  $("div.answer p.q_q").text(question[current_position]["q"])
  $("div.all_answers p.aa span:nth-child(2)").text(question[current_position]["a_a"]);
  $("div.all_answers p.ab span:nth-child(2)").text(question[current_position]["a_b"]);
  $("div.all_answers p.ac span:nth-child(2)").text(question[current_position]["a_c"]);
  $("div.all_answers p.ad span:nth-child(2)").text(question[current_position]["a_d"]);

// Adjust the progress bar
  percentage = Math.round((current_position+1)/question.length*100)
  percentage = parseInt(percentage);
   $('div.progress-bar').attr('aria-valuenow', percentage);
   $('div.progress-bar').attr('style', 'width:' + percentage + '%');
   $('div.progress-bar span').text(percentage);

// Change difficulty level color
   switch (question[current_position]["scene_d"]) {
    case 'e':
      $('div.question p.q_difficulty').css('color', 'limeGreen')
      break;
    case 'h':
      $('div.question p.q_difficulty').css('color', 'Crimson')
      break;
    case 'm':
      $('div.question p.q_difficulty').css('color', 'CornflowerBlue')
      break;
    default:
      $('div.question p.q_difficulty').css('color', 'black')
      break;
   }
}

$(document).on('click', 'div.all_answers p', function(){
  if ($(this).attr("value") === question[current_position]["a"]) {
    score ++;
  }

  if (current_position === question.length - 1) {

      // Show result
      $('div.wrapper.progressing').hide();
      $('div.wrapper.ending h1.total_score').text(score + "/" + question.length);
      if (score === question.length) {
        $('p.warm_reminder').text('Yes! You get all the correct answers. So what?');
      } else if (score/question.length > 0.6) {
        $('p.warm_reminder').text('some text to indicate a student did fine');
      } else {
        $('p.warm_reminder').text('some text to tell the student to study harder or drop the class');
      };
      $('div.wrapper.ending').show();
      $('html').offset({top: 0});
  } else {
    current_position ++;
    getReady();
  } 
})

// Get Started!************************************
getReady();

})