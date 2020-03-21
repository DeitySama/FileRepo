var firebaseConfig = {
	//fb config here
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db =firebase.firestore();
  const auth =firebase.auth();
  const storage= firebase.storage();

  db.settings({timeStampsInSnapshots: true});
 