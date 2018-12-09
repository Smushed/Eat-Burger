$(() => {
    //Has to be a function because of using this keyword
    $(`.eat`).on(`click`, function (event) {
        const id = $(this)
    });
})