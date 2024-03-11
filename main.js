function populateLectures() {
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);
  const chosenDay = parseInt(document.getElementById('theoryDay').value, 10);
  const frequency = parseInt(document.getElementById('theory_lec_freq').value, 10);
  const lectureRow = document.getElementById('theorylectureRow');

  // Clear existing cells content
  for (let i = 0; i < lectureRow.cells.length; i++) {
    lectureRow.cells[i].innerHTML = '';
  }

  let dateIterator = new Date(startDate);

  // Adjust dateIterator to the first occurrence of the chosen day
  while (dateIterator.getDay() !== chosenDay) {
    dateIterator.setDate(dateIterator.getDate() + 1);
  }

  for (let i = 0; dateIterator <= endDate; i++) {
    
    const currentCellIndex = i;

    const currentCell = lectureRow.cells[currentCellIndex];

    // Format date and frequency
    const formattedDate = dateIterator.toLocaleDateString();
    
    const freq = document.getElementById('theory_lec_freq').value;
    currentCell.innerHTML = `${formattedDate} ${freq}`

    // Increment dateIterator to the next valid date
    dateIterator.setDate(dateIterator.getDate() + (7 - dateIterator.getDay() + chosenDay) % 7 + 7);
  }
}

function populateLectures2() {
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);
  const chosenDay2 = parseInt(document.getElementById('practicalDay').value, 10);
  const frequency2 = parseInt(document.getElementById('practical_lec_freq').value, 10);
  const lectureRow2 = document.getElementById('practicallectureRow');

  // Clear existing cells content
  for (let i = 0; i < lectureRow2.cells.length; i++) {
    lectureRow2.cells[i].innerHTML = '';
  }

  let dateIterator2 = new Date(startDate);

  // Adjust dateIterator to the first occurrence of the chosen day
  while (dateIterator2.getDay() !== chosenDay2) {
    dateIterator2.setDate(dateIterator2.getDate() + 1);
  }

  for (let i = 0; dateIterator2 <= endDate; i++) {

    const currentCellIndex2 = i;
    
    const currentCell2 = lectureRow2.cells[currentCellIndex2];

    // Format date and frequency
    const formattedDate2 = dateIterator2.toLocaleDateString();
    
    const freq2 = document.getElementById('practical_lec_freq').value;
    currentCell2.innerHTML = `${formattedDate2} ${freq2}`

    // Increment dateIterator to the next valid date
    dateIterator2.setDate(dateIterator2.getDate() + (7 - dateIterator2.getDay() + chosenDay2) % 7 + 7);
  }
}

