const baseApi = "https://valiant-curiosity-production-b699.up.railway.app/order";
var tbody = document.getElementById("tbody");

(function() {
    var tableHeaders = document.getElementsByClassName("c-table__header");
    var tableCells = document.getElementsByClassName("c-table__cell");
    var span = document.createElement("span");
  
    for (var i = 0; i < tableCells.length; i++) {
      span = document.createElement("span");
      span.classList.add("c-table__label");
      tableCells[i].prepend(span);
    }
  
    var tableLabels = tableHeaders[0].getElementsByClassName("c-table__col-label");
    var spanMod = document.getElementsByClassName("c-table__label");
  
    for (var i = 0; i < tableLabels.length; i++) {
      for (var a = 0; a < tableCells.length; a++) {
        spanMod[a].innerHTML = tableLabels[i].innerHTML;
      }
    }
  
    var b = tableLabels.length;
    for (var a = 0; a < tableCells.length; a++) {
      spanMod[a].innerHTML = tableLabels[a%b].innerHTML;
    }
  })();


  function getData() {

    fetch(baseApi)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          
            var backenddata = ""
            res.map((dt) => {
              backenddata +=
              `
              <tr>
            <td>${dt.id}</td>
            <td class="c-table__cell"> ${dt.name}</td>
            <td class="c-table__cell"> ${dt.address}</td>
            <td class="c-table__cell"> ${dt.mobile}</td>
            <td class="c-table__cell"> ${dt.date}</td>
            <td class="c-table__cell"> ${dt.city}</td>
            <td class="c-table__cell"> ${dt.cflavour}</td>
            <td class="c-table__cell"> ${dt.cgram}</td>
          </tr>
              `;
            })

            tbody.innerHTML = backenddata

        })
}

getData();