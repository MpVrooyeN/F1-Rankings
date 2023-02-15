import './App.css'
import { Component } from 'react';

class ReactTable extends Component {

    render(data) { //Whenever our class runs, the render method will be called automatically. It may have already been defined in the constructor behind the scene.

        let tbdy = document.createElement('tbody');

        function createTable() {
            return document.getElementById("root");
        }

        function getJSONKeys(JSON, key = 0) {
            return Object.keys(JSON[key])
        }

        function removePositionText(newData) {
            let resultData = newData
            resultData = Object.values(resultData).map(x => {
                return Object.keys(x).filter(key =>
                    key !== 'positionText').reduce((obj, key) => {
                        obj[key] = x[key];
                        return obj;
                    }, {}
                    )
            })
            return resultData
        }

        function createTableRow(rowData) {

            let td = ''
            let tr = ''
            Object.values(rowData).map(x => {
                tr = document.createElement('tr')
                Object.keys(x).map(y => {
                    td = document.createElement('td')
                    switch (y) {
                        case 'position':
                            td.appendChild(document.createTextNode(x[y]))
                            break
                        case 'wins':
                            if (x[y] === '0') {
                                td.appendChild(document.createTextNode('-'))
                            } else
                                td.appendChild(document.createTextNode(x[y]))
                            break
                        case 'Constructor':
                            td.appendChild(document.createTextNode(x[y]['name']))
                            break
                        default:
                            td.appendChild(document.createTextNode(x[y]))
                            break
                    }
                    tr.appendChild(td)
                })
                // console.log(x)
                tbdy.appendChild(tr)
            })
        }

        function createTableBody() {
            tbdy.appendChild(getHeading())
            tbdy.appendChild(createTableHeaders());
            createTableRow(removePositionText(data))

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
        return createTable().appendChild(createTableBody());
    }
}

export default ReactTable 
