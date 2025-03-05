let activeStatus = false;
let addedExtraCare;
let addedMotorLegalProt;
let motorLegalYesCTA;
let motorLegalNoCTA;
let extraCareYesCTA;
let extraCareNoCTA;
let continueCTA;
let motorLegalModule;
let motorLegalModuleIsShown = false;
let coverStepBody;
let step3;
let coverStep;
let step4;
let quoteStep;
let quoteSummaryModule;
let quoteSumExtraCare;
let quoteSumMotorLegal;

function activateContinueButton() {
    if (activeStatus === false/*check that (2nd Yes or No buttons is checked AND)? activeStatus is false*/) {
        /*change background color, change cursor type and save activeStatus = true*/
        continueCTA.style.backgroundColor = "#0a8a19";
        continueCTA.style.color = "white";
        continueCTA.style.cursor = "pointer";
        activeStatus = true;
        console.log("activeStatus = " + activeStatus);
    } else {
        console.log("It is already active!")

     }
}

function showMotorLegalProtection() {
    if ( motorLegalModuleIsShown === false) {
        motorLegalModule.style.display = "flex";
        motorLegalModuleIsShown = true;
        console.log("motorLegalModuleIsShown = " + motorLegalModuleIsShown);
    }else{
        console.log("Motor Legal Protection is already shown!")
    }
}

function quoteSummary() {
    //Hide body part of previous step
    coverStepBody.style.display = "none";
    continueCTA.style.display = "none";
    //Unhide summary body
    if (addedExtraCare === false) {
        quoteSumExtraCare.innerText = ("wasn't added");
        quoteSumExtraCare.style.color = ('#af420b');
        console.log("addedExtraCare = " + addedExtraCare);
    }
    if (addedMotorLegalProt === false) {
        quoteSumMotorLegal.innerText = ("wasn't added");
        quoteSumMotorLegal.style.color = ('#af420b');
        console.log("addedMotorLegalProt = " + addedMotorLegalProt);
    }
    quoteSummaryModule.style.display = "contents";
    //Change color of 3rd step to the grey color - don't know how to change pseudo element
    step3.classList.remove("activeStep");
    coverStep.classList.remove("navActiveStep");

    //Change color of 4th step to yellow - don't know how to change pseudo element
    step4.classList.add("activeStep");
    quoteStep.classList.add("navActiveStep");
}

function extraCareYesClick() {
    addedExtraCare = true;
    console.log("addedExtraCare = " + addedExtraCare);
    showMotorLegalProtection();
}

function extraCareNoClick() {
    addedExtraCare = false;
    console.log("addedExtraCare = " + addedExtraCare);
    showMotorLegalProtection();
}

function motorLegalProtYesClick() {
    addedMotorLegalProt = true;
    activateContinueButton();
}

function motorLegalProtNoClick() {
    addedMotorLegalProt = false;
    activateContinueButton();
}

function continueCTAClick() {
    if(activeStatus === true){
        quoteSummary()
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    // selector for 1st Yes button
    extraCareYesCTA = document.querySelector("#extraCareYes");
    // selector for 1st No button
    extraCareNoCTA = document.querySelector("#extraCareNo");
    // selector for Motor Legal module
    motorLegalModule = document.querySelector(".oneMoreThingWrap");
    // selector for 2nd Yes button
    motorLegalYesCTA = document.querySelector("#addMotorLegalYes");
    // selector for 2nd No button
    motorLegalNoCTA = document.querySelector("#addMotorLegalNo");
    // selector for continue button
    continueCTA = document.querySelector(".continueCTA");
    // selector for 3step header
    step3 = document.querySelector("#Step3");
    coverStep = document.querySelector("#coverStep");
    // selector for 4th step header
    step4 = document.querySelector("#Step4");
    quoteStep = document.querySelector("#quoteStep");
    // selector for cover body
    coverStepBody = document.querySelector(".coverStepBody");
    // selector for hidden summary body
    quoteSummaryModule = document.querySelector(".quoteSummaryBody");
    //selector for extra care info
    quoteSumExtraCare = document.querySelector(".extraCareQuoteSum");
    //selector for motor legal protection info
    quoteSumMotorLegal = document.querySelector(".motorLegalQuoteSum");


    // event listener for 1st Yes button
    extraCareYesCTA.addEventListener('click', extraCareYesClick);
    // event listener for 1st No button
    extraCareNoCTA.addEventListener('click', extraCareNoClick);
    // event listener for 2nd Yes button
    motorLegalYesCTA.addEventListener('click', motorLegalProtYesClick);
    // event listener for 2nd No button
    motorLegalNoCTA.addEventListener('click', motorLegalProtNoClick);
    // event listener for continue button
    continueCTA.addEventListener('click', continueCTAClick);
});
