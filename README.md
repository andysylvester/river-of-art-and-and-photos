# river-of-art-and-and-photos
 Toolkit to support artcasting and photocasting with RSS
 
## About The Project

This toolkit is based on the [riverBrowser](https://github.com/scripting/riverBrowser) toolkit developed by Dave Winer for display of [river files](http://riverjs.org/) output by the [River5](https://github.com/scripting/river5) feed aggregator.
 
## Requirements

The first requirement is to identify some RSS feeds that have art images included in the enclosure element of the items within the feed. Some examples of art feeds are at (https://lists.feedcorps.org/artshow.opml). An example of a photo feed is (https://api.flickr.com/services/feeds/photos_public.gne), which is a feed of photos recently posted to the Flickr photosharing service. 

After identifying some feeds, perform an install of the River5 feed aggregator. This will require a Linux server with web access. Instructions for setting up a River5 instance can be found at this [blog post](https://andysylvester.com/2018/11/23/creating-and-displaying-rivers-of-news/). The feeds to be read should be added to a text file (for example, photos.txt) and added to the lists folder in the River5 install. When the River5 app is started, River5 will start to read these files and create a river file for recent updates to the feeds. The name of the file will match the text file with the feed URLs (photos.js in this example).

The files in this repo should then be copied to some web hosting space. Next, the file code.js should be updated to add the URL of the river file being created. The current URL is as follows:

const urlRiver = "https://fullblastnews.com/rivers/artcastlist.js";

The URL should be mapped to the URL of the server where the River5 application is running. River5 runs on port 1337. An example of this URL could be as follows:

const urlRiver = "http://fedwiki.andysylvester.com:1337/getoneriver?fname=photos.txt";

In this example, River5 will serve the river file on the web through the use of the getoneriver function, which is a function within the toolkit. If the river files are stored on some web hosting space, a URL like the first one should be used.

Finally, the file index.html can be edited to update the title of the file and other text as appropriate for your needs.

Happy artcasting/photocasting!



 

