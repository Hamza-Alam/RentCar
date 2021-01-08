import React from 'react'; 
const header = () => {
    return(
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#alignment-example" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">auto.market</a>
                    </div>
                    <div class="collapse navbar-collapse" id="alignment-example">
                        <ul class="nav navbar-nav leftNav">
                            <li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">Sell Car</a></li>
                            <li><a href="#">Buy Car</a></li>
                            <li><a href="#">Market</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right rightNav">
                            <li><a href="#"><i class="fa fa-car" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i></a></li>
                            <li><a href="#">Sign in</a></li>
                            <li><a href="#" className="signUpBtn">Sign up</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default header;