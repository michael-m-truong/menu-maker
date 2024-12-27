import { Injectable } from '@angular/core';
import { MenuItem } from '../menu-item.model';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor() { }

    getMenu(): MenuItem[] {
        return [
            {
                name: "Cheeseburger",
                price: 8.99,
                details: "A juicy cheeseburger with lettuce, tomato, and your choice of cheese.",
                id: 1
            },
            {
                name: "Margherita Pizza",
                price: 12.50,
                details: "Classic margherita pizza with fresh mozzarella, tomatoes, and basil.",
                id: 2
            },
            {
                name: "Caesar Salad",
                price: 7.25,
                details: "Crisp romaine lettuce, croutons, and parmesan cheese, served with Caesar dressing.",
                id: 3
            },
            {
                name: "Grilled Salmon",
                price: 15.75,
                details: "Freshly grilled salmon served with a side of steamed vegetables and rice.",
                id: 4
            },
            {
                name: "Spaghetti Carbonara",
                price: 11.00,
                details: "Traditional Italian pasta with eggs, cheese, pancetta, and pepper.",
                id: 5
            }
        ];
    }


}
