//Create a JS app with the given html and css to convert between diferent time units. Your task is to add a click event listener to all buttons. When
//a button is clicked, read the corresponding input field and convert the value to the three other units of time and
//display it in the input fields.

function attachEventsListeners() {
    let inputDays = $('#days');
    let inputHours = $('#hours');
    let inputMinutes = $('#minutes');
    let inputSeconds = $('#seconds');

    $('#daysBtn').click(function () {
        inputHours.val(Number(inputDays.val()) * 24);
        inputMinutes.val(Number(inputDays.val()) * 1440);
        inputSeconds.val(Number(inputDays.val()) * 86400);
    });

    $('#hoursBtn').click(function () {
        inputDays.val(Number(inputHours.val()) / 24);
        inputMinutes.val(Number(inputHours.val()) * 60);
        inputSeconds.val(Number(inputHours.val()) * 60 * 60);
    });

    $('#minutesBtn').click(function () {
        inputDays.val(Number(inputMinutes.val()) / 1440);
        inputHours.val(Number(inputMinutes.val()) / 60);
        inputSeconds.val(Number(inputMinutes.val()) * 60);
    });

    $('#secondsBtn').click(function () {
        inputDays.val(Number(inputSeconds.val()) / 86400);
        inputHours.val(Number(inputSeconds.val()) / 60 / 60);
        inputMinutes.val(Number(inputSeconds.val()) / 60);
    });
}