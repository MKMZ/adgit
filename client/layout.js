$('#requestForm').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'/service?' + $('#requestForm').serialize(),
        type:'post',
        success: function(data){
            var columns = creatingTable(data);
            for (var i = 0; i < data.length; i++) {
                var row$ = $('<tr/>');
                for (var columnIndex = 0; columnIndex < columns.length; columnIndex++) {
                    console.log(columns[columnIndex]);
                    var cellValue = data[i][columns[columnIndex]];
                    if (cellValue == null) {
                        cellValue = "";
                    }
                    if(columns[columnIndex] == "url"){
                        row$.append($('<td/>').html('<a href="' + cellValue + '">Website</a>'));
                    }
                    else{
                        row$.append($('<td/>').html(cellValue));
                    }
                    row$.css("color", "black");
                }
                $("#jsonTable").append(row$);
            }
            $("#output").css("visibility", "visible");
        }
    });
});
function creatingTable(list) {
    var column = [];
    var headerTr$ = $('<tr style="background: #2CBBBB; color: #FFFFFF; column-width: 100px!important;" />');
    for (var i = 0; i < list.length; i++) {
        var row = list[i];
        for (var key in row) {
            if ($.inArray(key, column) == -1) {
                column.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $("#jsonTable").empty();
    $("#jsonTable").append(headerTr$);
    return column;
}