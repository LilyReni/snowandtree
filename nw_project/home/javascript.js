var posts = [
  {
      "address": "668 Columbia Street",
      "status": "Unresolved",
      "category": "Snow/Ice",
      "phone": "604-788-9090",
      "urgency": "High",
      "distance": "10.0",
      "description": "Car stuck on hill, need help clearing the snow"
  },
  {
      "address": "109 Francis Way",
      "status": "Unresolved",
      "category": "Snow/Ice",
      "phone": "604-345-0983",
      "urgency": "Medium",
      "distance": "5.6",
      "description": "Family away on vacation, can someone please help shovel snow on the sidewalk? Thank you in advance!"
  },
  {
      "address": "1045 Quayside Drive",
      "status": "Unresolved",
      "category": "Fallen Tree",
      "phone": "778-464-8809",
      "urgency": "Low",
      "distance": "2.7",
      "description": "Fallen tree in the front yard, would appreciate it if someone can help me clear it!"
  },
  {
      "address": "31 Capilano Way",
      "status": "Unresolved",
      "category": "Snow/Ice",
      "phone": "778-455-1953",
      "urgency": "Low",
      "distance": "3.2",
      "description": "Senior need help with snow shoveling"
  },
  {
      "address": "850 Royal Ave",
      "status": "Unresolved",
      "category": "Snow/Ice",
      "phone": "778-861-0959",
      "urgency": "Medium",
      "distance": "4.5",
      "description": "Icy driveway, can someone please bring a shovel and help clear the ice? Thanks!"
  },
  {
      "address": "306 Sixth Street",
      "status": "Unresolved",
      "category": "Fallen Tree",
      "phone": "604-883-8395",
      "urgency": "High",
      "distance": "6.2",
      "description": "Big Tree fallen onto driveway"
  },
]


var categoryArr;
var ans = "";

function filterPostsAll() {
  $( "#postings" ).empty();
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].category == situ) {
      ans += renderPost(posts[i]);
    }
  }
  document.getElementById('postings').innerHTML = ans;
}

function filterPostsByCategory(situ) {
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].category == situ) {
      ans += renderPost(posts[i]);
    }
  }
  document.getElementById('postings').innerHTML = ans;
}

function renderPost(post){
  return "<div class=\"post-box\"><div class=\"row\"><div style=\"font:15px;\" class=\"col-xs-8\"><p><strong>" +
  post["address"] +
  "</strong></p></div><div class=\"col-xs-4\"><p class=\"pull-right\">" +
  post["status"] +
  "</p></div></div><div class=\"row\"><div class=\"col-xs-8\"><p><strong>Contact info: </strong>" +
  post["phone"] +
  "</p></div></div><div class=\"row\"><div class=\"col-xs-8\"><p><strong>Urgency: </strong>" +
  post["urgency"] +
  "</p></div><div class=\"col-xs-4\"><p class=\"pull-right\"><strong>" +
  post["distance"] +
  " km away</strong></p></div></div><div class=\"row\"><div class=\"col-xs-9\"><p><strong>Description: </strong>" +
  post["description"] +
  "</p></div><div class=\"col-xs-1\"></div><div class=\"col-xs-2\"><a href=\"login_form.html\" class='btn btn-success pull-right'>I can help!</a></div></div></div>";

  
              

}

