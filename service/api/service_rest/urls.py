from django.urls import path
from .views import api_list_technicians, api_show_technician, api_list_appointments, api_show_appointment


urlpatterns = [
    # list technicians ("GET"):
    path(
        'technicians/',
        api_list_technicians,
        name='list_technicians',
    ),

    # show technician ("GET"):
    path(
        "technicians/<int:pk>/",
        api_show_technician,
        name="api_show_technician"),

    # list appointments ("GET"):
    path(
        'appointments/',
        api_list_appointments,
        name='list_appointments'
    ),

    # show appointment ("GET"):
    path(
        'appointments/<int:pk>/',
        api_show_appointment,
        name='show_appointment'
    ),
]
