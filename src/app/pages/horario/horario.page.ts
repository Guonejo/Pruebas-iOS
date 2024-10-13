import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  subjects: Subject[] = [];
  expandedCard: string | null = null; // Para rastrear la tarjeta expandida

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.subjectService.getSubjects().subscribe((subjects: Subject[]) => {
      this.subjects = subjects;
    });
  }

  // Filtra las asignaturas según el día
  getSubjectsForDay(day: string) {
    return this.subjects.filter((subject) => subject.day === day);
  }

  // Expande o colapsa una tarjeta
  toggleExpand(subjectName: string) {
    if (this.expandedCard === subjectName) {
      this.expandedCard = null; // Colapsa si ya está expandida
    } else {
      this.expandedCard = subjectName; // Expande la nueva tarjeta
    }
  }

  // Abre el modal para editar la asignatura
  openEditModal(subject: Subject) {
    console.log('Edit subject:', subject);
    // Lógica para abrir el modal de edición
  }

  // Confirma la eliminación de una asignatura
  confirmDeleteSubject(subject: Subject) {
    console.log('Confirm delete subject:', subject);
    // Lógica para confirmar y eliminar la asignatura
  }
}
