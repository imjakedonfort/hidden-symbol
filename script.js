document.getElementById('startButton').addEventListener('click', function() {
    alert('Game has started!');
    document.getElementById('startButton').style.display = 'none';
    setTimeout(function() {
        document.getElementById('videoCall').style.display = 'block';
    }, 3000);
});

document.getElementById('answerCall').addEventListener('click', function() {
    document.getElementById('callVideo').play();
    setTimeout(function() {
        document.getElementById('videoCall').style.display = 'none';
        document.getElementById('codeContainer').style.display = 'block';
    }, 10000);
});

document.getElementById('declineCall').addEventListener('click', function() {
    document.getElementById('callText').innerText = "Unknown";
    document.getElementById('videoCall').style.display = 'none';
    setTimeout(function() {
        document.getElementById('videoCall').style.display = 'block';
    }, 3000);
});
