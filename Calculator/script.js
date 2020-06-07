
document.querySelector("form").addEventListener("submit", cancelDefault);
 function cancelDefault(e) {
       e.preventDefault();
 }

document.querySelector("#calculate").onclick = function() {
    calculateTip();
}
function calculateTip() {
        const bill = document.querySelector("#bill").value;
        const service = document.querySelector("#service").value;
        const people = document.querySelector("#people").value;

        if(bill !== "" && service !== "" && people!== "") {
                  let tip = (bill * service)/people;
                  tip = Math.round(tip * 100)/100;
                  tip = tip.toFixed(2);
                  const totalTip = `$ ${tip}`;
                const textNode = document.createTextNode(totalTip)
                const paragraph = document.querySelector("#paragraph")
                paragraph.appendChild(textNode)
        }
        else {
               const textNode = document.createTextNode("Please Fill all Fields. Thank You!")
               const paragraph = document.querySelector("#paragraph")
                paragraph.appendChild(textNode)   
        }
    }   