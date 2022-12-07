function main() {
  //profile pic
  var profile = document.getElementById("profile_pic");
  var profile_img = document.createElement("img");
  profile_img.src = "./profile_pic.jpeg";
  profile_img.id = "profile_img";
  profile.appendChild(profile_img);

  //contact me button
  var menu_button2 = document.createElement("button");
  menu_button2.textContent = "Contact Me";
  menu_button2.classList.add("cont_button");
  menu.appendChild(menu_button2);
  let cont_button = document.querySelector(".cont_button");
  cont_button.addEventListener("click", function () {
    scroll();
  });
  function scroll() {
    const element = document.getElementById("contact_me");
    element.scrollIntoView();
  }

  //infographic
  var infographic = document.getElementById("infographic");

  var about_me_header = document.createElement("h2");
  about_me_header.textContent = "About me";
  about_me_header.classList.add("about_me_header");
  infographic.appendChild(about_me_header);
  var about_me_desc = document.createElement("div");
  about_me_desc.textContent = aboutme.description;
  about_me_desc.classList.add("about_me_desc");
  infographic.appendChild(about_me_desc);

  var basic_header = document.createElement("h2");
  basic_header.textContent = "Basic Info";
  basic_header.classList.add("basic_header");
  infographic.appendChild(basic_header);
  var all_basic_info = document.getElementById("basic_info");
  var info;
  info =
    "<p>" +
    "<b>" +
    "Name: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +
    "</b>" +
    aboutme.name +
    "</p>" +
    "</br>" +
    "<p>" +
    "<b>" +
    "Age :&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +
    "</b>" +
    aboutme.age +
    "</p>" +
    "</br>" +
    "<p>" +
    "<b>" +
    "Email:&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +
    "</b>" +
    aboutme.email +
    "</p>" +
    "</br>" +
    "<p>" +
    "<b>" +
    "Language:&nbsp &nbsp &nbsp &nbsp &nbsp " +
    "</b>" +
    aboutme.language +
    "</p>" +
    "</br>" +
    "<p>" +
    "<b>" +
    "Class Section:&nbsp &nbsp " +
    "</b>" +
    aboutme.classSection +
    "</p>" +
    "</br>" +
    "<p>" +
    "<b>" +
    "Student ID:&nbsp &nbsp &nbsp &nbsp " +
    "</b>" +
    aboutme.id +
    "</p>" +
    "</br>" +
    "<p>" +
    "<b>" +
    "Instructor:&nbsp &nbsp &nbsp &nbsp &nbsp " +
    "</b>" +
    aboutme.instructor +
    "</p>";
  all_basic_info.innerHTML = info;

  //education
  var all_education = document.getElementById("education");

  var education_header = document.createElement("h1");
  education_header.textContent = "Education";
  education_header.classList.add("education_header");
  all_education.appendChild(education_header);

  for (var i = 0; i < education.length; i++) {
    var education_card = document.createElement("div");
    education_card.classList.add("education_card");

    var education_school = document.createElement("h2");
    education_school.textContent = "School: " + education[i].school;
    education_school.classList.add("education_school");
    education_card.appendChild(education_school);

    var education_location = document.createElement("h4");
    education_location.textContent = "Location: " + education[i].location;
    education_location.classList.add("education_location");
    education_card.appendChild(education_location);

    var education_degree = document.createElement("h4");
    education_degree.textContent = "Degree: " + education[i].degree;
    education_degree.classList.add("education_degree");
    education_card.appendChild(education_degree);

    var education_graduated = document.createElement("h4");
    education_graduated.textContent =
      "Year of Completion: " + education[i].graduated;
    education_graduated.classList.add("education_graduated");
    education_card.appendChild(education_graduated);

    var education_grade = document.createElement("h4");
    education_grade.textContent = "Grade: " + education[i].grade;
    education_grade.classList.add("education_grade");
    education_card.appendChild(education_grade);

    if (education[i].honours !== "none") {
      var education_honours = document.createElement("h4");
      education_honours.textContent = "Honours: " + education[i].honours;
      education_honours.classList.add("education_honours");
      education_card.appendChild(education_honours);
    }

    all_education.appendChild(education_card);
  }

  //skills
  var all_skills = document.getElementById("skills");

  for (var i = 0; i < skills.length; i++) {
    var skill_card = document.createElement("div");
    skill_card.classList.add("skill_card");

    var skill_name = document.createElement("h2");
    skill_name.textContent = "Skill: " + skills[i].name;
    skill_name.classList.add("skill_name");
    skill_card.appendChild(skill_name);

    var skill_desc = document.createElement("h4");
    skill_desc.textContent = skills[i].desc;
    skill_desc.classList.add("skill_desc");
    skill_card.appendChild(skill_desc);

    all_skills.appendChild(skill_card);
  }
  var skills_header = document.createElement("h1");
  skills_header.textContent = "Skills";
  skills_header.classList.add("skills_header");
  all_skills.appendChild(skills_header);

  //honesty
  var honesty_container = document.getElementById("honesty");

  var honesty_header = document.createElement("h2");
  honesty_header.textContent = "Academic Honesty";
  honesty_header.classList.add("honesty_header");
  honesty_container.appendChild(honesty_header);
  var honesty = document.createElement("div");
  honesty.textContent = aboutme.honesty;
  honesty.classList.add("honesty_desc");
  honesty_container.appendChild(honesty);
  var date = document.createElement("div");
  date.textContent = "Date: " + aboutme.date;
  date.classList.add("honesty_date");
  honesty_container.appendChild(date);
}
addEventListener("DOMContentLoaded", main);
