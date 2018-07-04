// Init github
const github = new Github();
// Init ui
const ui = new UI();
// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // Show alert (proceed in ui)
                    ui.showAlert('User not found', 'alert alert-danger');

                } else {
                    // Clear previous alert, if any
                    ui.clearAlert();
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // Clear profile
        ui.clearProfile();
        // Clear previous alert, if any
        ui.clearAlert();
    }
});