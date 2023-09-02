from unicodedata import name
from django.urls import path
from . import views
urlpatterns=[
    path("appuser",views.auth,name="auth"),
    path("blog",views.blo,name="blog"),
    path("blog/<int:id>",views.blo,name="blogGetOne"),
    path("admin",views.admin,name="AdminGet"),
    path("admin/<int:id>/<int:value>",views.admin,name="Admin"),
    path("update/<int:uid>",views.update,name="update"),
    path("update",views.update,name="del"),
    path("update",views.update,name="up"),
    path("change/<int:id>/<int:value>",views.change,name="change"),
]
