# Portfolio Website with Contact Form

This is a personal portfolio website showcasing web development skills, including a functional contact form that sends an email. Built using **HTML**, **CSS**, **JavaScript**, and **Node.js** with **Express** and **Nodemailer** for email functionality.

---

## Features

- **Responsive Design**: The website is fully responsive and adapts to various screen sizes.
- **Contact Form**: A working contact form that allows visitors to send messages directly to the owner's email.
- **Server-Side Email Handling**: Utilizes **Nodemailer** for email handling on the backend (using Gmail SMTP server).
- **Backend with Express.js**: The backend is built with **Express.js** to handle HTTP requests and responses.
- **Environment Variables**: Sensitive data like email credentials are stored in `.env` file for security.

---

## Technologies Used

- **Frontend**:

  - HTML
  - CSS
  - JavaScript

- **Backend**:

  - Node.js
  - Express.js
  - Nodemailer

- **Others**:
  - Body-Parser
  - dotenv (for environment variables)
  - Gmail SMTP (for sending emails)

---

## Live Demo

You can view a live demo of the website by visiting:  
[Your live demo link here]

---

## Getting Started

To get this project up and running on your local machine, follow the steps below:

### 1. Clone this repository:

```bash
git clone https://github.com/ekalayamerdeka/portfolio-html-css-dan-js-.git
```

2. Install dependencies:
   Navigate to the project folder and install the required dependencies:

```
cd portfolio-website
npm install
```

3. Create a .env file:
   In the root of the project, create a .env file and add your Gmail credentials:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```

4. Run the project:
   Start the server by running:

```
node server.js

The server will run on http://localhost:5000 by default.

```

The server will run on http://localhost:5000 by default.

5. Test the contact form:
   You can now visit the portfolio website and test the contact form by submitting a message. The message will be sent to the email address specified in the .env file.

### Contributing

Contributions are always welcome! If you'd like to contribute to this project, please follow the steps below:

Fork this repository.
Create a new branch for your changes (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments

Nodemailer for simplifying email sending in Node.js.
Express.js for handling HTTP requests and serving the website.
GitHub for providing an easy way to host and share code.
