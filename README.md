## General Info:

- [x] Project name: CarCar (dealership management software)
- [x] Time: 9/12/2022 - 9/15/2022
- [x] Url: https://gitlab.com/kanpii/project-beta.git
- [x] Purposes:
  - [x] demonstrate ability to use Django to create RESTful APIs in microservices
  - [x] demonstrate ability to use React to create a front-end app that uses the RESTful APIs
  - [x] demonstrate ability to work with others in a team setting
- [x] Team & duties:
  - [x] Qingying Meng: Automobile Service + Inventory List
  - [x] Carmen Tang: Auto Sales + Inventory Forms
- [x] RESTful APIs & front-end overview:
      ![GIF](/images/LsJazlDzWa.gif)

## Docker commands:

Start project with the following commands in terminal while in the project-beta directory:

- docker volume create beta-data
- docker-compose build
- docker-compose up

---

## Architectures & Features:

![Diagram](/images/projectbetadiagram.png) 

- [x] Inventory:
  - [x] http://localhost:8100/
  - [x] This bounded context provides the Automobiles that Sales and Services interact with!
- [x] Sales:
  - [x] http://localhost:8090/
  - [x] This bounded context interacts with Inventory by looking at Inventory's available automobiles.
  - [x] Django: http://localhost:8090/admin/
- [x] Services:
  - [x] http://localhost:8080/
  - [x] this bounded context keep track of service appointments for automobiles and their owners
  - [x] Django: http://localhost:8080/admin/
- [x] front-end: http://localhost:3000/

---

## Inventory

Inventory has all the data of cars that are available to be sold under their Automobile model.

- Automobile Model
  - [x] color
  - [x] year
  - [x] vin
  - [x] model

Services uses the VIN of the automobile model to create appointments for cars to be worked on.
Sales uses the VIN of the automobile model to track if a car has been sold or unsold.

---

## Sales microservice:

Sales has a SalesPerson, Customer, SalesRecord and AutomobileVO model.
The AutomobileVO model is how the sales interacts with Inventory's Automobile model. Salesperson model is needed to have sales employees to sell the cars.
Customer model is needed to sell the cars to.
SalesRecord calls back to Salesperson, Customer, and AutomobileVO to create a record of sold automobiles.

The above Sales URL is the starting point for all URLs related to the sales microservice. The ending half of the URL can be found in sales/sales_rest/urls.py. These can be used in Insomnia or similar programs to interact with the sales microservice.
You can also go to the React URL and click the links in the top navbar to reach the pages you want.

Pages available will allow you to:

- Create a Customer which requires:

  - [x] Name
  - [x] Address
  - [x] Phone Number

- Create a SalesPerson which requires:

  - [x] Name
  - [x] Employee Number

- Create a Sale which requires:

  - [x] Automobile(populated by Inventory)
  - [x] Sales Person
  - [x] Customer
  - [x] Price

- Look at a list of all Sales
- Look at a list of all Sales by a single Sales Person

Note: A sale can only be created if you have created a Customer, Salesperson, and a Vehicle beforehand. A sale cannot exist without a vehicle to sell, a person to sell it, or a person to sell it to!

---

## Services microservice:

- [x] Models:

  - [x] class AutomobileVO with attributes VIN, year, and color
  - [x] class Technician with attributes employee number and technician name
  - [x] class Appointment with attributes VIN, customer name, appointent date, appointment time, technician name, reason to make the appointment, receive vip service, appointment canceled, and appointment finished

- [x] Views:

  - [x] encoders:
  - [x] AutomobileVOEncoder
  - [x] TechnicianEncoder
  - [x] AppointmentEncoder

- [x] Functions:

  - [x] api_list_technicians:
    - [x] create a technician (use id to target the technician)
    - [x] list technicians
  - [x] api_show_technician:
    - [x] update a technician (use id to target the technician)
    - [x] show / delete a technician
  - [x] likewise for the appointment counterparts (api_list_appointments, api_show_appointment)

- [x] Components:
  - [x] create technician by entering employee number and technician name
  - [x] create appointment by specifying VIN, customer, technician, appointment date/time, appointment reason, receive vip service or not, and appointment status
  - [x] list appointment with VIN, customer, technician, appointment date/time, reason, and appointment status (canceled or finished)
  - [x] list services history by filtering VIN number

---
