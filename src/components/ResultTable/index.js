import React from "react";
import Table from 'react-bootstrap/Table'


const ResultTable = (
    {
        history,
        player1Score,
        player1,
        player2
    }
) => (


    <Table responsive>
        <thead>
            <tr>
                <th>Game</th>
                <th>{player1}</th>
                <th>{player2}</th>
            </tr>
        </thead>

        <tbody> {
            history.map((game, index) =>
                <tr>
                    <td>{index + 1}</td>
                    <td>{game.player_1.score}</td>
                    <td>{game.player_2.score}</td>
                </tr>
            )}
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

