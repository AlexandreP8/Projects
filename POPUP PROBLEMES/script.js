fetch('liste_pb.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('button1').textContent = data.button1;
    document.getElementById('button2').textContent = data.button2;
    document.getElementById('button3').textContent = data.button3;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération du fichier JSON :', error);
  });
