import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <h1>😅 Tum Bhatak Gaye Ho!</h1>
            <p>
                Wapas homepage par jao.{" "}
                <Link to="/">HomePage</Link>
            </p>
        </div>
    );
};

export default NotFound;