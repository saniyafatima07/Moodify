const BASE_URL = "http://localhost:3000";  // Your backend URL

async function fetchArtistInfo(artistName) {
    try {
        const response = await fetch(`${BASE_URL}/artist/${encodeURIComponent(artistName)}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching artist info:", error);
        return null;
    }
}

// 📌 Fetch Random Riddle
async function fetchRiddle() {
    try {
        const response = await fetch(`${BASE_URL}/riddle`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching riddle:", error);
        return null;
    }
}

// Export new function
export { fetchArtistInfo, fetchRiddle };

