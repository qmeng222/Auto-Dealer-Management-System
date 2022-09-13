from django.shortcuts import render
from django.http import JsonResponse
from .encoders import AutomobileVOEncoder, SalesPersonEncoder, CustomerEncoder, SalesRecordEncoder
from .models import AutomobileVO, SalesPerson, Customer, SalesRecord
from django.views.decorators.http import require_http_methods
import json

# Create your views here.


@require_http_methods(["GET", "POST"])
def list_sales_persons(request):
    if request.method == "GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder = SalesPersonEncoder
        )
    else:
        content = json.loads(request.body)
        sales_persons = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_persons,
            encoder = SalesPersonEncoder,
            safe = False,
        )


@require_http_methods(["GET"])
def show_salesperson(request, pk):
    if request.method == "GET":
        sales_person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            sales_person,
            encoder = SalesPersonEncoder,
            safe = False,
        )


@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder = CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customers = Customer.objects.create(**content)
        return JsonResponse(
            customers,
            encoder = CustomerEncoder,
            safe = False,
        )


@require_http_methods(["GET"])
def show_customer(request, pk):
    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder = CustomerEncoder,
            safe = False
        )


@require_http_methods(["GET", "POST"])
def list_sales(request):
    if request.method == "GET":
        sales = SalesRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder = SalesRecordEncoder,
        )
    else:
        try:
            content = json.loads(request.body)

            vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            content["automobile"] = automobile

            customer = content["specific_customer"]
            specific_customer = CustomerEncoder.objects.get(id=customer)
            content["customer"] = specific_customer

            salesperson = content["sales_person"]
            sales_person = SalesPerson.objects.get(id = salesperson)
            content["sales_person"] = sales_person

            sales = SalesRecord.objects.create(**content)
            return JsonResponse(
                sales,
                encoder =  SalesRecordEncoder,
                safe = False,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Could not find Automobile"},
                status = 400,
            )


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
