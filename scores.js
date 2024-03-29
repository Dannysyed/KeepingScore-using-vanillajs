"use strict";

// For Arrays to store student scores and student names and scores strings
const scores = [];
const studentInfo = [];

const displayScores = (scores, scoresString) => {
    // Calculating the average score
    const totalScores = scores.reduce((acc, score) => acc + score, 0);
    const averageScore = totalScores / scores.length;

    // Displaying the average score in the label with id "avr_score"
    $("#avr_score").text(averageScore.toFixed(2)); // Displaying with 2 decimal places

    // Displaying the students' names and scores in the text area
    $("#scores").val(scoresString);
};

$(document).ready(() => {

    // Taking the small element 
    const studentName = $('small')
    // Click event handler for the "Add Student Score" button
    $("#add_button").click(() => {
        // Get the input values
        const firstName = $("#first_name").val();
        const lastName = $("#last_name").val();
        const score = parseFloat($("#score").val());

        // Perform validation here, to check if the score is a number.

        if (!isNaN(score)) {
            // Adding the student score to the 'scores' array
            scores.push(score);

            // Create a string with student name and score
            const studentScoreString = `${firstName} ${lastName}: ${score}`;
            studentInfo.push(studentScoreString);

            // Displaying the scores and calculate the average
            displayScores(scores, studentInfo.join('\n'));

            // To Clear input fields and set focus to the first name input
            $("#first_name").val("");
            $("#last_name").val("");
            $("#score").val("");
            $("#first_name").focus();
        }
    });

    // Click event handler for the "Clear Student Scores" button
    $("#clear_button").click(() => {
        // To Clear both arrays
        scores.length = 0;
        studentInfo.length = 0;

        // To Clear the 'scores' textarea and average score label
        $("#avr_score").text("");
        $("#scores").val("");

        //   focus to the first name input
        $("#first_name").focus();
    });

    // Click event handler for the "Sort By Last Name" button
    $("#sort_button").click(() => {
        // Sorting the students by last name
        studentInfo.sort((a, b) => {
            const lastNameA = a.split(" ")[1]; // Assuming the last name is the second part
            const lastNameB = b.split(" ")[1];
            return lastNameA.localeCompare(lastNameB);
        });

        // Display the sorted scores
        displayScores(scores, studentInfo.join('\n'));
    });

    // Set focus to the first name input when the page loads
    $("#first_name").focus();
    studentName.text('\u00A9 Daniyal Mahmood/8877543 2023')
});
