import type { MusicPlayerConfig } from "../types/config";

/**
 * CONFIGURACIÓN DEL REPRODUCTOR DE MÚSICA
 * Puedes añadir todas las canciones que quieras en el arreglo 'playlist'.
 * El reproductor las cargará secuencialmente sin problemas.
 */
export const musicPlayerConfig: MusicPlayerConfig = {
    showInNavbar: true,
    mode: "local",
    volume: 0.7,
    playMode: "list",
    showLyrics: false,

    local: {
        playlist: [
			// ==========================================
            //  MÚSICA DE MI PREFERENCIA
            // ==========================================
            {
                name: "Inside The Cage",
                artist: "ChoxyPop",
                url: "/assets/music/InsideTheCage.mp3",
                cover: "/assets/music/cover/InsideTheCage.png",
                lrc: ""
            },

            // ==========================================
            // 🇺🇸 MÚSICA EN INGLÉS
            // ==========================================
			{
                name: "Levan Polkka",
                artist: "Hatsune Miku",
                url: "/assets/music/levan-polkka.mp3",
                cover: "/assets/music/cover/miku.jpg",
                lrc: ""
            },
            {
                name: "Samba do Brasil",
                artist: "Bellini",
                url: "/assets/music/samba-do-brasil.mp3",
                cover: "/assets/music/cover/bellini.jpg",
                lrc: ""
            },
            {
                name: "Música de elevador",
                artist: "Desconocido",
                url: "/assets/music/elevator-music.mp3",
                cover: "/assets/music/cover/elevator.jpg",
                lrc: ""
            },
            {
                name: "Inside The Cage",
                artist: "ChoxyPop",
                url: "/assets/music/InsideTheCage.mp3",
                cover: "/assets/music/cover/InsideTheCage.png",
                lrc: ""
            },
            {
                name: "Baby Doll",
                artist: "Dominic Fike",
                url: "/assets/music/baby-doll.mp3",
                cover: "/assets/music/cover/dominic-fike.jpg",
                lrc: ""
            },
            {
                name: "Edgy",
                artist: "Luvwillow",
                url: "/assets/music/edgy-luvwillow.mp3",
                cover: "/assets/music/cover/luvwillow.jpg",
                lrc: ""
            },
            {
                name: "Party Tonight",
                artist: "Mordecai y los Rigbys",
                url: "/assets/music/party-tonight.mp3",
                cover: "/assets/music/cover/regular-show.jpg",
                lrc: ""
            },
            {
                name: "Results!",
                artist: "Sugary Spire",
                url: "/assets/music/sugary-spire-results.mp3",
                cover: "/assets/music/cover/sugary-spire.jpg",
                lrc: ""
            },

            // ==========================================
            // 🇪🇸 MÚSICA EN ESPAÑOL
            // ==========================================
            {
                name: "Vivo",
                artist: "Gustavo Cerati",
                url: "/assets/music/vivo-cerati.mp3",
                cover: "/assets/music/cover/vivo.jpg",
                lrc: ""
            },
            {
                name: "El amar y el querer",
                artist: "José José",
                url: "/assets/music/el-amar-y-el-querer.mp3",
                cover: "/assets/music/cover/jose-jose.jpg",
                lrc: ""
            },
            {
                name: "Niño",
                artist: "Milo J",
                url: "/assets/music/nino-milo-j.mp3",
                cover: "/assets/music/cover/milo-j.jpg",
                lrc: ""
            },
            {
                name: "Extraño",
                artist: "Miranda!",
                url: "/assets/music/extrano-miranda.mp3",
                cover: "/assets/music/cover/miranda.jpg",
                lrc: ""
            },
        ]
    }
};