var data = {
  view: 'Monday',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', () => {
  localStorage.setItem('plannerEntries', JSON.stringify(data));
});
if (localStorage.getItem('plannerEntries')) {
  data = JSON.parse(localStorage.getItem('plannerEntries'));
}

var $form = document.querySelector('form');
// var $submitButton = document.querySelector('.submit-button');
var $submitModal = document.querySelector('#modal');

var logEntry = event => {
  event.preventDefault();

  if (!data.editing) {
    var $newEntry = {
      date: $form.elements.date.value,
      time: $form.elements.time.value,
      description: $form.elements.description.value,
      entryId: data.nextEntryId
    };

    data.entries.unshift($newEntry);
    $form.reset();

    // var $newDom = renderEntry($newEntry);
    data.nextEntryId++;
    // } else {
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
  }
};

var submitClose = () => {
  $submitModal.className = 'hidden';
};

var renderEntry = entry => {

  // Create all new elements
  var $tr = document.createElement('tr');
  var $tdTime = document.createElement('td');
  var $buttonDiv = document.createElement('div');
  var $updateButton = document.createElement('button');
  var $deleteButton = document.createElement('button');
  var $tdDesc = document.createElement('td');

  // Assign attributes and content to elements
  $tr.setAttribute('id', entry.entryId);
  $tdTime.className = 'table-column-one';
  $tdDesc.className = 'table-column-two';
  $buttonDiv.className = 'edit-buttons';
  $updateButton.className = 'update-button';
  $deleteButton.className = 'delete-button';

  // Assign text content

  // Append elements
  // $imgDiv.appendChild($imgEl);
  // $titleDiv.appendChild($imgTitle);
  // $titleDiv.appendChild($editIcon);
  // $textDiv.appendChild($titleDiv);
  // $textDiv.appendChild($imgNotes);
  // $liDiv.appendChild($imgDiv);
  // $liDiv.appendChild($textDiv);
  // $entryLi.appendChild($liDiv);

  return $entryLi;
};

$form.addEventListener('submit', logEntry);
$submitButton.addEventListener('click', submitClose);
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

function showModal(event) {
  if (event.target.className === 'delete-button') {
    $deleteModal.className = '';
  } else if (event.target.className === 'update-button' || event.target.className === 'add-entry') {
    $submitModal.className = '';
  }
}

$cancelButton.addEventListener('click', hideDelete);

var $table = document.querySelector('table');
$table.addEventListener('click', showModal);

var $updateButton = document.querySelector('.update-button');
$updateButton.addEventListener('click', showModal);

var $addEntry = document.querySelector('.add-entry');
$addEntry.addEventListener('click', showModal);
