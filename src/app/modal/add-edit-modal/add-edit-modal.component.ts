import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Service/modal.service';


@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css'],
})
export class AddEditModalComponent implements OnInit {
  constructor(private srvModal: ModalService) {}

  public tipoFormulario: string = '';
  titleModal: string = '...';

  ngOnInit() {
    this.srvModal.selectFrom$.subscribe((formulario: any) => {
      this.tipoFormulario = formulario.formulario;
      this.titleModal = formulario.title;
    });
  }

  cerrarModal() {
    this.srvModal.closeModal();
  }
}
