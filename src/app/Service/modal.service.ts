import { Injectable } from '@angular/core';
import { DataForm } from '../models/cliente';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';


const initClientes: DataForm = {
  title:'',
  formulario: '',
  data: {
    clienteId: 0,
    nombre:     '',
    apellido:   '',
    ordens:     [],
  },
};

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private formClientes$ = new BehaviorSubject<DataForm>(initClientes);

  constructor() { }

  // Obtrner los valor del observable para los detos de los examenes
  get selectFrom$(): Observable<DataForm> {
    return this.formClientes$.asObservable();
  }

  // Guardar los valor del observable para los detos de los examenes
  setFor(data: DataForm) {
    this.formClientes$.next(data);
  }

openModal() {
  let modalGeneral = document.getElementById('modalGeneral') as any;
  if (modalGeneral) {
    modalGeneral.style.display = 'block';
    modalGeneral.classList.add('show');
    modalGeneral.style.backgroundColor = 'rgba(0,0,0,0.5)';
    setTimeout(() => {
      if (modalGeneral) {
        modalGeneral.style.opacity = 1;
      }
    }); //FOR TRANSITION
  }
}

closeModal() {
  let modalGeneral = document.getElementById('modalGeneral') as any;

  if (modalGeneral) {
    modalGeneral.style.display = 'none';
    modalGeneral.classList.remove('show');
    modalGeneral.style.opacity = 1;
  }
}

}
