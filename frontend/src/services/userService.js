const backendUrl = process.env.VUE_APP_BACKEND_URL;

export async function fetchUsersById(userId) {
  try {
    const response = await fetch(`${backendUrl || '/'}api/users${userId}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des utilisateurs');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}
