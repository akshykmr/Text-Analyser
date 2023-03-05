import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) { /*This is function based components created using props */


const [isFocused, setIsFocused] = useState(false);

const handleFocus = () => {
  setIsFocused(true);
};

  return (
    <nav className="navbar navbar-expand-lg bg-dark gradient-custom">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://getbootstrap.com/docs/5.2/components/navbar/#nav">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    {/* <!-- Search form --> */}
    <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        <input type="search"  onFocus={handleFocus}  className={isFocused ? "focused " : ""} placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark mx-2"  type="button" data-mdb-ripple-color="red">
          Search
        </button>
      </form>
  </div>
</nav>
  )
}

Navbar.propTypes = {title:PropTypes.string.isRequired, /* .isRequired will gives error when props value is not given to title while printing */
    
    aboutText:PropTypes.string,} ;
/* Here we have declare that titel and aboutText are string
type props and also we can declare other props as well using objects*/

Navbar.defaultProps={title:"Add a title here",
aboutText:"add a aboutText here"}   

// here by defaultProps we giving default value to props in case there is no value given or declare to props at the print time 
