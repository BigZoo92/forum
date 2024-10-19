# Lancer le super forum textuel en local avec Docker 🤔

## 1. Installer les dépendances node
À la racine de votre projet, lancez cette commande :

```bash
npm i
```

## 2. Le Build Docker
A la racine de votre projet, lancer cette commande :

```bash
docker build -t app-backend-frontend .
```
Vous devrez avoir une superbe image créée !

<img width="454" alt="image" src="https://github.com/user-attachments/assets/8f85d3c6-b8bb-4c67-b01f-d366f894d193">

## 3. Run le container
Cliquer sur l’image en question depuis Docker Desktop et cliquer sur run!

<img width="454" alt="image" src="https://github.com/user-attachments/assets/bb11bd69-107c-413c-bab2-c3891afb84a0">

Docker vous précisera si vous voulez des paramètres additionnels, faites défiler le menu accordéon et préciser le port sur lequel vous voulez que container run. Dans notre cas c’est le 3000.

<img width="454" alt="image" src="https://github.com/user-attachments/assets/cbed5b59-d73d-4174-8b38-bd99ec3c4dba">

Cliquer sur run et c’est bon ! vous devriez voir votre appli tourner sur le port 3000!

<img width="450" alt="image" src="https://github.com/user-attachments/assets/b5b078f5-7c5a-47d0-985d-bbbdb5f2ef76">

<img width="454" alt="image" src="https://github.com/user-attachments/assets/87f65df2-3981-4eaf-ad3e-aae770d35557">



