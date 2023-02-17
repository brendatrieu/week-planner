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
