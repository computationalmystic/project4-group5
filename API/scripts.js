const repo_url = 'http://augur.osshealth.io:5000/api/unstable/repos';
const repoGroups_url = 'http://augur.osshealth.io:5000/api/unstable/repo-groups';
const firstCom = 'http://augur.osshealth.io:5000/api/unstable/repo-groups/';
const secCom = '/top-committers';

const id = [];
const name = [];
const commits = [];
const mail = [];

function chart(){
    const ctx = document.getElementById('firstChart');
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: mail,
            datasets: [{
                label: "Number of Commits",
                data: commits,
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    
                    'rgba(100, 99, 132)',
                    'rgba(54, 162, 24)',
                    'rgba(255, 206, 1)',
                    'rgba(75, 13, 192)',
                    'rgba(100, 102, 255)',
                    'rgba(255, 14, 64)'
                ],
            }]
        },
        options: { 
            scales: {
                    ticks: {
                        beginAtZero: true,
                        display: true
                    }
            }
        }
    });
}

async function getRepos(){
    const response = await fetch(repo_url);
    const repos = await response.json();
    console.log(repos);
}
        
async function getRepoGroups(){
    const response = await fetch(repoGroups_url);
    const groups = await response.json();
            
    for(var i = 0; i<groups.length; i++){
        id.push(groups[i].repo_group_id);
        name.push(groups[i].rg_name);
    }
    console.log(id);
    console.log(name);
    
    var list = "";
    for(var i = 0; i<groups.length; i++){
        list += "Repo name: " + name[i] + ". Repo ID: " + id[i] + ".\n\n";
    }
    document.getElementById("groups").innerHTML = list;
}
        
async function getCommittersMHS(){
    commit_url = firstCom + "20" + secCom;
    const response = await fetch(commit_url);
    const committers = await response.json();
    console.log(committers.length);
    
    for(var i = 0; i<committers.length; i++){
        commits.push(committers[i].commits);
        mail.push(committers[i].email);
    }
    chart();
}