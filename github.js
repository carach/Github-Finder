class Github {
    constructor() {
        this.client_id = '17f0eb1cf92b5c020deb';
        this.client_secret = '718e8f3f052bdbdda334dfcb141007b93b5c5265';
        this.repos_count = 5;
        this.repos_count_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_count_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {profile, repos};
    }
}