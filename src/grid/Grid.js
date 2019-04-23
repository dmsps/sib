import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions } from "./gridActions";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export class Grid extends Component {
  constructor(props) {
    super();
  }

  colDefs = [
    { headerName: "Название", field: "title" },
    {
      headerName: "Страна",
      field: "country",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["США", "Англия", "Испания", "Франция", "Португалия"]
      }
    },
    { headerName: "Дата выхода", field: "date" },
    { headerName: "Описание", field: "description" },
    { headerName: "Бюджет", field: "budjet" },
    { headerName: "Цена за просмотр", field: "price" },
    {
      headerName: "Жанр",
      field: "genre",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Фантастика", "Триллер", "Комедия", "Драма"]
      }
    }
  ];

  newRow = () => {
    this.props.actions.newFilm();
  };

  editRow = data => {
    this.props.actions.editFilm(data);
  };

  deleteRow = id => {
    this.props.actions.deleteFilm(id);
  };

  render() {
    const { films } = this.props;

    return (
      <>
        <button onClick={() => this.newRow()} type="button">
          Добавить
        </button>
        {films.length > 0 && (
          <button
            onClick={() => this.deleteRow(films[films.length - 1].id)}
            type="button"
          >
            Удалить
          </button>
        )}
        <div
          className="ag-theme-balham"
          style={{
            height: "90vh",
            width: "100%"
          }}
        >
          <AgGridReact
            defaultColDef={{ editable: true }}
            columnDefs={this.colDefs}
            rowData={this.props.films}
            singleClickEdit={true}
            onGridReady={params => {
              this.gridApi = params.api;
              this.gridApi.sizeColumnsToFit();
            }}
            onCellValueChanged={params => {
              this.editRow(params.data);
            }}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    films: state.films
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(Grid);
