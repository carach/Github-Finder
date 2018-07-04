class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    // Display profile in ui
    showProfile(user) {
        // this.profile.innerText = `${user.html_url}`;
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class ="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
                    <span class ="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
                    <span class ="badge badge-success mb-2">Follower: ${user.followers}</span>
                    <span class ="badge badge-info mb-2">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-hedaing mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }
    // Show alert message
    showAlert(message, className) {
        if (!document.querySelector('.alert')) {
            // Create a div
            const div = document.createElement('div');
            div.className = className;
            // Add text
            div.appendChild(document.createTextNode(message));
            // Get parent
            const container = document.querySelector('.searchContainer');
            // Get search box
            const search = document.querySelector('.search');
            // Insert alert
            container.insertBefore(div, search);
        } 
    }

    // Show user repos
    showRepos(repos) {
        let output = '';
        repos.forEach( (repo) => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class ="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>
                            <span class ="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
                            <span class ="badge badge-success mb-2">Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        // Output repos
        document.getElementById('repos').innerHTML = output;
    }
    // Clear alert
    clearAlert() {
        if (document.querySelector('.alert')) {
        document.querySelector('.alert').remove();
        }
    }
    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}