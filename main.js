// var $form = document.querySelector('form');
// var $submitButton = document.querySelector('.submit-button');
var $submitModal = document.querySelector('#modal');

// var logEntry = event => {
//   event.preventDefault();

//   if (!data.editing) {
//     var $newEntry = {
//       date: $form.elements.date.value,
//       time: $form.elements.time.value,
//       description: $form.elements.description.value,
//       entryId: data.nextEntryId
//     };

//     data.entries.unshift($newEntry);
//     $form.reset();

//     // var $newDom = renderEntry($newEntry);
//     data.nextEntryId++;
//   }

// else {
//   var $updatedEntry = {
//     title: $form.elements.title.value,
//     photoUrl: $form.elements['img-src'].value,
//     notes: $form.elements['img-notes'].value,
//     entryId: data.editing.entryId
//   };

//   data.entries.splice(editEntryIndex, 1, $updatedEntry);

//   var $entryLiNodes = document.querySelectorAll('li[data-entry-id]');

//   $entryLiNodes[editEntryIndex].replaceWith(renderEntry($updatedEntry));
//   $entryFormHeader.textContent = 'New Entry';
//   data.editing = null;
//   $delAnchor.className = 'invisible';
// }
// viewSwap('entries');
// toggleNoEntries(data.entries);
// };

// var submitClose = () => {
//   $submitModal.className = 'hidden';
// };

// var renderEntry = entry => {

// Create all new elements
// var $entryLi = document.createElement('li');
// var $liDiv = document.createElement('div');
// var $imgDiv = document.createElement('div');
// var $imgEl = document.createElement('img');
// var $textDiv = document.createElement('div');
// var $imgTitle = document.createElement('h4');
// var $imgNotes = document.createElement('p');
// var $editIcon = document.createElement('i');
// var $titleDiv = document.createElement('div');

// Assign attributes and content to elements
// $liDiv.className = 'row';
// $entryLi.setAttribute('data-entry-id', entry.entryId);
// $imgDiv.className = 'column-half';
// $imgEl.setAttribute('src', entry.photoUrl);
// $textDiv.className = 'column-half';
// $titleDiv.className = 'title-header';
// $imgTitle.textContent = entry.title;
// $editIcon.className = 'fa-solid fa-pen';
// $imgNotes.textContent = entry.notes;

// // Append elements
// $imgDiv.appendChild($imgEl);
// $titleDiv.appendChild($imgTitle);
// $titleDiv.appendChild($editIcon);
// $textDiv.appendChild($titleDiv);
// $textDiv.appendChild($imgNotes);
// $liDiv.appendChild($imgDiv);
// $liDiv.appendChild($textDiv);
// $entryLi.appendChild($liDiv);

//   return $entryLi;
// };

// $form.addEventListener('submit', logEntry);
// $submitButton.addEventListener('click', submitClose);
var $deleteModal = document.querySelector('#modal-delete');
var $deleteButton = document.querySelector('.delete-button');
var $confirmButton = document.querySelector('#confirm-button');
var $cancelButton = document.querySelector('#cancel-button');
$deleteButton.addEventListener('click', function (event) {
  $deleteModal.className = '';
});

$confirmButton.addEventListener('click', hideDelete);
function hideDelete(event) {
  $deleteModal.className = 'hidden';
}

function showDelete(event) {
  if (event.target.className === 'delete-button') {
    $deleteModal.className = '';
  }
}
$cancelButton.addEventListener('click', hideDelete);

var $table = document.querySelector('table');
$table.addEventListener('click', showDelete);

var $updateButton = document.querySelector('.update-button');
$updateButton.addEventListener('click', showModal);
function showModal(event) {
  if (event.target.className === 'update-button' || event.target.className === 'add-entry') {
    $submitModal.className = '';
  }
}
