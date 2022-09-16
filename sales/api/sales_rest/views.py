from enum import auto
from django.shortcuts import render
from django.http import JsonResponse
from .encoders import SalesPersonEncoder, CustomerEncoder, SalesRecordEncoder
from .models import AutomobileVO, SalesPerson, Customer, SalesRecord
from django.views.decorators.http import require_http_methods
import json

# Create your views here.

# Lists Sales People 
@require_http_methods(["GET", "POST"])
def list_sales_persons(request):
    if request.method == "GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder = SalesPersonEncoder
        )
    else: # Creates a Sales Person
        content = json.loads(request.body)
        sales_persons = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_persons,
            encoder = SalesPersonEncoder,
            safe = False,
        )

# Shows a single Sales Person
@require_http_methods(["GET"])
def show_salesperson(request, pk):
    if request.method == "GET":
        sales_person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            sales_person,
            encoder = SalesPersonEncoder,
            safe = False,
        )

# Lists all customers
@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder = CustomerEncoder,
        )
    else: # Creates a customer
        content = json.loads(request.body)
        customers = Customer.objects.create(**content)
        return JsonResponse(
            customers,
            encoder = CustomerEncoder,
            safe = False,
        )

# Shows a single customer
@require_http_methods(["GET"])
def show_customer(request, pk):
    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder = CustomerEncoder,
            safe = False
        )

# List all sales
@require_http_methods(["GET", "POST"])
def list_sales(request, salesperson_id=None):
    if request.method == "GET":
        if salesperson_id is not None:
            sales = SalesRecord.objects.filter(sales_person = salesperson_id)
        else:
            sales = SalesRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder = SalesRecordEncoder,
        )
    else:
        try: # Creates a sale
            content = json.loads(request.body)

            # vin_check = content["automobile"]
            automobile= AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile

            # customer_id=content["customer"]
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer

            # salesperson_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=content["sales_person"])
            content["sales_person"] = sales_person

            sales = SalesRecord.objects.create(**content)
            return JsonResponse(
                sales,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Could not create the sales record"},
                status=400,
            )

# Shows one sale
@require_http_methods(["GET"])
def show_sale(request, pk):
    if request.method == "GET":
        try:
            sale = SalesRecord.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder = SalesRecordEncoder,
                safe = False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "Sale does not exist"}
            )
    else:
        try:
            content = json.loads(request.body)
            sale = SalesRecord.objects.get(id=pk)

            props = ["sales_person", "automobile", "customer", "price"]
            for prop in props:
                if prop in content:
                    setattr(sale, prop, content[prop])
            sale.save()
            return JsonResponse(
                sale,
                encoder = SalesRecordEncoder,
                safe = False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "Sale does not exist"}
            )
