import React from "react";
import Table from 'react-bootstrap/Table'

const ResultTable = (
    {
        score,
        player1Score,
        player2Score,
        winner,
    }
) => (

    <Table responsive>
        <thead>
            <tr>
                <th>Game</th>
                <th>Player One</th>
                <th>Player Two</th>
                <th>Won</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>{player1Score}</td>
                <td>{player2Score}</td>
                <td>{winner}</td>
            </tr>

            <tr>
                <td>2</td>
                <td>{player1Score}</td>
                <td>{player2Score}</td>
                <td>{winner}</td>
            </tr>


        </tbody>
    </Table>
);


export default ResultTable;

