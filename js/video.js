var vWidth

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> ands
// YouTube player after the API code downloads.
/*var player;
function onYouTubePlayerAPIReady() {
    sizeChanged()
    //alert('change2!: ' + vWidth)
    player = new YT.Player('ytplayer', {
    height: vWidth * 0.5625, //'360',
    width: vWidth , //'640',
    videoId: 'G44rTY6ZuKQ' //https://www.youtube.com/watch?v=G44rTY6ZuKQ
    });
}*/

//calcul taille restante pour afficher la video
function sizeChanged() {
    vWidth = document.getElementsByClassName('interfaceVideo')[0].clientWidth - 550;
    //alert('change1!: ' + vWidth + "-" + vWidth * 0.5625)
    //onYouTubePlayerAPIReady()
}

//window.onresize = onYouTubePlayerAPIReady

function populateEquipe() {
    fetch('./donnees/listeMatch.json')
      .then(response => response.json())
      .then(data => {
        const selectEquipe = document.getElementById('selectEquipe');
        data.forEach((row, index) => {
            if (row.Journee == 3){
                //alert("journée: " + row.Journee)
                const newEquipeLoc = document.createElement('option');
                const newEquipeExt = document.createElement('option');
                newEquipeLoc.value = row.EquipeLoc
                newEquipeLoc.text = row.EquipeLoc

                newEquipeExt.value = row.EquipeExt
                newEquipeExt.text = row.EquipeExt

                selectEquipe.add(newEquipeLoc)
                selectEquipe.add(newEquipeExt)
            }
        });
      })
      .catch(error => console.log(error));
  }

  // Call the function to populate Teams on page load
  populateEquipe()

  //adaptation taille video sur chargement
  
