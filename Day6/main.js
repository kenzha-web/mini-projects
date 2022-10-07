const text = document.querySelector('.text')
const words = document.querySelector('.words')
const characters = document.querySelector('.characters')
text.addEventListener('input', () => {
    characters.textContent = text.value.length
    const txt = text.value.trim()
    words.textContent = txt.split(/\s+/).filter((item) => item).length
})