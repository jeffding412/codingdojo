from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url('add_word', views.add_word),
    url('clear_session', views.clear_session)
]