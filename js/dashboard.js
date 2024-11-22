function addPoem() {
    const poemTitle = prompt("Şiir Başlığı:");
    const poemText = prompt("Şiir Metni:");
    if (poemTitle && poemText) {
        const poemList = document.getElementById('poem-list');
        const poemElement = document.createElement('div');
        poemElement.className = 'poem-item';
        poemElement.innerHTML = `
            <h2>${poemTitle}</h2>
            <p>${poemText}</p>
        `;
        poemList.appendChild(poemElement);
        alert("Şiir eklendi!");
    }
}

function viewPoems() {
    alert("Tüm şiirleriniz burada listelenecek!");
}
