import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItem } from '../menu-item.model';
import { MenuService } from '../services/menu.service';

@Component({
    selector: 'app-menu-list',
    standalone: true,
    imports: [MenuItemComponent],
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {

    menu!: MenuItem[];  //put bang bc can be null

    constructor(private menuService: MenuService) {   // put DI into constructor; for all languages
    }

    handleRemove(event: MenuItem) {
        this.menu = this.menu.filter((item: MenuItem) => {
            return item.id !== event.id
        })
    }

    ngOnInit(): void {
        this.menu = this.menuService.getMenu();
    }
}
