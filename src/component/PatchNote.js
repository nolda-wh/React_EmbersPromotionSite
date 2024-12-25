import React, { useState, useEffect } from 'react';
import banner from '../images/image6.png';
import { Helmet } from 'react-helmet';

function PatchNote() {
  const [patchNotes, setPatchNotes] = useState({});

  useEffect(() => {
    // JSON 파일에서 데이터를 가져옵니다.
    fetch('https://orbit.starting.run/data.json')
      .then(response => response.json())
      .then(data => {
        const notes = data.reduce((acc, note) => {
          if (!acc[note.cardHeader]) {
            acc[note.cardHeader] = [];
          }
          acc[note.cardHeader].push({
            text: note.text,
            date: note.date
          });
          return acc;
        }, {});
        setPatchNotes(notes);
      })
      .catch(error => console.error('Error fetching patch notes:', error));
  }, []);

  return (
    <div className='bg-dark pb-5'>
      <Helmet><title>패치노트 | 오르빗</title></Helmet>
      <div className='patchnote'>
        <div className='justify-content-center position-absolute top-50 start-50 translate-middle'>
          <div className='font-11 fs-0 text-white text-shadow'>패치노트</div>
        </div>
        <img className="patchnote_banner" src={banner} alt="Banner"/>
      </div>

      <div className='container-md'>
        {Object.keys(patchNotes).map((header, index) => (
          <div key={index} className="d-flex justify-content-center pt-5">
            <div className="card w-100 mx-4 border-0 rounded-4">
              <div className="card-header font-11 fw-bold text-white fs-4 p-4 rounded-4 mb-2  shadow-md">
                {header}
              </div>
              {patchNotes[header].map((note, idx) => (
                <div key={idx} className="card-body font-11 rounded-4 my-1">
                  <blockquote className="blockquote mb-0 fs-6 text-white">
                    <p>{note.text}</p>
                    <footer className="blockquote-footer fs-7 text-gray">{note.date}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatchNote;
