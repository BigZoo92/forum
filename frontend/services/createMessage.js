const backendUrl = process.env.VUE_APP_BACKEND_URL;

export async function createMessage(content, room) { //roomId
  try {
    const response = await fetch(`${backendUrl}api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content, room })
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la création du message');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}
