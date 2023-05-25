import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Abc = () => {
  const { slug, id } = useParams();
  const irPara = useNavigate();

  console.log(slug, id);
  useEffect(() => {
    setTimeout(() => {
      irPara('/');
    }, 3000);
  }, [irPara]);

  return (
    <div>
      <h1>
        ABC dentro da pasta: {slug} o ID: {id}
      </h1>
    </div>
  );
};
