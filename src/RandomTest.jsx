import React from "react";
import { useState } from "react";
import axios from "axios";
// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
// import download from "downloadjs";

// async function createForm() {
//     const pdfDoc = await PDFDocument.create()
//     const page = pdfDoc.addPage()
//     const { width, height } = page.getSize()
//     console.log(height)
//     const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  
//     page.drawText('Trong các mệnh đề sau, mệnh đề nào đúng?', { x: 10, y: 800, size: 12, font: timesRomanFont })
    
//     const pdfBytes = await pdfDoc.save()
//     download(pdfBytes, "test.pdf", "application/pdf")
// }

function RandomTest(){
    const [subject, setSubject] = useState("1");
    const [diff, setDiff] = useState("Dễ");
    const [json, setJson] = useState([])

    const subjectChange = (e) => {
        setSubject(e.target.value);
    }

    const diffChange = (e) => {
        setDiff(e.target.value);
    }

    const createForm =  () => {
        axios.get(
            "https://284f-2402-800-639a-c0b8-2460-1d2d-62c1-cbfb.ap.ngrok.io/api/Questions?SUBJECT_ID="+subject,
            {
                headers:{
                    'Access-Control-Allow-Origin': '*'
                }
            }
        )
        
        .then((res) => console.log(res.data))
    }

    return (
        <body id="body">
            <div id="sub-header">
                <h2>Tạo đề thi</h2>
                <hr />  
            </div>
            <table id="table-question">
                <tr id="tr-question">
                    <td id="td-question">Môn</td>
                    <td id="td-question">
                        <select name="subjects" id="subjects" value={subject} onChange={subjectChange}>
                            <option value="1">Toán</option>
                            <option value="2">Văn</option>
                            <option value="3">Anh</option>
                        </select>
                    </td>
                </tr>
                <tr id="tr-question">
                    <td id="td-question">Độ khó</td>
                    <td id="td-question">
                    <select name="difficulties" id="difficulties" value={diff} onChange={diffChange}>
                        <option value="Dễ">Dễ</option>
                        <option value="Thường">Thường</option>
                        <option value="Khó">Khó</option>
                    </select>
                    </td>
                </tr>
            </table>
            <div style={{margin: '10px auto 0 auto', width: '50px'}}>
                <button id="downloadPDF" onClick={createForm}>submit</button>
            </div>
        </body>
    )
}
// () => createForm()

// await axios.get(
        //     "https://284f-2402-800-639a-c0b8-2460-1d2d-62c1-cbfb.ap.ngrok.io/api/questions?SUBJECT_ID="+subject, 
        //     {
        //         headers:{
        //             'Access-Control-Allow-Origin': '*'
        //         }
        //     }
        // )
export default RandomTest