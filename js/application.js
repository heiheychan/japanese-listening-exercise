$(document).ready(function(){

var score = 0;
var current_position = 0;
var percentage = 0;
var question = [
  {
    scene_url: "missing",
    scene_name: "To go or not to go, that is the question",
    scene_difficulty: "簡単",
    scene_d: 'e',
    scene_description: "Watch 2 japanese class students discuss if they should go to a party or not.",
    q: "What does ウォーカーさん think is more important?",
    a_a: "coffee",
    a_b: "getting 100 on exams",
    a_c: "Drinking",
    a_d: "フォスターさん",
    a: "b"
  },{
    scene_url: "missing", 
    scene_name: "To go or not to go, that is the question",
    scene_difficulty: "簡単",
    scene_d: 'e',
    scene_description: "Watch 2 japanese class students discuss if they should go to a party or not.",
    q: "Where are チェンさん and ウォーカーさん studying later?",
    a_a: "Walker san’s house",
    a_b: "フォスターさん’s house",
    a_c: "チェンさん’s house",
    a_d: "Ugli",
    a: "c"
  },{
    scene_url: "https://www.youtube.com/embed/v6kDlHViI7s",
    scene_name: "Plot twist, change of plans",
    scene_difficulty: "一般",
    scene_d: 'm',
    scene_description: "Watch 2 japanese class students turn from all studious to not caring at all.",
    q: "Why does チェンさん  want to go to the party now?",
    a_a: "She thinks homework is boring",
    a_b: "Because プランプラクマさん will be at the party",
    a_c: "She is too smart",
    a_d: "ウォーカーさんpersuaded her not to",
    a: "b"
  },{
    scene_url: "https://www.youtube.com/embed/v6kDlHViI7s",
    scene_name: "Plot twist, change of plans",
    scene_difficulty: "一般",
    scene_d: 'm',
    scene_description: "Watch 2 japanese class students turn from all studious to not caring at all.",
    q: "Did they (チェンさん and ウォーカーさん) finish their homework?",
    a_a: "Yes, they finished before ルーさん came",
    a_b: "No, they decided to drop this class",
    a_c: "No, they will do it after the party",
    a_d: "No, they want to piss off もりせんせい",
    a: "c"
  },{
    scene_url: "https://www.youtube.com/embed/H08V2stg_kc",
    scene_name: "Post major-let down-party discussion",
    scene_difficulty: "一般",
    scene_d: 'm',
    scene_description: "Watch the three disappointed students talk about their disappointment of the party.",
    q: "Who is ヒマワンさん?",
    a_a: "Guy wearing blue shirt and green hat",
    a_b: "Girl wearing red dress and boots",
    a_c: "Guy wearing green shirt and baseball cap",
    a_d: "Guy wearing green shirt and glasses",
    a: "d"
  },{
    scene_url: "https://www.youtube.com/embed/H08V2stg_kc",
    scene_name: "Post major-let down-party discussion",
    scene_difficulty: "一般",
    scene_d: 'm',
    scene_description: "Watch the three disappointed students talk about their disappointment of the party.",
    q: "Which of the following was NOT a reason why the party was a let down?",
    a_a: "Himawan san was there",
    a_b: "プランプラクマさん was not there",
    a_c: "Foster san was sick",
    a_d: "Music was too loud",
    a: "a"
  }, {
    scene_url: "https://www.youtube.com/embed/aHq71X2EhSw",
    scene_name: "Homage to プランプラクマさん the great",
    scene_difficulty: "難しい",
    scene_d: 'd',
    scene_description: "Watch the three students discuss about プランプラクマさん and being shocked by what ヒマワンさん says.",
    q: "How many girlfriends did プランプラクマさんhave?",
    a_a: "Zero, he lives a zen life and need no girl to accompany him",
    a_b: "Too many to count",
    a_c: "8 people",
    a_d: "6 people",
    a: "c"
  },{
    scene_url: "https://www.youtube.com/embed/aHq71X2EhSw",
    scene_name: "Homage to プランプラクマさん the great",
    scene_difficulty: "難しい",
    scene_d: 'd',
    scene_description: "Watch the three students discuss about プランプラクマさん and being shocked by what ヒマワンさん says.",
    q: "Who is dating プランプラクマさんnow?",
    a_a: "フォスターさん",
    a_b: "チェンさん",
    a_c: "ヒマワンさん",
    a_d: "ウォーカーさん",
    a: "c"
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
  $("div.all_answers p.ad span.a_content span").text(question[current_position]["a_d"]);

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
        $('p.warm_reminder').text('Wow! All correct~');
      } else if (score/question.length > 0.6) {
        $('p.warm_reminder').text('You did pretty well! But try harder please!');
      } else {
        $('p.warm_reminder').text('You should study more :)');
      };
      $('div.wrapper.ending').show();
      $('html').offset({top: 0});
  } else {
    current_position ++;
    getReady();
  } 
})

// Get Started!***
getReady();

})