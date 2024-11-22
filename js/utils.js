function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('tr-TR', options);
}

function truncateText(text, length) {
    if (text.length > length) {
        return text.substring(0, length) + "...";
    }
    return text;
}
