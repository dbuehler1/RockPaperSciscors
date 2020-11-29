$(document).ready(function () {
    $("#rock").click(Rock);
    $("#paper").click(Paper);
    $("#scissors").click(Scissors);
    $("#lizard").click(Lizard);
    $("#spock").click(Spock);

    var userScore = 0;
    var aiScore = 0;
    var round = 1;
    var winner = "";
    var UserChoice = "";

    function Rock(){
        UserChoice = "Rock";
        AIChoice();
    }
    function Paper(){
        UserChoice = "Paper";
        AIChoice();
    }
    function Lizard(){
        UserChoice = "Lizard";
        AIChoice();
    }
    function Spock(){
        UserChoice = "Spock";
        AIChoice();
    }
    function Scissors(){
        UserChoice = "Scissors";
        AIChoice();
    }
    function AIChoice(){

        if(aiScore >= 2 || userScore >= 2){

        }
        else{
            var AI = Math.floor((Math.random() * 5) + 1);
            var AIGuess = "";

            if(AI == 1){
                AIGuess = "Rock";

            }
            else if(AI == 2){
                AIGuess = "Paper";
            }
            else if(AI == 3){
                AIGuess = "Scissors";
            }
            else if(AI == 4){
                AIGuess = "Lizard";
            }
            else{
                AIGuess = "Spock";
            }
            PlayRound(AIGuess, UserChoice);
        }

    }

    function PlayRound(AI){

        switch(AI){
            case "Rock":
                if(UserChoice === "Paper"){
                winner = "User";
                }
                else if(UserChoice === "Spock"){
                    winner = "User";
                }
                else if(UserChoice === "Scissors"){
                    winner = "AI";
                }
                else if(UserChoice === "Lizard"){
                    winner = "AI";
                }
                break;
            case "Paper":
                if(UserChoice === "Scissors"){
                    winner = "User";
                }
                else if(UserChoice === "Lizard"){
                    winner = "User";
                }
                else if(UserChoice === "Rock"){
                    winner = "AI";
                }
                else if(UserChoice === "Spock"){
                    winner = "AI";
                }
                break;
            case "Scissors":
                if(UserChoice === "Rock"){
                    winner = "User";
                }
                else if(UserChoice === "Spock"){
                    winner = "User";
                }
                else if(UserChoice === "Paper"){
                    winner = "AI";
                }
                else if(UserChoice === "Lizard"){
                    winner = "AI";
                }
                break;
            case "Lizard":
                if(UserChoice === "Rock"){
                    winner = "User";
                }
                else if(UserChoice === "Scissors"){
                    winner = "User";
                }
                else if(UserChoice === "Paper"){
                    winner = "AI";
                }
                else if(UserChoice === "Spock"){
                    winner = "AI";
                }
                break;
            case "Spock":
                if(UserChoice === "Paper"){
                    winner = "User";
                }
                else if(UserChoice === "Lizard"){
                    winner = "User";
                }
                else if(UserChoice === "Scissors"){
                    winner = "AI";
                }
                else if(UserChoice === "Rock"){
                    winner = "AI";
                }
                break;

        }
        if(UserChoice === AI){
            winner = "Tie";
        }
        $("#VS").text(UserChoice + " VS " + AI);
        $("#opponent").text("AI Chose: " + AI);
        $("#winner").text("Round: " + round + " Winner is: " + winner);


        if(winner === "User"){
            userScore++;
        }
        else if(winner === "AI"){
            aiScore++;
        }

        if(userScore == 2){

            $("#VS").text("User Wins The Match");
        }
        else if(aiScore == 2){

            $("#VS").text("AI Wins The Match");
        }
        $("#Score").text(userScore + " - " + aiScore);
        round++;
    }
})