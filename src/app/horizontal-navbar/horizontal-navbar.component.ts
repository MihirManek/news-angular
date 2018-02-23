import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../menu-item";

@Component({
    selector: 'horizontal-navbar',
    templateUrl: './horizontal-navbar.component.html',
    styleUrls: ['./horizontal-navbar.component.css']
})
export class HorizontalNavbarComponent implements OnInit {
    menu: MenuItem[] = [
        {
            name: "Top Stories",
            route: "/top-stories",
            isActive: true,
        },
        {
            name: "Entertainment",
            route: "/category/entertainment",
            isActive: false,
        },
        {
            name: "Sports",
            route: "/category/sports",
            isActive: false,
        },
        {
            name: "Business",
            route: "/category/business",
            isActive: false,
        },
        {
            name: "Health",
            route: "/category/health",
            isActive: false,
        },
        {
            name: "Science",
            route: "/category/science",
            isActive: false,
        },
        {
            name: "Technology",
            route: "/category/technology",
            isActive: false,
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
