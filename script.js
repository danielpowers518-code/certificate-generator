
document.getElementById('submit-quiz').addEventListener('click', function(){
    let score = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach(ans => {
        if(ans.value === "correct") score++;
    });
    if(score >= 2){
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('certificate-section').style.display = 'block';
    } else {
        alert("You need at least 2 correct answers to pass.");
    }
});

document.getElementById('generate-cert').addEventListener('click', function(){
    const name = document.getElementById('name-input').value;
    if(name.trim() === ""){
        alert("Please enter your name.");
        return;
    }
    document.getElementById('certificate-section').style.display = 'none';
    document.getElementById('cert-display').style.display = 'block';

    const canvas = document.getElementById('certificate-canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#000";
    ctx.strokeRect(10, 10, canvas.width-20, canvas.height-20);

    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Completion", canvas.width/2, 150);

    ctx.font = "20px Arial";
    ctx.fillText("This certifies that", canvas.width/2, 250);

    ctx.font = "28px Arial";
    ctx.fillText(name, canvas.width/2, 300);

    ctx.font = "20px Arial";
    ctx.fillText("has successfully completed the Cybersecurity Course", canvas.width/2, 350);

    ctx.font = "16px Arial";
    ctx.fillText("Date: " + new Date().toLocaleDateString(), canvas.width/2, 450);
});

document.getElementById('print-cert').addEventListener('click', function(){
    window.print();
});
