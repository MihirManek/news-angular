import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {NewsArticle} from "./news-article";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = "https://newsapi.org/v2";
const API_KEY = "a5a15e15f87d4e4ab11cdf875bcb6716";
const COUNTRY = "in";

@Injectable()
export class ApiService {
    private requestOptions : RequestOptions = new RequestOptions();
    private params:URLSearchParams = new URLSearchParams();
    constructor(private http: Http) {

        this.params.set('apiKey', API_KEY);
        this.params.set('country', COUNTRY);
        this.requestOptions = new RequestOptions();
        this.requestOptions.search = this.params;
    }

    public getAllHeadlines():Observable<NewsArticle[]> {
        return this.http
            .get(API_URL + '/top-headlines', this.requestOptions)
            .map(response => {
                const articles = response.json();
                return articles.articles.map((article) => new NewsArticle(article));
            })
            .catch(this.handleError);
    }

    public getNewsByCategory(category: string) {
        let tempParams: URLSearchParams = this.params;
        tempParams.set('category', category);
        let tempRequestOptions=this.requestOptions;
        tempRequestOptions.search=tempParams;

        return this.http
            .get(API_URL + '/top-headlines', tempRequestOptions)
            .map(response => {
                const articles = response.json();
                return articles.articles.map((article) => new NewsArticle(article));
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
