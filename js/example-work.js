import React from 'react';

class ExampleWork extends React.Component{
    render() {
        return (
            <section className="section section--alignCentered section--description">

            <div className="section__exampleWrapper">
              <div className="section__example">
                <img alt="A Serverless Portfolio"
                     className="section__exampleImage"
                     src="images/image-code.png"/>
                <dl className="color--cloud">
                  <dt className="section__exampleTitle section__text--centered">
                    Work Example
                    {/* comments like this */}
                  </dt>
                  <dd></dd>
                </dl>
              </div>
            </div>
          </section>
        )
    }
}

export default ExampleWorkExampleWork;