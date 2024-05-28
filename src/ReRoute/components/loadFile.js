// import React, { useState } from 'react';
// import { useExcel } from 'react-excel-reader';

// const ExcelReader = () => {
//   const [data, setData] = useState([]);
//   const [columnName, setColumnName] = useState('כתובת'); // שם העמודה

//   const { file, error, onChange, onFormSubmit } = useExcel({
//     multiple: false, // הגדר קבצים מרובים ל-false
//   });

//   const handleOnFormSubmit = (event) => {
//     event.preventDefault();
//     if (!file) {
//       return alert('בחר קובץ Excel');
//     }

//     onFormSubmit(event).then((results) => {
//       if (results[0].error) {
//         console.error(results[0].error);
//         return;
//       }

//       // עיבוד נתונים
//       const newData = processExcelData(results[0].data, columnName);
//       setData(newData);
//     });
//   };

//   const processExcelData = (excelData, columnName) => {
//     return excelData.map((row) => {
//       const columnIndex = row.indexOf(columnName);
//       if (columnIndex !== -1) {
//         return row[columnIndex];
//       }
//       return null;
//     });
//   };

//   return (
//     <div>
//       <h1>קריאת כתובות מקובץ Excel</h1>
//       <form onSubmit={handleOnFormSubmit}>
//         <input type="file" onChange={onChange} ref={file} />
//         <label>שם העמודה: </label>
//         <input type="text" value={columnName} onChange={(e) => setColumnName(e.target.value)} />
//         <button type="submit">קרא כתובות</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       {data.length > 0 && (
//         <ul>
//           {data.map((address) => (
//             <li key={address}>{address}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ExcelReader;

import React from 'react';
import XLSX from 'xlsx';

class ExcelReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excelData: []
    };
  }

  handleFile = (file) => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
  
    reader.onload = (e) => {
      const bstr = e.target.result;
      const workbook = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
  
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
  
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
      const headerRow = excelData[0];
      const addressColumnIndex = headerRow.indexOf('Address');
      
      const addressData = excelData.map((row) => row[addressColumnIndex]);
  
      this.setState({ excelData: addressData });
    };
  
    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  };

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={(e) => this.handleFile(e.target.files[0])}
        />
        
        <table>
          <tbody>
            {this.state.excelData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ExcelReader;