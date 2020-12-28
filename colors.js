var Links = {
    SetColor: function (color) {
        var a_list = document.querySelectorAll('a');
        var i = 0;
        while (i < a_list.length) {
            a_list[i].style.color = color;
            i = i + 1;
        }
    }
}
var Bodys = {
    SetColor: function (color) {
        document.querySelector('body').style.color = color;
    },
    SetBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
var Title = {
    SetBackgroundColor: function (color) {
        document.querySelector('#main_title').style.backgroundColor = color;
    },
    SetTextShadow: function (attribute) {
        document.querySelector('#main_title').style.textShadow = attribute;
    }
}
function get_mode(){
    return localStorage.mode;
}
function nightDayToggle(self) {
    if (self.value === 'Dark Mode') {
        Title.SetBackgroundColor('white');
        Title.SetTextShadow('5px 5px darkgray');
        Bodys.SetBackgroundColor('white')
        Bodys.SetColor('black')
        self.value = 'Light Mode';
        localStorage.mode='Light';

        Links.SetColor('black');
    } else {
        Title.SetBackgroundColor('rgb(30,30,30)');
        Title.SetTextShadow('5px 5px white');
        Bodys.SetBackgroundColor('rgba(0, 0, 0, 0.52)');
        Bodys.SetColor('rgb(230, 230, 230)');
        self.value = 'Dark Mode';
        localStorage.mode='black';

        Links.SetColor('rgb(31,78,79)')
    }
}