document.querySelector(".btn-minus").setAttribute("disabled", "disabled"); 

var valueCount

document.querySelector(".btn-plus").addEventListener("click", function() {

    valueCount = document.getElementById("col-lg-2 pt-2").value; 
    valueCount++;

    document.getElementById("col-lg-2 pt-2").value = valueCount

    if(valueCount > 0)
    {
        document.querySelector(".btn-minus").removeAttribute("disabled");
        document.querySelector(".btn-minus").classList.remove("disabled");
    }
})

document.querySelector(".btn-minus").addEventListener("click", function() {

    valueCount = document.getElementById("col-lg-2 pt-2").value; 
    valueCount--;

    document.getElementById("col-lg-2 pt-2").value = valueCount

    if(valueCount == 0)
    {
        document.querySelector(".btn-minus").setAttribute("disabled", "disabled")
    }
})

$('#btn-danger').click(function(){
    if (unsaved)
    {
        var flag = confirm("Are you sure you want to cancel?");
        if (flag)
        {
            $('#modal').modal('hide');

        }
        else
        $('#modal').modal('hide');
    }
});

