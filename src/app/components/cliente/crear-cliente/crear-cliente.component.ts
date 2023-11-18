import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/Service/cliente.service';
import { ModalService } from 'src/app/Service/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  myForm!: FormGroup;
  
  constructor(
    private srvModal: ModalService,
    private srvCliente:ClienteService,
    private fb: FormBuilder
  ) { 
    this.myForm = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  addCliente() {
    Swal.fire({
      title: 'Está seguro que desea agregar este cliente?',
      showDenyButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('this.myForm.value =>', this.myForm.value);
        this.srvCliente.postCliente(this.myForm.value).subscribe((res) => {
            Swal.fire({
              title: 'Cliente agregado correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
            this.myForm.reset();
            window.location.reload();
        });
      } else if (result.isDenied) {
        this.myForm.reset();
        Swal.fire('No se agrego el cliente!', '', 'info');
      }

      this.srvModal.closeModal();
    });
  }

}
