import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {

  nuevaTarea: string = '';
  mensajeError: string = '';

  @Output() tareaAgregada = new EventEmitter<string>();

  agregar() {
    const tarea = this.nuevaTarea.trim();
    if (!tarea) {
      this.mensajeError = 'No se permite una tarea vacía';
      return;
    }

    this.tareaAgregada.emit(tarea);
    this.nuevaTarea = '';
    this.mensajeError = '';
  }
}
