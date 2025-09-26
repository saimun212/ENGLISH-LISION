const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")//promise of responsive 
    .then((res) =>res.json()) // promise of json data 
    .then((json) => displayLesson(json.data));
};


const displayLesson = (lessons) => {
    //    1.get the container & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    //   2.get into every lessons
      for (let lesson of lessons) {
        
    //   3.create Element
    console.log(lesson);
     const btnDiv=document.createElement("div");    
     btnDiv.innerHTML = '<button href=""class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"> </i>  Lesson  </button>'

    //   4.append into container
    levelContainer.append(btnDiv);
      }
};
loadLessons();