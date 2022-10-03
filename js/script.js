const ENTRIES = []; // arrays make looping easier and are scientifically proven to be more fun
let counter = 0;

function numberEntry() {
    let num = document.getElementById('fill-in').value;

    // clear entry
    document.getElementById('fill-in').value = '';

    // refocus on fill field
    document.getElementById("fill-in").focus();

    // if num is a number, do this
    if (isNaN(num) === false) {
        ENTRIES[counter] = Number(num); // assign the numeric value of num to the respective ENTRIES array variable
        console.log(ENTRIES[counter]); // just felt bare without it
        counter += 1; // increment the counter, because there's a viable entry
    }
    // otherwise, do this
    else {
        console.log("NaN"); // again, bare without it
        alert("That's not a number. Please enter a number."); // polite, yet direct
        // do not increment the counter, because there's not a viable entry
    }

    // calculations
    if (counter === 2) {
        // if-else solution
        /*
        if (ENTRIES[0] > ENTRIES[1]) {
            alert(`${ENTRIES[0]} is greater.`);
        }
        else if (ENTRIES[0] < ENTRIES[1]) {
            alert(`${ENTRIES[1]} is greater.`);
        }
        else {
            alert("The numbers are equal.")
        }
        */

        // switch solution
        switch (true) {
            case (ENTRIES[0] > ENTRIES[1]):
                alert(`${ENTRIES[0]} is greater.`);
                break;
            case (ENTRIES[0] < ENTRIES[1]):
                alert(`${ENTRIES[1]} is greater.`);
                break;
            default:
                alert("The numbers are equal.");
        }

        // reset the counter for app reusability
        counter = 0;
    }
}