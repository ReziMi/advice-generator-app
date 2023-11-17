const adviceID = document.getElementById("advice-id");
const adviceTxt = document.getElementById("advice-text");
const adviceBtn = document.getElementById("generate-btn");

const url = "https://api.adviceslip.com/advice";

// Async function to fetch advice from the API
async function getAdvice() {
    // Fetch advice from the API
    const res = await fetch(url);

    // Parse the JSON response and extract the id and advice properties
    const { slip: { id, advice } } = await res.json();

    adviceID.innerText = id;
    adviceTxt.innerText = advice;
}

getAdvice();

adviceBtn.addEventListener("click", getAdvice);
