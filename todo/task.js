function addTask() {
  const btn = document.querySelector('.tasks__add');
  btn.addEventListener('click', (e) => {
    const taskList = document.getElementById('tasks__list');
    const input = document.querySelector('.tasks__input');
    e.preventDefault();
    if (input.value != '') {
      taskList.innerHTML += `
                            <div class="task">
                              <div class="task__title">
                              ${input.value}
                              </div>
                              <a href="#" class="task__remove">&times;</a>
                            </div>
                            `;           
    }
    clearForm();
    removeTask();
    storage();
  });
}

function removeTask() {
  const remove = document.querySelectorAll('.task__remove');
  remove.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      el.parentElement.remove();
    })
  })
}

function clearForm() {
  const form = document.getElementById('tasks__form');
  form.reset();
}

function storage() {
  const tasks = document.querySelectorAll('.task__title');
    const data = {
      task: [],
    };
    tasks.forEach(el => {
      data.task.push(el.textContent.trim());
    })
    localStorage.setItem('data', JSON.stringify(data));
}

function storageData() {
  document.addEventListener('DOMContentLoaded', () => {
    const json = localStorage.getItem('data');
    const taskList = document.getElementById('tasks__list');

    let formData;

    try {
      formData = JSON.parse(json);
    } catch (error) {
      console.log(error);
    }
    if (formData) {
      const val = formData.task;
      val.forEach((el) => {
        const item = document.createElement('div');
        item.classList.add('task');
        item.innerHTML = `
          <div class="task__title">${el}</div>
          <a href="#" class="task__remove">&times;</a>
          `;
        taskList.append(item);
      });

      taskList.querySelectorAll('.task__remove').forEach(el => {
        el.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        });
      })
    }
  });
};  

storageData();

addTask();
  