async function getUserByUsername(username) {
    const url = `https://directus-ucmn.onrender.com/users?filter[username][_eq]=${username}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        
        if (response.ok) {
            return data.data;
        } else {
            throw new Error(`Error fetching user by username: ${data.errors}`);
        }
    } catch (error) {
        console.error('Error fetching user by username:', error);
    }
}

async function getUserByEmail(email) {
    const url = `https://directus-ucmn.onrender.com/users?filter[email][_eq]=${email}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        
        if (response.ok) {
            return data.data;
        } else {
            throw new Error(`Error fetching user by email: ${data.errors}`);
        }
    } catch (error) {
        console.error('Error fetching user by email:', error);
    }
}

module.exports = {
    getUserByUsername,
    getUserByEmail
};
