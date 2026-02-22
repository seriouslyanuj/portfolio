# Portfolio Backend

Spring Boot REST API for the portfolio contact form.

## Tech Stack

- **Spring Boot 3.3** - Framework
- **Java 17** - Language
- **Spring Web** - REST APIs
- **Spring Validation** - Request validation
- **Spring Mail** - Email sending (optional)
- **Spring Actuator** - Health endpoints
- **Maven** - Build tool

## Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/portfolio/backend/
│   │   │   ├── BackendApplication.java        # Main entry point
│   │   │   ├── config/
│   │   │   │   ├── CorsConfig.java            # CORS configuration
│   │   │   │   └── GlobalExceptionHandler.java # Error handling
│   │   │   ├── controller/
│   │   │   │   └── ContactController.java     # REST endpoints
│   │   │   ├── model/
│   │   │   │   ├── ContactRequest.java        # Request DTO
│   │   │   │   └── ContactResponse.java       # Response DTO
│   │   │   └── service/
│   │   │       └── ContactService.java        # Business logic
│   │   └── resources/
│   │       ├── application.properties         # Dev config
│   │       └── application-prod.properties    # Prod config
│   └── test/...
└── pom.xml
```

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Submit contact form |

### POST /api/contact

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I would like to connect."
}
```

Success response:
```json
{
  "success": true,
  "message": "Message received! I will get back to you soon."
}
```

## Getting Started

### Prerequisites
- Java 17+
- Maven 3.8+

### Run in Development

```bash
cd backend
mvn spring-boot:run
```

Server starts at http://localhost:8080

### Build

```bash
mvn clean package
java -jar target/backend-1.0.0.jar
```

## Configuration

Edit `src/main/resources/application.properties`:

```properties
# Allow your React frontend
portfolio.cors.allowed-origins=http://localhost:3000

# Contact form recipient
portfolio.contact.recipient-email=your-email@example.com

# Enable email sending (false by default)
portfolio.mail.enabled=false
```

### Email Setup (Optional)

To enable actual email sending, configure Gmail SMTP:

1. Set `portfolio.mail.enabled=true`
2. Add credentials:
```properties
spring.mail.username=your-gmail@gmail.com
spring.mail.password=your-app-password   # Gmail App Password
```

In development mode (`portfolio.mail.enabled=false`), all contact form submissions are logged to the console.
