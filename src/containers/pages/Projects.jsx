import React, { useEffect } from "react";
import Card from "components/projects/Card";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { get_project_list } from "redux/actions/project";




function Projects({ projectList, get_project_list }) {
  useEffect(() => {
    get_project_list();
  }, []);

  

  return (
    <FullWidthLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projectList.map((project) => ( // Itera sobre projectList
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={`${process.env.REACT_APP_API_URL}/${project.thumbnail}`}
            slug={project.slug}
          />
        ))}
      </div>
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  projectList: state.projectReducer.projectList, // Mapea projectList desde el estado Redux
});

const mapDispatchToProps = {
  get_project_list,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);