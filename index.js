console.log("helllooooo")
require('dotenv').config();
const express = require('express') //importing express
const app = express() //something useful
const port = 4000 //listening in this port
const githubData={
  "login": "nandinibansall",
  "id": 149954212,
  "node_id": "U_kgDOCPAepA",
  "avatar_url": "https://avatars.githubusercontent.com/u/149954212?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/nandinibansall",
  "html_url": "https://github.com/nandinibansall",
  "followers_url": "https://api.github.com/users/nandinibansall/followers",
  "following_url": "https://api.github.com/users/nandinibansall/following{/other_user}",
  "gists_url": "https://api.github.com/users/nandinibansall/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/nandinibansall/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/nandinibansall/subscriptions",
  "organizations_url": "https://api.github.com/users/nandinibansall/orgs",
  "repos_url": "https://api.github.com/users/nandinibansall/repos",
  "events_url": "https://api.github.com/users/nandinibansall/events{/privacy}",
  "received_events_url": "https://api.github.com/users/nandinibansall/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-11-05T15:16:26Z",
  "updated_at": "2025-09-10T19:01:38Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//ye bolra h ki get ek request h jo hi home route pe koi bhi request aati h toh usko return krre response that is hello world
app.get('/twitter',(req,res)=>{
    res.send("NandiniBansall")
})

app.get('/login',(req,res) =>{
    res.send('<h1>please login at mypage</h1>')
})
app.get('/github', (req, res) => {
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
//listen method is a variable that listens from the port and if succesfully you are listening then print console.log