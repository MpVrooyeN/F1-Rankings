import './App.css'
import { Component } from 'react';

class ReactTable extends Component {

    render(data) { //Whenever our class runs, the render method will be called automatically. It may have already been defined in the constructor behind the scene.

        function createTable() {
            return document.getElementById("root");
        }

        function getJSONKeys(JSON, key = 0) {
            return Object.keys(JSON[key])
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
            heading.setAttribute('colspan', getJSONKeys(data).length)
            heading.setAttribute('background-color', 'red')
            let h1 = document.createElement('h1')
            h1.appendChild(document.createTextNode('F1-Rankings'))
            heading.appendChild(h1)
            return heading
        }

        function createTableHeaders() {
            let thr2 = document.createElement('tr');
            for (let element of getJSONKeys(data)) {
                if (element === getJSONKeys(data)[1]) {
                    console.log("Skipped PositionText Header")
                } else {
                    let th2 = document.createElement('th')
                    let h2 = document.createElement('h3');
                    if (element === getJSONKeys(data)[0]) {
                        h2.appendChild(document.createTextNode('Pos'));
                        th2.setAttribute('width', '20%')
                    } else if (element === getJSONKeys(data)[2]) {
                        h2.appendChild(document.createTextNode('Pts'));
                        th2.setAttribute('width', '20%')
                    } else {
                        h2.appendChild(document.createTextNode(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()));
                    }

                    th2.appendChild(h2)
                    thr2.appendChild(th2)
                }

            }
            return thr2
        }

        function tableDataPerRow(tableRow, rowData, indexRow, indexData) {
            if (indexData === "Constructor") {
                rowData.appendChild(document.createTextNode(JSON.stringify(data[indexRow][indexData]['name']).slice(1, -1)));
                rowData.setAttribute('width', '100%')
            } else if (indexData === "wins") {
                if (JSON.stringify(data[indexRow][indexData]).slice(1, -1) === "0") {
                    rowData.appendChild(document.createTextNode('-'));
                } else {
                    rowData.appendChild(document.createTextNode(JSON.stringify(data[indexRow][indexData]).slice(1, -1)));
                }
            } else {
                rowData.appendChild(document.createTextNode(JSON.stringify(data[indexRow][indexData]).slice(1, -1)));
            }
            return tableRow.appendChild(rowData)
        }

        function createTableData() {
            let returnV = []
            for (let k in data) {
                let tr = document.createElement('tr');
                for (let j in data[k]) {
                    let td = document.createElement('td');
                    if (j !== "positionText") {
                        tableDataPerRow(tr, td, k, j)
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
