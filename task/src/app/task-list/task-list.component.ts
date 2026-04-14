import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() tareas: Tarea[] = [];
  @Output() eliminarTarea = new EventEmitter<number>();
  @Output() toggleTarea = new EventEmitter<number>();

  onEliminar(index: number) {
    this.eliminarTarea.emit(index);
  }

  onToggle(index: number) {
    this.toggleTarea.emit(index);
  }

  trackByIndex(index: number) {
    return index;
  }
}

