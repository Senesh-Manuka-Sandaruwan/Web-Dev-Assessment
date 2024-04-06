const authStore = {
    user: null,

    authenticate(username, password) {
        if (username && password) {
            this.user = { username }; 
            return this.user;
        } else {
            return null; 
        }
    },

    logout() {
        this.user = null; 
    }
};

export default authStore;