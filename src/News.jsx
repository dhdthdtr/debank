// import axios from "axios";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import RSS from "vanilla-rss";
// import Parser from "rss-parser";

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
    

    return (
        <body id="body">
            <h2>Tin mới nhất</h2>
            <hr />
            {feeds.map(feed => (
                <div id="news-item-wrapper">
                    <div id="news-img">
                        <img src="https://i1-vnexpress.vnecdn.net/2023/01/30/325468242-849903932932061-3724-3582-4826-1675036762.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=ytVcf7hb5khzQhQDm5H2eQ" />
                    </div>
                    <div id="news-title-box">
                        <h2 id="title-main">{feed.title}</h2>
                        <span id="subtitle">Từng gây chú ý khi giành học bổng 9,3 tỷ đồng đến Đại học Johns Hopkins, sau 5 năm, Nguyễn Sao Ly trở thành nhà khoa học tại một công ty hoá sinh của Mỹ.</span>
                    </div>
                </div>
            ))}
            
        </body>
    )
}

export default News