//import firebase from '@firebase/app';
//import * as firebase from 'firebase';
// import  firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/storage';
// import firebase from 'firebase'
// import 'firebase/storage' // <-
var firebaseConfig = {
	apiKey: "AIzaSyDAoBr-F5NZwJuJcfpTJ2wlkpXS0cqA5xc",
	authDomain: "avenger-internship-careers.firebaseapp.com",
	databaseURL: "https://avenger-internship-careers.firebaseio.com",
	projectId: "avenger-internship-careers",
	storageBucket: "avenger-internship-careers.appspot.com",
	messagingSenderId: "394226284930",
	appId: "1:394226284930:web:56367f20170c4ea03fb79b"
  };

// Init Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// start grabbing our DOM element
const submitBtn = document.getElementById("submit");

var files = [];
var filename;
var storageRef;
var uploadTask;
document.getElementById("files").addEventListener("change", function(e) {
	files = e.target.files[0];
	let storageRef = firebase.storage().ref('resume'+files.name);
	let uploadTask = storageRef.put(files);

	uploadTask.on('state-changed', function progress(snapshot) {

		let percentage = snapshot.bytesTransferred/snapshot.totalBytes * 100;
		console.log(percentage);

	}, function(error) {

	}, function() {
		var downloadURL = uploadTask.snapshot.downloadURL;
		console.log(downloadURL);
	});
});


let applicantName = document.getElementById("name");
let applicantEmail = document.getElementById("email");
let findUs = document.getElementById("find-us");
let msg = document.getElementById("why");

const db = firestore.collection("applicant-data");

submit.addEventListener('click', function(){
	let applicantNameInput = applicantName.value;
	let applicantEmailInput = applicantEmail.value;
	let findUsInput = findUs.value;
	let msgInput = msg.value;

	db.doc().set({
		name: applicantEmailInput,
		email: applicantEmailInput,
		findUs: findUsInput,
		msg: msgInput,

	}).then(function(){
		console.log("Data saved");
	}).catch(function(error){
		console.log(error);
	});
});

