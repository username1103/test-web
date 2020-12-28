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
    return sessionStorage.mode;
}
function nightDayToggle(self) {
    if (self.value == 'Light Mode') {
        Bodys.SetBackgroundColor('white')
        Bodys.SetColor('black')
        self.value = 'Dark Mode';
        sessionStorage.mode='Light Mode';
        document.querySelector('.main_body dl').style.color = 'black';

        Links.SetColor('black');
    } else {
        Bodys.SetBackgroundColor('rgb(47,49,53)');
        Bodys.SetColor('rgb(230, 230, 230)');
        self.value = 'Light Mode';
        document.querySelector('.main_body dl').style.color = 'rgb(31,78,79)';
        sessionStorage.mode='Dark Mode';

        Links.SetColor('rgb(31,78,79)')
    }
}