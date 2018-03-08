import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from '@angular/router';
import {PagerService} from "../pager.service";
import {CategoryService} from "../category.service";
import {MenuItem} from "../menu-item";

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    providers: [ApiService, CategoryService]
})
export class ContentComponent implements OnInit {
    exception: boolean = false;
    category: string = "";
    news: any[] = [];

    allCategories: MenuItem[];
    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    pageSize: number = 2;

    constructor(private apiService: ApiService,
                private route: ActivatedRoute,
                private pagerService: PagerService,
                private categoryService: CategoryService) {
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.news.length, page, this.pageSize);

        // get current page of items
        this.pagedItems = this.news.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    ngOnInit() {
        this.allCategories=this.categoryService.getCategories();
        this.route
            .params
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.category = params['category'] || "Top Stories";

                if (this.category == "Top Stories") {
                    this.exception=false;
                    this.getAllNews();
                }
                else {
                    let category = this.allCategories.filter(x => x.name.toUpperCase() == this.category.toUpperCase())[0];
                    if(category !=undefined){
                        this.exception=false;
                        this.getNewsByCategory(this.category);
                    }
                    else{
                        this.exception=true;
                    }

                }
            });
    }

    public getAllNews() {
        this.apiService
            .getAllHeadlines()
            .subscribe(
                (news) => {
                    this.news = news;
                    this.setPage(1);
                }
            );
    }

    public getNewsByCategory(category: string) {
        this.apiService
            .getNewsByCategory(category)
            .subscribe(
                (news) => {
                    this.news = news;
                    this.setPage(1);
                }
            );
    }
    onChangePageSize(size){
        this.pageSize=+size;
        this.setPage(1);
    }
}
