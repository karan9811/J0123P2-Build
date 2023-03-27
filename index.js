//var state = {
    var tasklist=  [
        {
            imageurl: "",
            taskTitle: "",
            taskType: "",
            taskDescription:""
        },

        {
            imageurl: "",
            taskTitle: "",
            taskType: "",
            taskDescription:""
        },

        {
            imageurl: "",
            taskTitle: "",
            taskType: "",
            taskDescription:""
        },

        {
            imageurl: "",
            taskTitle: "",
            taskType: "",
            taskDescription:""
        },

        {
            imageurl: "",
            taskTitle: "",
            taskType: "",
            taskDescription:""
        }

    ]
//}

const state = {
    tasklist: []
};

//Dom Operation
const taskcontents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

console.log(taskcontents);
console.log(taskModal)


//template for the card on screen
//element identifier key=${id} is been missing on line 50th
const htmlTaskcontent = ({id,title,description,type,url,}) =>`
    <div class='col-md-6 col-lg-4 mt-3' id='${id}'>
        <div class='card shadow-sm task__card'>
             <div class='card-header d-flex justify-contents end task__card__header'>
                 <button type='button' class='btn btn-outline-primary mr-1.5' name=${id}>
                     <i class='fas fa-pencil-alt name=${id}'></i>
        </button>
        <button type='button' class='btn btn-outline-danger mr-1.5' name=${id}>
        <i class='fas fa-trash-alt name=${id}'></i>
        </button>
        </div>
        <div  class='card-body'>
            ${
                url &&
                `<img width='100%' src='${url}' alt='card image' class='card-img-top md-3 rounded-lg' />`
            }
            <h4 class='card-title task__card__title'>${title}</h4>
            <p class='description trim-3-lines text-muted'>${description}</p>
            <div class='tags text-white d-flex flex-wrap'>
                <span> class='badge bg-primary m-1'${type}</span>

            </div>
        </div>
        <div class='card-footer'>
            <button type='button' class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>

        </div>
        </div>
    </div>
    `;



//Modal Body on >>clk of open task
const htmlModalcontent = ({id,title,description, url}) => {
    const date = new Date(parseInt(id));
    return` 
    <div id=${id}>
    ${
        url &&
          //  `<img width='100%' src=${url} alt='Card Image' class='img-fluid place__holder__image mb-3' />`
        `<img width='100%' src=${url} alt='card image' class='img-fluid place__holder__image mb-3' />`
    }
    <strong class='text-muted text sm'>created on: ${date.datestring}</strong>
    <h2 class='my-3'>${title}</h2>
    <p class='text-muted'>${description}</p>
    </div>
    `;

}
// where we convert json > str (i.e.,for local storage)
const updatedLocalStorage = () => {
    localstorage.setitem(
    "tasky",
    JSON.srringify({
        tasks: state.tasklist,
    })
    );
    
};

// where we convert str > json (i.e.,for rendering the cards on the screen)
const LoadInitialData = () => {
    const localstoragecopy = JSON.parse(localstorage.tasks);

    if(localstoragecopy) state.tasklist = localstoragecopy.tasks;

    state.tasklist.map((cardDate) => {
        taskcontents.innerAdjacentHTML("beforeend",htmlTaskcontent(cardDate))
    });
};
//when we update or whwn we edit..we need to save
const handlesubmit = (event) => {
    const id = `${Date.now()}`;
    const input ={
        url:document.getElementById("imageurl").value,
        title: document.getElementById("tasktitle").value,
        tags: document.getElementById("tags").value,
        taskDescription: document.getElementById("taskDescription").value,

    };
    if(input.title==="")
    
     // taskContents.innerAdjacentHTML(
        taskContents.insertAdjacentHTML(
         "beforeend",
          htmlTaskContent({ ...input, id })
  );
     state.taskList.push({ ...input, id });

     updateLocalStorage();
};

//open task
const opentask = (e) => {
    if(!e) e =window.event;

    const getTask = state.tasklist.find(({id}) => id === e.target.id);
    taskModal.innerHTML = htmlmodalconent(getTask)
}



























