function showTab(tabId) {
    const tabs = document.querySelectorAll('.code-content');
    const buttons = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.classList.add('hidden');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.remove('hidden');
    event.target.classList.add('active');
}