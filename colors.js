var Links = {
    SetColor: function (color) {
        $('a').css('color', color);
    }
}
var Bodys = {
    SetColor: function (color) {
        $('body').css('color', color);
    },
    SetBackgroundColor: function (color) {
        $('body').css('background-color', color);
    }
}
var Title = {
    SetBackgroundColor: function (color) {
        $('#main_title').css('color', color);
    },
    SetTextShadow: function (attribute) {
        $('#main_title').css('background-color', color);
    }
}
function get_mode() {
    return localStorage.mode;
}
function nightDayToggle(self) {
    if (self.value == 'Light Mode') {
        // set light mode
        Bodys.SetBackgroundColor('white')
        Bodys.SetColor('black')
        self.value = 'Dark Mode';
        localStorage.mode = 'Light Mode';
        document.querySelector('.main_body dl').style.color = 'black';

        Links.SetColor('black');
    } else {
        // set dark mode
        Bodys.SetBackgroundColor('rgb(47,49,53)');
        Bodys.SetColor('rgb(230, 230, 230)');
        self.value = 'Light Mode';
        localStorage.mode = 'Dark Mode';
        document.querySelector('.main_body dl').style.color = 'rgb(31,78,79)';
        

        Links.SetColor('rgb(31,78,79)')
    }
}