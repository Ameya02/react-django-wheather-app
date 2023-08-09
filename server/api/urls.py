from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    # path("/sentcityinfo", views.getRoutes, name="routes"),
    path("weatherinfo/", views.weatherInfo, name="weatherinfo"),
]