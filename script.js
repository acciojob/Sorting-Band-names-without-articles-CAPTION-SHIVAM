// Input array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'Red Hot Chili Peppers', 'The Rolling Stones'];

function removeArticles(name) {
  // Regular expression to match articles
  const articleRegex = /^(a|an|the)\s/i;
  
  // Remove the article from the beginning of the name
  return name.replace(articleRegex, '');
}

// Sort the band names in lexicographic order without articles
let sortedBands = bandNames.sort((a, b) => {
  // Remove articles from the band names for comparison
  let nameA = removeArticles(a).toLowerCase();
  let nameB = removeArticles(b).toLowerCase();
  
  // Compare the modified band names
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

// Generate the HTML list
let ulElement = document.createElement('ul');
ulElement.setAttribute('id', 'band');

sortedBands.forEach((band) => {
  let liElement = document.createElement('li');
  liElement.textContent = band;
  ulElement.appendChild(liElement);
});

// Add the list to the document
document.body.appendChild(ulElement);