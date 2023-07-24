var fichierVideoSel

//màj liste matches
 // Function to fetch and populate table rows from JSON data
 function populateTableRows() {
    fetch('./donnees/listeMatch.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.getElementById('table-body');
        data.forEach((row, index) => {
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
          <td onclick="window.location.href = 'video.html'">${row.Journee}</td>
          <td onclick="window.location.href = 'video.html'">${row.Date}</td>
          <td onclick="window.location.href = 'video.html'">${row.EquipeLoc}</td>
          <td onclick="window.location.href = 'video.html'">${row.ScoreLoc} - ${row.ScoreExt}</td>
          <td onclick="window.location.href = 'video.html'">${row.EquipeExt}</td>
          <td onclick="window.location.href = 'video.html'">${row.FormuleSaisie}</td>
          <td><input id="fichierVideo${index}" type="file" accept="video/*" onchange="majFichierVideo(${index})" /></td>
          <td><input type="checkbox" ${row.InterfaceJoueur}/></td>
          <td><span class="las la-edit"></td>
          `;
          //<td><a href="${row.LienVideo}">Lien vers la video</a></td>
          tableBody.appendChild(newRow);
        });
      })
      .catch(error => console.log(error));
  }

  // Function to add a new row to the table
  function ajouterLigne() {
    const tableBody = document.getElementById('table-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td><input type="checkbox" /></td>
      <td>Exemple ${tableBody.childElementCount + 1}</td>
      <td><a href="page${tableBody.childElementCount + 1}.html">Lien vers la video ${tableBody.childElementCount + 1}</a></td>
    `;
    //<td><input type="file" accept="video/*,.pdf" /></td>
    tableBody.appendChild(newRow);
  }

  function majFichierVideo(idx){
    fichierVideoSel = document.getElementById('fichierVideo' + idx).value
    alert('fichier: '+ idx + " - " + fichierVideoSel)
  }

  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  // Call the function to populate table rows on page load
  populateTableRows();