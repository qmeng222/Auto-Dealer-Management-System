from django.db import models


class AutomobileVO(models.Model):
    # ref to inventory > models.py for attributes:
    vin = models.CharField(max_length=17, unique=True)
    year = models.PositiveSmallIntegerField()
    color = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.vin}, {self.year}, {self.color}"


class Technician(models.Model):
    # Learn: Automobile Service: Enter a technician
    employee_number = models.CharField(max_length=50, unique=True)
    technician_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.id}, {self.technician_name}"


class Appointment(models.Model):
    # Learn: Automobile Service: Enter a service appointment
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    technician_name = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )
    reason = models.TextField()
    # Learn: Automobile Service: List of appointments
    vip = models.BooleanField(default=False)
    canceled = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)


    def __str__(self):
        return f"{self.vin}, appointment at {self.time} {self.date}"
