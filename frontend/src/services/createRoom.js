const backendUrl = process.env.VUE_APP_BACKEND_URL;

export async function createRoom(title) {
  

    try {
      const response = await fetch(`${backendUrl || '/'}api/rooms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la création de la room');
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur :', error);
      throw error;
    }
  }
  