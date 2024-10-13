import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from '../interfaces/subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor() {}

  // Función que devuelve las asignaturas simuladas
  getSubjects(): Observable<Subject[]> {
    const subjects: Subject[] = [
      { id: '1', name: 'Matemáticas', day: 'lunes', startTime: '08:00', endTime: '09:30', teacher: 'Juan Pérez', room: 'A101', color: 'primary' },
      { id: '2', name: 'Física', day: 'martes', startTime: '10:00', endTime: '11:30', teacher: 'Ana Gómez', room: 'A102', color: 'secondary' },
      // Agrega más asignaturas aquí
    ];
    return of(subjects);
  }
}
