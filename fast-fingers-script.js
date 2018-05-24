(function () {
    $("#input-row").append("<input type='text' id='tplInputBox' class='form-control'>");

    $("#tplInputBox").keydown(function ($event) {

        let ignoreCodeList = [13, 16, 37, 38, 39, 40, 46];
        let upperCharArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let lowerCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // console.log($event);
        var code = ($event.which && typeof $event.which === "number")
            ? $event.which
            : $event.keyCode && typeof $event.keyCode === "number"
                ? $event.keyCode
                : $event.charCode;

        // console.log("code", code);

        // console.log("key", $event.key);
        if (ignoreCodeList.includes(code)) {
            //do nothing
        } else if (code == 8) {
            //backspace
            $("#inputfield").val($("#inputfield").val().slice(0, -1));
        } else if (code == 32) {
            //space
            var e = $.Event("keyup");
            e.which = 32;
            e.keyCode = 32;
            $("input#inputfield").trigger(e);
            $("#tplInputBox").val("");
            // console.info(e);
        }
        // else if(upperCharArray.includes($event.key)) {
        // else if($event.shiftKey){
        //     console.log("val", $("#tplInputBox").val());
        //     $("#tplInputBox").val($("#tplInputBox").val().slice(0, -1));
        //     // $("#inputfield").val($("#inputfield").val().slice(0, -1));
        // }
        else {
            let minIndex = 0;
            let maxIndex = 25;
            var oldValue = $("#inputfield").val();

            let keyIndex = lowerCharArray.indexOf($event.key);
            let correctKeyIndex;
            if (keyIndex + 2 > 25) {
                diff = (keyIndex + 2) - 25;
                correctKeyIndex = diff - 1;
            } else {
                correctKeyIndex = keyIndex + 2;
            }
            let correctKey = lowerCharArray[correctKeyIndex];
            console.log("key ", $event.key, " keyIndex ", keyIndex, " correctKeyIndex ", correctKeyIndex, " correctKey", correctKey);

            var currentValue = oldValue += correctKey;
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
