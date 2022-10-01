import ReactDOM from 'react-dom/client';
import React from 'react';
import $ from 'jquery';

function renderTitle(titleString) {
    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement('h1', {}, titleString));
}

function renderTable() {
    let table = document.createElement('table')
    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(table))
}

function RenderWebPage() {
    renderTable();
    renderTitle("F1 Rankings");
}

RenderWebPage();