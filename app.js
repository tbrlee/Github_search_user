
//Initialize Github
const github = new Github;

//Initialize UI
const ui =new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if(userText !== '') {
        //console.log(userText);
        //Make http call
        github.getUser(userText).then(data => {
            //console.log(data);
            if(data.profile.message === 'Not Found') {
                //Shoe alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                //Show profile & repos
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        //Clear profile
        ui.clearProfile();
    }
}); 