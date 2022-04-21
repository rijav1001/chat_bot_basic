function talk() {
    var know = {
        "Hi": "Hello",
        "Who are you": "Hello, I am a test chatbot. Nice to meet you, user!",
        "How are you": "I'm good, thank you. :)",
        "Please tell me what year is it": "It is 2022.",
        "What can I do for you": "Please show some love for my developers as they start their journey.",
        "OK, sure": "Thankk you very much!!",
        "Bye": "Goodbye! Have a great day! Will meet soon..."
    };

    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";

    if(user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't get what you're trying to say :( <br>";
    }
}