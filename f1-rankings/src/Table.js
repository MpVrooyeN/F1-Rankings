import './App.css'
import { Component } from 'react';

class ReactTable extends Component {

    render(data) { //Whenever our class runs, the render method will be called automatically. It may have already been defined in the constructor behind the scene.

        function createTable() {
            return document.getElementById("root");
        }

        function getJSONKeys() {
            return Object.keys(data[0])
        }

        function createTableBody() {
            let tbdy = document.createElement('tbody');
            tbdy.appendChild(getHeading())
            tbdy.appendChild(createTableHeaders());
            for (let j in createTableData()) {
                tbdy.appendChild(createTableData()[j]);
            }

            return tbdy
        }

        function getHeading() {
            let heading = document.createElement('th')
            heading.setAttribute('colspan', getJSONKeys().length)
            heading.setAttribute('background-color', 'red')
            let h1 = document.createElement('h1')
            h1.appendChild(document.createTextNode('F1-Rankings'))
            heading.appendChild(h1)
            return heading
        }

        function createTableHeaders() {
            let thr2 = document.createElement('tr');
            for (let element of getJSONKeys()) {
                if (element === getJSONKeys()[1]) {
                    console.log("skipped")
                } else {
                    let th2 = document.createElement('th')
                    if (element === getJSONKeys()[0]) {
                        element = 'Pos'
                        th2.setAttribute('width', '20%')
                    }
                    let h2 = document.createElement('h3');
                    h2.appendChild(document.createTextNode(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()));
                    th2.appendChild(h2)
                    thr2.appendChild(th2)
                }

            }
            return thr2
        }


        function createTableData() {
            let returnV = []
            for (let k in data) {
                let tr = document.createElement('tr');
                for (let j in data[k]) {
                    if (j === "positionText") {
                        console.log("skipped")
                    } else if (j === "Constructor") {
                        let td = document.createElement('td');
                        td.appendChild(document.createTextNode(JSON.stringify(data[k][j]['name']).slice(1, -1)));
                        td.setAttribute('width', '100%')
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
                }
                returnV.push(tr)
            }
            return returnV
        }
        return createTable().appendChild(createTableBody());
    }

}

export default ReactTable 
