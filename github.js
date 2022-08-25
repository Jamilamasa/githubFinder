class Github {
    constructor() {
        this.client_id = 'c429b945260683447bbf';
        this.client_secret = '14f5f99ef7e3bb59812abc797eee01cd97a12f01';
        this.repo_count = 6;
        this.sort = "created: asc"
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repo = await repoResponse.json();

        return {
            // profile: profile 
            profile,
            repo
        }
    }
}