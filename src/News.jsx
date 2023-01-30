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
    // const parser = new Parser();
    // const feed = parser.parseURL(url);
    // console.log(feed.items);

    // var request = new XMLHttpRequest();
    // request.onreadystatechange = () => {
    //     if(request.readyState === 4 && request.status === 200){
    //         var myObj = JSON.parse(request.responseText);
    //         for(var i = 0; i < 1; i++){
    //             const test = myObj.items[i].title;
    //         }
    //     }
       
    // }
    // request.open("GET", "https://www.reddit.com/.rss", true);
    // request.send();

    // console.log(test)
    
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
            {feeds.map(feed => (<div>{feed.title}</div>))}
        </body>
    )
}

export default News