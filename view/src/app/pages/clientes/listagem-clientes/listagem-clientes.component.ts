import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {

  clientes: any[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listarTodosClientes().subscribe((result: any) => {
      this.clientes = result;
    });
  }

}
