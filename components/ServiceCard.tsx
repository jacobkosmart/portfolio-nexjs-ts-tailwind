import { IService } from "../type";

const ServiceCard: React.FC<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  //  db에서 받은 html code 를 사용하기 위해서 dangerouslySetInnerHTML 사용
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
