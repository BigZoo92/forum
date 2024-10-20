export async function inviteUserIfMentioned(sender, message, topicLink) {
  const mentionedUser = message.match(/@(\w+)/);
  
  if (mentionedUser) {
    const username = mentionedUser[1];
      const inviteResponse = await fetch('http://localhost:3000/api/users/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user1: sender,
          user2: username,
          topicLink: topicLink
        })
      });

      if (inviteResponse.ok) {
        console.log('Invitation envoyée avec succès.');
      } else {
        console.error('Échec de l\'envoi de l\'invitation.');
      }
  } else {
    console.log('Aucun utilisateur mentionné.');
  }
}
