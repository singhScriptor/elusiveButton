document.addEventListener('DOMContentLoaded', function() {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var message = document.getElementById('message');

    yesButton.addEventListener('click', function() {
        message.style.display = 'block';
    });

    noButton.addEventListener('mouseover', function() {
        moveButton(noButton);
    });

    noButton.addEventListener('click', function(e) {
        e.preventDefault();
        moveButton(noButton);
    });

    function moveButton(button) {
        var x = Math.random() * (window.innerWidth - button.offsetWidth);
        var y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.position = 'absolute';
        button.style.left = x + 'px';
        button.style.top = y + 'px';
    }

    var typed = new Typed(".text1", {
        strings:[
            "Joy and prosperity to your family!🌟",
            "Happiness and light to your home! 🎆",
            "Happy Diwali 🪔 from Dhiraj Singh! ✨"
        ],
        typeSpeed: 50,
        backSpeed: 70,
        loop: true
    });
});
