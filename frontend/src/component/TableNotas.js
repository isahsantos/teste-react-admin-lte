import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


function TableNotas({citas}) {

    function priorityFormatter(cell, row) {
        if (row.priority === 'Critical') {
            return (
            <span>
                <strong style={ { color: 'red' } }>{ cell }</strong>
            </span>
            );
        }
    
        return (
            <span>{ cell }</span>
        );
    }
    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
          Showing { from } to { to } of { size } Results
        </span>
      );
    
    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        sizePerPageList: [{
          text: '4', value: 4
        }, {
          text: '2', value: 2
        }, {
          text: 'All', value: citas.length
        }] // A numeric array is also available. the purpose of above example is custom the text
      };
    
    const columns = [{
        dataField: 'title',
        text: 'Titulo'
    }, {
        dataField: 'priority',
        text: 'Prioridad',
        formatter: priorityFormatter
    }, {
        dataField: 'created_at',
        text: 'Fecha'
    }, {
        dataField: 'done',
        text: 'Finalizado'
    }];


    return (
        <BootstrapTable keyField='id' data={ citas } columns={ columns } pagination={ paginationFactory(options) }/>
    )
}

export default TableNotas
