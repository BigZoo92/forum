export async function fetchMessagesByForum(forumId) {
  try {
    const response = await fetch(`http://localhost:3000/api/messages/${forumId}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des messages');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}
