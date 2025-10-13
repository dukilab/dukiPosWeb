function changeAmount(id, amount) {
    const amt = document.getElementById(id);
    let num = Number(amt.textContent);
    amt.textContent  = (num + amount).toString();
}

function SendOrder(){
    var items = document.getElementsByClassName('itemCount');
    var itemOrder = {};
    for (let i = 0; i < items.length; i++){
        const item = items[i];
        itemOrder[item.id] = Number(item.textContent);
    }
    fetch('/order', {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(itemOrder)
    }).then(response => {
        if(response.status != 200){
            alert("Error: " + response.status);
            return;
        }
        var sessionID = response.json().sessionID;
        console.log("Session ID: " + sessionID);
        //location.href = "claim?sessionID=" + sessionID;
    })

}