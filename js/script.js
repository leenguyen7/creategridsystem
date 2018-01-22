var zone = $('#wrapper');

var rowVal = {
    row1: '<div class="col col-12" onclick="app.addControl(this)"></div>',
    row2: '<div class="col col-6" onclick="app.addControl(this)"></div><div class="col col-6" onclick="app.addControl(this)"></div>',
    row3: '<div class="col col-4" onclick="app.addControl(this)"></div><div class="col col-4" onclick="app.addControl(this)"></div><div class="col col-4" onclick="app.addControl(this)"></div>',
    row4: '<div class="col col-3" onclick="app.addControl(this)"></div><div class="col col-3" onclick="app.addControl(this)"></div><div class="col col-3" onclick="app.addControl(this)"></div><div class="col col-3" onclick="app.addControl(this)"></div>'
}

var app = {
    addRow: function (value) {

        var item = '<div class="row">' + value + '</div>';

        if ($('.col').is('.active')) {
            $('.active').append(item);
        } else {
            zone.append(item);
        }
    },
    addControl: function (i) {
        $('.col').removeClass('active');
        $(i).addClass('active');
    }
}

