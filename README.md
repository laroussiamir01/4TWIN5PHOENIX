MicroServices Spring Boot with docker
---------------------------------------------
A team of esprit students developing microservices .
Authors:
@maaha messaoud 
@laroussi amir 
@fadi akrout 
@wiem hamdoun 
@Sarra ben sedrin
@hamza tounsi 

Tech Stack
Client Side: Angular 15, Eureka

Server Side: Spring, API Gateway, Eureka, MongoDB ,Nodejs

Description
Foyer Management Microservice:
The Foyer Management microservice is responsible for managing the overall administration and operations of the student dormitory. It handles functionalities such as creating and updating the list of available dormitories, managing their capacities, and maintaining general information about each dormitory.

Chambre (Room) Management Microservice:
The Chambre Management microservice focuses on managing individual rooms within the student dormitory. It provides functionalities for creating, updating, and deleting rooms. It also tracks the availability and occupancy status of each room, along with details such as the room number, size, and amenities.

Reservation Microservice:
The Reservation microservice handles the reservation process for students interested in booking rooms in the dormitory. It allows students to check room availability, make reservations, and modify or cancel existing reservations. This microservice also manages the payment process if applicable and sends confirmation notifications to students.

University Microservice:
The University microservice is responsible for managing information related to the universities associated with the student dormitory. It stores details about each university, including their names, locations, and contact information. This microservice facilitates integration with university systems, such as student enrollment or academic information systems.

Projects Microservice:
The Projects microservice offers functionalities related to student projects or activities within the dormitory. It allows students to create, join, and manage various projects or clubs. This microservice can include features like project description, member management, event scheduling, and communication tools for project collaboration.

Bloc (Building) Management Microservice:
The Bloc Management microservice focuses on managing the different buildings or blocks within the student dormitory complex. It provides functionalities for creating and updating building details, tracking occupancy rates, and managing maintenance requests or issues specific to each building.

This architecture enables efficient management of a student dormitory, ensuring smooth operations and a seamless experience for students. It allows for modular development and scalability, making it easier to maintain and extend the platform with new features or integrations.

