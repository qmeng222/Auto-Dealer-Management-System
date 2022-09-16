# CarCar

---

Team:

- Qingying Meng: Automobile Service + Inventory List
- Carmen Tang: Auto Sales + Inventory Forms

## Design

- Inventory API: http://localhost:8100/
- Services microservice: http://localhost:8080/
- Sales microservice: http://localhost:8090/
- Front-end: http://localhost:3000/

Inventory is a bounded context. It provides the Automobiles that Sales interacts with!
Sales is a bounded context. It interacts with Inventory by looking at Inventory's available automobiles.
Services is a bounded context.

---

## Inventory microservice

Note: Inventory must be filled to accomplish tasks in Sales and Service microservices. Please create Manufacturers, VehicleModels, and Automobiles via the creation links in the navigation bar on the CarCar site!

## Service microservice

- CarCar: http://localhost:3000/
- Django administration: http://localhost:8080/admin/

## Sales microservice

React URL: http://localhost:3000/
Sales URL: http://localhost:8090/

Sales has a SalesPerson, Customer, SalesRecord and AutomobileVO model. The AutomobileVO model is how the sales interacts with Inventory's Automobile model. Salesperson model is needed to have sales employees to sell the cars. Customer model is needed to sell the cars to. SalesRecord calls back to Salesperson, Customer, and AutomobileVO to create a record of sold automobiles. Basically inventory has all the data of cars that are available to be sold under their Automobile model. Sales will call to that Automobile model using AutomobileVO and use that information to sell the cars.

The above Sales URL is the starting point for all URLs related to the sales microservice. The ending half of the URL can be found in sales/sales_rest/urls.py. These can be used in Insomnia or similar programs to interact with the sales microservice.
You can also go to the React URL and click the links in the top navbar to reach the pages you want.
Pages available will allow you to:

- Create a Customer (Requires Name, Address, Phone Number)
- Create a SalesPerson (Requires Name, Employee Number)
- Create a Sale (Requires Automobile(populated by Inventory), Sales Person, Customer, and Price )
- Look at a list of all Sales
- Look at a list of all Sales by a single Sales Person

Note: A sale can only be created if you have created a Customer, Salesperson, and a Vehicle beforehand. A sale cannot exist without a vehicle to sell, a person to sell it, or a person to sell it to!

---

## Docker commands:

To start our project-beta, please start with these commands in your terminal while in the project-beta directory:

- docker volume create beta-data
- docker-compose build
- docker-compose up

---

## Models/Attributes:
