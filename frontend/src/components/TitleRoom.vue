<template>
    <div class="card__wrapper">
                <div class="card__data-flex">
                    <p class="card__name">Discussion sur le nombre de machines 3D</p> 
                    <p class="card__date">2 hours ago</p>
                </div>
                <button class="button">Voir</button>
            </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>

.card__wrapper {
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #262D34;
    padding: 24px;
    gap: 24px;
    margin-top: 24px;
    border-radius: 12px;
}

@media (max-width: 1280px) {
    .card__wrapper {
        width: 90%;
        
    }
}

.card__data-flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.card__name {
    font-size: 18px;
}

.card__date {
    font-size: 16px;
    font-weight: 300;
    color: #C5D0E6;
}

@media (max-width: 1280px) {
    .card__date {
        font-size: 14px;
    }
}

.card__button {
    padding: 12px 24px;
    font-size: 18px;
    font-weight: 500;
    background: #FF6934;
}
  </style>
  