export function taskList(rootElement) {
    const URL = 'https://evening-dawn-11092.herokuapp.com/list';
    let tasks = [];
    let taskElements = [];
    let ul;
    let form;
    let input;
    let btnSubmit;
  
    function render() {
      form = document.createElement('form');
      input = document.createElement('input');
      btnSubmit = document.createElement('button');
      ul = document.createElement('ul');
  
      btnSubmit.textContent = 'Add';
      form.onsubmit = function (event) {
        event.preventDefault();
        const data = {
          title: input.value,
        };
  
        const xhr = new XMLHttpRequest();
        xhr.open('POST', URL);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
  
        xhr.onreadystatechange = function () {
          if(xhr.readyState === 4) {
            if(xhr.status === 200) {
             console.log(xhr.response);
             const responseData = JSON.parse(xhr.response);
             const li = document.createElement('li');
             li.textContent = responseData.title;
             ul.appendChild(li);
            } else {
              console.error(xhr.response);
            }
          }
        }
      }
      
      form.appendChild(input);
      form.appendChild(btnSubmit);
      rootElement.appendChild(form);
      rootElement.appendChild(ul);
    }
  
    function renderList() {
      taskElements = tasks.map(function(task) {
        const li = document.createElement('li');
        li.textContent = task.title;
        ul.appendChild(li);
        return li;
      });
    }
  
    function fetchList() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', URL);
      xhr.send();
      xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            tasks = JSON.parse(xhr.response);
            renderList();
          } else {
            console.error(xhr.response);
          }
        }
      }
    }
  
    render();
    fetchList();
  }