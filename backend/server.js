require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { fetchArtistInfo } = require("../backend/api");

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors()); // Allow frontend to access API
const PORT = 3000;

const API_KEY = process.env.LASTFM_API_KEY;
const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

// Helper function to fetch data from Last.fm API
async function fetchFromLastFM(params) {
    const queryParams = new URLSearchParams({ ...params, api_key: API_KEY, format: 'json' });
    const response = await fetch(`${BASE_URL}?${queryParams}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

// 📌 1️⃣ Get Artist Info
app.get('/artist/:name', async (req, res) => {
    try {
        const data = await fetchFromLastFM({ method: 'artist.getinfo', artist: req.params.name });
        res.json(data.artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 2️⃣ Get Artist's Top Tracks
app.get('/artist/:name/toptracks', async (req, res) => {
    try {
        const data = await fetchFromLastFM({ method: 'artist.gettoptracks', artist: req.params.name });
        res.json(data.toptracks.track);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 3️⃣ Get Artist's Top Albums
app.get('/artist/:name/topalbums', async (req, res) => {
    try {
        const data = await fetchFromLastFM({ method: 'artist.gettopalbums', artist: req.params.name });
        res.json(data.topalbums.album);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 4️⃣ Get Album Info
app.get('/album/:artist/:album', async (req, res) => {
    try {
        const data = await fetchFromLastFM({ method: 'album.getinfo', artist: req.params.artist, album: req.params.album });
        res.json(data.album);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 5️⃣ Get Track Info
app.get('/track/:artist/:track', async (req, res) => {
    try {
        const data = await fetchFromLastFM({ method: 'track.getInfo', artist: req.params.artist, track: req.params.track });
        res.json(data.track);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 6️⃣ Get Similar Artists
app.get('/artist/:name/similar', async (req, res) => {
    try {
        const data = await fetchFromLastFM({ method: 'artist.getsimilar', artist: req.params.name });
        res.json(data.similarartists.artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 7️⃣ Get Genre Tags for an Artist
app.get('/artist/:name/tags', async (req, res) => {
    try {
        const data = await fetchFromLastFM({ method: 'artist.gettoptags', artist: req.params.name });
        res.json(data.toptags.tag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 8️⃣ Search for Artists
app.get('/search/artist/:name', async (req, res) => {
    try {
        const data = await fetchFromLastFM({ method: 'artist.search', artist: req.params.name });
        res.json(data.results.artistmatches.artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 9️⃣ Get a Random Riddle
app.get('/riddle', async (req, res) => {
    const apiUrl = `https://api.api-ninjas.com/v1/riddles`;
    const apiKey = process.env.RIDDLES_API_KEY;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching riddle: ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
