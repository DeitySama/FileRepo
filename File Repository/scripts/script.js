  const upload = document.getElementById('upload');
  const uploadAnimation = document.querySelector('.uploadProcess');
  upload.addEventListener('submit', async (e) => {
      e.preventDefault();
    upload.style.display ="none";
    uploadAnimation.style.display="block";
      const filename = upload["filename"].value;
      const description = upload["description"].value;
      const file = upload["file"];

      const fileUp = file.files[0];
      const storageRef = storage.ref(`files/${filename}`);
       await storageRef.put(fileUp);
    
      const urlRef = storage.ref('files');

      const DownUrl = () => {
          urlRef.child(`${filename}`).getDownloadURL().then(url => {
              //console.log(url);

              db.collection('fileDetails').add({
                  filename: filename,
                  description: description,
                  downUrl: url,
                  createdAt: new Date()
              }).then(() => {
                  console.log("DB write Successful");
                  window.location = "./uploadSucessFul.html";
              });

          }).catch(err => {
              console.log(err);
          });
      };

      DownUrl();
  });


 