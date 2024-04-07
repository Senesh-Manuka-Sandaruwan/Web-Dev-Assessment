function newsletterForm() {
    return {
        email: '',
        subscribe() {
            if (this.email.trim() !== '') {
                
                let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
                subscriptions.push(this.email.trim());
                localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));

                this.email = '';

                alert('You have subscribed to the newsletter successfully!!!');
            }
        },
    };
}