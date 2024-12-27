import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuListComponent } from './features/menu/menu-list/menu-list.component';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { ResizeColumnDirective } from './directives/resize-column.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuListComponent, MatTableModule, ResizeColumnDirective, CommonModule], // Add MatTableModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu-maker';

  displayedColumns: string[] = ['name', 'age', 'email'];
  
  columnDefs = [
    { def: 'name', header: 'Name' },
    { def: 'age', header: 'Age' },
    { def: 'email', header: 'Email' }
  ];

  dataSource = [
    { name: 'John Doe', age: 28, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
    { name: 'Michael Truong', age: 25, email: 'michael.truong@example.com' }
  ];
}
