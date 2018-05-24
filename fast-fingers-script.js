(function () {
    $("#input-row").append("<input type='text' id='tplInputBox' class='form-control'>");

    $("#tplInputBox").keydown(function ($event) {
        var code = ($event.which && typeof $event.which === "number")
            ? $event.which
            : $event.keyCode && typeof $event.keyCode === "number"
                ? $event.keyCode
                : $event.charCode;

        console.log("code", code);
        let ignoreCodeList = [13, 37, 38, 39, 40, 46];
        if(ignoreCodeList.includes(code)){
            //do nothing
        } else if(code == 8){
            //backspace
            $("#inputfield").val($("#inputfield").val().slice(0, -1));
        } else if (code == 32) {
            //space
            var e = $.Event("keyup");
            e.which = 32;
            $("#inputfield").trigger(e);
            $("#tplInputBox").val("");
        } else {
            var oldValue = $("#inputfield").val();
            var currentValue = oldValue += $event.key;
            $("#inputfield").val(currentValue).trigger("keyup");
        }
    });

    $("#tplInputBox").css({
        "border-top": "1px solid #575757",
        "height": "50px",
        "border-right": "1px solid #6b7a89",
        "border-bottom": "1px solid #70869b",
        "border-left": "1px solid #525a62",
        "font-size": "2.0em",
        "line-height": "1.0em",
        "font-family": "Times New Roman, Times, serif",
        "color": "#333"
    })
})()
