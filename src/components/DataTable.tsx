import React from 'react';

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface DataTableProps {
  pieData: ChartData;
  barData: ChartData;
}

const DataTable: React.FC<DataTableProps> = ({ pieData, barData }) => {
  return (
    <div>
      <h2>Chart Data</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Label</th>
            <th style={tableHeaderStyle}>Pie Chart Value</th>
            <th style={tableHeaderStyle}>Bar Chart Value</th>
            <th style={tableHeaderStyle}>Color</th>
          </tr>
        </thead>
        <tbody>
          {pieData.labels.map((label, index) => (
            <tr key={label}>
              <td style={tableCellStyle}>{label}</td>
              <td style={tableCellStyle}>{pieData.datasets[0].data[index]}</td>
              <td style={tableCellStyle}>{barData.datasets[0].data[index]}</td>
              <td style={tableCellStyle}>
                <div
                  style={{
                    backgroundColor: pieData.datasets[0].backgroundColor[index],
                    width: '20px',
                    height: '20px',
                    margin: '0 auto',
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  backgroundColor: '#f2f2f2',
  padding: '8px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
};

const tableCellStyle: React.CSSProperties = {
  padding: '8px',
  borderBottom: '1px solid #ddd',
};

export default DataTable;