async function getAccessToken() {
    const fetch = require('node-fetch');

    const url = 'https://directus-ucmn.onrender.com/auth/login';
    const body = {
        email: "test@test.fr",
        password: "azerty"
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        console.log(data)
        if (response.ok) {
            return data.data.access_token;
        } else {
            throw new Error(`Error: ${data}`);
        }
    } catch (error) {
        console.error('Error fetching the access token:', error);
    }
}

module.exports = { getAccessToken };