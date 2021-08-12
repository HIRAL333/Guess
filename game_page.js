player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + "  :  ";
document.getElementById("player2_name").innerHTML = player2_name + "  :  ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player2_name;

function send(){
    word = document.getElementById("word").value.toLowerCase();
    console.log(word);

    blank_1 = word.charAt(1);
    console.log(blank_1);

    word_length = Math.floor(word.length/2);

    blank_2 = word.charAt(word_length);
    console.log(blank_2);

    lengthMinus1 = word.length - 1;

    blank_3 = word.charAt(lengthMinus1);
    console.log(blank_3);

    replace_1 = word.replace(blank_1, "_");
    replace_2 = replace_1.replace(blank_2, "_");
    replace_3 = replace_2.replace(blank_3, "_");

    question = "<h4 id='word_display'> Q. "+ replace_3 +"</h4>";
    input = "<br> Answer : <input type='text' id='inputBox'>";
    btn_check = "<br> <br> <button class='btn btn-info' onclick='check()'>CHECK💎</button>";
    row =question + input + btn_check ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check()
{
answer = document.getElementById("inputBox").value.toLowerCase();
console.log(answer);

if(word == answer){
    if(answer_turn == "player_1"){
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else
    {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}

if(question_turn == "player_1")
{
    question_turn = "player_2";
    document.getElementById("player_question").innerHTML = "Question turn : "+ player2_name;
}
else
{
    question_turn = "player_1";
    document.getElementById("player_question").innerHTML = "Question turn : "+ player1_name;
}

if(answer_turn == "player_1")
{
    answer_turn = "player_2";
    document.getElementById("player_answer").innerHTML = "Answer turn : "+ player2_name;
}

else
{
    answer_turn = "player_1";
    document.getElementById("player_answer").innerHTML = "Answer turn : "+ player1_name;
}

document.getElementById("output").innerHTML = "";

}