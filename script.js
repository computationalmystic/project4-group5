var rg_id = [];
var rg_name = [];

var rp_id = [];
var rp_name = [];
var rp_tot_commits = [];

var con_email = [];
var con_commits = [];

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.open('GET', 'http://augur.osshealth.io:5000/api/unstable/repo-groups', true)
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    console.log(data)

    if (request.status >= 200 && request.status < 400) {
        document.getElementById('repo-group-select').innerHTML = ''
        
        var i = 0;
        data.forEach(repo => {
            //console.log(repo.rg_description)
            document.getElementById('repo-group-select').innerHTML += 
                '<option value="' + 
                repo.repo_group_id +
                '">' +
                repo.rg_name +
                '</option>'
            
            rg_id[i] = repo.repo_group_id;
            rg_name[i] = repo.rg_name;
            i++;
        })
    } else {
        console.log('error')
    }

    console.log(rg_id);
    console.log(rg_name);
}

// Send request
request.send()

function get_repos(repo_group_id) {
    console.log(repo_group_id)
    var repo_request = new XMLHttpRequest()
    var url = 'http://augur.osshealth.io:5000/api/unstable/repo-groups/' + repo_group_id + '/repos'
    console.log(url)
    repo_request.open('GET', url, true)
    
    repo_request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(data)

        if (request.status >= 200 && request.status < 400) {
            document.getElementById('repos').innerHTML = ''
            document.getElementById('repos').data = repo_group_id
            
            rp_id = [];
            rp_name = [];
            rp_tot_commits = [];
            
            var i = 0
            data.forEach(repo => {
                //console.log(repo.rg_description)
                document.getElementById('repos').innerHTML += 
                    '<option id="op' +
                    i +
                    '" data-commits="' + 
                    repo.commits_all_time + 
                    '" value="' + 
                    repo.repo_id +
                    '">' +
                    repo.repo_name +
                    '</option>'
                
                rp_id[i] = repo.repo_id;
                rp_name[i] = repo.repo_name;
                rp_tot_commits[i] = repo.commits_all_time;
                //document.getElementById('op' + i).data = repo.commits_all_time
                //console.log('HERE:' + document.getElementById('op' + i).data)
                i = i + 1
            })
        } else {
            console.log('error')
        }
        console.log(rp_id);
        console.log(rp_name);
        console.log(rp_tot_commits);
    }
    
    repo_request.send()
}

function get_contributers(option) {
    var contributer_request = new XMLHttpRequest()
    var url = 'http://augur.osshealth.io:5000/api/unstable/repo-groups/' +                       rg_id[document.getElementById('repo-group-select').selectedIndex] + '/repos/' + rp_id[document.getElementById('repos').selectedIndex] + '/top-committers'
    
    commits_all_time = rp_tot_commits[document.getElementById('repos').selectedIndex]
    
    //commits_all_time = document.getElementById('op' + 
        //(parseInt(document.getElementById('repos').selectedIndex) + 1)).data
    
    //console.log('op' + 
        //(parseInt(document.getElementById('repos').selectedIndex) + 1))
    
    console.log(commits_all_time + ' ' + url)
    
    contributer_request.open('GET', url, true)
    
    contributer_request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(data)

        if (request.status >= 200 && request.status < 400) {
            document.getElementById('contributers').innerHTML = ''

            con_email = [];
            con_commits = [];
            
            var i = 0;
            data.forEach(contributer => {
                //console.log(repo.rg_description)
                document.getElementById('contributers').innerHTML += 
                    '<option value="' + 
                    contributer.commits +
                    '">' +
                    contributer.email + ' ' + contributer.commits / commits_all_time +
                    '</option>'
                
                console.log(contributer.commits + ' / ' + commits_all_time)
                
                con_email[i] = contributer.email
                con_commits[i] = contributer.commits
                
                i++
            })
        } else {
            console.log('error')
        }
        console.log(con_email)
        console.log(con_commits)
    }
    
    contributer_request.send()
}