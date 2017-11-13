import React from 'react'
// import 'materialize-css'
// import 'materialize-css/dist/css/materialize.min.css'


const Compose = ({createMessage}) => {

  const submitForm = (e) => {
    e.preventDefault()
    createMessage({
      name: e.target.subject.value,
      message: e.target.body.value,
    })
  }

  return (

    <div>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"></link>


    <form onSubmit={ submitForm } className="form-horizontal well">
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject"></input>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="body" className="col-sm-2 control-label">Body</label>
        <div className="col-sm-8">
          <textarea name="body" id="body" className="form-control"></textarea>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <input type="submit" value="Send" className="btn btn-primary"></input>
        </div>
      </div>
    </form>
    </div>

  )

}

export default Compose
