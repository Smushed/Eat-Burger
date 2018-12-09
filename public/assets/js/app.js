$(() => {
    //Has to be a function because of using this keyword
    $(`.eat`).on(`click`, function (event) {
        const id = $(this).data(`id`);
        const userEat = {
            //1 is the same thing as true in mySQL. Setting the value as true for devoured
            devoured: 1
        };

        //TODO Make the put route & AJAX call
        $.ajax(`/api/eat`)
    });
    $(`.submit`).on(`click`, function (event) {
        const newBurger = {
            //Takes the textarea on the html
            burger_name: $(`#burger-input`).val().trim(),
        };
        $.ajax(`/api/burgers`, {
            type: `POST`,
            data: newBurger
        }).then(() => {
            location.reload();
        }
        );
    });
})