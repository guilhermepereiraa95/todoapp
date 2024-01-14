import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    } else {
      alert('Type a something to add a task!')
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
