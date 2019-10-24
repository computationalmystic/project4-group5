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
        
        data.forEach(repo => {
            //console.log(repo.rg_description)
            document.getElementById('repo-group-select').innerHTML += 
                '<option value="' + 
                repo.repo_group_id +
                '">' +
                repo.rg_name +
                '</option>'
        })
    } else {
        console.log('error')
    }
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
            
            var i = 1
            data.forEach(repo => {
                //console.log(repo.rg_description)
                document.getElementById('repos').innerHTML += 
                    '<option id="op' + i + '" value="' + 
                    repo.repo_id +
                    '">' +
                    repo.repo_name +
                    '</option>'
                
                document.getElementById('op' + i).data = parseInt(repo.commits_all_time)
                console.log('HERE:' + repo.commits_all_time)
                i = i + 1
            })
        } else {
            console.log('error')
        }
    }
    
    repo_request.send()
}

function get_contributers(repo_id) {
    var contributer_request = new XMLHttpRequest()
    var url = 'http://augur.osshealth.io:5000/api/unstable/repo-groups/' +                       document.getElementById('repos').data + '/repos/' + repo_id + '/top-committers'
    
    commits_all_time = document.getElementById('op' + 
        (parseInt(document.getElementById('repos').selectedIndex) + 1)).data
    
    console.log('op' + 
        (parseInt(document.getElementById('repos').selectedIndex) + 1))
    
    console.log(commits_all_time + ' ' + url)
    
    contributer_request.open('GET', url, true)
    
    contributer_request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(data)

        if (request.status >= 200 && request.status < 400) {
            document.getElementById('contributers').innerHTML = ''

            data.forEach(contributer => {
                //console.log(repo.rg_description)
                document.getElementById('contributers').innerHTML += 
                    '<option value="' + 
                    contributer.commits +
                    '">' +
                    contributer.email + ' ' + contributer.commits / commits_all_time +
                    '</option>'
                
                console.log(contributer.commits + ' / ' + commits_all_time)
            })
        } else {
            console.log('error')
        }
    }
    
    contributer_request.send()
}