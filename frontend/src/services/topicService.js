const backendUrl = process.env.VUE_APP_BACKEND_URL;

export async function fetchRooms() {
  try {
    const response = await fetch(`${backendUrl}api/rooms`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des rooms');
    }
    console.log(response)
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}

export async function fetchRoomsById(topicId) {
  try {
    const response = await fetch(`${backendUrl}api/rooms/${topicId}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des rooms');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}
