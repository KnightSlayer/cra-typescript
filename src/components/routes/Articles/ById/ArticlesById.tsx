import React from "react";
import { useParams, useHistory, useLocation, useRouteMatch } from "react-router-dom";

interface IArticle {
  foo: string,
}


const ArticlesById = (props: IArticle) => {
  console.log('props', props);
  const params: {id: string} = useParams();
  const history = useHistory();
  const location = useLocation();
  const routeMatch = useRouteMatch();
  console.log('params', params);
  console.log('history', history);
  console.log('location', location);
  console.log('routeMatch', routeMatch);

  return (
    <div>
      By Id: { params.id }
    </div>
  )
}

export default React.memo(ArticlesById);
export { default as path } from './path';
