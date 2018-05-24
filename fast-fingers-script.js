(function () {
    $("#input-row").append("<input type='text' id='tplInputBox' class='form-control'>");

    $("#tplInputBox").keydown(function ($event) {
        console.log($event);
        var code = ($event.which && typeof $event.which === "number")
            ? $event.which
            : $event.keyCode && typeof $event.keyCode === "number"
                ? $event.keyCode
                : $event.charCode;

        console.log("code", code);
        let ignoreCodeList = [13, 16, 37, 38, 39, 40, 46];
        if(ignoreCodeList.includes(code) || (code >=65 && code <= 90)){
            //do nothing
        } else if(code == 8){
            //backspace
            $("#inputfield").val($("#inputfield").val().slice(0, -1));
        } else if (code == 32) {
            //space
            var e = $.Event("keyup");
            e.which = 32;
            e.keyCode = 32;
            $("input#inputfield").trigger(e);
            $("#tplInputBox").val("");
            console.info(e);
        } else if(code >= 97 && code <= 122){
            var oldValue = $("#inputfield").val();
            var currentValue = oldValue += $event.key;
            $("#inputfield").val(currentValue).trigger("keyup");
        }
    });

    $("#tplInputBox").keyup(function ($event) {
        console.log($event);
        var code = ($event.which && typeof $event.which === "number")
            ? $event.which
            : $event.keyCode && typeof $event.keyCode === "number"
                ? $event.keyCode
                : $event.charCode;

        console.log("code", code);
        if(code >= 65 && code <= 90) {
            console.log("val", $("#tplInputBox").val());
            $("#tplInputBox").val($("#tplInputBox").val().slice(0, -1));
        }
    })

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
