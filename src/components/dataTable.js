import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Count: "",
            Previous: "",
            Next: "",
            Previous1: "",
            Next1: ""
        }
    }
    componentDidMount() {
        this.webCall("https://swapi.dev/api/people/");
    }

    webCall = async (Api) => {
        await fetch(Api, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    datas: responseJson.results,
                    Count: responseJson.count,
                    Previous: JSON.stringify(responseJson.previous),
                    Next: JSON.stringify(responseJson.next),
                    Previous1: responseJson.previous,
                    Next1: responseJson.next
                })

            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        return (
            <div>
                <div className="container-fluid" style={{ marginTop: "20px" }}>
                    <button className="btn btn-light" style={{ backgroundColor: "#eee;" }}>
                        <i className="fa fa-users" style={{ color: 'black' }}></i>  &ensp;
                        Employees
                </button>
                    &ensp;
                <button className="btn btn-light" style={{ backgroundColor: "#eee;" }}>
                        <i className="fa fa-suitcase" style={{ color: 'black' }}></i>  &ensp;
                        Has 8 sales roles
                </button>
                    <button className="btn btn-light" style={{ backgroundColor: "#eee;" }}>
                        <i className="fa fa-folder" style={{ color: 'black' }}></i>  &ensp;
                        Is in 3 categories
                </button>
                    <button className="btn btn-light" style={{ backgroundColor: "#eee;" }}>
                        <i className="fa fa-tag" style={{ color: 'black' }}></i>  &ensp;
                        Sells any product
                </button>
                    <button className="btn btn-light" style={{ backgroundColor: "#eee;" }}>
                        <i className="fa fa-globe" style={{ color: 'black' }}></i>  &ensp;
                        Is based in Sweden
                </button>
                    &ensp;
                <button className="btn btn-light" style={{ backgroundColor: "#e6ffe6" }}>
                        <i className="fa fa-plus" style={{ color: 'green' }}></i>
                    </button>
                    <div style={{ float: 'right' }}>
                        <button className="btn" >
                            <span style={{ fontWeight: "bolder" }}>Clear</span>
                        </button>
                        <button className="btn" >
                            <span style={{ fontWeight: "bolder", color: 'blue' }}>Save Report</span>
                        </button>
                    </div>
                </div>
                <hr></hr>
              

                <div className="container-fluid" style={{ marginTop: "20px" }}>
                    <button className="btn">
                        <span className="fa fa-plus" style={{ fontWeight: "bolder", color: 'blue' }}>&ensp;Manage Columns</span>
                    </button>

                    <span style={{ color: 'grey', justifyContent: 'center', }}>{this.state.Count} Lions found</span>
                    <div style={{ float: 'right' }}>
                        <button className="btn" >
                            <span className="fa fa-trash" style={{ fontWeight: "bolder", color: 'red' }}>&ensp;Delete</span>
                        </button>
                        <button className="btn" >
                            <span className="fa fa-pencil" style={{ fontWeight: "bolder", color: 'blue' }}>&ensp;Edit</span>
                        </button>
                    </div>
                </div>

                <Table>
                    <Thead style={{ backgroundColor: '#eee', border: "1px solid grey"}}>
                        <Tr style={{height:"40px"}}>
                            <Th style={{fontSize:"15px"}}>$</Th>
                            <Th style={{fontSize:"15px"}}>LION</Th>
                            <Th style={{fontSize:"15px"}}>COMPANY</Th>
                            <Th style={{fontSize:"15px"}}>ROLE</Th>
                            <Th style={{fontSize:"15px"}}>LAST CALL</Th>
                            <Th style={{fontSize:"15px"}}>FUNDING</Th>
                        </Tr>
                    </Thead>
                    {

                        this.state.datas ?
                            this.state.datas.map((item, i) =>
                                <Tbody key={i} style={{
                                    backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#f2f2f2",
                                }}>
                                    <Tr>
                                        <Td>
                                            <p
                                                style={{ height: "30px",width:"30px",borderRadius:100, 
                                                textAlign:'center',
                                                backgroundColor: i % 2 === 0 ? "#ffcc66" : i % 2 === 1 ? "green" : "red",
                                                 }}>
                                                {item.mass}
                                            </p>
                                        </Td>
                                        <Td>
                                            <p style={{ color: 'blue',textTransform:"capitalize", }}>{item.skin_color}</p>
                                            <p>{item.height}</p>
                                        </Td>
                                        <Td>
                                            <p style={{ textTransform:"capitalize",color: 'blue' }}>{item.name}</p>
                                            <p style={{textTransform:"capitalize",}}>{item.eye_color}</p>
                                        </Td>
                                        <Td style={{textTransform:"capitalize",}}>{item.hair_color}</Td>
                                        <Td>{item.birth_year}</Td>
                                        <Td>
                                            {
                                                <i className="fa fa-circle fa-sm"
                                                    style={{
                                                        textTransform: "uppercase",fontSize:"11px",
                                                        color: item.gender === "male" ? "#ffcc66" : item.gender === "female" ? "green" : "red"
                                                    }}
                                                >&ensp;{item.gender}</i>
                                            }
                                        </Td>
                                    </Tr>
                                </Tbody>

                            )
                            :
                            null

                    }
                </Table>

                <div style={{ marginTop: "20px" }}>
                    {
                        this.state.Previous === 'null' ?
                            <button disabled className="btn btn-light" style={{ backgroundColor: "#eee;" }}>
                                <i className="fa fa-chevron-left" style={{ color: 'black' }}></i>  &ensp;
                                Previous
                   </button>
                            :
                            <button className="btn btn-light" style={{ backgroundColor: "#eee;" }}
                                onClick={() => {
                                    this.setState({
                                        Api: this.state.Previous1
                                    })
                                    this.webCall(this.state.Previous1);
                                    window.scrollTo(0, 0)
                                }}
                            >
                                <i className="fa fa-chevron-left" style={{ color: 'black' }}></i>  &ensp;
                                Previous
                    </button>
                    }
                    {
                        this.state.Next === "null" ?
                            <button disabled className="btn btn-light" style={{ backgroundColor: "#eee;", float: 'right' }}>
                                <i className="fa fa-chevron-right" style={{ color: 'black' }}></i>  &ensp;
                               Next
                    </button>
                            :
                            <button className="btn btn-light" style={{ backgroundColor: "#eee;", float: 'right' }}
                                onClick={() => {
                                    this.setState({
                                        Api: this.state.Next1
                                    })
                                    this.webCall(this.state.Next1);
                                    window.scrollTo(0, 0)
                                }}
                            >
                                <i className="fa fa-chevron-right" style={{ color: 'black' }}></i>  &ensp;
                               Next
                    </button>
                    }
                </div>
            </div>
        );
    }
}

export default DataTable;