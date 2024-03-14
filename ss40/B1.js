document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll(".step");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentStep = 0;

    updateButtons();

    function updateButtons() {
        if (currentStep === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (currentStep === steps.length - 1) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }

        steps.forEach((step, index) => {
            if (index <= currentStep) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }

    prevBtn.addEventListener("click", function() {
        if (currentStep > 0) {
            currentStep--;
            updateButtons();
        }
    });

    nextBtn.addEventListener("click", function() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateButtons();
        }
    });
});
