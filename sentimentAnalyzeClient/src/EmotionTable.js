import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        return (
            <div>
                {/*You can remove this line and the line below. */}
                {JSON.stringify(this.props.emotions)}
                <table className="table table-bordered">
                    <tbody>
                        {
                            //Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
                            Object.entries(this.props.emotions).map(function (mapentry) {
                                return (
                                    <tr>
                                        <td>{mapentry[0]}</td>
                                        <td>{mapentry[1]}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}
export default EmotionTable;
