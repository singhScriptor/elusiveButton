document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');

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
});
