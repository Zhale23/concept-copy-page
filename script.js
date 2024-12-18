document.getElementById('toggleButton').addEventListener('click', function() {
    var alphabetContainer = document.getElementById('alphabetContainer');
    if (alphabetContainer.classList.contains('show')) {
        alphabetContainer.classList.remove('show');
    } else {
        alphabetContainer.classList.add('show');
    }
});