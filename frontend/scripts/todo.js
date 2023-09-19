const signOut = document.getElementById('signOut');
const username = document.getElementById('username');

const addBtn = document.getElementById('addBtn');
const inputSearch = document.getElementById('input-box');

const modal = document.getElementById('modal');
const modalInput = document.getElementById('inputbox');
const modalSelect = document.getElementById('tagModal');
const modalBtn = document.getElementById('addTaskBtn');

const listContainer = document.getElementById('list-container');
const closeI = document.getElementsByClassName('close');

let id = '';
let tag = '';
let taskname = '';

//-----------------------------------------------
const tasks = {
    "success": true,
    "rows": [
      {
        "id": "8a3df5a2-f489-46a0-a57c-83a7df075d28",
        "name": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, necessitatibus!",
        "created_at": "2023-09-08 16:31:12",
        "tag": "done",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "a958ee89-31fe-41d5-95cb-f19647c5680c",
        "name": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus.",
        "created_at": "2023-09-10 18:11:38",
        "tag": "progress",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "564302cf-c1b2-4671-83c1-cb646ae9cf69",
        "name": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eos.",
        "created_at": "2023-09-11 14:19:58",
        "tag": "todo",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "38c5fa7a-741c-454d-b5a6-295eb48bb0c2",
        "name": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ab!",
        "created_at": "2023-09-11 14:19:58",
        "tag": "todo",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "0d85250f-d096-4c97-ad78-7e7f87aea2ec",
        "name": "ToDo",
        "created_at": "2023-09-11 14:28:35",
        "tag": "progress",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "632a6acf-d1ff-4053-ac6a-4c90e8222ef4",
        "name": "ToDo",
        "created_at": "2023-09-11 14:34:08",
        "tag": "progress",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "cb99a540-6955-45b6-b8a6-a78af3a28fa6",
        "name": "ToDo",
        "created_at": "2023-09-11 14:49:45",
        "tag": "progress",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "9dabbdf9-a529-4cd7-a72b-5dc4fbe74448",
        "name": "ToDo",
        "created_at": "2023-09-11 14:58:01",
        "tag": "done",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "59067b05-05f6-4b25-94eb-9f4ed3b9486c",
        "name": "ToDo",
        "created_at": "2023-09-11 15:01:04",
        "tag": "done",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "dacc61c6-86a4-44dd-ade5-6ab9ae7edd3d",
        "name": "ToDo",
        "created_at": "2023-09-11 15:03:34",
        "tag": "done",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "bc0ffc07-736b-4fc4-8ce5-b4f5d7295e15",
        "name": "ToDo",
        "created_at": "2023-09-11 15:07:10",
        "tag": "todo",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "dcea66e4-87fb-4113-a96b-c05cf9473ee8",
        "name": "ToDo",
        "created_at": "2023-09-11 15:08:31",
        "tag": "todo",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "a11d149d-47b7-4090-a32f-acba90648b81",
        "name": "ToDo",
        "created_at": "2023-09-11 15:13:53",
        "tag": "progress",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "7cda2d8c-a4a7-4f78-9f3a-72ad30253245",
        "name": "ToDo",
        "created_at": "2023-09-11 15:15:32",
        "tag": "progress",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
      {
        "id": "3b31034a-0ec7-4c08-b29c-04a6f52813c7",
        "name": "test 101",
        "created_at": "2023-09-12 09:10:21",
        "tag": "progress",
        "user_id": "bee878d3-4e9c-4d35-b3da-73ca452e36d1"
      },
    ]
}

window.addEventListener('click', closeModal)

function closeModal(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

function add(){
  if(modalInput.value === ""|| modalSelect.value === "Tag")
    alert("Please fill the input field and select a tag");
  else{
    let task = {id:'abel', name: modalInput.value, tag:modalSelect.value};
    createTask(task);
    modalInput.value = ""
    modalSelect.value = 'Tag';
    modal.style.display = 'none';
  }
}

async function update(){
  if(modalInput.value === "" || modalSelect.value === "Tag")
    alert("Please fill the input field and select a tag");
  else{
    await fetch("http://localhost:5001/api/tasks/"+id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "authorization": window.localStorage.token
        },
        body: JSON.stringify({
            "name": modalInput.value,
            "tag": modalSelect.value
        }),
    }).then((data)=> data.json()).then(data => {
        console.log(data);
        if(data.success) {
          const taskTmp = document.getElementById(id)
          taskTmp.children[0].innerHTML = modalInput.value;
          if(modalSelect.value === "progress")
          {
            taskTmp.children[1].children[0].innerHTML = `<i class="fa-solid fa-bars-progress"></i> ${modalSelect.value}`;
            taskTmp.children[1].setAttribute("class", "progress");
          }
          else if (modalSelect.value === "done")
          {
            taskTmp.children[1].children[0].innerHTML = `<i class="fa-solid fa-check"></i> ${modalSelect.value}`;
            taskTmp.children[1].setAttribute("class", "done");
          }
          else if (modalSelect.value === "todo")
          {
            taskTmp.children[1].children[0].innerHTML = `<i class="fa-solid fa-arrow-right-to-bracket"></i> ${modalSelect.value}`;
            taskTmp.children[1].setAttribute("class", "todo");
          }
        }
        else{
          alert('Something went wrong, try again later')
        }
        modalSelect.value = 'Tag';
        modalInput.value = ""
        modal.style.display = 'none';
    })
    
  }
}

addBtn.addEventListener("click", ()=>{
  modalBtn.textContent = "Add"
  modalBtn.onclick = add;
  modal.style.display = "block";
});


function createTask(items){
  let t = '';
  const todo = document.createElement('div');
  const todoName = document.createElement('p');
  const todoTag = document.createElement('div');
  const tagText = document.createElement('p');
  const tagImg = document.createElement('i');
  const todoClose = document.createElement('div');
  const closeImg = document.createElement('i');
  closeImg.classList.add('fa-solid');
  closeImg.classList.add('fa-xmark');
  todoClose.classList.add('close');
  todoClose.appendChild(closeImg);
  if(items.tag === "progress")
  {
    tagText.innerHTML = `<i class="fa-solid fa-bars-progress"></i> ${items.tag}`;
    todoTag.classList.add("progress");
  }
  else if (items.tag === "done")
  {
    tagText.innerHTML = `<i class="fa-solid fa-check"></i> ${items.tag}`;
    todoTag.classList.add("done");
  }
  else if (items.tag === "todo")
  {
    tagText.innerHTML = `<i class="fa-solid fa-arrow-right-to-bracket"></i> ${items.tag}`;
    todoTag.classList.add("todo");
  }
  todoName.innerHTML = items.name;
  
  todoTag.appendChild(tagText);
  todo.classList.add('task')
  todo.appendChild(todoName);
  todo.appendChild(todoTag);
  todo.appendChild(todoClose);
  todo.setAttribute('id', items.id);
  listContainer.appendChild(todo)

}


window.addEventListener('load',async ()=>{
  tasks.rows.map((items)=>{
    //createTask(items)
  })

  await fetch("http://localhost:5001/api/tasks/", {
    headers: {
      "Content-Type": "application/json",
      "authorization": window.localStorage.token
    }
  }).then((data)=> data.json()).then(async (data) => {
    for (const row of data.rows) {
      if (row.tag === "debut") row.tag = "todo"
      if (row.tag === "finie") row.tag = "done"
      if (row.tag === "en_cour" || row.tag === "en_cours") row.tag = "progress"
      createTask(row)
    }
  });


  const list = [];
  for (let child of listContainer.children){
    list.push(child);
  }
  list.map((items)=>{
    items.addEventListener('click',()=>{
      id = items.getAttribute('id');
      modalBtn.textContent = "Update";
      modalInput.value = items.children[0].textContent;
      modalSelect.value = items.children[1].children[0].textContent.split(" ")[1];
      modal.style.display = "block";
      modalBtn.onclick = update;
    });
  });
  username.innerHTML = `<i class="fa-solid fa-user"></i> ${window.localStorage.getItem('name')}`;
  modal.style.display = 'none';
})


inputSearch.addEventListener('input', ()=>{
  const filter = inputSearch.value.toLowerCase();

  const list = [];
  for (let child of listContainer.children){
    list.push(child);
  }
  list.map((items)=>{
    let text = items.children[0].textContent;
    if (text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
      items.style.display = '';
    }else{
      items.style.display = 'none';
    }
  });
});

signOut.addEventListener('click',()=>{
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('token');
  window.location.href = '../index.html';
});
/*
<div class="task">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, necessitatibus!</p>
    <div class="done">
        <p><i class="fa-solid fa-check"></i> done</p>
    </div>
    <div class="close">
        <i class="fa-solid fa-xmark"></i>
    </div>
</div>*/