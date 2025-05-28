const songs = [
    {
        title: "автобус",
        audio: "songs/song1.mp3",
        lyrics: "Текст автобус",
        cover: "images/cover1.jpg"
    },
    {
        title: "голый дрищ",
        audio: "songs/song2.mp3",
        lyrics: "Текст голый дрищ",
        cover: "images/cover2.jpg"
    }
    // Добавь остальные песни здесь!
];

const songsList = document.querySelector('.songs-list');

songs.forEach(song => {
    const songCard = document.createElement('div');
    songCard.className = 'song-card';
    songCard.innerHTML = `
        <h3>${song.title}</h3>
        <img src="${song.cover}" alt="Обложка" width="100%">
        <audio controls>
            <source src="${song.audio}" type="audio/mpeg">
        </audio>
        <div class="lyrics">
            <p>${song.lyrics}</p>
        </div>
    `;
    songsList.appendChild(songCard);
});
