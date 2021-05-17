const departures = [
  {
    time: { hrs: 8, mins: 14 },
    train: 'Acela Express',
    no: 2153,
    to: 'Washington, DC',
    status: '',
    track: 2,
  },
  {
    time: { hrs: 8, mins: 19 },
    train: 'New Haven Line',
    no: 1541,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14,
  },
  {
    time: { hrs: 8, mins: 20 },
    train: 'Shore Line East',
    no: 1606,
    to: 'Old Saybrook',
    status: 'On Time',
    track: 12,
  },
  {
    time: { hrs: 8, mins: 37 },
    train: 'N.E. Regional',
    no: 190,
    to: 'Boston South Station',
    status: 'Cancelled',
    track: 1,
  },
  {
    time: { hrs: 8, mins: 40 },
    train: 'Shuttle',
    no: 490,
    to: 'Springfield',
    status: 'On Time',
    track: 3,
  },
  {
    time: { hrs: 8, mins: 43 },
    train: 'N.E. Regional',
    no: 96,
    to: 'Newport News',
    status: 'On Time',
    track: 2,
  },
  {
    time: { hrs: 8, mins: 50 },
    train: 'New Haven Line',
    no: 1545,
    to: 'Grand Central Terminal',
    status: 'Cancelled',
    track: 8,
  },
  {
    time: { hrs: 9, mins: 16 },
    train: 'Shore Line East',
    no: 1610,
    to: 'Old Saybrook',
    status: 'On Time',
    track: 10,
  },
  {
    time: { hrs: 9, mins: 23 },
    train: 'New Haven Line',
    no: 1549,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14,
  },
  {
    time: { hrs: 9, mins: 36 },
    train: 'Acela Express',
    no: 2150,
    to: 'Boston-South Sta.',
    status: '',
    track: 1,
  },
  {
    time: { hrs: 9, mins: 46 },
    train: 'New Haven Line',
    no: 1551,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 8,
  },
  {
    time: { hrs: 10, mins: 13 },
    train: 'N.E. Regional',
    no: 170,
    to: 'Boston South Station',
    status: 'On Time',
    track: 2,
  },
  {
    time: { hrs: 10, mins: 25 },
    train: 'New Haven Line',
    no: 1553,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14,
  },
]


const addTableData = (tr, className, textContent) => {

  const td = document.createElement('td'); // <td></td>
  td.classList.add(className); // <td class="board__train"></td>
  td.innerText = textContent; // <td class="board__train">Acela Express</td>

  tr.appendChild(td);

  return td;

}

const tbody = document.querySelector('.board__table tbody');
departures.forEach((row) => {

  const tr = document.createElement('tr'); // <tr></tr>

  const td_time = document.createElement('td'); // <td></td>
  td_time.classList.add('board__time'); // <td class="board__time"></td>
  td_time.innerText = `${row.time.hrs}:${row.time.mins}`; // <td class="board__time">8:14</td>

  tr.appendChild(td_time); // <tr><td class="board__time">8:14</td></tr>


  const td_train = document.createElement('td'); // <td></td>
  td_train.classList.add('board__train'); // <td class="board__train"></td>
  td_train.innerText = row.train; // <td class="board__train">Acela Express</td>

  tr.appendChild(td_train); // <tr><td class="board__time">8:14</td><td class="board__train">Acela Express</td></tr>

  addTableData(tr, 'board_no', row.no);
  addTableData(tr, 'board__to', row.to);
  addTableData(tr, 'board__status', row.status);
  addTableData(tr, 'board__track', row.track);

  // prepare the <td></td> that will contain the button
  const button_td = addTableData(tr, 'board__button', '');

  // prepare the <button>
  const button = document.createElement('button');
  button.innerText = 'Delayed';
  button.addEventListener('click', () => {

    // find the <td class="board__status"></td>
    const status_td = tr.querySelector('.board__status');

    if (tr.classList.contains('delayed')) { // <tr> HAS the `delayed` class

      // remove `delayed` from to the <tr></tr>
      tr.classList.remove('delayed');

      // set its innerText to the previous innerText of the <td></td>
      status_td.innerText = status_td.getAttribute('data-previous-value');

    } else { // the <tr> does NOT have the `delayed` class

      // add `delayed` class to the <tr></tr>
      tr.classList.add('delayed');

      // keep the current innerText of the <td></td> for later
      status_td.setAttribute('data-previous-value', status_td.innerText);

      // set its innerText to 'Delayed'
      status_td.innerText = 'Delayed';
    }

  })

  // insert the <button> into its <td></td>
  button_td.appendChild(button);

  // append the finished <tr> to the <tbody> (already in the page)
  tbody.appendChild(tr);

  // tbody.innerHTML += `
  //   <tr>
  //     <td class="board__time">${row.time.hrs}:${row.time.mins}</td>
  //     <td class="board__train">${row.train}</td>
  //     <td class="board__no">${row.no}</td>
  //     <td class="board__to">${row.to}</td>
  //     <td class="board__status">${row.status}</td>
  //     <td class="board__track">${row.track}</td>
  //   </tr>
  // `
});