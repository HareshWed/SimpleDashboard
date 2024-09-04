- SETTING UP PROJECT
    INSTALLATIONS
        FRONTEND (can be installed using NPM)
        - Nextjs 
        - ApexCharts
        BACKEND
        - django
        - djangorestframework
        - django-cors-headers

    RUNNING 
        FRONTEND
        - cd into block-dashboard
        - Enter npm run dev
        BACKEND
        - cd into dashboard_backend
        - Enter python manage.py runserver

APPROACH & THOUGHT PROCESS
A dashboard can be created using React and breaking up the charts into seperate components can allow us to work on these charts
individually

Since ApexCharts had more charts available, it was chosen as the library in order to make charts. 

In order to get the data for each chart we set up an API using django where each view function can return a JSON objects as a response.

This API is used to fetch data from the frontend in order to make the charts