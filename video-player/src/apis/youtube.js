import axios from 'axios';


const KEY = 'AIzaSyB8q2pAZfldcafLIqJSiGoKxf1gXWgvzq0';
//it has to be big as a sign it should not be changed
// unless we kno what we are doing

export default axios.create({
   baseURL:  "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
