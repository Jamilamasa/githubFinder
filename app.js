const github = new Github;
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Add event-listner to the search input
searchUser.addEventListener('keyup', (e)=>{
    // get input text
    const userInput = e.target.value;
    if(userInput !== '') {
        github.getUser(userInput)
        .then((data)=>{
            if(data.profile.message === 'Not Found'){
                // Show error message
                ui.showErr("User Not Found", "alert alert-danger")
            } else {
                // Show proflle
                ui.showProfile(data.profile)
                ui.showRepos(data.repo)
            }
        })
    } else {
        // Clear profile
        ui.clearProfile();
    }
})