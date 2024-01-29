# About

I created my own ReactJS/Django starting template with sessionsid HTTPOnly cookies authentication. The code is based off of two youtube tutorials I followed about how to create a ReactJS/Django authentication app 
using JWT authentication and sessions authentication. The following are steps to run the template. <br>

Backend (Django):
 - pip install djangorestframework
 - pip install django-cors-headers
 - python manage.py makemigrations
 - python manage.py migrate
 - python manage.py runserver

Frontend (ReactJS):
 - npm install react-router-dom
 - npm install axios
 - npm run start
 - run the frontend server at an origin of 127.0.0.1:3000 instead of localhost:3000

For more information about the two tutorials, check out the following github subdirectories in the django_learning directory:
 - react_django_session_auth
 - react_django_simplejwt_auth
