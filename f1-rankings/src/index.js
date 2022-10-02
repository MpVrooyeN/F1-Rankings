import ReactDOM from 'react-dom/client';
import $ from 'jquery';
import ReactTable from './Table';

let urlResponse = ''

function getDriverStandings() {

    $.get({
        "url": "http://ergast.com/api/f1/current/constructorStandings.json",
        "method": "GET",
        "timeout": 0,
        "async": false,
        "success": function (text) {
            urlResponse = text;
        }
    })
    return urlResponse
}

function parseJSON(jsonFile) {
    return (jsonFile["MRData"]["StandingsTable"]['StandingsLists']['0']['ConstructorStandings'])
}


function App() {
    ReactDOM.createRoot(document.getElementById('root')).render(new ReactTable().render(parseJSON(getDriverStandings())));
}

App()