const backendUrl = process.env.VUE_APP_BACKEND_URL;

export async function fetchMessagesByForum(forumId) {
  try {
    const response = await fetch(`${backendUrl || '/'}api/messages/${forumId}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des messages');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}
