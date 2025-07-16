let contaienr = document.querySelector('.container');

contaienr.addEventListener('click', function(e) {
    if (e.target.classList.contains('box')) {
        console.log(`Box ${e.target.textContent} clicked`);
    }
});