import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function News(){
    // RSS2JSON
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fgiao-duc.rss&api_key=n85bwswje5twrq6k9bkefadokwcgxgtzkhswnbvb&order_by=pubDate&count=60"

    const [feeds, setFeeds] = useState([])
    // get title from rss using rss2json
    useEffect(() =>{
        axios.get(url)
            .then(response => {
                console.log(response.data.items);
                setFeeds(response.data.items)
            })
    },[])

    // xử lý chuỗi description từ RSS feed
    feeds.map(feed => {
        var doc = new DOMParser().parseFromString(feed.description, "text/html");
        console.log(doc.querySelector("a"))
        console.log(feed.description)
    })
    

    return (
        <body id="body">
            <div id="news-header">
                <h2>Tin mới nhất</h2>
                <hr />  
            </div>
            {feeds.map(feed => (
                <div id="news-item-wrapper">
                    <div id="news-title-box">
                        <a class="news-title" href={feed.link}>{feed.title}</a>
                    </div>
                    <div id="news-subtitle" dangerouslySetInnerHTML={{__html: feed.description}}>
                    </div>
                </div>
            ))}
            
        </body>
    )
}

export default News

// doc.querySelector("body").innerText -> mô tả nhỏ ở dưới tiêu đề
// 