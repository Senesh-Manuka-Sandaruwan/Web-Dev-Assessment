// function newsletterForm() {
//     return {
//         email: '',
//         subscribe() {
//             if (this.email.trim() !== '') {
                
//                 let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
//                 subscriptions.push(this.email.trim());
//                 localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));

//                 this.email = '';

//                 alert('You have subscribed to the newsletter successfully!!!');
//             }
//         },
//     };
// }

function saveSubscription(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    if (email.trim() !== '') {
        var subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
        subscriptions.push(email);
        localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
        alert('You have subscribed to the newsletter successfully!!!');
    } else {
        alert('Please enter a valid email address...');
    }
}


function viewSubcriptions() {
    var subscriptions = JSON.parse(lacalStorage.getItem('subscriptions')) || [];
    if (subscriptions.lenth > 0) {
        var message = 'Newslatter Subscription:\n';
        subscriptions.forEach(function(email, index){
            messege += (index + 1) + '. ' + email + '\n';
        });
        alert(message);
        console.log(message);
    } else {
        var message = 'No subscription yet..';
        alert(message);
        console.log(message);
    }
}