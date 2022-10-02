import './App.css'
import { Component } from 'react';

class ReactTable extends Component {

    render(data) { //Whenever our class runs, the render method will be called automatically. It may have already been defined in the constructor behind the scene.

        let jsonKeys = Object.keys(data[0])
        let table = document.getElementById("root");
        let tbdy = document.createElement('tbody');
        function getHeading() {
            let heading = document.createElement('th')
            heading.append(document.createElement('h1'))
            heading.appendChild(document.createTextNode('F1-Rankings'))
            return heading
        }
        tbdy.appendChild(getHeading())
        for (const element of jsonKeys) {
            if (element === jsonKeys[1]) {
                console.log("skipped")
            } else {
                let th2 = document.createElement('th');
                th2.append(document.createElement('h2'))
                th2.appendChild(document.createTextNode(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()));
                tbdy.appendChild(th2);
            }

        }
        
        table.appendChild(tbdy)

        for (let k in data) {
            let tr = document.createElement('tr');
            for (let j in data[k]) {
                if (j === "positionText") {
                    console.log("skipped")
                } else if (j === "Constructor") {
                    let td = document.createElement('td');
                    td.appendChild(document.createTextNode(JSON.stringify(data[k][j]['name']).slice(1, -1)));
                    tr.appendChild(td);
                } else if (j === "Wins") {
                    console.log(data[k][j])
                    if (data[k][j] === 0) {
                        let td = document.createElement('td');
                    td.appendChild(document.createTextNode('-'));
                    tr.appendChild(td);
                    }
                } else {
                    let td = document.createElement('td');
                    td.appendChild(document.createTextNode(JSON.stringify(data[k][j]).slice(1, -1)));
                    tr.appendChild(td);
                }
                tbdy.appendChild(tr);
            }
        }
        table.appendChild(tbdy);

        return table

    }

}

export default ReactTable 
