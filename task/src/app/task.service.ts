import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Tarea {
  texto: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tareasSubject = new BehaviorSubject<Tarea[]>([
    { texto: 'Estudiar Angular', completada: false },
    { texto: 'Hacer tarea', completada: false },
    { texto: 'Comprar comida', completada: false },
    { texto: 'Lavar ropa', completada: false }
  ]);

  tareas$: Observable<Tarea[]> = this.tareasSubject.asObservable();

  getTareas(): Tarea[] {
    return [...this.tareasSubject.getValue()];
  }

  agregarTarea(tarea: string) {
    const texto = tarea?.trim();
    if (!texto) {
      return;
    }
    const actual = this.tareasSubject.getValue();
    this.tareasSubject.next([...actual, { texto, completada: false }]);
  }

  eliminarTarea(index: number) {
    const actual = this.tareasSubject.getValue();
    if (index < 0 || index >= actual.length) {
      return;
    }
    const actualizado = actual.filter((_, i) => i !== index);
    this.tareasSubject.next(actualizado);
  }

  toggleTarea(index: number) {
    const actual = this.tareasSubject.getValue();
    const actualizado = actual.map((tarea, i) =>
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    );
    this.tareasSubject.next(actualizado);
  }
}
