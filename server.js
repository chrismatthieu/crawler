var Crawler = require("crawler").Crawler;

var c = new Crawler({
"maxConnections":10,

// This will be called for each crawled page
"callback":function(error,result,$) {
    // console.log(error);
    // console.log(result);
    // console.log($);
    // console.log(result.body);

    if(result){
      var page = result.body; 
      var res = page.match(/bechtel/i);
      if (res && res.length > 0){
        console.log(result.body);
      }
    }

    // $ is a jQuery instance scoped to the server-side DOM of the page
    $("a").each(function(index,a) {
        console.log(a.href);
        c.queue(a.href);
    });
}
});

// Queue just one URL, with default callback
c.queue("http://construction.com");