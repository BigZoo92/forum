const API_URL = 'http://localhost:3000/api/users';

export async function fetchUsersById(userId) {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des utilisateurs');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}

export async function fetchUserByMessageId(messageId) {
  try {
    const response = await fetch(`${API_URL}/message/${messageId}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de l\'utilisateur par messageId');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}
