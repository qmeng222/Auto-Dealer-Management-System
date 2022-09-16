## General Info:

- [x] project name: CarCar (dealership management software)
- [x] time: 9/12/2022 - 9/15/2022
- [x] url: https://gitlab.com/kanpii/project-beta.git
- [x] purposes:
  - [x] demonstrate ability to use Django to create RESTful APIs in microservices
  - [x] demonstrate ability to use React to create a front-end app that uses the RESTful APIs
  - [x] show competency while collaborating with a team member
- [x] team & duties:
  - [x] Qingying Meng: Automobile Service + Inventory List
  - [x] Carmen Tang: Auto Sales + Inventory Forms
- [x] RESTful APIs & front-end overview:

---

## Architectures & Features:

![alt text](https://files.slack.com/files-pri/T03A1FANDTQ-F042C1UG75M/image.png)

- [x] Inventory:
  - [x] http://localhost:8100/
  - [x] this bounded context provides the Automobiles that Sales interacts with!
- [x] Sales:
  - [x] http://localhost:8090/
  - [x] this bounded context interacts with Inventory by looking at Inventory's available automobiles
  - [x] Django: http://localhost:8090/admin/
- [x] Services:
  - [x] http://localhost:8080/
  - [x] this bounded context xxxxxxxx
  - [x] Django: http://localhost:8080/admin/
- [x] front-end: http://localhost:3000/

---

## Docker commands:

Start project with the following commands in terminal while in the project-beta directory:

- docker volume create beta-data
- docker-compose build
- docker-compose up

---

## Inventory

## Sales microservice:

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

## Services microservice:

- [x] models:

  - [x] class AutomobileVO with attributes VIN, year, and color
  - [x] class Technician with attributes employee number and technician name
  - [x] class Appointment with attributes VIN, customer name, appointent date, appointment time, technician name, reason to make the appointment, receive vip service, appointment canceled, and appointment finished

- [x] views:

  - [x] encoders:
  - [x] AutomobileVOEncoder
  - [x] TechnicianEncoder
  - [x] AppointmentEncoder

- [x] functions:

  - [x] api_list_technicians:
    - [x] create a technician (use id to target the technician)
    - [x] list technicians
  - [x] api_show_technician:
    - [x] update a technician (use id to target the technician)
    - [x] show / delete a technician
  - [x] likewise for the appointment counterparts (api_list_appointments, api_show_appointment)

- [x] components:
  - [x] create technician by entering employee number and technician name
  - [x] create appointment by specifying VIN, customer, technician, appointment date/time, appointment reason, receive vip service or not, and appointment status
  - [x] list appointment with VIN, customer, technician, appointment date/time, reason, and appointment status (canceled or finished)
  - [] list services history by filtering VIN number

---
