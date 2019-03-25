class Github {
    constructor() {
        this.client_id = 'ada761fc1c4727d8a6e3';
        this.client_secret = '883288c08ff01c0d28a2a6592cee59ecd9991ada';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            //profile: profile ES6 short version
             profile
        }

    }
} 