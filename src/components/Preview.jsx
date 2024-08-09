import React from 'react'

export default function Preview({handleClosePreview}) {
  return (
    <div className='previewbackdrop'>
       <div className='previewheader'><button onClick={handleClosePreview}>close</button></div>
        <div className='previewcontainer'>
            <div className='displaypreview'>preview</div>
        </div>
    </div>
  )
}
