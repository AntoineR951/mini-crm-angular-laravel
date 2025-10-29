import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

type Client = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  createdAt: string; // ISO
};

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
  ], 
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class ClientsComponent {

  // Données mockées
  readonly clients = signal<Client[]>([
    { id: 1, name: 'Alice Martin',  email: 'alice@example.com',  phone: '06 11 22 33 44', createdAt: '2024-11-02' },
    { id: 2, name: 'Bruno Dupont',  email: 'bruno@example.com',  phone: '06 55 66 77 88', createdAt: '2025-01-15' },
    { id: 3, name: 'Chloé Bernard', email: 'chloe@example.com', createdAt: '2025-03-08' },
  ]);

  displayedColumns = ['name', 'email', 'phone', 'createdAt', 'actions'];

  constructor(private snack: MatSnackBar) {}

  addClient() {
    console.log('ADD client');
    this.snack.open('Ajouter un client (mock)', 'OK', { duration: 2000 });
  }

  editClient(c: Client) {
    console.log('EDIT client', c);
    this.snack.open(`Modifier ${c.name} (mock)`, 'OK', { duration: 2000 });
  }

  deleteClient(c: Client) {
    console.log('DELETE client', c);
    this.snack.open(`Supprimer ${c.name} (mock)`, 'OK', { duration: 2000 });
  }
}
