import React from "react";
import Table from 'react-bootstrap/Table'



const ResultTable = (
    {
        history
    }
) => (


        <Table responsive>

            <thead>
                <tr>
                    <th>Game</th>
                    <th>Player One</th>
                    <th>Player Two</th>
                    {/* <th>Winner</th> */}
                </tr>
            </thead>

            <tbody> {
                history.map((history =>
                    <tr>
                        <td>{}</td>
                        <td>{history.player_1.score}</td>
                        <td>{history.player_2.score}</td>
                        </tr>
                    ))}
            </tbody>


        </Table>
)
    



/* <thead>
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
                <td>{won}</td>
            </tr>


        </tbody> */


export default ResultTable;

