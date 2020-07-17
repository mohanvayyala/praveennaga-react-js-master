heroku login
heroku create praveennaga-meme-generator
git init
heroku git:remote -a praveennaga-meme-generator
git add .
git commit -am "make it better"
git push heroku master
heroku ps:scale web=1