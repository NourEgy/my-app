const Breadcrumb = (props) => {
    return (
        <div className="section_breadcrumb">
              <div className="container">
                  <div className="banner display-table text-center">
                      <div className="title-bread table-cell">
                      <h1>{props.title}</h1>
                     </div>
                  </div>
               </div>
        </div>
     
    )
}

export default Breadcrumb;