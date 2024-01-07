// booking-system.js

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.loggedIn = false;
    }

    signUp() {
        console.log(`${this.username} signed up successfully.`);
        // Simulate displaying a message on the front-end
        displayOutput(`${this.username} signed up successfully.`);
    }

    logIn() {
        this.loggedIn = true;
        console.log(`${this.username} logged in.`);
        displayOutput(`${this.username} logged in.`);
    }

    logOut() {
        this.loggedIn = false;
        console.log(`${this.username} logged out.`);
        displayOutput(`${this.username} logged out.`);
    }

    searchServices(query) {
        console.log(`Searching for services with query: ${query}`);
        displayOutput(`Searching for services with query: ${query}`);
    }

    choosePaymentMethod(paymentMethod) {
        console.log(`${this.username} chose payment method: ${paymentMethod}`);
        displayOutput(`${this.username} chose payment method: ${paymentMethod}`);
    }

    viewNotifications() {
        console.log(`${this.username}: No new notifications.`);
        displayOutput(`${this.username}: No new notifications.`);
    }

    bookService(service) {
        console.log(`${this.username} booked the service: ${service}`);
        displayOutput(`${this.username} booked the service: ${service}`);
    }

    reviewService(serviceProvider, review) {
        console.log(`${this.username} reviewed ${serviceProvider}'s service: ${review}`);
        displayOutput(`${this.username} reviewed ${serviceProvider}'s service: ${review}`);
    }

    viewBookingList() {
        console.log(`${this.username}'s booking list: No bookings.`);
        displayOutput(`${this.username}'s booking list: No bookings.`);
    }
}

class ServiceProvider extends User {
    constructor(username, password) {
        super(username, password);
        this.availability = [];
        this.services = [];
        this.reviews = [];
        this.activeServices = [];
        this.bookingList = [];
    }

    addAvailability(time) {
        this.availability.push(time);
        console.log(`${this.username} added availability: ${time}`);
        displayOutput(`${this.username} added availability: ${time}`);
    }

    postService(service) {
        this.services.push(service);
        console.log(`${this.username} posted a new service: ${service}`);
        displayOutput(`${this.username} posted a new service: ${service}`);
    }

    viewReviews() {
        console.log(`${this.username}'s reviews: ${this.reviews.join(', ')}`);
        displayOutput(`${this.username}'s reviews: ${this.reviews.join(', ')}`);
    }

    viewProfile() {
        console.log(`${this.username}'s profile details.`);
        displayOutput(`${this.username}'s profile details.`);
    }

    editDetails(details) {
        console.log(`${this.username} edited details: ${details}`);
        displayOutput(`${this.username} edited details: ${details}`);
    }

    editService(service) {
        console.log(`${this.username} edited the service: ${service}`);
        displayOutput(`${this.username} edited the service: ${service}`);
    }

    viewActiveServices() {
        console.log(`${this.username}'s active services: ${this.activeServices.join(', ')}`);
        displayOutput(`${this.username}'s active services: ${this.activeServices.join(', ')}`);
    }

    acceptRejectRequest(customerRequest, accept) {
        console.log(`${this.username} ${accept ? 'accepted' : 'rejected'} ${customerRequest}'s request.`);
        displayOutput(`${this.username} ${accept ? 'accepted' : 'rejected'} ${customerRequest}'s request.`);
    }

    editAvailabilityTime(newTime) {
        console.log(`${this.username} edited availability time: ${newTime}`);
        displayOutput(`${this.username} edited availability time: ${newTime}`);
    }
}

class Admin extends User {
    constructor(username, password) {
        super(username, password);
    }

    autoApproveService(service) {
        console.log(`Service "${service}" auto-approved by admin.`);
        displayOutput(`Service "${service}" auto-approved by admin.`);
    }

    viewAddUsers() {
        console.log(`${this.username} is viewing and adding users.`);
        displayOutput(`${this.username} is viewing and adding users.`);
    }

    disableService(service) {
        console.log(`Service "${service}" disabled by admin.`);
        displayOutput(`Service "${service}" disabled by admin.`);
    }

    chatWithUser(user, message) {
        console.log(`Admin sent a message to ${user}: ${message}`);
        displayOutput(`Admin sent a message to ${user}: ${message}`);
    }

    editRemoveUser(user) {
        console.log(`${this.username} edited or removed user: ${user}`);
        displayOutput(`${this.username} edited or removed user: ${user}`);
    }
}

// Function to display output on the front-end
function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
}

// Example usage with simulated user interactions
const customer = new User("customer1", "password123");
const serviceProvider = new ServiceProvider("provider1", "providerPassword");
const admin = new Admin("admin", "adminPassword");
