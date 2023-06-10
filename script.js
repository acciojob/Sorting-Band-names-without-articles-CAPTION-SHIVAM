// Input array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'Red Hot Chili Peppers', 'The Rolling Stones'];

// Function to sort band names excluding articles
function sortBandNames(names) {
  // Regular expression to match articles ('a', 'an', 'the') at the beginning of the band names
  const articleRegex = /^(a |an |the )/i;

  // Sort the band names in lexicographic order excluding articles
  names.sort((a, b) => {
    // Remove articles from the band names for comparison
    const nameA = a.replace(articleRegex, '');
    const nameB = b.replace(articleRegex, '');
    return nameA.localeCompare(nameB);
  });

  return names;
}

// Sort the band names
let sortedBandNames = sortBandNames(bandNames);

// Get the ul element by id
let ulElement = document.querySelector('#band');

// Add band names as list items
sortedBandNames.forEach(name => {
  let liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});
