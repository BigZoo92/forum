export async function deleteRoom(id) {
    try {
      const response = await fetch(`${backendUrl}api/rooms/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de la room');
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur :', error);
      throw error;
    }
  }
  