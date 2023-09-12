
import { Link } from "react-router-dom";


  
  function Card({ title, description, imageUrl,slug }) {

    
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
        <a href="#">
          <img className="rounded-t-lg" src={imageUrl}  alt="Imagen" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-600 dark:text-gray-500 font-gilroy-regular">
            {description}
          </p>
          <Link
            to={`/proyecto/${slug}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Leer más
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    );
}

export default Card