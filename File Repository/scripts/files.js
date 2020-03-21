const files = document.getElementById('list');

db.collection('fileDetails').orderBy('createdAt').onSnapshot(snapshot=>{
    let changes = snapshot.docChanges();
    changes.forEach(change=>{
        if(change.type == 'added'){
            renderFiles(change.doc);
        };
    });
});

const renderFiles =(doc)=>{
    //const gdocsURl="https://docs.google.com/gview?embedded=true&url=";
  let html =`<div class="item">
              <h4>${doc.data().filename}</h4>
              <p>${doc.data().description}</p>
              <a class="date">${doc.data().createdAt.toDate()}<a>
              <a class="btn cusBtn down" href=" ${doc.data().downUrl}">Download</a>
              </div>`;

  files.innerHTML+=html;
};