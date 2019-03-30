class Github {
    constructor() {
        this.client_id = 'ada761fc1c4727d8a6e3';
        this.client_secret = '883288c08ff01c0d28a2a6592cee59ecd9991ada';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            //profile: profile ES6 short version
             profile,
             repos
        }

    }
} 