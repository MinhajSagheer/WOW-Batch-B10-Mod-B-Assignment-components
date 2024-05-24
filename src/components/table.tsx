import React from 'react';

export default function TABLE(props: {
    values: String[]
    record: String
}) {
    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>{props.record}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.values.map((value, index) => (
                        <tr key={index}>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
