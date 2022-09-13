from django.urls import path
from .views import (
    list_sales_persons,
    show_salesperson,
    list_customers,
    show_customer,
    list_sales,
    show_sale,
)

urlpatterns = [
    path("salespersons/", list_sales_persons, name = "list_salespeople"),
    path("salesperson/<int:pk>/", show_salesperson, name = "show_salesperson"),
    path("customers/", list_customers, name = "list_customers"),
    path("customer/<int:pk>/", show_customer, name = "show_customer"),
    path("sales/", list_sales, name = "list_sales"),
    path("sales/<int:pk>/", show_sale, name = "show_sale"),
    path("salesperson/<int:salesperson_id>/records/", list_sales, name = "list_salesperson_sales")
]
