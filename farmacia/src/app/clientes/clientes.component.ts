import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements AfterViewInit {
  
  displayedColumns: any[] = ['position', 'name', 'cpf', 'DataNascimento', 'sexo', 'pcd', 'endereco', 'tel', 'email'];

  dataSource = new MatTableDataSource<ListaClientes>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}

export interface ListaClientes {
  position: number;
  name: string;
  cpf: number;
  DataNascimento: number;
  sexo: string;
  pcd: string;
  endereco: string;
  tel: number;
  email: string;
}

const ELEMENT_DATA: ListaClientes[] = [
  {position: 1, name: 'Pedro', cpf: 15992547955, DataNascimento: 14|2|1974, sexo: 'masculino', pcd: 'não', endereco: 'faustino fernandes', tel: 38995415312, email: 'user1@email.com'},
  {position: 2, name: 'Lucas', cpf: 58996354788, DataNascimento: 14|5|1990, sexo: 'masculino', pcd: 'não', endereco: 'venancio nunes', tel: 11994523617, email: 'user2@email.com'},
  {position: 3, name: 'Maria', cpf: 58771203698, DataNascimento: 14|12|2000, sexo: 'masculino', pcd: 'sim', endereco: 'são joaquim', tel: 21995632147, email: 'user3@email.com'},
  {position: 4, name: 'Breno', cpf: 12335487033, DataNascimento: 14|10|1998, sexo: 'masculino', pcd: 'não', endereco: 'Olavo Braga', tel: 31985236471, email: 'user4@email.com'},
  {position: 5, name: 'Vitória', cpf: 21003658977, DataNascimento: 14|7|1974, sexo: 'masculino', pcd: 'sim', endereco: 'Rua D', tel: 44988462147, email: 'user5@email.com'},
];