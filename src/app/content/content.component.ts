import {Component, OnInit} from '@angular/core';
import {NewsArticle, Source} from "../news-article";
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    providers: [ApiService]
})
export class ContentComponent implements OnInit {
    exception: boolean = false;
    category: string = "";
    news: NewsArticle[] = [];

    /*
    * {
            source: {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            author: "",
            title: "18-year-old girl burnt alive in Unnao",
            description: "KANPUR: An 18-year-old 'dalit' girl was burnt alive by unidentified persons under the limits of Bara Sagwar police station in Unnao district on Thursd.",
            url: "https://timesofindia.indiatimes.com/city/kanpur/18-year-old-girl-burnt-alive-in-unnao/articleshow/63041709.cms",
            urlToImage: "https://static.toiimg.com/photo/msid-63041692/63041692.jpg?120881",
            publishedAt: "2018-02-23T08:07:00Z"
        },
        {
            source: {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            author: "",
            title: "18-year-old girl burnt alive in Unnao",
            description: "KANPUR: An 18-year-old 'dalit' girl was burnt alive by unidentified persons under the limits of Bara Sagwar police station in Unnao district on Thursd.",
            url: "https://timesofindia.indiatimes.com/city/kanpur/18-year-old-girl-burnt-alive-in-unnao/articleshow/63041709.cms",
            urlToImage: null,
            publishedAt: "2018-02-23T08:07:00Z"
        },*/

    constructor(private apiService: ApiService, private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route
            .params
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.category = params['category'] || "default";
                if (this.category == "default") {
                    this.getAllNews();
                }
                else {
                    this.getNewsByCategory(this.category);
                }
            });
    }

    public getAllNews() {
        this.apiService
            .getAllHeadlines()
            .subscribe(
                (news) => {
                    this.news = news;
                }
            );
    }

    public getNewsByCategory(category: string) {
        this.apiService
            .getNewsByCategory(category)
            .subscribe(
                (news) => {
                    this.news = news;
                }
            );
    }

}
