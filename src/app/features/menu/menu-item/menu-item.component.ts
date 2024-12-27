import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../menu-item.model';

@Component({
    selector: 'app-menu-item',
    standalone: true,
    imports: [],
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {

    @Input() 
    item!: MenuItem

    @Output() 
    removeItem: EventEmitter<any> = new EventEmitter();

    onRemove() {
        this.removeItem.emit(this.item)
    }

}
