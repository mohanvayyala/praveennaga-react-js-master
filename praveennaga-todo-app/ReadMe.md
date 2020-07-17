heroku login
heroku create praveennaga-todo-app
git init
heroku git:remote -a praveennaga-todo-app
git add .
git commit -am "make it better"
git push heroku master
heroku ps:scale web=1