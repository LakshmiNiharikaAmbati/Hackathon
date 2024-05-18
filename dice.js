document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('dices');
    const ctx = canvas.getContext('2d');
    canvas.width=300
    canvas.height=300

    function drawDice(number) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.beginPath()
         ctx.lineWidth=2;
         ctx.strokeStyle="black"
        const dotPositions = {
            1: [[150, 150]],
            2: [[150, 50], [450, 550]],
            3: [[150, 150], [100, 100], [450, 550]],
            4: [[150, 150], [50, 150], [150, 50], [350, 550]],
            5: [[150, 150], [50, 150], [100, 100], [150, 50], [650, 550]],
            6: [[150, 150], [50, 100], [50, 150], [150, 50], [150, 100], [350, 350]]
        };

        dotPositions[number].forEach(pos => {
            ctx.beginPath();
            ctx.arc(pos[0], pos[1], 10, 0, Math.PI * 2, true);
            ctx.fill();
        });
    }

    function rollDice() {
        const number = Math.floor(Math.random() * 6) + 1;
        drawDice(number);
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            rollDice();
        }
    });

     rollDice();
});