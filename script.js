function goToInfo() {
    console.log("Função goToInfo chamada");
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    console.log("Função toggleMenu chamada");
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('active');
}

function interactSobre(element) {
    console.log("Função interactSobre chamada");
    element.style.transform = "scale(1.05)";
    element.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
}

function resetSobre(element) {
    console.log("Função resetSobre chamada");
    element.style.transform = "scale(1)";
    element.style.boxShadow = "none";
}

function scrollToSobre() {
    console.log("Função scrollToSobre chamada");
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
}
