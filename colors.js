const ContentLinks = {
    SetColor: function (color) {
        $('.content a').css('color', color);
    }
}
const tabBtn = {
    SetColor: function (color) {
        $('.tabBtn').css('color', color);
    }
}
const Bodys = {
    SetColor: function (color) {
        $('body').css('color', color);
    },
    SetBackgroundColor: function (color) {
        $('body').css('background-color', color);
    }
}
const Title = {
    SetBackgroundColor: function (color) {
        $('#main_title a').css('color', color);
    },
    SetTextShadow: function (attribute) {
        $('#main_title a').css('background-color', color);
    },
    SetColor: function (color) {
        $('#main_title a').css('color', color);
    }
}
function get_mode() {
    return localStorage.mode;
}
function setValueModeToggle(text) {
    document.querySelector('#modeToggle').value = text;
}
function setDarkMode() {
    Bodys.SetBackgroundColor('rgb(47,49,53)');
    Bodys.SetColor('rgb(230, 230, 230)');
    setValueModeToggle('Light Mode');
    localStorage.mode = 'Dark Mode';
    tabBtn.SetColor('rgb(31,78,79)');
    Title.SetColor('rgb(31,78,79');
}

function setLightMode() {
    Bodys.SetBackgroundColor('white')
    Bodys.SetColor('black')
    setValueModeToggle('Dark Mode');
    localStorage.mode = 'Light Mode';
    tabBtn.SetColor('black');
    Title.SetColor('black');
}

function nightDayToggle(seletedMode) {
    if (seletedMode == 'Light Mode') {
        setLightMode();
    } else {
        setDarkMode();
    }
}