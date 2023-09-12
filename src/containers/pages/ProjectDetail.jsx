import { connect } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import FullWidthLayout from 'hocs/layouts/FullWidthLayout'
import React from 'react'
import DOMPurify from "dompurify";
import { get_project } from "redux/actions/project";
import LoadingCard from "components/loaders/LoadingCard";

const navigation = {
  social: [
    
    {
      name: 'GitHub',
     
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    
  ],
}

function ProjectDetail({get_project,project}) {
  
  

  const params = useParams()
  const slug = params.slug;

  useEffect(()=>{
    window.scrollTo(0,0);
    get_project(slug)
  },[slug])


  return (
      <FullWidthLayout>
        
        {project && project.slug === slug ? (
          <div className="pt-24">
            <div className="relative bg-gray-200">
              <div className="absolute inset-0">
                {/* Imagen */}
               
                  <img
                    className="h-full w-full object-cover"
                    src={`${process.env.REACT_APP_API_URL}/${project.thumbnail}`}
                    alt=""
                  />
                
                <div
                  className="absolute inset-0 bg-slate-900 opacity-60"
                  aria-hidden="true"
                />
              </div>
              <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <div className="min-w-0 flex-1 p-4 pt-8">
                  <div>
                    
                    <a  className="mt-4 text-lg font-regular text-white leading-8">
                      Lenguajes
                    </a>
                    
                    <a  className="ml-2 mt-4 text-lg font-regular text-white leading-8">
                      {project.language}
                    </a>
                    
                  </div>
                  
                </div>
              </div>
            </div>
  
            <div className="relative overflow-hidden bg-white dark:bg-dark py-16">
              <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg max-w-6xl prose-indigo mx-auto mt-6  text-dark dark:text-gray-500">
                <Link to={project.url}  className="ml-4 mt-4 text-lg font-regular text-dark leading-8 dark:text-white">
                      {navigation.social.map((item) => (
                          <a key={item.name} href={item.href} className="text-gray-900 hover:text-gray-800 dark:text-white">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-8 w-8" aria-hidden="true" />
                          </a>
                      ))}
                      Ver codigo
                    </Link>
                  <p dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(project.content),
                    }}/>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>Loading</>
        )}
      </FullWidthLayout>
    );
}


const mapStateToProps = (state) => ({
  project: state.projectReducer.project
})

export default connect(mapStateToProps,{
  get_project,
})(ProjectDetail) 
