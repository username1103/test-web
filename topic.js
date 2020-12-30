function changeTopic(self, selectedTopic) {
    const currentTopic = document.querySelector('.currentTopic');
    if (currentTopic != null) {
        currentTopic.classList.remove('currentTopic');
    }
    self.parentElement.classList.add('currentTopic');
    changeContent(selectedTopic);
}
function changeContent(selectedTopic) {
    fetch(selectedTopic).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.content').innerHTML = text;
        })
    })
}

function fetchContent(self) {
    const selectedTopic = self.text;
    changeTopic(self, selectedTopic);
}