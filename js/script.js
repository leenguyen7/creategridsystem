var zone = $('#wrapper');

var rowVal = {
    row1: '<div class="col-12"></div>',
    row2: '<div class="col-6"></div><div class="col-6"></div>',
    row3: '<div class="col-4"></div><div class="col-4"></div><div class="col-4"></div>',
    row4: '<div class="col-3"></div><div class="col-3"></div><div class="col-3"></div><div class="col-3"></div>'
}

var app = {
    addRow: function (value) {
        var item = '<div class="row">' + value + '</div>';
        zone.append(item);
    },

}