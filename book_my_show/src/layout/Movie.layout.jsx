//rafce
import React from 'react'
import MovieNavbar from '../component/MovieNavbar.Component';

const MovieLayoutHoc =
 (component) => 
 ({...props}) => {
    return  <div>
        <MovieNavbar />
        <component {...props} /> 
        <div>Footer</div> 
         </div>

    
};
export default MovieLayoutHoc;