from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class SalesPerson(models.Model):
    name = models.CharField(max_length=100, unique=True)
    employee_number = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name + " Employee #: " + self.employee_number


class Customer(models.Model):
    name = models.CharField(max_length=150)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class SalesRecord(models.Model):
    automobile = models.ForeignKey(AutomobileVO, related_name="sales", on_delete=models.PROTECT)
    sales_person = models.ForeignKey(SalesPerson, related_name="sales", on_delete=models.PROTECT)
    customer = models.ForeignKey(Customer, related_name="sales", on_delete=models.PROTECT)
    price = models.PositiveIntegerField()

    def __str__(self):
        return str(self.automobile) + " sold!"
