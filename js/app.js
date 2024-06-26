document.addEventListener('alpine:init', () => {
    Alpine.store('auth', {
        user : null,    
        users : [
            {
                username : 'admin',
                password : 'admin',
                role : 'admin',
                email: 'admin@admin.com'
            },
            {
                username : 'user',
                password : 'user',
                role : 'site_user',
                email: 'user@user.com'
            }
        ],
        authenticate(username, password){

            let user = this.users.find(function(user){
                return user.username === username && user.password === password;
            });

            if(user){

                localStorage.setItem('user', JSON.stringify(user));

                this.user = user;

                return user;
            }

            return false;
        },
        logout(){
            localStorage.removeItem('user');
            this.user = null;
        },
        init(){
            let user = localStorage.getItem('user');

            if(user){
                this.user = JSON.parse(user);
            }
        }
    }); 
    
    
    Alpine.store('common', {
        imageSrc(src){    
            return 'http://127.0.0.1:5501' + src;
        }
    });
    
});