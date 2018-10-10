importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js')

firebase.initializeApp({
    "messagingSenderId": "681591719296"
})

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(paylod){
    console.log('Received background message ', paylod)
    return self.registration.showNotification({}, {})
})