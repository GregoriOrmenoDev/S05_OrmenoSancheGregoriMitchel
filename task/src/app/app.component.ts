import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService, Tarea } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskInputComponent, TaskListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tareas$: Observable<Tarea[]>;

  constructor(private taskService: TaskService) {
    this.tareas$ = this.taskService.tareas$;
  }

  agregarTarea(tarea: string) {
    this.taskService.agregarTarea(tarea);
  }

  eliminarTarea(index: number) {
    this.taskService.eliminarTarea(index);
  }

  toggleTarea(index: number) {
    this.taskService.toggleTarea(index);
  }

  contarTareas(tareas: Tarea[]) {
    return tareas.length;
  }

  tareasCompletadas(tareas: Tarea[]) {
    return tareas.filter(tarea => tarea.completada).length;
  }

  tareasPendientes(tareas: Tarea[]) {
    return tareas.filter(tarea => !tarea.completada).length;
  }
}
