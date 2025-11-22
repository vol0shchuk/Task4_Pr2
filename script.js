document.getElementById("playBtn").onclick = function() {
    let bet = Number(document.getElementById("bet").value);
    let resultDiv = document.getElementById("result");

    if (bet <= 0) {
        resultDiv.textContent = "Введіть коректну суму!";
        return;
    }

    resultDiv.textContent = "Обчислення...";

    let randomNum = Math.floor(Math.random() * 11) - 5;

    setTimeout(function() {
        if (randomNum <= 0) {
            resultDiv.textContent = "Ви не вгадали! Випало число " + randomNum;
        } else {
            let win = bet * randomNum;
            resultDiv.textContent =
                "Ви виграли " + win + " грн! (Випало число: " + randomNum + ")";
        }
    }, 1000);
};
