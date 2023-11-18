import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/Service/cliente.service';
import { ModalService } from 'src/app/Service/modal.service';
import { DataForm } from 'src/app/models/cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  myForm!: FormGroup;
  public data!: DataForm;
  
  constructor(
    private srvModal: ModalService,
    private srvCliente:ClienteService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.srvModal.selectFrom$.subscribe((cliente) => {
      this.data = cliente;
      console.log('Los datos en editar =>', this.data);
      this.myForm = this.fb.group({
        clienteId:[this.data.data.clienteId, Validators.required],
        nombre: [this.data.data.nombre, Validators.required],
        apellido: [this.data.data.apellido, Validators.required],
      });
    });
  }

  editarCliente() {
    Swal.fire({
      title: 'Está seguro que desea modificar este cliente?',
      showDenyButton: true,
      confirmButtonText: 'Modificar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('datos modificados =>', this.myForm.value);
        this.srvCliente.putCliente(this.myForm.value).subscribe((res) => {
            Swal.fire({
              title: 'Cliente modificdo correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
            this.myForm.reset();
            window.location.reload();
        });
      } else if (result.isDenied) {
        Swal.fire('No se modificó el cliente!', '', 'info');
      }

      this.srvModal.closeModal();
    });
  }

}
