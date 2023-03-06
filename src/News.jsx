import axios from "axios";
import React from "react";

class News extends React.Component{
    constructor(){
        super()
        this.state = {
            feedSource: []
        }
    }

    componentDidMount(){
        const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fgiao-duc.rss&api_key=n85bwswje5twrq6k9bkefadokwcgxgtzkhswnbvb&order_by=pubDate&count=60"

        axios.get(url)
            .then(response => {
                console.log(response.data.items);
                this.setState({
                    feedSource: response.data.items
                })
            })
    }

    render(){
        let feeds = this.state.feedSource.map(feed => (
            <div id="news-item-wrapper">
                <div id="news-title-box">
                    <a className="news-title" href={feed.link}>{feed.title}</a>
                </div>
                <div id="news-subtitle" dangerouslySetInnerHTML={{__html: feed.description}}>
                </div>
            </div>
        ))

        return (
            <body id="body">
                <div id="news-header">
                    <h2>Tin mới nhất</h2>
                    <hr style={{zIndex: -999}}/>  
                </div>
                {feeds}
            </body>
        );
    }
}

export default News