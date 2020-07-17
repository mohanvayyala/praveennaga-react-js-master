Praveen Oruganti Movie Search App

heroku login
heroku create praveennaga-movie-search
git init
heroku git:remote -a praveennaga-movie-search
git add .
git commit -am "make it better"
git push heroku master
heroku ps:scale web=1

 https://praveennaga-movie-search.herokuapp.com/