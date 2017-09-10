$(document).ready(function () {

    $(".add").click(function () {

        var blockRow = document.createElement("div");
        newBlock.classList.add(".row");

        var block_img = blockRow.appendChild(document.createElement("div"));
        var block_name = blockRow.appendChild(document.createElement("div"));
        var block_date = blockRow.appendChild(document.createElement("div"));

       /* var entryText = $(".entry__text").val();
        var entryEit = document.
        var entryRemove =*/

        $(".block .entry p").append(entryText);
    });
});