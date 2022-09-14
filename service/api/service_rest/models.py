from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    # ref to inventory > models.py for attributes:
    vin = models.CharField(max_length=17, unique=True)
    year = models.PositiveSmallIntegerField()
    color = models.CharField(max_length=50)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"pk": self.id})


class Technician(models.Model):
    # Learn: Automobile Service: Enter a technician
    employee_number = models.CharField(max_length=50, unique=True)
    technician_name = models.CharField(max_length=100)

    def get_api_url(self):
        return reverse("api_show_technician", kwargs={"pk": self.id})

    def __str__(self):
        return f"{self.technician_name} | {self.employee_number}"


class Appointment(models.Model):
    # Learn: Automobile Service: Enter a service appointment
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=100)
    date = models.DateField(max_length=20, blank=True, null=True)
    time = models.TimeField(max_length=20, blank=True, null=True)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )
    reason = models.TextField()
    # Learn: Automobile Service: List of appointments
    vip = models.BooleanField(default=False)
    canceled = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.id})
