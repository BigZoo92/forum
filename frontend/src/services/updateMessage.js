const backendUrl = process.env.VUE_APP_BACKEND_URL;

export async function updateMessage(id, updatedData) {
  try {
    const response = await fetch(`${backendUrl || '/'}api/messages/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour du message');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}
