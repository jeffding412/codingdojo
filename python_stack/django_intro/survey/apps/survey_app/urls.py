from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url('submit', views.submit),
    url('result', views.result)
]