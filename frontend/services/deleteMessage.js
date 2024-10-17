const backendUrl = process.env.VUE_APP_BACKEND_URL;

export async function deleteMessage(id) {
  try {
    const response = await fetch(`${backendUrl}api/messages/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la suppression du message');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}
