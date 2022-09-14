from django.shortcuts import render
from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, Customer, SalesRecord

# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["color", "year", "vin"]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_number"]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "address", "phone_number"]

class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["automobile", "sales_person", "customer", "price", "id"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }