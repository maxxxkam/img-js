const api = {
  "success": true,
  "total_photos": 132,
  "message": "Successfully fetched 10 of 132 photos",
  "offset": 0,
  "limit": 10,
  "photos": [
    {
      "url": "https://api.slingacademy.com/public/sample-photos/1.jpeg",
      "user": 28,
      "title": "Defense the travel audience hand",
      "id": 1,
      "description": "Leader structure safe or black late wife newspaper her pick central forget single likely."
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/2.jpeg",
      "user": 25,
      "title": "Space build policy people model treatment town hard use",
      "id": 2,
      "description": "Much technology how within rather him lay why part actually system increase feel."
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/3.jpeg",
      "user": 7,
      "title": "Party about different guess bill too owner",
      "id": 3,
      "description": "Street anything piece south yard since well point summer school economy respond people mother."
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/4.jpeg",
      "user": 22,
      "title": "Table husband",
      "id": 4,
      "description": "Skill drug college contain herself future seat human yes approach how then maybe public summer play commercial anything woman include million body measure government clearly question quickly parent."
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/5.jpeg",
      "user": 25,
      "title": "Support audience model program three music",
      "id": 5,
      "description": "World early north TV around meet goal across reason responsibility have must build up some language soon."
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/6.jpeg",
      "user": 30,
      "title": "Apply future response she reduce decide",
      "id": 6,
      "description": "Training beautiful age four skin cultural hundred environmental ability blood go physical relate produce tough open police."
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/7.jpeg",
      "user": 20,
      "title": "Fire year candidate too like",
      "id": 7,
      "description": "Few address take for special development white career."
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/8.jpeg",
      "user": 13,
      "title": "Reflect design camera land girl wind behind side",
      "id": 8,
      "description": "Drug if approach out according set home job company wall source trouble act huge easy style physical so month."
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/9.jpeg",
      "user": 2,
      "title": "Per nature research",
      "id": 9,
      "description": "Nature focus wonder behind magazine pattern degree far without tree consider."
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/10.jpeg",
      "user": 30,
      "title": "Yard",
      "id": 10,
      "description": "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little."
    }
  ]
}

let main = document.querySelector('.main')


function htmlga(){
  let html = ""
  api.photos.map((el) => {
    html +=  `
    <div class="card">
    <img src=${el.url} />
    <h2>${el.user}</h2>
    <p>${el.title}</p>
    <b>${el.id}</b> 
    </div>
    `;
    main.innerHTML = html;
  });
}


htmlga()