export class NewsArticle{
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: Source;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
export class Source{
    id: string;
    name: string;
}