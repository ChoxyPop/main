import type { MusicPlayerConfig } from "../types/config";

/**
 * CONFIGURACIÓN DEL REPRODUCTOR DE MÚSICA
 * Lista de 20 canciones: 19 numeradas (externas) + 1 especial (local).
 * Las portadas se cargan localmente desde la carpeta de assets del proyecto.
 */

const EXTERNAL_AUDIO_BASE = "https://chyplaylistmusicfunction.netlify.app/";
const LOCAL_ASSETS_BASE = "/assets/music/cover/"; // Ajusta esta ruta según la estructura de tu carpeta pública

export const musicPlayerConfig: MusicPlayerConfig = {
    showInNavbar: true,
    mode: "local",
    volume: 0.7,
    playMode: "list",
    showLyrics: false,

    local: {
        playlist: [
            {
                name: "Five Nights at Freddy's 2 Song",
                artist: "The Living Tombstone",
                url: `${EXTERNAL_AUDIO_BASE}1.m4a`,
                cover: `${LOCAL_ASSETS_BASE}1.jpg`,
                lrc: ""
            },
            {
                name: "Build Our Machine",
                artist: "DAGames",
                url: `${EXTERNAL_AUDIO_BASE}2.m4a`,
                cover: `${LOCAL_ASSETS_BASE}2.jpg`,
                lrc: ""
            },
            {
                name: "Holding Out For A Hero",
                artist: "Bonnie Tyler",
                url: `${EXTERNAL_AUDIO_BASE}3.m4a`,
                cover: `${LOCAL_ASSETS_BASE}3.jpg`,
                lrc: ""
            },
            {
                name: "My ordinary life",
                artist: "The Living Tombstone",
                url: `${EXTERNAL_AUDIO_BASE}4.m4a`,
                cover: `${LOCAL_ASSETS_BASE}4.jpg`,
                lrc: ""
            },
            {
                name: "A Little Faster",
                artist: "There For Tomorrow",
                url: `${EXTERNAL_AUDIO_BASE}5.m4a`,
                cover: `${LOCAL_ASSETS_BASE}5.jpg`,
                lrc: ""
            },
            {
                name: "Party Tonight",
                artist: "Mordecai y los Rigbys",
                url: `${EXTERNAL_AUDIO_BASE}6.m4a`,
                cover: `${LOCAL_ASSETS_BASE}6.jpg`,
                lrc: ""
            },
            {
                name: "Cosmic Girl",
                artist: "Jamiroquai",
                url: `${EXTERNAL_AUDIO_BASE}7.m4a`,
                cover: `${LOCAL_ASSETS_BASE}7.jpg`,
                lrc: ""
            },
            {
                name: "Cat",
                artist: "C418",
                url: `${EXTERNAL_AUDIO_BASE}8.m4a`,
                cover: `${LOCAL_ASSETS_BASE}8.jpg`,
                lrc: ""
            },
            {
                name: "Música de ascensor",
                artist: "Desconocido",
                url: "/assets/music/Musica-de-Ascensor.m4a", // Archivo local en el repo
                cover: "", // Sin portada
                lrc: ""
            },
            {
                name: "Sugary Spire Ost - Results!",
                artist: "Sugary Spire",
                url: `${EXTERNAL_AUDIO_BASE}9.m4a`,
                cover: `${LOCAL_ASSETS_BASE}9.jpg`,
                lrc: ""
            },
            {
                name: "Baby Doll",
                artist: "Dominic Fike",
                url: `${EXTERNAL_AUDIO_BASE}10.m4a`,
                cover: `${LOCAL_ASSETS_BASE}10.jpg`,
                lrc: ""
            },
            {
                name: "Levan Polkka",
                artist: "Hatsune Miku",
                url: `${EXTERNAL_AUDIO_BASE}11.m4a`,
                cover: `${LOCAL_ASSETS_BASE}11.jpg`,
                lrc: ""
            },
            {
                name: "Edgy",
                artist: "Luvwillow",
                url: `${EXTERNAL_AUDIO_BASE}12.m4a`,
                cover: `${LOCAL_ASSETS_BASE}12.jpg`,
                lrc: ""
            },
            {
                name: "El amar y el querer",
                artist: "José José",
                url: `${EXTERNAL_AUDIO_BASE}13.m4a`,
                cover: `${LOCAL_ASSETS_BASE}13.jpg`,
                lrc: ""
            },
            {
                name: "Vivo",
                artist: "Gustavo Cerati",
                url: `${EXTERNAL_AUDIO_BASE}14.m4a`,
                cover: `${LOCAL_ASSETS_BASE}14.jpg`,
                lrc: ""
            },
            {
                name: "Extraño",
                artist: "Miranda!",
                url: `${EXTERNAL_AUDIO_BASE}15.m4a`,
                cover: `${LOCAL_ASSETS_BASE}15.jpg`,
                lrc: ""
            },
            {
                name: "Samba do Brasil",
                artist: "Bellini",
                url: `${EXTERNAL_AUDIO_BASE}16.m4a`,
                cover: `${LOCAL_ASSETS_BASE}16.jpg`,
                lrc: ""
            },
            {
                name: "Puppet",
                artist: "Tyler, The Creator",
                url: `${EXTERNAL_AUDIO_BASE}17.m4a`,
                cover: `${LOCAL_ASSETS_BASE}17.jpg`,
                lrc: ""
            },
            {
                name: "Niña bonita",
                artist: "Chino & Nacho",
                url: `${EXTERNAL_AUDIO_BASE}18.m4a`,
                cover: `${LOCAL_ASSETS_BASE}18.jpg`,
                lrc: ""
            },
            {
                name: "Niño",
                artist: "Milo J",
                url: `${EXTERNAL_AUDIO_BASE}19.m4a`,
                cover: `${LOCAL_ASSETS_BASE}19.jpg`,
                lrc: ""
            }
        ]
    }
};

