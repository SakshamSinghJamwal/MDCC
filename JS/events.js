// Setup Credentials.
const firebaseConfig = {
  apiKey: "AIzaSyBmANtQclxh0IPiKeA9iaQvXnX_34_FE_Y",
  authDomain: "ieee-website-miet.firebaseapp.com",
  databaseURL: "https://ieee-website-miet-default-rtdb.firebaseio.com",
  projectId: "ieee-website-miet",
  storageBucket: "ieee-website-miet.appspot.com",
  messagingSenderId: "1071803550604",
  appId: "1:1071803550604:web:87cfbb4f5a1f2a9ceba4a9"
};
   
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Reference to the database
var database = firebase.database();

// // Your JSON data
// var jsonData = {
//   "ClassName": "IEEE-MIET",
//   "event-item1": {
//     "title": "Some title here",
//     "date": "22 Dec 2023",
//     "body": "here is the body of the event"
//   },
//   "event-item2": {
//     "title": "Some another title here",
//     "date": "6 Jan 2024",
//     "body": "here is the body of the event 2"
//   },
//   "event-item3": {
//     "title": "Event 3rd",
//     "date": "8 Jul 2024",
//     "body": "here is the body of the event 3"
//   }
// };

// // Push the JSON data to Firebase
// database.ref('/IEEE-MIET-Jammu').set(jsonData);


const eventsContainer = document.querySelector(".uc-event-bulk");
//const jsonLoadElement = document.getElementById("json-load");
//  jsonLoadElement.textContent = JSON.stringify(jsonData, null, 2);

// Retrieve the JSON data from Firebase
database.ref('/IEEE-MIET-Jammu').once('value').then(function(snapshot) {
var jsonData = snapshot.val();


  for (const key in jsonData) {
    if (key.startsWith("event-item")) {
      const event = jsonData[key];
      const eventItem = document.createElement("div");
      eventItem.classList.add("uc-event-item");

      const titleElement = document.createElement("p");
      titleElement.id = "head";
      titleElement.innerHTML = `${event.title} <span><i class="fas fa-calendar-alt"></i> ${event.date}</span>`;

      const bodyElement = document.createElement("p");
      bodyElement.id = "body";
      bodyElement.textContent = event.body;

      // Display it event section again
      document.querySelector(".uc-event-section").style.display = 'flex';
      eventItem.appendChild(titleElement);
      eventItem.appendChild(bodyElement);
      eventsContainer.appendChild(eventItem);
    }
  }
});
