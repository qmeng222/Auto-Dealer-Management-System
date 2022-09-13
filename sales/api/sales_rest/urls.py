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
    path("sales/salesperson/", list_sales_persons, name = "list_salespeople"),
    path("sales/salesperson/<int:pk>/", show_salesperson, name = "show_salesperson"),
    path("sales/customer/", list_customers, name = "list_customers"),
    path("sales/customer/<int:pk>/", show_customer, name = "show_customer"),
    path("sales/", list_sales, name = "list_sales"),
    path("sales/<int:pk>/", show_sale, name = "show_sale")
]
