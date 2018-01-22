var zone = $('#wrapper');

var rowVal = {
    row1: '<div class="col col-12" onclick="app.addControl(this)"></div>',
    row2: '<div class="col col-6" onclick="app.addControl(this)"></div><div class="col col-6" onclick="app.addControl(this)"></div>',
    row3: '<div class="col col-4" onclick="app.addControl(this)"></div><div class="col col-4" onclick="app.addControl(this)"></div><div class="col col-4" onclick="app.addControl(this)"></div>',
    row4: '<div class="col col-3" onclick="app.addControl(this)"></div><div class="col col-3" onclick="app.addControl(this)"></div><div class="col col-3" onclick="app.addControl(this)"></div><div class="col col-3" onclick="app.addControl(this)"></div>'
}

//var DB = {
//    getData: function () {
//        if (typeof (Storage) !== "undefined") {
//            var data;
//            try {
//                data = JSON.parse(localStorage.getItem('list')) || {};
//            } catch (error) {
//                data = {};
//            }
//            return data;
//        } else {
//            return {};
//        }
//    },
//    setData: function (data) {
//        localStorage.setItem('list', JSON.stringify(data));
//    }
//}
//
//var list = DB.getData();

var app = {
    addRow: function (value,position) {
        
        var item = '<div class="row">' + value + '</div>';
        
        zone.append(item);
    },
    addControl: function(i){
        
        $('.col').removeClass('active');
        
        $(i).addClass('active');
    }
}

