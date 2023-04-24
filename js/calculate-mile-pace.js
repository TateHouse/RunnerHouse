function getFormElement() {
    return document.querySelector('form');
}

function getMilePaceDisplayElement() {
    return document.querySelector("#mile-pace-display");
}

function validateInputAndCalculatePace(event) {
    function getTimeInput(elementId) {
        let inputValue = form.elements.namedItem(elementId).value;
        let inputAsFloat = parseFloat(inputValue);
        if (Number.isNaN(inputAsFloat)) {
            inputAsFloat = 0;
        }

        return inputAsFloat;
    }

    function calculateTotalSeconds(hours, minutes, seconds) {
        return parseFloat((hours * 3600) + (minutes * 60) + seconds);
    }

    function calculatePace(totalSeconds, distanceLength) {
        return parseFloat(totalSeconds / distanceLength);
    }

    function convertPaceToMinutesAndSeconds(pace) {
        function getMinutesPart(pace) {
            return Math.floor(pace / 60);
        }

        function getSecondsPart(pace) {
            const secondsPart = pace % 60;
            return Math.round(secondsPart);
        }

        function formatMinutesPart(minutes) {
            return minutes < 10 ? "0" + minutes : minutes;
        }

        function formatSecondsPart(seconds) {
            return seconds < 10 ? "0" + seconds : seconds;
        }

        function formatMinutesPerMile(minutes, seconds) {
            return minutes + ":" + seconds + " Minutes Per Mile";
        }

        const minutes = getMinutesPart(pace);
        const formattedMinutes = formatMinutesPart(minutes);
        const extraSeconds = getSecondsPart(pace);
        const formattedSeconds = formatSecondsPart(extraSeconds);
        return formatMinutesPerMile(formattedMinutes, formattedSeconds);
    }

    function isTimeZero(hours, minutes, seconds) {
        return hours === 0 && minutes === 0 && seconds === 0;
    }

    function isDistanceZero(distanceInput) {
        return distanceInput === 0;
    }

    function distanceIsZeroErrorMessage() {
        return "Distance cannot be zero.";
    }


    event.preventDefault();

    const milePaceDisplayElement = getMilePaceDisplayElement();
    const inputHours = getTimeInput("input-hours");
    const inputMinutes = getTimeInput("input-minutes");
    const inputSeconds = getTimeInput("input-seconds");

    if (isTimeZero(inputHours, inputMinutes, inputSeconds)) {
        milePaceDisplayElement.textContent = "Hours, minutes, and/or seconds must be set.";
        return;
    }

    const inputDistanceLength = getTimeInput("input-distance-length");
    if (isDistanceZero(inputDistanceLength)) {
        milePaceDisplayElement.textContent = distanceIsZeroErrorMessage();
        return;
    }

    const totalSeconds = calculateTotalSeconds(inputHours, inputMinutes, inputSeconds);
    const pace = calculatePace(totalSeconds, inputDistanceLength);
    milePaceDisplayElement.textContent = convertPaceToMinutesAndSeconds(pace);
}

function resetMilePaceOutput() {
    function clearMilePaceOutputElement(element) {
        element.textContent = "";
    }

    const milePaceDisplayElement = getMilePaceDisplayElement();
    clearMilePaceOutputElement(milePaceDisplayElement);
}

const form = getFormElement();
form.addEventListener("submit", validateInputAndCalculatePace);
form.addEventListener("reset", resetMilePaceOutput);
