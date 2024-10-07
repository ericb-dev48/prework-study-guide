const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

let listTopics = () => {
    console.log("Here are the topics we learned through Prework:")
   topics.forEach(topic => {
        console.log(topic);    
    });
}

let selectTopic = (selectedTopic) => {
    switch(selectedTopic) {
        case "HTML":
            console.log("Let's study HTML!");
            break;
        case "CSS":
            console.log("Let's study CSS!");
            break;    
        case "Git":
            console.log("Let's study Git!");
            break;
        case "JavaScript":
            console.log("Let's study JavaScript!");
            break;
        default:
            console.log("Error occurred.")
    }
}

listTopics();
console.log("Which topic should we study first?");
selectTopic(randomTopic);