import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nuevaTarea = '';
  usuarioSeleccionado = '';
  busqueda = '';

  usuarios = ['Ana', 'Carlos', 'María', 'Pedro'];

  tareas = [
    { id: 1, nombre: 'Diseñar interfaz', usuario: 'Ana', completada: false },
    { id: 2, nombre: 'Crear API', usuario: 'Carlos', completada: true },
    { id: 3, nombre: 'Testear aplicación', usuario: 'María', completada: false }
  ];

  agregarTarea() {
    if (!this.nuevaTarea || !this.usuarioSeleccionado) return;

    this.tareas.push({
      id: this.tareas.length + 1,
      nombre: this.nuevaTarea,
      usuario: this.usuarioSeleccionado,
      completada: false
    });

    this.nuevaTarea = '';
    this.usuarioSeleccionado = '';
  }

  cambiarEstado(tarea: any) {
    tarea.completada = !tarea.completada;
  }

  porcentajeCompletado() {
    if (this.tareas.length === 0) return 0;

    const completadas = this.tareas.filter(t => t.completada).length;
    return Math.round((completadas * 100) / this.tareas.length);
  }

  tareasFiltradas() {
    if (!this.busqueda) return this.tareas;

    const texto = this.busqueda.toLowerCase();

    return this.tareas.filter(t =>
      t.nombre.toLowerCase().includes(texto) ||
      t.usuario.toLowerCase().includes(texto)
    );
  }
}