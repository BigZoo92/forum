export async function inviteUserIfMentioned(message, topicLink) {
  const mentionedUser = message.match(/@(\w+)/);
  
  if (mentionedUser) {
    const username = mentionedUser[1];

    const userResponse = await fetch(`http://localhost:3000/api/users/${username}`);
    
    if (userResponse.ok) {
      const userData = await userResponse.json();

      const inviteResponse = await fetch('http://localhost:3000/api/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user1: 'CurrentUser',
          user2: userData.email,
          topicLink: topicLink
        })
      });

      if (inviteResponse.ok) {
        console.log('Invitation envoyée avec succès.');
      } else {
        console.error('Échec de l\'envoi de l\'invitation.');
      }
    } else {
      console.error('Utilisateur non trouvé.');
    }
  } else {
    console.log('Aucun utilisateur mentionné.');
  }
}
