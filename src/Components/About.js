import React from 'react';

export default function About(props) {
  return (
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1 className="my-3" >About Textutils</h1>
      <div className="accordion" id="accordionExample">
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" 
              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
              style={{
                  backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                  color: props.mode === 'dark' ? 'white' : 'black'
              }}>
              Text Transformation
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" 
               aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          
            <div className="accordion-body" 
                style={{
                    backgroundColor: props.mode === 'dark' ? '#495057' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black'
                }}>
              TextUtils provides a simple yet powerful set of tools to transform your text 
              in real time. Whether you want to convert all your words into 
              <strong> uppercase</strong> for emphasis, change everything to 
              <strong> lowercase</strong> for uniformity, or quickly 
              <strong> clear your input</strong> to start fresh, TextUtils has you covered. 
              These transformation features are designed to save time, reduce manual effort, 
              and make editing text more efficient when preparing documents, emails, or 
              coding content.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
           <button className="accordion-button" type="button" data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
              style={{
                  backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                  color: props.mode === 'dark' ? 'white' : 'black'
              }}>
                            Text Management
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" 
               aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
           <div className="accordion-body" 
              style={{
                  backgroundColor: props.mode === 'dark' ? '#495057' : 'white',
                  color: props.mode === 'dark' ? 'white' : 'black'
              }}>
              Managing text efficiently is essential, especially when working with large 
              documents or preparing content for publishing. TextUtils includes options 
              to <strong>copy text directly to your clipboard</strong> with a single click, 
              eliminating the need for manual highlighting. It also helps you 
              <strong> remove unnecessary spaces</strong>, which is useful when text comes 
              from messy sources such as PDFs or websites. These features ensure your 
              text is always clean, professional, and ready to use wherever you need it.
            </div>
          </div>
        </div>

        
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
            style={{
                backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black'
            }}>
            Text Analysis
        </button>
        
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" 
               aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" 
                style={{
                    backgroundColor: props.mode === 'dark' ? '#495057' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black'
                }}>
                            Beyond transformation and management, TextUtils also provides basic 
              <strong> text analysis</strong>. It instantly shows you the 
              <strong> word count</strong> and <strong>character count</strong>, 
              which is helpful for meeting length requirements in essays, blog posts, 
              or social media captions. Additionally, it estimates the 
              <strong> reading time</strong>, allowing you to know how long your 
              audience might take to read your content. With the live preview option, 
              you can see exactly how your text looks before sharing or publishing it.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
