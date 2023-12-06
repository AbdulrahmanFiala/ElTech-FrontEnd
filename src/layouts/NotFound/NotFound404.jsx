import { Link } from "react-router-dom";
import not_found from '../../assets/images/404.png'

function NotFound404() {
  return (
    <section className="error-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="content-404 text-center">
                            <img src={not_found} alt=""></img>
                            <h2>Something went wrong</h2>
                            <Link  className="goru-btn" to="/"> Go Back Home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default NotFound404
