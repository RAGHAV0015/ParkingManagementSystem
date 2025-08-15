# 🚗 Car Parking Management System

A **full-stack web application** for managing parking areas, slots, bookings, and users.  
It enables **admins** to manage parking spaces, monitor bookings, and oversee users,  
while **customers** can search available slots, book them, and make secure payments.

Frontend built with **React.js**, connected to a **Spring Boot backend** and **MySQL database**.

---

## 🛠 Tech Stack

### **Frontend**
- ⚛️ React.js
- 🎨 CSS, HTML
- 🌐 JavaScript
- 🔐 JWT Authentication 
- ⚙️ Axios for API calls

### **Backend**
- ☕ Java
- 🌱 Spring Boot
- 🌐 RESTful APIs
- 🔒 JWT Security

### **Database**
- 🐬 MySQL

---


## 📁 Folder Structure
```plaintext
CarParkingManagementSystem/
├── com/parking/
│   ├── CarParkingBookingBackendApplication.java   # Main Spring Boot application
│   ├── config/         # App, Security & Web Configurations
│   │    ├── AppConfig.java
│   │    ├── SecurityConfig.java
│   │    └── WebConfig.java
│   ├── controllers/    # REST API Controllers
│   │    ├── AreasController.java
│   │    ├── BookingController.java
│   │    ├── FileController.java
│   │    ├── ParkController.java
│   │    ├── ParkingAreaController.java
│   │    ├── SeatTypeController.java
│   │    └── UsersController.java
│   ├── dtos/           # Data Transfer Objects
│   │    ├── AreasCheckDTO.java
│   │    ├── AreasDTO.java
│   │    ├── BookingDTO.java
│   │    ├── LoginDTO.java
│   │    ├── ParkDTO.java
│   │    ├── ParkingAreaCapacityDTO.java
│   │    ├── SearchCriteria.java
│   │    └── SearchDTO.java
│   ├── models/         # JPA Entity Models
│   │    ├── Areas.java
│   │    ├── Booking.java
│   │    ├── Park.java
│   │    ├── ParkingArea.java
│   │    ├── ParkingAreaCapacity.java
│   │    ├── SeatType.java
│   │    └── User.java
│   ├── repos/          # Database Repositories
│   │    ├── AreasRepository.java
│   │    ├── BookingRepository.java
│   │    ├── ParkingAreaCapacityRepository.java
│   │    ├── ParkingAreaRepository.java
│   │    ├── ParkRepository.java
│   │    ├── SeatTypeRepository.java
│   │    └── UserRepository.java
│   ├── security/       # JWT Security Utilities
│   │    └── JwtUtil.java
│   ├── services/       # Business Logic Layer
│   │    ├── AreasService.java
│   │    ├── BookingService.java
│   │    ├── ParkingAreaService.java
│   │    ├── ParkService.java
│   │    ├── SearchSpecification.java
│   │    └── SeatTypeService.java
│   └── utils/          # Utility Classes
│        ├── DiskStorageServiceImpl.java
│        ├── FileUploadProperties.java
│        └── StorageService.java

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
https://github.com/RAGHAV0015/ParkingManagementSystem.git
cd CarParkingManagementSystem



✨ Features
	•	🔐 Role-based access (Admin / Customer)
	•	🅿️ Manage parking areas & capacities
	•	📆 Slot booking with start & end times
	•	💳 Secure payments (planned)
	•	📊 Booking history
	•	📢 Notifications & updates

🌐 Deployment

Frontend: Vercel / Netlify (planned)
Backend: Render / Railway (planned)


📌 Branching Strategy

We use a single main branch for development and deployment.
Feature updates and fixes are committed directly or via pull requests.




